<template>
  <div class="homePage">
    <h1
      id="securi"
    >AjansTR Profesyonel Wordpress alanında Web Tasarım ve Pazarlama hizmeti veren bir kurumdur.
      <!--AjansTR Görsel Medya ve İnternet Hizmetleri, Wordpress alanında web Tasarım, Technology, Design ve Marketing alanında profesyonel hizmet veren bir kurumdur.-->
    </h1>
    <div id="content" class="homeIntro homeLoad anim1">
      <i id="oneB" class="animLineOut"></i>
      <i id="oneC" class="animLineOut"></i>
      <div class="contentC">
        <div class="row">
          <div class="col-md-7 col-sm-6 col-xs-12 homeSummary">
            <h2 class="ml12">A creativity company with an artistic approach to Design and Technology</h2>

            <p
              class="tm1"
            >For 17 years, we have believed in producing customer-focused, unique and usable work. We are taking you to a perfect journey based on the principle of quality and trust which is the biggest motto of this family</p>
            <router-link to="/about" class="btn ba black colorWhite btntm1">
              Who Are We
              <i class="fa fa-info-circle"></i>
            </router-link>
          </div>
          <div class="col-md-3 col-sm-3 hidden-xs homeInfo">
            <h3 class="colorGrey1 ac1">Contact Us</h3>

            <p
              class="fontSize13 ac1"
            >AjansTR has been conducting worldwide interactive applications and UX marketing work.</p>
            <router-link to="/contact" class="btn ba ac2">
              Contact Us
              <i class="fa fa-volume-control-phone"></i>
            </router-link>
          </div>
          <div class="col-md-2 col-sm-2 hidden-xs homeComment">
            <p class="fontSize13">
              Technology, Design and
              <br>Marketing
              <i class="fa colorBlue fa-comments-o fontSize20"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div id="homeReferans" class="anim2">
      <h2
        class="fontSize40 fontW300"
        style="color: #ccc; margin-bottom: 0"
        align="center"
      >They CAN'T all be wrong, can they?
        <br>
        <img src="../assets/images/arrowBottom.png" alt style="opacity:0.1">
        <div class="clr" style="padding: 15px 0 0 0"></div>
      </h2>

      <div align="center" class="contentC">
        <span v-for="(basligi, urlsi) in logolar">
          <img :src="'https://www.ajanstr.com.tr/code/images/logo/'+urlsi" height="75">
        </span>
        <div align="center">
          <br>
          <br>
          <br>
          <a href="client.php" title="Client" class="btn ba black colorWhite">
            Have a Look at All the Family
            <i class="fa fa-smile-o"></i>
          </a>
        </div>
        <div class="clr"></div>
      </div>
    </div>
  </div>
</template>

<script>
//import swiperslide from "../components/slide.vue";
//import jQuery from "jquery";
import anime from "animejs";
export default {
  name: "homePage",
  components: { anime },
  data() {
    return {
      homeBaslik: "Welcome to Your Vue.js App",
      homeBanners: [],
      bannerYuklenme: true,
      yukseklik: 310,
      logolar: {
        "iskultur.gif": "İş Kültür Yayınları",
        "tibas.gif": "İş Bankası Emekli Sandığı Vakfı",
        "halkbank.gif": "Halkbank",
        "halkbank_kobi.gif": "Halkbank Kobi",
        "yky.gif": "Yapıkredi Yayınları",
        "eczacibasi.jpg": "Eczacıbaşı",
        "bundesign.jpg": "Bundesign",
        "cumhuriyet.png": "Cumhuriyet Spor",
        "fiat.jpg": "Fiat Otomotiv",
        "tofas.jpg": "Tofaş İntranet ve Kurumsal Site",
        "lancia.jpg": "Lancia Kurumsal Site",
        "dunyagoz.jpg": "Dünyagöz Vakfı",
        "tpf.jpg": "Türkiye Perakendeciler Federasyonu",
        "yerelzincirler.jpg": "Yerelzincirler Buluşuyor",
        "unico.jpg": "Unico Sigorta",
        "zurich.jpg": "Zurich Sigorta",
        "takeuchi.jpg": "Takeuchi Kurumsal Site",
        "goldas.jpg": "Goldaş Kurumsal ve Eticaret",
        "yyu.jpg": "YeniYüzyıl Üniversitesi",
        "hasaluminyum.jpg": "Has Alüminyum",
        "bilginet.jpg": "Bilginet Eticaret",
        "dorahospital.jpg": "Dora Hospital",
        "iar.jpg": "İstanbul Altın Rafine Kurumsal",
        "iar.jpg": "İstanbul Altın Rafine Kurumsal",
        "sadikuygun.jpg": "Sadıkuygun Eğitim Yayınları",
        "samet.jpg": "Samet Mobilya",
        "sahan.jpg": "Sahan Restaurant Zincirleri",
        "kosova.jpg": "KosovaLdt Kurumsal Site"
      }
    };
  },
  ready: function() {},

  mounted() {
    this.dikeyFormat();
    if (jQuery(window).width() < 720) {
      this.yukseklik = 250;
    }
    jQuery(".homeIntro").height(jQuery(window).height() - this.yukseklik);

    jQuery(".ml12").fadeIn();
    jQuery(".ml12").each(function() {
      jQuery(this).html(
        jQuery(this)
          .text()
          .replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>")
      );
    });
    var lastScrollTop = 350;
    jQuery(window).scroll(function(event) {
      var st = jQuery(this).scrollTop();
      if (st > lastScrollTop) {
        if (!jQuery("#homeReferans").hasClass("active")) {
          jQuery("#homeReferans div img")
            .fadeTo(0, 0)
            .each(function(index) {
              var dif = index % 8;
              var lambda = parseInt(index / 8);
              //$(this).text(index);
              jQuery(this)
                .delay(100 * (dif + lambda))
                .css("visibility", "visible")
                .fadeTo(1000, 1);
            });
          jQuery("#homeReferans").addClass("active");
        }
      }
      lastScrollTop = st;
    });

    anime
      .timeline({
        loop: false
      })
      .add({
        targets: ".ml12 .letter",
        translateX: [140, 0],
        translateZ: 0,
        opacity: [0, 1],
        delay: function(el, i) {
          return 500 + 30 * i;
        },
        complete: function() {
          jQuery(".tm1").animate(
            {
              opacity: 1
            },
            {
              complete: function() {
                jQuery(".btntm1").animate({
                  opacity: 1
                });
              }
            }
          );
        }
      });
  },
  computed() {},
  created() {
    fetch("https://www.bundesign.com/ajax?cek=mobil&modul=home_banner")
      .then(bannerF => {
        return bannerF.json();
      })
      .then(donenBanner => {
        this.homeBanners = donenBanner;
        this.bannerYuklenme = false;
      });
  },

  methods: {
    dikeyFormat: function() {
      setTimeout(() => {
        // some code
        const ilk =
          jQuery(".homePage .homeSummary").offset().left +
          jQuery(".homePage .homeSummary").width();
        jQuery("#oneB").css("left", ilk + "px");
        const ilak =
          jQuery(".homeInfo").offset().left + jQuery(".homeInfo").width();
        jQuery("#oneC").css("left", ilak + "px");
      }, 500);
      // const boxABB = this.$refs["my_box_a"].getBoundingClientRect();
      // const boxBBB = this.$refs["my_box_b"].getBoundingClientRect();
      // this.posBoxA = boxABB.x;
      // this.posBoxB = boxBBB.x;
    }
  },
  beforeMount() {
    // sayfa yuklenmesi bittikten sonra
  }
};

/*$(document).ready(function() {
		$(".anim1 .fill").delay(500).addClass("active");
		$(".anim2").delay(500).slideDown();
	}); */
</script>
<style scope>
.homePage {
  height: 100%;
}
.homeIntro {
  padding-top: 25px;
  padding-bottom: 50px;
  height: calc(100% - 90px);
  display: block;
  position: relative;
  background-image: url("https://www.ajanstr.com.tr/code/images/ofis.jpg");
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
}
</style>
