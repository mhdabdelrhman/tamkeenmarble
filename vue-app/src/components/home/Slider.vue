<template>
  <!-- slider Area Start-->
  <div class="slider-area">
    <div class="slider-active">
      <div
        v-for="slide in slides"
        :key="slide.id"
        class="single-slider hero-overly slider-height d-flex align-items-center"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-11">
              <div class="hero__caption">
                <div class="hero-text1">
                  <span data-animation="fadeInUp" data-delay=".3s"
                    >{{slide.header.text}}</span
                  >
                </div>
                <h1 data-animation="fadeInUp" data-delay=".5s">{{slide.title}}</h1>
                <div
                  class="stock-text"
                  data-animation="fadeInUp"
                  data-delay=".8s"
                >
                  <h2>{{slide.subtitle}}</h2>
                  <h2>{{slide.subtitle}}</h2>
                </div>
                <div
                  class="hero-text2 mt-110"
                  data-animation="fadeInUp"
                  data-delay=".9s"
                >
                  <span><a href="#">{{slide.footer.text}}</a></span>
                </div>
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
        },
        {
          id: 2,
          header: { text: "NATURE IN YOU HANDS" },
          title: "TAMKEEN",
          subtitle: "STONE",
          footer: { text: "Our Services", to: { name: "services" } },
        },
      ],
    };
  },
  mounted() {
    var $firstAnimatingElements = $(".single-slider:first-child").find(
      "[data-animation]"
    );
    this.doAnimations($firstAnimatingElements);
    this.mainSlider();
  },
  methods: {
    doAnimations(elements) {
      var animationEndEvents =
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
      elements.each(function () {
        var $this = $(this);
        var $animationDelay = $this.data("delay");
        var $animationType = "animated " + $this.data("animation");
        $this.css({
          "animation-delay": $animationDelay,
          "-webkit-animation-delay": $animationDelay,
        });
        $this.addClass($animationType).one(animationEndEvents, function () {
          $this.removeClass($animationType);
        });
      });
    },

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
<style>
.slick-slide[data-slick-index="0"] {
  background: url("/media/img/hero/h1_marble.jpg") no-repeat center / cover;
}
.slick-slide[data-slick-index="1"] {
  background: url("/media/img/hero/h2_stone.jpg") no-repeat center / cover;
}
</style>