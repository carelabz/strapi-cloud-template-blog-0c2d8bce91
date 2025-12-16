module.exports = () => ({
  graphql: {
    enabled: true,
    config: {
      playgroundAlways: true,
      defaultLimit: 50,
      maxLimit: 1000,
      apolloServer: {
        introspection: true,
      },
    },
  },
  seo: {
    enabled: true,
  },
  'content-type-builder': { enabled: true, },
});