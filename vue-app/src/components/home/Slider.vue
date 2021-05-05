<template>
  <!-- slider Area Start-->
  <div class="slider-active">
    <div
      v-for="{ id, header, title, subtitle, footer, image } in slides"
      :key="id"
      class="single-slider hero-overly slider-height d-flex align-items-center"
      :data-background="image"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-11">
            <div class="hero__caption">
              <div class="hero-text1">
                <span data-animation="fadeInUp" data-delay=".3s">
                  {{ header.text }}
                </span>
              </div>
              <h1 data-animation="fadeInUp" data-delay=".5s">{{ title }}</h1>
              <div
                class="stock-text"
                data-animation="fadeInUp"
                data-delay=".8s"
              >
                <h2>{{ subtitle }}</h2>
                <h2>{{ subtitle }}</h2>
              </div>
              <div
                class="hero-text2 mt-110"
                data-animation="fadeInUp"
                data-delay=".9s"
              >
                <span>
                  <a href="#">{{ footer.text }}</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- slider Area End-->
</template>
<script>
import $ from "jquery";
import "slick-carousel/slick/slick";

import layoutServices from "@/core/services/layout.service";

export default {
  data() {
    return {
      slides: [
        {
          id: 1,
          header: { text: "NATURE IN YOU HANDS" },
          title: "TAMKEEN",
          subtitle: "MARBLE",
          footer: { text: "Our Services", to: { name: "services" } },
          image: "media/img/hero/h1_marble.jpg",
        },
        {
          id: 2,
          header: { text: "NATURE IN YOU HANDS" },
          title: "TAMKEEN",
          subtitle: "STONE",
          footer: { text: "Our Services", to: { name: "services" } },
          image: "media/img/hero/h2_stone.jpg",
        },
      ],
    };
  },
  mounted() {
    var $firstAnimatingElements = $(".single-slider:first-child").find(
      "[data-animation]"
    );
    this.doAnimations($firstAnimatingElements);
    this.setBackgroundImages();
    this.mainSlider();

    $(window).on(
      "resize",
      function () {
        this.setBackgroundImages();
      }.bind(this)
    );
  },
  methods: {
    ...layoutServices,
    mainSlider() {
      var slf = this;
      var BasicSlider = $(".slider-active");
      BasicSlider.on("beforeChange", (e, slick, currentSlide, nextSlide) => {
        var $animatingElements = $(
          '.slick-slide[data-slick-index="' + nextSlide + '"]'
        ).find("[data-animation]");
        slf.doAnimations($animatingElements);
      });
      BasicSlider.slick({
        autoplay: true,
        autoplaySpeed: 6000,
        dots: false,
        fade: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
            },
          },
        ],
      });
    },
  },
};
</script>