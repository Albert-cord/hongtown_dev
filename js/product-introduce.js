let box = {
    template: '#box_product',
    props: {
        item: Array,
    },

}

let slider = {
    template: '#item-product-template',
    props: {
        item: Object,
    },
    data: function () {
        return {

        }
    },
}


let ProductIntroduce = {
    el: '#product-introduce',
    template: `
    <div id="product-introduce-temp">
    <nav class="navigator">

            <a href="#" class="hong-town"><img src="img/\logo.png"><p class="light"></p></a>
            <ul class="nav-ul">
                <li v-for="item in navigators">
                    <li-items
                    class="item"
                    :item="item"
                    ></li-items>
                </li>

            </ul>

    </nav>
    <div class="product-content">

        <div class="menu-all">
        <div class="menu-box">
            <p class="main-text">主要产品预览</p>
            <ul class="menu-slider">
                <li v-for="item in ulProducts" class="item-count slide" :class="{ first_slide: item.isFirst }">
                    <item-product :item="item" ></item-product>
                </li>
            </ul>
            <p class="pre" @click="moveToPre">
                <a href="#"><</a>
            </p>
            <p class="next" @click="moveToNext">
                <a href="#">></a>
            </p>
        </div>
        <div class="menu-box">
				<p class="main-text">内部应用</p>
				<p class="slider-word">人事管理系统</p>
				<a class="cant-slider" href=""><img src="img/manage.jpg" alt="photo"></a>

				<!-- <p class="img-tit">失物招领</p>
				<a href=""><img src="img/9.jpg" alt="photo"/></a>

				<p class="img-tit">合租宝</p>
				<a href=""><img src="img/10.jpg" alt="photo"/></a>

				<p class="img-tit">校园网保障系统</p>
				<a href=""><img src="img/12.jpg" alt="photo"/></a> -->


			</div>
        </div>


        <div class="product_box">

                <item_box :item="produ" v-for="produ in productContent"></item_box>

        </div>

        <move_to_top></move_to_top>

        <footer>
            <p>© 2016 工作室官网 Powerd by 红满堂工作室</p>
            <a href="#">意见反馈</a>
        </footer>
        <div id="history-introduce"></div>
        <div id="home"></div>
    </div>


    `,

    //上面的first_slide如果_换成-将不能编译
    // <p>Test</p>

    components: {
        'item-product': slider,
        'item_box': box,
    },
    data: function () {
        return {
            productBox: productContent,
            ulProducts: ulProducts,
            show: false,
            moveIndex: 0,
            currentIndex: 0,
            timeout: null,
            navigators: items,
            justOne: true,
            clickDone: true,
            animateInterval: 4000,
            animateTime: 800,
            pause: false,
        }
    },
    computed:{
        proLength: function () {
            return $('li.item-count').length
        },
    },
    methods: {
        // 事件流
        productMove: function (moveIndex) {
            if(this.pause) {return }
            let animateLeft,
                slideLeft;
                moveIndex = moveIndex % this.proLength
                this.currentIndex = this.currentIndex % this.proLength
                // log('currentIndex, moveIndex', this.currentIndex, moveIndex)

            let self = this
            this.advance()
            if(moveIndex > this.currentIndex) {
                slideLeft = '100%'
                animateLeft = '-100%'
            }else {
                slideLeft = '-100%'
                animateLeft = '100%'
            }

            $('.slide').eq(moveIndex).css({left: slideLeft, display: 'block'})

            $('.menu-slider').animate({left: animateLeft}, self.animateTime, function () {

                $('.slide').eq(self.currentIndex).css({display: 'none'})
                $('.slide').eq(moveIndex).css({left: 0})
                $('.menu-slider').css({left: 0})
                self.clickDone = true
                // log('currentIndex, moveIndex', self.currentIndex, moveIndex)
                self.currentIndex =
                    (++self.currentIndex % self.proLength) == moveIndex ?
                        self.currentIndex : moveIndex
            })

        },
        advance: function () {
            clearTimeout(this.timeout)
            let self = this
            this.timeout = setTimeout(function () {
                self.moveIndex = (self.currentIndex + 1) % self.proLength
                self.productMove(self.moveIndex)
                //这里很关键
            }, self.animateInterval)
        },
        moveToNext: function () {
            // log('clickDone', this.clickDone)

            if(!this.clickDone){
                return
            }else {
                let nextIndex = this.currentIndex + 1 % this.proLength
                this.clickDone = false
                this.productMove(nextIndex)
            }

        },
        moveToPre: function () {
            // log('clickDone', this.clickDone)

            if(!this.clickDone) {
                return
            } else {
                this.clickDone = false
                let preIndex = this.currentIndex - 1 % this.proLength
                if(this.currentIndex > 0){
                    this.productMove(preIndex)
                }else {
                    this.productMove(this.proLength - 1)
                }
            }

        },


    },
    mounted: function () {
        // log('create function', $('.slide'))
        // log('proLength', this.proLength)
        this.advance()
        $('.slide').eq(0).css({display: 'block'})

    },
    activated: function () {
        this.proLength = $('li.item-count').length
        this.pause = false
        this.advance()
    },

    deactivated: function () {
        log('ProductIntroduce deactivated()')
        this.pause = true
    }
    // 事件流: mouted->advance->productMove->advance->productMove->advance
    // pre: productMove->advance->productMove

}

// let async = function (resolve, reject) {
//
// }
// Vue.component('async-example', function (resolve, reject) {
//   setTimeout(function () {
//     // 将组件定义传入 resolve 回调函数
//     resolve({
//       template: '<div>I am async!</div>'
//     })
//   }, 1000)
// })
// let p = new Vue(ProductIntroduce)
// p.$mount('#home')
