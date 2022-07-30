module.exports = ({ env }) => ({
  proxy: true,
  url: env('API'),
  app: {
    keys: env.array('APP_KEYS')
  },
})
