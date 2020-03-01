<template>
  <div id="about">
    <div
      id="detailTitle"
      class="anim1"
      style="background: url(https://www.ajanstr.com.tr/code/images/about2.jpg) no-repeat right center #F8F9FA;"
    >
      <span class="fill"></span>
      <div class="contentC">
        <h2>BUILD FUTURE, BUILD WEST</h2>
        <h1>we are
          <span class="ajanstr">Ajans
            <i>TR</i>
          </span>, a design and branding agency with partners worldwide.
        </h1>
      </div>
    </div>

    <!-- content start-->
    <div class="contentC detail anim2" id="about">
      <span class="fill"></span>
      <div class="row">
        <div class="col-md-12">As
          <span class="ajanstr">Ajans
            <i>TR</i>
          </span>, we perform work that shapes the world with our experienced and creative ideas. We offer result-oriented, practical and quick strategies for your brand that meet the requirements of the digital era.
          <br>
          <br>
          <br>We work for producing the best possible digital experiences for your brand and for making you feel happy.
          <p>If you need a solution partner for web software, design, e-commerce, digital advertising, hosting service and mobile applications, we are willing to give you support for all these needs of your brand.</p>
          <p>As
            <span class="ajanstr">Ajans
              <i>TR</i>
            </span> team, we always give importance to your ideas and blend them with the trends of the digital era in order to meet your expectations in a way that reflects the spirit of your brand.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
  mounted() {
    setTimeout(function() {
      jQuery(".anim1 .fill").addClass("active");
    }, 250);
  }
};
</script>
