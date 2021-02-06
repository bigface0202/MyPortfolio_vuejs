export default {
    namespaced: true,
    state() {
        return {
            timeline: [
                {
                    id: 't1',
                    year: '1993年2月',
                    school: '福井県越前市',
                    description: '生誕',
                    icon: 'mdi-baby',
                    color: 'blue lighten-2',
                    side: 'right'
                },
                {
                    id: 't2',
                    year: '2013年3月',
                    school: '福井工業高等専門学校',
                    description: '電気電子工学科卒業',
                    icon: 'mdi-human-handsup',
                    color: 'orange lighten-2',
                    side: 'left'
                },
                {
                    id: 't3',
                    year: '2013年4月',
                    school: '広島大学',
                    description: '工学部二類3年時編入学',
                    icon: 'mdi-school',
                    color: 'green lighten-2',
                    side: 'right'
                },
                {
                    id: 't4',
                    year: '2015年3月',
                    school: '広島大学',
                    description: '工学部二類卒業　学士（工学）',
                    icon: 'mdi-human-handsup',
                    color: 'orange lighten-2',
                    side: 'left'
                },
                {
                    id: 't5',
                    year: '2015年4月',
                    school: '広島大学大学院',
                    description: '工学研究科　システムサイバネティクス専攻　修士課程入学',
                    icon: 'mdi-school',
                    color: 'green lighten-2',
                    side: 'right'
                },
                {
                    id: 't6',
                    year: '2017年3月',
                    school: '広島大学',
                    description: '工学研究科　システムサイバネティクス専攻修了　修士（工学）',
                    icon: 'mdi-human-handsup',
                    color: 'orange lighten-2',
                    side: 'left'
                },
                {
                    id: 't7',
                    year: '2017年4月',
                    school: '広島大学大学院',
                    description: '工学研究科　システムサイバネティクス専攻　博士課程入学',
                    icon: 'mdi-school',
                    color: 'green lighten-2',
                    side: 'right'
                },
                {
                    id: 't8',
                    year: '2017年4月',
                    school: '日本学術振興会',
                    description: '特別研究員（DC1）採用',
                    icon: 'mdi-office-building',
                    color: 'green lighten-2',
                    side: 'right'
                },
                {
                    id: 't9',
                    year: '2020年3月',
                    school: '広島大学大学院',
                    description: '工学研究科　システムサイバネティクス専攻修了　博士（工学）',
                    icon: 'mdi-human-handsup',
                    color: 'orange lighten-2',
                    side: 'left'
                }
                
            ]
        }
    },
    getters: {
        timeline(state) {
            return state.timeline;
        },
    }
}