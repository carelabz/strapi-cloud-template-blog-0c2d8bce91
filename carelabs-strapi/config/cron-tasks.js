const nodemailer = require("nodemailer");
const zlib = require("zlib");

module.exports = {
  dailyBackup: {
    task: async ({ strapi }) => {
      try {
        const date = new Date().toISOString().split("T")[0]; 

        // Export all content types
        const contentTypes = Object.keys(strapi.contentTypes);
        const backupData = {};

        for (const type of contentTypes) {
          backupData[type] = await strapi.db.query(type).findMany();
        }

        const backupJson = JSON.stringify(backupData, null, 2);

        const backupZip = zlib.gzipSync(backupJson);

        // Email transporter
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS, 
          },
        });

        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: process.env.BACKUP_RECEIVER,
          subject: `Strapi Backup - ${date}`,
          text: "Attached is the daily Strapi backup (ZIP format).",
          attachments: [
            {
              filename: `strapi-backup-${date}.zip`,
              content: backupZip,
            },
          ],
        });

        console.log(`Backup emailed successfully (ZIP): ${date}`);
      } catch (error) {
        console.error("Backup failed:", error);
      }
    },
    options: {
      rule: "0 12 * * *",
    },
  },
};
