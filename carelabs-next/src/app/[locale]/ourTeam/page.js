"use client";
import OurTeamConverstation from '@/components/OurTeams/OurTeamConverstation';
import OurTeamGallery from '@/components/OurTeams/OurTeamGallery';
import OurTeamMilestone from '@/components/OurTeams/OurTeamMilestone';
import OurTeamPartner from '@/components/OurTeams/OurTeamPartner';
import OurTeamRecognitions from '@/components/OurTeams/OurTeamRecognitions';
import OurTeamsAction from '@/components/OurTeams/OurTeamsAction';
import OurTeamsBanner from '@/components/OurTeams/OurTeamsBanner';
import OurTeamsDrivesUs from '@/components/OurTeams/OurTeamsDrivesUs';
import OurTeamsSnapshot from '@/components/OurTeams/OurTeamsSnapshot';
import OurTeamsWrkProjcet from '@/components/OurTeams/OurTeamsWrkProjcet';
import OurTeamsWrkTogether from '@/components/OurTeams/OurTeamsWrkTogether';
import OurTeamWorkWith from '@/components/OurTeams/OurTeamWorkWith';
import { GET_OURTEAM_PAGE } from '@/lib/api-Collection';
import client from '@/lib/appollo-client';
import React, { useEffect, useState } from 'react'



const page = () => {
  const[ourTeamAllData,setourTeamAllData]=useState(null);
  const[ourTeamSnapshot,setourTeamSnapshot]=useState(null);
  const[ourTeamDriversUs,setourTeamDriversUs]=useState(null);
  const[ourTeamWrkTgther,setourTeamDWrkTgther]=useState(null);
  const[ourTeamGudieWrkPrj,setourTeamGudieWrkPrj]=useState(null);
  const[ourTeamWrkAction,setourTeamWrkAction]=useState(null);
  const[ourTeamPartner,setourTeamPartner]=useState(null);
  const[ourTeamMilestones,setourTeamMilestones]=useState(null);
  const[ourTeamGallery,setourTeamGallery]=useState(null);
  const[ourTeamworkWithUs,setourTeamworkWithUs]=useState(null);
  const[ourTeamRecognitions,setourTeamRecognitions]=useState(null);
  const[ourTeamReadyToTalk,setourTeamReadyToTalk]=useState(null);



  const getOurTeamPageData=async()=>{
    try{
        const res= await client.query({
                    query: GET_OURTEAM_PAGE,
                   });

        const fetchedData=res.data.ourTeamPage;
        const snapShot=fetchedData.snapshot;
        const driversUs=fetchedData.Drives_Us;
        const wrkTgther=fetchedData.Work_Together;
        const GuidingWrk=fetchedData.Guiding;
        const WrkAction=fetchedData.Teams_in_Action;
        const partner=fetchedData.How_We_Partner;
        const mileStone=fetchedData.Milestones;
        const gallery=fetchedData.What_it_feels;
        const workWithUs=fetchedData.Where_you_work;
        const Recognition = fetchedData.Recognitions;
        const readyToTalk=fetchedData.Ready_to_Talk;
      
        setourTeamAllData(fetchedData);
        setourTeamSnapshot(snapShot);
        setourTeamDriversUs(driversUs);
        setourTeamDWrkTgther(wrkTgther);
        setourTeamGudieWrkPrj(GuidingWrk);
        setourTeamWrkAction(WrkAction);
        setourTeamPartner(partner);
        setourTeamMilestones(mileStone);
        setourTeamGallery(gallery);
        setourTeamworkWithUs(workWithUs);
        setourTeamRecognitions(Recognition);
        setourTeamReadyToTalk(readyToTalk);
        
    }catch(err){
      console.log("Error At Fetching ourTeam Data",err);
      
    }
  }


  useEffect(()=>{
    getOurTeamPageData();
  },[])


 

  return (
    <div>
      <section>
        <OurTeamsBanner data={ourTeamAllData}/>
      </section>

      <section>
        <OurTeamsSnapshot data={ourTeamSnapshot}/>
      </section>

      <section>
        <OurTeamsDrivesUs data={ourTeamDriversUs}/>
      </section>

      <section>
        <OurTeamsWrkTogether data={ourTeamWrkTgther} />
      </section>

      <section>
        <OurTeamsWrkProjcet data={ourTeamGudieWrkPrj}/>
      </section>

       <section>
        <OurTeamsAction data={ourTeamWrkAction}/>
      </section>

      <section>
        <OurTeamPartner data={ourTeamPartner}/>
      </section>

      <section>
        <OurTeamMilestone data={ourTeamMilestones}/>
      </section>

       <section>
        <OurTeamGallery data={ourTeamGallery}/>
      </section>

       <section>
        <OurTeamWorkWith data={ourTeamworkWithUs}/>
      </section>

      <section>
        <OurTeamRecognitions data={ourTeamRecognitions}/>
      </section>

       <section>
        <OurTeamConverstation data={ourTeamReadyToTalk}/>
      </section>
     
    </div>
  )
}

export default page
