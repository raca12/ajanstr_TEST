<template>
<div :class=classAdi :options="swiperOption" ref="mySwiper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="slide in banners" :key="slide.link"><img v-bind:src="slide.resim" alt=""></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <!-- <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div> -->
          </swiper>
          <div align="center" v-if="yukleniyor">
              <img src="https://files.bundesign.com/code/images/26.gif" alt="">
          </div>
    </div>

</template>
<script>
import 'swiper/dist/css/swiper.css'
  export default {
      name : "swiperslide",
    props: {
        banners: {
            type: Array,
            required: true
        },
        classAdi:{
            type:String,
            required: true
        },
        yukleniyor:{
            type:Boolean,
            default: function () {
                    return true
                  }
        }
},
    data () {
      return {
        swiperOption: {
            direction: 'horizontal',
            slidesPerView: 1,
            spaceBetween: 1,
            effect: 'coverflow',
            grabCursor: true,
            loop: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 10,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows : true
            },
            mousewheel: true,
            pagination: {
                el: '.swiper-pagination'
            }
        }
      }
    },
    computed :{

  },
    mounted() {


    }
  }
</script>
