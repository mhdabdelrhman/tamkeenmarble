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
import "@/assets/css/themify-icons.css";
import "slicknav/dist/slicknav.css";
import "animate.css";
import "slick-carousel/slick/slick.css";

export default {
  data() {
    return {
      showLoader: true,
    };
  },
  mounted() {
    this.hideLoader();
  },
  methods: {
    hideLoader() {
      const time = 1000;
      $("#preloader-active").delay(time).fadeOut("slow");
      $("body").delay(time).css({
        overflow: "visible",
      });
    },
  },
};
</script>
<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap.scss";
@import "assets/scss/style.scss";
</style>