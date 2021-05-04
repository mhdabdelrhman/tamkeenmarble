<template>
  <!-- Preloader Start -->
  <div id="preloader-active">
    <div class="preloader d-flex align-items-center justify-content-center">
      <div class="preloader-inner position-relative">
        <div class="preloader-circle"></div>
        <div class="preloader-img pere-text">
          <img src="media/img/logo/loder-logo.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  <!-- Preloader Start -->
  <router-view />
</template>
<script>
import $ from "jquery";

import "slick-carousel/slick/slick.css";
import "animate.css";

export default {
  data() {
    return {
      showLoader: true,
    };
  },
  mounted() {
    $("#preloader-active").delay(450).fadeOut("slow");
    $("body").delay(450).css({
      overflow: "visible",
    });
  },
};
</script>
<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap.scss";
@import "node_modules/slicknav/scss/slicknav.scss";
@import "assets/scss/style.scss";
</style>