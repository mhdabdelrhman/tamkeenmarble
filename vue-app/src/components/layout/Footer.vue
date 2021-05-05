<template>
  <!-- Footer Start-->
  <div class="footer-main">
    <div class="footer-area footer-padding pb-2">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-md-4 col-sm-8">
            <div class="single-footer-caption mb-30">
              <!-- logo -->
              <div class="footer-logo">
                <a href="index.html"
                  ><img src="media/img/logo/logo-footer.png" alt=""
                /></a>
              </div>
              <div class="footer-tittle">
                <div class="footer-pera">
                  <p class="info1">Nature in your hands</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-5">
            <div class="single-footer-caption mb-50">
              <div class="footer-tittle">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Projects</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-7">
            <div class="single-footer-caption mb-50">
              <div class="footer-tittle">
                <h4>Contact</h4>
                <div class="footer-pera">
                  <p class="info1">{{ getConfig("address") }}</p>
                </div>
                <ul>
                  <li>
                    <a href="#">Phone: {{ getConfig("phone") }}</a>
                  </li>
                  <li>
                    <a href="#">Cell: {{ getConfig("mobile") }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- Copy-Right -->
        <div class="row text-center">
          <div class="col-xl-12">
            <div class="footer-copy-right">
              <p>
                <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                Copyright &copy;{{ year }}
                All rights reserved | This site is made with
                <i class="fa fa-heart" aria-hidden="true"></i> by
                <a href="https://github.com/mhdabdelrhman" target="_blank"
                  >mhdabdelrhman</a
                >
                <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Media />
  </div>
  <!-- Footer End-->
</template>
<script>
import $ from "jquery";
import Media from "./Media";
import "jquery.scrollup/src/jquery.scrollUp";
import configService from "@/core/services/config.service";
export default {
  components: {
    Media,
  },
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
  mounted() {
    this.setScrollUp();
  },
  methods: {
    ...configService,
    setScrollUp() {
      $.scrollUp({
        scrollName: "scrollUp", // Element ID
        topDistance: "300", // Distance from top before showing element (px)
        topSpeed: 500, // Speed back to top (ms)
        animation: "fade", // Fade, slide, none
        animationInSpeed: 300, // Animation in speed (ms)
        animationOutSpeed: 300, // Animation out speed (ms)
        scrollText: '<i class="ti-arrow-up"></i>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
      });
    },
  },
};
</script>