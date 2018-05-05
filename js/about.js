
let aboutItem = {
    template: `
    <div class="pic" style="height: 196px;">
                <img :src="item.src">
                <div :class="itemMask" class="word_bg" style="display: none;">
                    <div class="word">
                        <p>{{item.name}}</p>
                        <p>{{item.text}}</p>
                    </div>
                </div>
            </div>
    `,
// v-show="show"
    props: {
        item: Object,
        itemMask: String,
        show: Boolean,
    }
}

let about = {
    el: '#about-us',
    template: `
    <div id="about-tamplate">
    <nav class="navigator">
            <a href="#" class="hong-town"><img src="img\\logo.png"><p class="light"></p></a>
            <ul class="nav-ul">
                <li v-for="item in navigators">
                    <li-items
                    class="item"
                    :item="item"
                    ></li-items>
                </li>
            </ul>
    </nav>
    <div class="main">
        <div id="big_picture">
        <img src="img//bg.jpg" alt="红满堂工作室大家庭">
        </div>
        <img-group :item="item" :itemMask="centralFigureMask" v-for="item in centralFigure"></img-group>
        <div class="pic db-pic" style="height: 204px;">
        <div class="jishu" style="height: 204px;">
            <div class="word">
            <p>技术部</p>
            <p>前端负责红满堂社区旗下网站的静态页面的实现</p>
            <p>后台负责开发web应用，维护论坛服务器和在线应用</p>
        </div>
        </div>
        </div>
        <img-group :item="item" :itemMask="technicalPersonMask" v-for="item in technicalPerson"></img-group>

        <div class="pic db-pic" style="height: 204px;">
        <div class="meigong" style="height: 204px;">
            <div class="word">
            <p>美工组</p>
            <p>负责UI设计,宣传资料设计等</p>
        </div>
        </div>
        </div>
        <img-group :item="item" :itemMask="uiPersonMask" v-for="item in uiPerson"></img-group>
        <div class="pic db-pic" style="height: 204px;">
        <div class="yunying" style="height: 204px;">
            <div class="word">
            <p>运营组</p>
            <p>负责红满堂微博微信的日常更新</p>
            <p>组织线上线下活动</p>
        </div>
        </div>
        </div>
        <img-group :item="item" :itemMask="operatingPersonMask" v-for="item in operatingPerson"></img-group>

        <div class="pic db-pic" style="height: 204px;">
        <div class="banzhu" style="height: 204px;">
            <div class="word">
            <p>版主们</p>
            <p>负责管理红满堂论坛的各个板块</p>
        </div>
        </div>
        </div>
        <img-group :item="item" :itemMask="moderatorMask" v-for="item in moderator"></img-group>
    </div>
    <move_to_top></move_to_top>
    <div>
    <a class="join-us" id="join-us" href="http://hometown.scau.edu.cn:8081/record">
    </a>
    </div>

    <div class="AboutUs-tittle">
        <span>↓ ↓ 福利 ↓ ↓</span>
    </div>
    <div class="AboutUs-box">
        <div class="AU-box" id="position" @click="showDepartment" @mouseenter="showMask(event)" @mouseleave="hideMask(event)">
            <img src="img/14303025577086.jpg">
            <div class="mask" id="mask1" style="display: none;">
                <span>部门介绍</span>
            </div>
        </div>
        <div class="AU-box" id="welfare" @click="showWelfare" @mouseenter="showMask(event)" @mouseleave="hideMask(event)">
            <img src="img/14586291749264.jpg" id="img2">
            <div class="mask" id="mask2" style="display: none;">
                <span>福利介绍</span>
            </div>
        </div>
        <div class="AU-box" id="skill" @click="showSkill" @mouseenter="showMask(event)" @mouseleave="hideMask(event)">
            <img src="img/skill.jpg">
            <div class="mask" id="mask3" style="display: none;">
                <span>技术组介绍</span>
            </div>
        </div>
    </div>
    <div class="AU-box-content" style="display: none;" id="AU-box-content">
        <span>部门介绍</span>
        <hr style="width:15%;color:#CBCBCB; ">
           <p>
                <strong>技术组：</strong>
                <span>搬砖的程序猿和程序媛。不要问我们会不会修电脑？我们是搞web前端开发，web后台开发，运维开发，安卓开发，ios开发的。
                    <a href="javascript:;" id="more" @click="showMore">点我了解更多</a>
                </span>
            </p>
            <p>
                <strong>美工组：</strong>
                <span>UI设计师的聚居地。一群爱好平面设计，有创意爱搞怪的妹子，妹子，妹子还有汉子。红满堂旗下所有网站无不出自她们手中；版主及管理员进行线上和线下的美工工作都是由她们来协调的；她们一出手，炫酷的宣传海报，耀眼的标语，荣誉的勋章，美美的红薯...妥妥的。</span>
            </p>
            <p>
                <strong>运营组：</strong>
                <span>红满堂社区的外联宣传工作和线下活动，她们全包了，全包了。她们热爱生活，文字表达能力强，善于捕捉校园生活中的热点事物，负责红满堂社区微博微信的日常更新。她们与社团组织合作洽谈，调动着红满堂成员的积极性。在她们的调动下，红满堂工作室呈现出团结友爱互助的氛围。</span>
            </p>
            <p>
                <strong style="letter-spacing: 17.85px;">版<label style="letter-spacing: 0px;">主：</label></strong>
                <span>红满堂社区中占比例最大也是最为重要的一个群体。既负责运营版块，也负责管理版块。他们的版块，他们做主。</span>
            </p>
    </div>
    <div class="AU-box-content" style="display: none;" id="AU-box-content-1">
        <span>福利介绍</span>
        <hr style="width: 15%;color:#CBCBCB; ">
        <p>
            <strong style="letter-spacing: 7px;" id="welfare-introduction">成员福<b style="letter-spacing: 0px;">利：</b></strong>
            <span>
                <label>1、校园网免费开通,包括端口费</label>
                <label>3、校级学生干部任职证明综合测评加分！</label>
                <label>2、每期一次腐败聚会~不是AA制哦~</label>
                <label>4、获得线上线下的锻炼机会！</label>
            </span>
        </p>
        <p>
            <strong>技术组福利：</strong>
            <span>
                <label for="">1、校内服务器提供测试</label>
                <label for="">2、红满堂产品使用权:红满堂gitlab,红满堂私有云...</label>
                <label for="">3、接触红满堂产品核心代码</label>
                <label for="">4、获得师兄师姐们指导</label>
            </span>
        </p>
    </div>
    <div class="AU-box-content" style="display: none;" id="AU-box-content-2">
        <span>技术组介绍</span>
        <hr style="width:15%;color:#CBCBCB; ">
        <p>
            <strong>web前端开发：</strong>
            <span>实现红满堂社区旗下网站的所有的前端静态页面,与后台童鞋合作，实现数据交互。熟悉前端html+css布局，熟悉javascript的语法及使用,有技术热情，喜欢接触css3、html5等技术,会移动端响应式布局。前端框架(jQuery，bootstrap,sui,amaze,angular),运用自如。
            </span>
        </p>
        <p>
            <strong>web后台开发：</strong>
            <span>负责红满堂论坛discuz代码维护，开发web应用（如二手市场、失物招领平台、HAE平台（使用go语言哦），熟悉 PHP + MySQL，了解Discuz! 程序及其插件工作机制，熟悉linux服务器管理，后台框架(thinkphp,laravel,修复tp3.2部分漏洞的thinkphp框架,bottle),这些都难不倒他们。</span>
        </p>
        <p>
            <strong id="operation-introduction">服务器运维：</strong>
            <span>维护论坛服务器，Linux服务器（Centos、Ubuntu）、Windows服务器（2003、2008）、实体机、VMware虚拟机妥妥的都有得玩（我不会随便告诉你，进来技术组的大神每人分一台专用的虚拟服务器自己玩这种隐形福利，其他工作室可不一定享受得到哦），服务器技术(shell,nginx,docker,PaaS)，对他们来说，这些都是最基本的。</span>
        </p>
        <p>
            <strong id="APP-introduction">APP开发：</strong>
            <span>负责红满堂APP开发，功能包含论坛，二手市场，捅奶牛等等。与后台进行数据交互，开发移动端相关功能，与设计师配合，实现优秀的界面，跟进新技术的发展，令APP良好具有的用户体验。让大家可以随时随地刷红满堂论坛。</span>
        </p>
    </div>
    <div class="back" id="back" @click="showBack" style="display: none;">
        <img src="img/back.png">
    </div>
    <footer>
        <p>© 2016 工作室官网 Powerd by 红满堂工作室</p>
        <a href="#">意见反馈</a>
    </footer>
    </div>

    `,

    components: {
        'img-group': aboutItem,
    },

    data: function () {
        return {
            centralFigure: centralFigure,
            centralFigureMask: centralFigureMask,
            technicalPerson: technicalPerson,
            technicalPersonMask: technicalPersonMask,
            uiPerson: uiPerson,
            uiPersonMask: uiPersonMask,
            operatingPerson: operatingPerson,
            operatingPersonMask: operatingPersonMask,
            moderator: moderator,
            moderatorMask: moderatorMask,
            targetCache: null,
            navigators: items,
        }
    },
    methods: {
        showItem: function () {
            let self = this
            $(document).on('click', '.pic', function (event) {
                if (event.currentTarget === self.targetCache) {
                    $('.word_bg').hide()
                    self.targetCache = null
                    return
                }
                let $currentTarget = $(event.currentTarget)
                $('.word_bg').hide()
                $($currentTarget.find('.word_bg')).show()
                $($currentTarget.find('.word_bg')).css({display: 'block'})
                log('show', $($currentTarget.find('.word_bg')))
                self.targetCache = event.currentTarget
            })

        },
        showDepartment: function () {
            $(".AboutUs-box").fadeIn(500)
		    $(".AboutUs-box").hide(500)
		    $("#AU-box-content").fadeOut(500)
		    $("#AU-box-content").show(500)
		    $(".back").css("display","block")
        },
        showMore: function () {
            $(".AboutUs-box").hide(500)
  		    $(".AU-box-content").hide(500)
  		    $("#AU-box-content-1").hide(500)
  		    $("#AU-box-content-2").fadeOut(500)
  		    $("#AU-box-content-2").show(500)
		    $(".back").css("display","block")
        },
        showSkill: function () {
            $(".AboutUs-box").fadeIn(500)
		    $(".AboutUs-box").hide(500)
		    $("#AU-box-content-2").fadeOut(500)
		    $("#AU-box-content-2").show(500)
		    $(".back").css("display","block")
        },
        showWelfare: function () {

            $(".AboutUs-box").fadeIn(500)
		    $(".AboutUs-box").hide(800)
		    $("#AU-box-content-1").fadeOut(500)
		    $("#AU-box-content-1").show(800)
		    $(".back").css("display","block")
        },
        showBack: function () {
            $(".AU-box-content").css({"display":"none"},500);
		    $(".AboutUs-box").show(500);
		    $(".back").css("display","none");
		    if (navigator.userAgent.match(/IEMobile|BlackBerry|Android|iPod|iPhone|iPad/i)) {
	    	          $(".AU-box>div").show();
		     }
        },
        showMask: function (event) {
            let $target = $(event.target)
            // log($target)
		    $target.find('div').slideDown(300)
		    $target.siblings("div").find('div').stop(true)
		    $target.siblings("div").find('div').hide()
        },
        hideMask:function (event) {
            let target = event.target
		    $(target).find('div').hide()
        },
    },

    activated: function () {
        this.showItem()
        // log('showItem', this.showItem)
        $($('.pic>div')[0]).removeClass('mask_green')
        $($('.pic>div')[0]).addClass('mask_yellow')
        var interval = setInterval(function() {
                $("#join-us").animate({
                    "bottom": "30px"
                }, 500).animate({
                        "bottom": "20px"
                        }, 500)
            }, 1000)
    },

}
