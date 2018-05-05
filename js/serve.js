log = console.log.bind();
Vue.config.devtools = true


const items = [
    {
        value: "首页",
        href: '/home',
    },
    {
        value: "产品介绍",
        href: '/product-introduce',
    },
    {
        value: "历史介绍",
        href: '/history-introduce',
    },
    {
        value: "关于我们",
        href: '/about-us',
    },
]

const productList = [
    {
        href: 'http://hometown.scau.edu.cn/bbs/',
        image: 'img/forum.jpg',
        name: '红满堂论坛',
    },
    {
        href: 'http://hometown.scau.edu.cn/course/index.php?s=/Search/search.html',
        image: 'img/course.jpg',
        name: '捅奶牛',
    },
    {
        href: 'http://market.scau.edu.cn/',
        image: 'img/market.jpg',
        name: '二手市场',
    },
    {
        href: 'http://hgit.scau.edu.cn',
        image: 'img/4.jpg',
        name: '红满堂git代码托管',
    },
    {
        href: 'http://hcloud.scau.edu.cn',
        image: 'img/5.jpg',
        name: '红满堂私有云',
    },
    {
        href: 'http://hometown.scau.edu.cn/blog/',
        image: 'img/blog.jpg',
        name: '红满堂技术博客',
    },
    {
        href: 'http://hae.scau.edu.cn/',
        image: 'img/paas.jpg',
        name: '红满堂云引擎',
    },
    {
        href: 'http://hwlbz.scau.edu.cn/baozhangxitong/',
        image: 'img/system.png',
        name: '校园网报障系统',
    },
    {
        href: 'http://hometown.scau.edu.cn/lostAndFound/index.php/Home/ThingLost/all',
        image: 'img/9.jpg',
        name: '失物招领',
    },
    {
        href: 'http://202.116.162.23/',
        image: 'img/he.jpg',
        name: '合租宝',
    },
    {
        href: '#none',
        image: 'img/app.jpg',
        name: '红满堂APP（开发中）',
        isDevelop: true,
    },
    {
        href: '#none',
        image: 'img/more.jpg',
        name: '更多（开发中）',
        isDevelop: true,
    },
]

const ulProducts = [
    {
        // isFirst: true,
        href: '红满堂社区论坛',
        value: 'img/comm.jpg',
    },
    {
        href: '捅奶牛|查课网站',
        value: 'img/pd.jpg',
    },
    {
        href: '红满堂二手市场',
        value: 'img/schand.jpg',
    },
    {
        href: '红满堂git代码托管',
        value: 'img/git.jpg',
    },
    {
        href: '红满堂私有云',
        value: 'img/5.jpg',
    },
    {
        href: '红满堂技术博客',
        value: 'img/6.jpg',
    },
    {
        href: '红满堂云引擎',
        value: 'img/7.jpg',
    },
    {
        href: '红满堂社区APP',
        value: 'img/8.jpg',
    },

]

const productContent = [
    {
        value: '华南农业大学红满堂社区|华农|论坛',
        href: 'img/comm.jpg',
        text: '“华农人！不怕苦！前途掌握在自己手中！”这是社区宣言，更是华农学子秉持的精神。红满堂社区见证了华农学子多姿多彩的大学生活，在论坛可以看到美丽的大华农角色，可以晒晒多彩的生活，更可以找到各种所需的学习娱乐资源等等。感受华农，感受生活，上红满堂论坛！',
    },
    {
        value: '搜索|查课|捅奶牛|华南农业大学红满堂社区选修课查询系统',
        href: 'img/pd.jpg',
        text: '捅奶牛网站可供华农学子通过课程名称及教师名称查询选修课，内含各个选修课的各种评论，想找高分的？想找不点名的？想找平时没作业的？又或者帅哥美女老师的选修课？来捅奶牛网站捅一捅，好课！你值得拥有！',
    },
    {
        value: '红满堂二手市场|华农最大的交易平台',
        href: 'img/schand.jpg',
        text: '该网站用于购买或销售各类二手物品，为您的钱包减压。如果你即将毕业，如果你有一时兴起购买的物品，又或者想购买二手物品，二手市场交易将为你轻松解决。省钱！请上红满堂二手市场！',
    },
    {
        value: '红满堂Git代码托管|项目|HMTGit',
        href: 'img/git.jpg',
        text: '该网站用于红满堂工作室内部各项目代码托管，利于集中管理项目，利于高效合作。',
    },
]

const historyList = [

    {
        title: '工作室简介',
        id: 0,
        isSertHtml: true,
        sertHtml: `红满堂工作室经华南农业大学有关部门同意于2000年01月18日成立，隶属现代教育技术中心（原属网络中心）直接管理。红满堂工作室主要以在校学生为主体组成，其宗旨是协助现代教育技术中心（原网络中心）做好学校网络管理工作，同时让学生学习计算机网络知识和了解当前流行技术，为学生提高计算机网络能力提供实习和社会实践的机会。红满堂工作室成立后成功地开设了自己的网站－红满堂校园网站，同时协助原网络中心完成了黑山区、五山区、西区、玉泉山庄学生宿舍网络建设并承担了日常管理工作。`,
        text: '',
    },
    {
        title: '部门职能',
        id: 1,
        text:'',
        str1: {
            title: '系统组',
            text: '：协助网络中心监控学校网络运行情况，发现异常及时向网络中心管理员报告；搜集使用者对网络需求信息；对在用的系统软件进行测试和应用设置；搜集和了解流行软件的功能及使用方法；',
        },
        str2: {
            title: '应用组',
            text: '：协助学校网页制作；负责学校BBS站点的运行；管理学校 FTP 站点，为用户提供 FTP 服务；协助网络中心完成校内网络应用服务；策划和负责‘红满堂’网站的运行；',
        },
        str3: {
            title: '维护组',
            text: '：协助网络中心对校内公共线路测试和维护；负责学生宿舍线路维护；负责对学生宿舍接入线路用户进行管理；为教职工提供计算机、网络基本服务；',
        },
    },
    {
        title: '最可爱的人',
        isSertHtml: true,
        id: 2,
        text: '',
        sertHtml: `这是红满堂最初团队，是红满堂最可爱的人。<br>
            <strong>应用组组长：</strong><br>
            2004-2005 潘志宏 2002级--信息学院<br>
            2005-2006 吕  义 2003级--艺术学院<br>
            2006-2008 池晓生 2005级--动物科学学院<br>
            2008~2009 刘  强 2006级--工程学院<br>
            2009~2010 吴俊茂 2007级--信息学院<br>
            <strong>维护组：</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>BBS：</strong><br>
            陈俊宁 98计机&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;黄志明 98计机<br>
            陈明浩 98计机&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;梁国挺 98计机<br>
            陈志华 00计机&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;刘文雄 98计机<br>
            江　帆 00计机&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;赵　毅 98计机<br>
            潘羡忠 00计机<br>
            罗　勇 98
        `,
    },
    {
        title: '曲折之路',
        id: 3,
        text: '',
        isSertHtml: true,
        sertHtml: `在2000年创建之初，到2003年，可以说，是红满堂全速发展的时候，那时的红满堂是广东高校很出名的一个组织.但由于后来一些已经无法考证的事情，红满堂社区开始走下坡路，当然这和人手不足和资源不足有关。到了2005年，已经很少人知道红满堂社区的存在了。2006年，红满堂老师开始着手重建红满堂，应用组决定重新建立了基于WEB2.0的新社区，除原有二手市场保留外，其他功能逐步退出社区舞台，增加论坛和BLOG功能。至2009年，9年时间，红满堂走了一条弯弯曲曲的路，但最终回到了原来正确的路上，并将继续前进。截至2010年8月，红满堂论坛的注册用户已达15万，日均访客超1万。“红薯”遍布华农的每一个角落，随时会给你带来微笑和帮助。`,
    },

]

Vue.component('li-items', {
    template: '#nav-items-template',
    props: {
        item: Object,
    },
    methods: {
        heightLightNav: function () {
            let link=$(".nav-ul>li").find("a")
            let isHeightLight = false
            link.each(function (index) {
                let $this = $(this)
                if($this[0].href == String(window.location)) {
                    $this.addClass("active")
                    isHeightLight = true
                }
            })
            if(!isHeightLight) {
                $(link[0]).addClass('active')
            }
        }
    },

    activated: function () {
        this.heightLightNav()

    },
})

const NotFound = { template: '<p>Page not found</p>' }
Vue.component('move_to_top', {

    data: function () {
        return {
            // show: false,
            height: window.innerHeight
                ||document.documentElement.clientHeight
                ||document.body.clientHeight,
        }
    },
    computed: {
        show: function () {
            let self = this

            $(window).scroll(function () {
                let scrollTop = $(window).scrollTop()
                scrollTop > (self.height / 2) ? $('.nav-button').show() : $('.nav-button').hide()
            })
        }
    },
    methods: {
        scrollToTop: function () {
            $('html, body').animate({
                scrollTop: 0
            }, 400)
        },

    },
    template: `
    <div class="right-nav">
        <button class="nav-button" @click="scrollToTop" v-show="show">
            <img src="img\\btn.png" class="nav-btn">
        </button>
    </div>
    `,
})

const centralFigure = [
    {
        src: 'img/boss.jpg',
        name: '肥老板',
        text: '在一个夜黑风高的白天，有一位传说中的高中生，被Master Sunny选中，接管了满堂红，噢不不不，是红满堂工作室，从此，红满堂工作室进入了无节操的时代，也是自由欢乐的时代，呃，在这个和谐欢乐的组织里面，我喜欢跟美工切磋技术，跟技术谈点运营之道，跟公关讨论设计。',
    },
    {
        src: 'img/ljm.jpg',
        name: '林建民（佛怒老佛爷）',
        text: '管理员',
    },
    {
        src: 'img/cyb.jpg',
        name: '陈煜邦（闪电邦）',
        text: '百科全书般的大神',
    },
    {
        src: 'img/blue.jpg',
        name: '蓝灿荣（blue）',
        text: '鹳狸猿，被网友定为中国“十大神兽”。我就是其中一员，叫做blue。立志做全栈工程师的男人~php/node/python  /shell/js/~追求技术，永无止境！！',
    },
    {
        src: 'img/cpd.jpg',
        name: '陈培丹(前端)',
        text: '爱玩爱吃，去一个地方之后会迅速记住这个地方所有看起来好吃饭店认路大王，无聊就打打代码。',
    },
    {
        src: 'img/cst.jpg',
        name: '陈素婷',
        text: '13级信管专业，前端打杂。',
    },
    {
        src: 'img/cjl.jpg',
        name: '陈杰伦（前端）',
        text: '本人好静，幽默，有想法，善于倾听，动手能力强，但不善言辞。',
    },
    {
        src: 'img/lzb.jpg',
        name: '林梓标(前端)',
        text: '我是2015级数学与信息学院(软件学院)软件工程专业1班的林梓标，喜欢水群，不爱学习，现予红满堂工作室技术组负责打杂工作！',
    },
    {
        src: 'img/hqz.jpg',
        name: '何巧珠（前端）',
        text: '爱吃爱摄影爱音乐爱瞎想 小慢热 妄想成为大神的搬砖小透明',
    },
    {
        src: 'img/zm.jpg',
        name: '曾梅（前端）',
        text: '代号MM，爱好萌妹，话少脑洞大。喜欢动漫，尤其魔法系的动漫。喜欢手游，最近在玩暖暖和虚荣，求加好友啊www！！！喜欢谷歌文化，欢迎同好一起讨论！',
    },
    {
        src: 'img/hxb.jpg',
        name: '洪晓波（后台）',
        text: '撸得了代码玩得了球，出得了厨房入得厅堂',
    },
    {
        src: 'img/lwh.jpg',
        name: '廖旺辉（APP）',
        text: '软件工程大三，热衷android开发，负责华南农业大学红满堂论坛二手市场android版的开发。',
    },
]
const centralFigureMask = 'mask_green'

const technicalPerson = [
    {
        src: 'img/lzz.jpg',
        name: '李志钊（后台）',
        text: '为了防止世界被破坏，为了守护世界的和平，贯彻爱与真实的善良，幽默又搞笑 的技术小宅，小志。我是李志钊,一个热爱唱歌的程序猿。',
    },
    {
        src: 'img/hyh.jpg',
        name: '胡奕豪',
        text: '从前有个单纯的乡下少年，梦想以代码为利剑，行侠仗义闯荡江湖，终于有一天，他进入了传说中的红满堂 在master、闪电、佛爷的带领下，降妖除魔保一方平安，江湖人称一号哥[酷]降生之日，天现异象，北斗连星，有二龙戏珠于堂前，满室红光，父甚惊奇！弱冠之年，及第华农，矢从编程之业，遂迷此道无可自拔！虽术远未至顶技远未达尖，常躬身自省，盼一朝臻至化境，立足江湖。',
    },
    {
        src: 'img/try.jpg',
        name: '谭荣耀',
        text: '我擅长php（有人说是拍黄片）语言，熟悉thinkphp（又有人说是想拍黄片）框架，还有什么html，css，mysql。后台开发狗一只。其实我想说我不是导演。',
    },
    {
        src: 'img/zz.jpg',
        name: '曾真',
        text: '一个又努力又善良又聪明还不要脸的爱打代码爱看书爱打羽毛球的驴子',
    },
    {
        src: 'img/prh.jpg',
        name: '彭荣华（APP）',
        text: '喜欢编程的土木工程学渣, 爱玩爱看书爱研究Android。',
    },
    {
        src: 'img/lsx.jpg',
        name: '赖思翔',
        text: '男，13级信息管理与信息系统专业，红满堂应用组，Android客户端开发。',
    },
]
const technicalPersonMask = 'mask_green'

const uiPerson = [
    {
        src: 'img/yb.jpg',
        name: '刘淑怡（美工）',
        text: '曾荣获红满堂社区“最纯洁美丽动人善良大方高冷”大奖，是污里的一朵洁白的莲花，外号“天山XX”。',
    },
    {
        src: 'img/lhq.jpg',
        name: '罗海琦',
        text: '我叫罗海琦，来自13级材料与能源学院木工家具2班，在红满堂担任UI设计师，平时喜欢吃饭睡觉发黄图哈哈哈哈哈哈',
    },
    {
        src: 'img/pc.jpg',
        name: '彭程',
        text: '小名cici，专业环境设计，在红满堂工作室美工组工作，喜欢画速写、插画',
    },
    {
        src: 'img/plp.jpg',
        name: '潘丽萍(美工|运营)',
        text: 'hihi 我是沃德天·维森陌·沃·拉莫美 。大家都叫我apple，我在美工组和运营组，平时就搞搞设计同管理微信公众号。小女子蓝波控，宋智孝脑残粉，爱好吃吃喝喝，外表高冷实质××，日常与数学相爱相杀（微笑）。',
    },
]
const uiPersonMask = 'mask_blue'

const operatingPerson = [
    {
        src: 'img/pz.jpg',
        name: '彭贞',
        text: '一个打错酱油的卖萌美工兼一本正经的不良运营妹纸。',
    },
    {
        src: 'img/cxt.jpg',
        name: '陈晓婷',
        text: '一个不太懂运营的运营妹子。动静看心情，聒噪看环境。',
    },
    {
        src: 'img/cyy.jpg',
        name: '陈育艺(运营)',
        text: '有人叫我陈皮，不过我不喜欢，15级数信学院计机，运营部，脑洞有时候比较大，逗比一个，喜欢吃喝玩乐',
    },
    {
        src: 'img/cjy.jpg',
        name: '陈洁莹',
        text: '2013级食品学院食品科学与工程专业学生，在红满堂工作室担任红满堂论坛情感版版主，也为超级版主，负责管理论坛事务。',
    },
]
const operatingPersonMask = 'mask_purple'

const moderator = [
    {
        src: 'img/lz.JPG',
        name: '廖仔',
        text: '大家好～我是课程版的廖籽～小vv的接班人～平时喜欢打lol喜欢看小说喜欢闲逛喜欢吃吃吃～最后希望红满堂越来越好',
    },
    {
        src: 'img/lwf.jpg',
        name: '李伟锋（动漫|游戏）',
        text: '轻小说读者,中二病患,粤语,SCAU,电脑小白,苦练photoshop,萌化资源下载欢迎点击下方blog链接。',
    },
    {
        src: 'img/ls.jpg',
        name: '流水tt',
        text: 'IT版版主',
    },
    {
        src: 'img/czw.jpg',
        name: '陈智文（深海）',
        text: '最美好的记忆，都会浪费，爱过不要浪费。',
    },
    {
        src: 'img/lgx.jpg',
        name: '刘冠欣',
        text: '我的华农版版主',
    },
    {
        src: 'img/cx.jpg',
        name: '陈湘（动漫|超版版主）',
        text: '一个专注冷场二十年的女汉纸，一个徘徊在起床还是睡觉间的人格分裂症患者，一个一句话不离哈哈哈哈哈的词穷型话唠，一个有病的冰箱。',
    },
    {
        src: 'img/czy.jpg',
        name: '陈志莹(影视版)',
        text: '宇宙天阶级别2B人士就是说的我陈志莹啦，有一天，我一不小心掉到一个星球上（我怎么会告诉你我是被踢下飞船的呢），然后我发现这个星球上居然有一个论坛叫做红满堂，为了假装正常人，就拼了吃奶的力气挤了进去，当上了博览这个星球众多电影，点评无数的超级厉害的影视版版主（怎么厉害，自行脑补呗）我怎么可能会告诉你我在上面学到了很多，交到了很多正常人盘友，灰常开心的呢！',
    },
    {
        src: 'img/student.jpg',
        name: '高级小学生（资源专区）',
        text: '这个人很懒，什么都没有留下。 喂，有什么事吗？没事的话我先挂了：）',
    },
    {
        src: 'img/anson.jpg',
        name: 'anson（音乐版）',
        text: '这个人很懒，什么都没有留下。',
    },
    {
        src: 'img/hlf.jpg',
        name: '胡亮飞（我的华农）',
        text: '我是一个天涯的浪子',
    },
    {
        src: 'img/ln.jpg',
        name: '梁楠（课程版）',
        text: '本人18岁时，赤手空拳闯过加入红满堂社区的考核，现在，我的帖子都原创精品，百万回复，千万关注，以及每天过亿的好友申请，我不是在这里炫耀，我只想告诉大家……你们再给我一罐菠萝啤，我能吹到你怀疑人生',
    },
    {
        src: 'img/gwh.jpg',
        name: '郭文辉（文学版）',
        text: '我爱好文学，是文学给了我学习之余，放松心情，感受世界的另一个通道',
    },
    {
        src: 'img/xh.jpg',
        name: '小宏大白（职场版）',
        text: '',
    },
    {
        src: 'img/hnr.jpg',
        name: '郝楠仁(IT版)',
        text: '「伪艺术家，真程序员， &nbsp;&nbsp;&nbsp; 尖酸刻薄，专业打脸。」',
    },
    {
        src: 'img/meiko.jpg',
        name: 'meiko(晒命坊)',
        text: '',
    },
    {
        src: 'img/xc.jpg',
        name: '薛成(生活百科)',
        text: '',
    },
]
const moderatorMask = 'mask_red'
