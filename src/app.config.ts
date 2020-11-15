export default {
  pages: [
    'pages/today/today',
    'pages/pokeplan/pokeplan',
    'pages/wenluan/wenluan',
    'pages/mine/mine',
    'pages/fudan/fudan'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#79A1EB',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'white'
  },
  tabBar: {
    "color": "#999999",
    "selectedColor": "#79A1EB",
    list: [
      {
        "selectedIconPath": "images/待定.png",
        "iconPath": "images/待定.png",
        "pagePath": "pages/today/today",
        "text": "今日孵蛋" 
      },
      {
        "selectedIconPath": "images/待定.png",
        "iconPath": "images/待定.png",
        "pagePath": "pages/pokeplan/pokeplan",
        "text": "破壳计划"
      },
      {
        "selectedIconPath": "images/待定.png",
        "iconPath": "images/待定.png",
        "pagePath": "pages/wenluan/wenluan",
        "text": "温卵工程"
      },
      {
        "selectedIconPath": "images/待定.png",
        "iconPath": "images/待定.png",
        "pagePath": "pages/mine/mine",
        "text": "我的"
      }
    ]
  }
}
