<template>
  <div>
    <div id="homeContact">
      <div class="contentC">
        <h2 align="center" class="fontSize40 fontW700">Then shall we get started!</h2>
        <p
          align="center"
        >Let us give you more information about how AjansTR can assist you with your workforce objectives.</p>
        <br>
        <div align="center">
          <router-link to="/contact" class="btn fontSize20 ba blue">
            Contact Us
            <i class="fa fa-volume-control-phone"></i>
          </router-link>
        </div>
      </div>
    </div>
    <!--homeContact end-->
    <div class="footer">
      <div class="contentC">
        <div class="row middle-xs">
          <div
            class="col-md-6 col-xs-12 co-sm-6"
          >&copy; 2019 AjansTR Görsel Medya ve İnternet Hizmetleri</div>
          <div class="col-md-6 col-xs-12 co-sm-6 hidden-xs" align="right">
            <div class="ft_icons">
              <a href="#">
                <i class="fa fa-android"></i>
              </a>
              <a href="#">
                <i class="fa fa-apple"></i>
              </a>
              <a href="#">
                <i class="fa fa-chrome"></i>
              </a>
              <a href="#">
                <i class="fa fa-wordpress"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--main end-->
    <div id="socialMenDiv">
      <div>
        <span class="socialClose rotate">
          <i class="fa fa-times"></i>
        </span>
        <a href="https://www.facebook.com/ajanstrmedya" title="Facebook AjansTR" target="_blank">
          <i class="fa fa-facebook"></i>
        </a>
        <a href="https://www.twitter.com/Ajanstr_medya" title="Twitter AjansTR" target="_blank">
          <i class="fa fa-twitter"></i>
        </a>
        <a
          href="https://www.linkedin.com/company/ajanstr-g%C3%B6rsel-medya-ve-internet-hizmetleri/about/"
          title="Linkedin AjansTR"
          target="_blank"
        >
          <i class="fa fa-linkedin"></i>
        </a>
        <a href="https://www.youtube.com/user/ajanstr" title="Youtube AjansTR" target="_blank">
          <i class="fa fa-youtube"></i>
        </a>
        <!--<a href="https://vimeo.com/ajanstr" title="Vimeo AjansTR" target="_blank"><i class="fa fa-vimeo"></i></a>-->
      </div>
    </div>
    <div id="mobilDiv" class="mobil">
      <span class="menClose rotate">
        <i class="fa fa-times"></i>
      </span>
      <div>
        <router-link to="/about" class="fotMen">Works</router-link>
        <router-link to="/about" class="fotMen">Clients</router-link>
        <router-link to="/about" class="fotMen">Carreers</router-link>
        <router-link to="/about" class="fotMen">About Us</router-link>
        <router-link to="/contact" class="fotMen">Contact Us</router-link>
        <a href="javascript:void(0);" id="topSocial" class="topSocialAc">
          Follow Us
          <i class="colorBlue fa fa-share-alt fontSize15"></i>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "footers",
  mounted() {
    jQuery(document).on("click", "#openMenu", function() {
      var menuMen = jQuery("#mobilDiv");
      // var topBara = jQuery("#topBar").html();
      //var topMenua = jQuery("#topMenu").html();
      //jQuery("div",menuMen).html(topMenua+topBara);
      jQuery("body").addClass("mobilOver");
      menuMen.fadeIn();
    });

    jQuery(document).on("click", ".fotMen", function() {
      jQuery("#mobilDiv").slideUp();
    });

    jQuery(document).on("click", ".topSocialAc", function() {
      jQuery("#socialMenDiv").fadeIn();
    });

    jQuery(".socialClose").on("click", function() {
      jQuery("#socialMenDiv").fadeOut();
    });

    jQuery(".menClose").on("click", function() {
      var menuMen = jQuery("#mobilDiv");
      menuMen.fadeOut();
      jQuery("body").removeClass("mobilOver");
    });
  }
};
</script>