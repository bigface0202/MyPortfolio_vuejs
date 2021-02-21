export default {
  namespaced: true,
  state() {
      return {
          works: [
              {
                  id: 't1',
                  title: 'Volume Tracker',
                  assets: 'Flutter',
                  description: 'Flutterで初めて作ったアプリです。筋トレを行った部位のメモを取ることができます。\
                                部位のみを記録する簡素化されたアプリです。\
                                行った部位のボリュームをグラフで表示することもできます。',
                  image: require('@/assets/img/volumetracker_icon.png'),
                  articleName:'Google Play Store',
                  articleURL:'https://play.google.com/store/apps/details?id=com.ysk.kissy.volume_tracker',
                  show: false,
              },
              {
                id: 't2',
                title: 'Suica入退室管理',
                assets: 'Flutter, ESP32, Firebase',
                description: 'Felica機能を使った入退室管理アプリです。\
                              Firebaseを使って開閉の管理をし、Flutterで在室かどうかを確認できるようにしています。',
                image: require('@/assets/img/suica_esp32.png'),
                articleName:'Qiita記事',
                articleURL:'https://qiita.com/bigface00/items/87346c31d12346f85716',
                show: false,
              },
              {
                id: 't3',
                title: 'Blackhole glass',
                assets: 'ESP32',
                description: '鏡面シールとLEDを使うことで、目に穴が空いたような幻想的なメガネが作れます。',
                image: require('@/assets/img/blackhole_glass.png'),
                articleName:'',
                articleURL:'',
                show: false,
              },
              {
                id: 't4',
                title: 'Muscle Blazer',
                assets: 'M5Stack',
                description: 'Superhuman Sports Design Challengeという学会に向けて製作した人工筋肉による触覚フィードバック付きの赤外線サバゲーです。\
                              HTC VIVEを用いたVRバージョンも製作し、CEDEC2018で展示しました。\
                              共同製作者：Antonio Vega Ramirez, Swagata Das, Chetan Thakur',
                image: require('@/assets/img/Muscleblazer.png'),
                articleName:'CEDEC2018',
                articleURL:'https://cedec.cesa.or.jp/2018/session/detail/s5af2e8446b406.html',
                show: false,
              },
              {
                id: 't5',
                title: 'Hotdog or Not Hotdog',
                assets: 'Flutter',
                description: 'シリコンバレー（ドラマ）をご存知の方なら知ってる、チェン・イェンのアプリです。\
                              TFLiteを使ってホットドッグの画像を学習させて、識別できるようにしました',
                image: require('@/assets/img/hotdog.png'),
                articleName:'Qiita記事',
                articleURL:'https://qiita.com/bigface00/items/9312dd4a4fde1f4bcffe',
                show: false,
              },
              {
                id: 't6',
                title: 'PoseEstimation on Mobile',
                assets: 'Flutter',
                description: 'TFLiteのPoseNetモデルを使って、Flutterで姿勢推定アプリを作りました。',
                image: require('@/assets/img/pose_estimation.png'),
                articleName:'Qiita記事',
                articleURL:'https://qiita.com/bigface00/items/c453b2be5e8a9d6fe18c',
                show: false,
              }
          ]
      }
  },
  getters: {
      works(state) {
          return state.works;
      },
  }
}