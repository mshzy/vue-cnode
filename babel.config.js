module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-cnode/'
    : '/',
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
