export default {
  navItems: [
    {
      name: 'HOME',
      url: '/home'
    },
    {
      name: 'PROFILE',
      url: '/profile'
    },
    {
      name: 'PUBLICATIONS',
      url: '/publications'
    },
    {
      name: 'WORKS',
      url: '/works'
    },
    {
      name: 'VALORANT',
      url: '/valorant',
      children: [
        {
          name: 'Introduction',
          url: '/valorant'
        },
        {
          name: 'Study',
          url: '/valorant/study'
        }
      ]
    }
  ]
}
