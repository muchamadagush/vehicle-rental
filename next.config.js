module.exports = {
  images: {
    domains: ['vehicle.muchamadagushermawan.online']
  },
  reactStrictMode: true,
  async rewrites () {
    return [
      {
        source: '/',
        destination: '/home'
      },
      {
        source: '/login',
        destination: '/auth/login'
      },
      {
        source: '/register',
        destination: '/auth/register'
      }
    ]
  }
}
