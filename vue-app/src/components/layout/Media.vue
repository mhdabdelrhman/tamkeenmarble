<template>
  <div
    class="media-float d-none flex-column justefy-content-end align-items-center"
  >
    <a
      class="mt-2 whatsapp"
      :href="whatsappHref"
      target="_blank"
      data-animation="fadeInDown"
      data-delay="0.2s"
    >
      <i class="fa fa-whatsapp"></i>
    </a>
    <a
      class="mt-2 facebook"
      :href="facebookHref"
      target="_blank"
      data-animation="fadeInDown"
      data-delay="0.1s"
    >
      <i class="fa fa-facebook-f"></i>
    </a>
  </div>
</template>
<script>
import $ from "jquery";
import layoutServices from "@/core/services/layout.service";
import configService from "@/core/services/config.service";

export default {
  data() {
    return {
      message: true,
      text: "Hello!",
      visible: false,
    };
  },
  computed: {
    whatsappHref() {
      let link = configService.getConfig("whatsapp-link");
      if (this.message && this.text) {
        link += "&text=";
        link += encodeURI(this.text);
      }
      return link;
    },

    facebookHref() {
      let link = configService.getConfig("facebook-link");
      return link;
    },
  },
  mounted() {
    var slf = this;
    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();
      if (scroll < 245) {
        slf.visible = false;
        $(".media-float").removeClass("d-flex");
        $(".media-float").addClass("d-none");
      } else {
        if (slf.visible) return;
        slf.visible = true;
        $(".media-float").removeClass("d-none");
        $(".media-float").addClass("d-flex");
        var $animatingElements = $(".media-float").find("[data-animation]");
        slf.doAnimations($animatingElements);
      }
    });
  },
  methods: {
    ...layoutServices,
  },
};
</script>
<style lang="scss">
.media-float {
  position: fixed;
  bottom: 35px;
  left: 27px;
  font-size: 30px;
  z-index: 100;
  a {
    width: 60px;
    height: 60px;
    color: #fff;
    border-radius: 50px;
    text-align: center;
    i {
      margin-top: 16px;
    }
  }
  .whatsapp {
    background-color: #25d366;
  }
  .facebook {
    background-color: #0c4191;
  }
}
</style>