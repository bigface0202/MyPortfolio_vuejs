export default {
  namespaced: true,
  state () {
    return {
      skills: [
        {
          id: 't1',
          asset: 'Python',
          description: '3年程度',
          icon: require('@/assets/img/python.png')
        },
        {
          id: 't2',
          asset: 'Flutter',
          description: '1年程度',
          icon: require('@/assets/img/flutter.png')
        },
        {
          id: 't3',
          asset: 'Vue.js',
          description: '3ヶ月程度',
          icon: require('@/assets/img/vuejs.png')
        },
        {
          id: 't4',
          asset: 'Unity',
          description: '半年程度',
          icon: require('@/assets/img/unity.png')
        },
        {
          id: 't5',
          asset: '電子工作',
          description: '3年以上',
          icon: require('@/assets/img/handa.png')
        },
        {
          id: 't6',
          asset: '基本情報技術者',
          description: '資格',
          icon: require('@/assets/img/shikaku.png')
        }
      ]
    }
  },
  getters: {
    skills (state) {
      return state.skills
    }
  }
}
