

let historyComponent = {
    template: `
    <div :class="'slide slide-' + item.id">
                <div class="slide__bg" style="transform: translate3d(0%, 0px, 0px);"></div>
                <div class="slide__content">
                    <svg class="slide__overlay" viewBox="0 0 720 405" preserveAspectRatio="xMaxYMax slice">
                        <path class="slide__overlay-path" d="M0,0 150,0 500,405 0,405"></path>
                    </svg>
                    <div class="slide__text">
                        <h2 class="slide__text-heading">{{ item.title }}</h2>
                        <p class="slide__text-desc" v-if="item.isSertHtml" v-html="item.sertHtml"></p>
                        <p class="slide__text-desc" v-if="!item.isSertHtml">{{ item.text }}
                        <strong v-if="item.str1">{{ item.str1.title }}</strong>{{ item.str1.text }}
                        <br v-if="item.str2">
                        <strong v-if="item.str2">{{ item.str2.title }}</strong>{{ item.str2.text }}
                        <br v-if="item.str3">
                        <strong v-if="item.str3">{{ item.str3.title }}</strong>{{ item.str3.text }}
                        </p>
                    </div>
                </div>
            </div>
    `,
    props: {
        item: Object,
    },
}

Vue.component('history_item', historyComponent)
// <p> Test </p>
let history = {
    el: '#history-introduce',
    template: `
    <div id="history-introduce-template" v-once>

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
            <div class="slider_container" @mousedown="startToSlide(event)" @mousemove="slideToAnotherPage(event)" @mouseup="endToSlide(event)" @mouseleave="endToSlide(event)">

            <div class="slider-control left" @click="moveToPre"></div>
            <div class="slider-control right" @click="moveToNext"></div>
            <ul class="slider-pagi">


            </ul>
            <div class="slider">

            <history_item v-for="item in historyList" :item="item"></history_item>
            </div>
            </div>
        </div>
        `,

        // components: {
        //     'history_item': historyComponent,
        // },
        data: function () {
            return {
                historyList: historyList,
                navigators: items,
                liArray: [],
                moveIndex: 0,
                currentIndex: 0,
                timeout: null,
                clickDone: true,
                animateInterval: 4000,
                animateTime: 800,
                startX: Number,
                diff: Number,
                animateLeft: 100,
                slideLeft: 50,
                slideStatu: false,
                pause: false,
                // onlyOnce: true,
            }
        },
        computed: {
            $sliderLength: function () {
                let sliderLength = $('.slide').length
                    // if (!sliderLength) {
                    //     return 4
                    // }
                return sliderLength
            },
            windowWidth: function () {
                return $(window).width()
            },
        },
        methods: {

            createButtons: function () {
                let $pageUL = $('.slider-pagi')
                let self = this

                $.each($('.slide'), function (index) {
                    let $li = $('<li class="slide-page-btn"></li>')
                    $li.addClass('slider-pagi__elem-' + index).data('page', index)
                    // log(index, $li)
                    if(index == this.currentIndex){
                        $li.addClass('active')
                    }
                    $li.on('click', function () {

                        self.move(index)

                    }).appendTo($pageUL)
                log('resolve createButtons()')
                    self.liArray.push($li)
                })
            },

            move: function (moveIndex) {
                if(this.pause) {
                    // log('deactivated() -> move()', this.pause)
                    return
                }
                let $slider = $(".slider"),
                    $slideBGs = $(".slide__bg");

                moveIndex = moveIndex % this.$sliderLength
                this.currentIndex = this.currentIndex % this.$sliderLength
                let self = this
                self.advance()
                $(".slide-page-btn").removeClass("active")
                $(".slider-pagi__elem-" + moveIndex).addClass("active")
                $($('.slide')[self.currentIndex]).removeClass('animating')
                $($('.slide')[moveIndex]).addClass('animating')
                $slider.addClass('animating')
                $slider.css("transform", "translate3d(" + -moveIndex * self.animateLeft + "%,0,0)")
                $slideBGs.css("transform", "translate3d(" + moveIndex * self.slideLeft +"%,0,0)")
                setTimeout(function() {
                  $slider.removeClass("animating")
                  self.clickDone = true
                }, self.animateTime)
                self.currentIndex =
                    (++self.currentIndex % self.$sliderLength) == moveIndex ?
                        self.currentIndex : moveIndex
            },

            advance: function () {
                clearTimeout(this.timeout)
                let self = this
                this.timeout = setTimeout(function () {
                    self.moveIndex = (self.currentIndex + 1) % self.$sliderLength
                    self.move(self.moveIndex)
                }, self.animateInterval)
            },
            moveToNext: function () {
                // log('clickDone', this.clickDone)

                if(!this.clickDone){
                    return
                }else {
                    let nextIndex = this.currentIndex + 1 % this.$sliderLength
                    this.clickDone = false
                    this.move(nextIndex)
                }

            },
            moveToPre: function () {
                // log('clickDone', this.clickDone)
                if(!this.clickDone) {
                    return
                } else {
                    this.clickDone = false
                    let preIndex = this.currentIndex - 1 % this.$sliderLength
                    if(this.currentIndex > 0){
                        this.move(preIndex)
                    }else {
                        this.move(this.$sliderLength - 1)
                    }
                }
            },

            startToSlide: function (event) {
                if(!this.clickDone) return
                clearTimeout(this.timeout)
                this.startX = event.pageX
                this.diff = 0
                this.slideStatu = true
            },
            slideToAnotherPage: function (event) {
                // log(this.slideStatu)
                if(!this.slideStatu) return
                let $slider = $(".slider"),
                    transitionCoefficient = 70,
                    $slideBGs = $(".slide__bg");
                let x = event.pageX
                // let y = event.pageY
                this.diff = (this.startX - x) / this.windowWidth * transitionCoefficient
                let t = this
                if( (!t.currentIndex && t.diff < 0) ||
                    (t.currentIndex === t.$sliderLength && t.diff > 0))
                    {t.diff /= 2}
                $slider.css("transform", "translate3d(" + ( -t.currentIndex * t.animateLeft - t.diff ) + "%,0,0)")
                $slideBGs.css("transform", "translate3d(" + ( t.currentIndex * t.slideLeft + t.diff / 2 ) + "%,0,0)")

            },
            endToSlide: function (event) {
                let partOfWindow = 8
                // log(this.diff, partOfWindow)
                if(!this.clickDone) return
                this.slideStatu = false
                let t = this
                if(!t.diff) {
                    t.advance()
                    return
                }
                t.diff >= partOfWindow ? t.moveToNext() :
                t.diff <= -partOfWindow ? t.moveToPre() : t.advance()
            }
        },



        mounted: function () {
            // new Promise(function(resolve, reject) {
            //
            // });
            let self = this
            this.$nextTick(function () {
                log('this', self.$sliderLength)
                log('.slide', $('.slide'))
                self.createButtons()
                // log('this', this.createButtons())
                log(self.liArray)
                if (self.liArray.length) {
                    self.liArray[0].addClass('active')
                    $($('.slide')[0]).addClass('animating')
                }
                self.advance()
            })
        },
        activated: function () {
            this.$sliderLength = $('.slide').length
            // log('activated() $sliderLength', this.pause)
            this.pause = false
            this.advance()
        },
        deactivated: function () {
            this.pause = true
            // log('deactivated()', this.pause)
        }
}
