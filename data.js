//"normol" 常用网站  "type": 1 社区交流   2资讯新闻  3视频娱乐 7工具文档  9 趣味网站
var typeList = [
  {
    name: "社区交流",
    value: 1,
    sort: 1
  },
  {
    name: "资讯新闻",
    value: 2,
    sort: 2
  },
  {
    name: "影音娱乐",
    value: 3,
    sort: 3
  },
  {
    name: "工具文档",
    value: 4,
    sort: 4
  },
  {
    name: "趣味网站",
    value: 5,
    sort: 5
  },
  {
    name: "记忆留存",
    value: 9,
    sort: 9
  },
]

var webList = [
  {
    name: "海加尔金鹰",
    url: "https://www.hjljy.cn",
    image: "https://www.hjljy.cn/favicon.png",
    desc: "个人博客，记录生活",
    normol: true,
    type: 1
  },
  {
    name: "GitHub",
    url: "https://www.github.com",
    image: "https://github.githubassets.com/favicons/favicon.png",
    desc: "全球最大程序员社区网站，开源仓库",
    normol: true,
    type: 1
  },
  {
    name: "链滴",
    url: "https://ld246.com",
    image: "https://ld246.com/favicon.ico",
    desc: "SOLO博客社区,思源笔记社区，记录生活，链接点滴",
    normol: true,
    type: 1
  },
  {
    name: "知乎",
    url: "https://www.zhihu.com",
    image: "https://static.zhihu.com/static/favicon.ico",
    desc: "装逼如风，常伴吾身，且看且珍惜",
    normol: true,
    type: 1
  },
  {
    name: "V2EX",
    url: "https://www.v2ex.com",
    image: "https://www.hjljy.cn/favicon.ico",
    desc: "程序员社区，一个关于分享和探索的地方  目前必须要科学上网才能打开",
    normol: false,
    type: 9
  },
  {
    name: "电鸭社区",
    url: "https://eleduck.com",
    image: "https://eleduck.com/static/favicon.ico",
    desc: "互联网工作者的聚集地，倡导“只工作不上班”的生活方式",
    normol: false,
    type: 1
  },
  {
    name: "创造者日报",
    url: "https://creatorsdaily.com",
    image: "https://creatorsdaily.com/favicon.ico",
    desc: "唯有创造才是快乐。只有创造的生灵才是生灵。",
    normol: false,
    type: 1
  },
  {
    name: "独立开发者",
    url: "https://w2solo.com",
    image: "https://indiehackers-1251406926.cos.ap-chengdu.myqcloud.com/hackers/7cl3u.png",
    desc: "致力于搭建和维护好国内独立开发者圈子和氛围。",
    normol: false,
    type: 1
  },
  {
    name: "开源中国",
    url: "https://www.oschina.net",
    image: "https://www.oschina.net/favicon.ico",
    desc: "OSCHINA 社区是工信部开源软件推进联盟指定的官方社区",
    normol: false,
    type: 1
  },
  {
    name: "十年之约",
    url: "https://www.foreverblog.cn/",
    image: "https://www.foreverblog.cn/favicon.ico",
    desc: "一个人的寂寞，一群人的狂欢。",
    normol: false,
    type: 1
  },
  {
    name: "掘金",
    url: "https://juejin.im/",
    image: "https://juejin.cn/favicon.ico",
    desc: "一个帮助开发者成长的技术文章社区",
    normol: false,
    type: 1
  },
  {
    name: "CSDN",
    url: "https://www.csdn.net/",
    image: "https://csdnimg.cn/public/favicon.ico",
    desc: "中国最大的技术社区网站",
    normol: false,
    type: 1
  },
  {
    name: "今日热榜",
    url: "https://tophub.today/",
    image: "https://tophub.today/favicon.ico",
    desc: "今日热榜，追踪全网热点！",
    normol: false,
    type: 2
  },
  {
    name: "划水摸鱼",
    url: "https://huashuimoyu.com/",
    image: "https://huashuimoyu.com/image/favicon-64.png",
    desc: "追踪网络热点，只关注你关心的！",
    normol: false,
    type: 2
  },
  {
    name: "36氪",
    url: "https://36kr.com/",
    image: "https://36kr.com/favicon.ico",
    desc: "赋能新经济参与者 让一部分人先看到未来",
    normol: false,
    type: 2
  },
  {
    name: "人人影视",
    url: "https://www.yyetss.com/",
    image: "https://www.yyetss.com/favicon.ico",
    desc: "美剧网，提供最新美剧、美国电视剧、美国电影( 凉凉 因为盗版被查)",
    normol: false,
    type: 9
  },
  {
    name: "韩饭网",
    url: "https://www.hanfan.cc/",
    image: "https://www.hanfan.cc/favicon.ico",
    desc: "一个看韩国综艺、韩剧、娱乐新闻的网站",
    normol: false,
    type: 3
  },
  {
    name: "耐卡影音",
    url: "http://mcar.co/forum.php",
    image: "http://mcar.co/favicon.ico",
    desc: "美剧网站论坛，算是人人影视的一个备份吧",
    normol: false,
    type: 3
  },
  {
    name: "斗鱼直播",
    url: "https://www.douyu.com",
    image: "https://www.douyu.com/favicon.ico",
    desc: "看直播，看比赛，看游戏，看电竞",
    normol: true,
    type: 3
  },
  {
    name: "优酷视频",
    url: "https://www.youku.com/",
    image: "https://img.alicdn.com/tfs/TB1WeJ9Xrj1gK0jSZFuXXcrHpXa-195-195.png",
    desc: "我也不知道为什么要买它的年卡",
    normol: 0,
    type: 3
  },
  {
    name: "分流抢票",
    url: "https://www.bypass.cn/",
    image: "https://www.bypass.cn/favicon.ico",
    desc: "免费火车票抢票软件，功能强大，windows版本",
    normol: true,
    type: 4
  },
  {
    name: "OKTOOLS",
    url: "https://oktools.net/",
    image: "https://oktools.net/favicon.ico",
    desc: "JSON格式化，解密，时间戳，常用工具大全",
    normol: true,
    type: 4
  },
  {
    name: "element-ui",
    url: "https://element.eleme.cn/#/zh-CN",
    image: "https://element.eleme.cn/favicon.ico",
    desc: "element-ui网站快速成型工具",
    normol: true,
    type: 4
  },
  {
    name: "pdf模板制作",
    url: "https://www.pdfescape.com",
    image: "https://www.pdfescape.com/favicon.ico",
    desc: "一个在线制作PDF模板的网站",
    normol: false,
    type: 4
  },
  {
    name: "SpringBoot文档",
    url: "https://docs.spring.io/spring-boot/docs/",
    image: "https://docs.spring.io/favicon.ico",
    desc: "SpringBoot官方文档地址（所有版本）",
    normol: false,
    type: 4
  },
  {
    name: "摹客",
    url: "https://www.mockplus.cn/",
    image: "https://www.mockplus.cn/favicon.ico",
    desc: "摹客创造设计动力,画原型图的！！！",
    normol: false,
    type: 4
  },
  {
    name: "canva可画",
    url: "https://www.canva.cn/",
    image: "https://static.canva.cn/static/images/favicon.ico",
    desc: "logo图标免费在线设计平台（部分收费）",
    normol: false,
    type: 4
  },
  {
    name: "Process On",
    url: "https://www.processon.com/",
    image: "https://www.processon.com/favicon.ico",
    desc: "免费在线制作，实时协作流程图",
    normol: false,
    type: 4
  },
  {
    name: "羊二小作品集",
    url: "https://yangerxiao.com/works",
    image: "https://yangerxiao.com/favicon.ico",
    desc: "一个前端开发，开发的众多有趣小作品",
    normol: false,
    type: 5
  },
  {
    name: "Fake Windows",
    url: "https://fakeupdate.net/",
    image: "https://www.hjljy.cn/favicon.ico",
    desc: "windows虚假升级界面，xp win7 win8 win10",
    normol: false,
    type: 5
  },
  {
    name: "qrbtf二维码",
    url: "https://qrbtf.com/",
    image: "https://qrbtf.com/favicon.ico",
    desc: "丰富参数，风格，界面二维码生成器",
    normol: false,
    type: 5
  },
  {
    name: "必应高清壁纸",
    url: "https://bing.ioliu.cn/",
    image: "https://bing.ioliu.cn/static/images/bing.ico",
    desc: "国内PHP开发，每天同步必应官网壁纸,抓取每日故事",
    normol: false,
    type: 5
  },
  {
    name: "SpringBoot导航",
    url: "http://springboot.fun/#communities",
    image: "https://docs.spring.io/favicon.ico",
    desc: "纯洁的微笑整理的一些国内SpringBoot学习项目总结",
    normol: false,
    type: 5
  }
]