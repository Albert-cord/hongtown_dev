
Vue.component('product', {
    template: '#product-template',
    props: {
        product: Object,
    },
    data: function () {
        return {
            isHover: false,
        }
    },

    methods: {
        mouseEnter: function () {
            this.isHover = true
            // log('isHover', this.isHover)
        },

        mouseLeave: function () {
            this.isHover = false
        },
    },
})



let Home = {

    el: '#home',

    template: `
        <div id="home-template">
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


        <div class="middle">
            <div class="content">
                <div class="left-content">
                <h1>红满堂工作室</h1>
                <p>红满堂工作室是致力于服务华农学子的校级学生组织，
                    目前由技术组、美工组、运营和版主组成。
                    加入我们，它未来的成功将由你来书写。</p>
                <br>
                <a href="http://hometown.scau.edu.cn:8081/record">加入我们</a>
                </div>
                <div class="right-content">
                    <div class="video" @click="playVideo">
                        <img src="img\\button.png" alt="">
                        <video src="video\\hometown.mp4" autoplay poster=""></video>
                        <!-- <video src="videofile.ogg" autoplay poster="posterimage.jpg"></video> -->

                    </div>
                </div>
            </div>
            <!-- <img src="" alt=""> -->


        </div>
        <div class="product-division">
            <p class="main-text">主要产品</p>
            <div class="products">
                <a v-for="product in products" :href="product.href"
                    :class="{ developing: product.isDevelop }">
                    <product :product="product"></product>
                </a>

            </div>
        </div>

        <move_to_top></move_to_top>
        <!-- <div class="right-nav">
            <button class="nav-button" @click="scrollToTop" v-show="show">
                <img src="img\\btn.png" class="nav-btn">
            </button>
        </div> -->
        <footer>
            <p>© 2016 工作室官网 Powerd by 红满堂工作室</p>
            <a href="#">意见反馈</a>
        </footer>
        <div id="history-introduce"></div>
        <div id="home"></div>
        </div>
    `,
    data:
    function () {
        return {
            navigators: items,
            products: productList,
            isPlay: true,
        }
    },
    methods: {
        playVideo: function () {
            $('.video img').css({ opacity: 0 })
                if (this.isPlay == true) {
                    $("video").trigger("play")
                    $("video").show()

                    $("video").get(0).controls=true
                    this.isPlay = false
                } else{
                    $("video").trigger("pause")
                    this.isPlay = false
                }
            },

    },

    activated: function () {
        $("video").trigger("pause")
    }
}

const router = new VueRouter({
    base: '/',
    mode: 'hash',
    routes: [
        {path: '', component: Home},
        {path: '/home', component: Home},
        {path: '/product-introduce', component: ProductIntroduce},
        {path: '/history-introduce', component: history},
        {path: '/about-us', component: about},

    ]
})

let vueNavigator = new Vue({
    router,
    template: `
    <div id="home_town">

        <keep-alive>
        <router-view class="view"></router-view>
        </keep-alive>
    </div>
    `,

    data: function (){
        return {
            currentRoute: window.location.pathname,
        }
    },
    computed: {
         ViewComponent: function () {
             log('h', this.currentRoute)
             return router[this.currentRoute] || NotFound
             username = function () {
          // 我们很快就会看到 `params` 是什么
             return this.$route.params.username
             }
         },
         render: function (h) {
             return h(this.ViewComponent)
         }
    },

    methods: {
        goBack () {
            window.history.length > 1
            ? this.$router.go(-1)
            : this.$router.push('/')
        }
    },

})
.$mount('#app')
