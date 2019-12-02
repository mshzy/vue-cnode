module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-cnode/dist/'
    : '/',
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
