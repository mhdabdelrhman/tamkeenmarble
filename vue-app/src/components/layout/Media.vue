<template>
  <a
    :href="href"
    v-show="visible"
    class="wapp-float"
    target="_blank"
    data-animation="fadeInDown"
    data-delay="0.1s"
  >
    <i class="fa fa-whatsapp my-float"></i>
  </a>
</template>
<script>
import $ from "jquery";
import layoutServices from "@/core/services/layout.service";

export default {
  data() {
    return {
      message: true,
      phone: "00905312029584",
      text: "Hello!",
      visible: false,
    };
  },
  computed: {
    href() {
      let href = "https://api.whatsapp.com/send?phone=";
      href += this.phone;
      if (this.message && this.text) {
        href += "&text=";
        href += encodeURI(this.text);
      }
      return href;
    },
  },
  mounted() {
    var slf = this;
    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();
      if (scroll < 245) {
        slf.visible = false;
      } else {
        if (slf.visible) return;
        slf.visible = true;
        var $animatingElements = $(".wapp-float[data-animation]");
        slf.doAnimations($animatingElements);
      }
    });
  },
  methods: {
    ...layoutServices,
  },
};
</script>
<style>
.wapp-float {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 35px;
  left: 27px;
  background-color: #25d366;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  box-shadow: 2px 2px 3px #999;
  z-index: 100;
}

.my-float {
  margin-top: 16px;
}
</style>