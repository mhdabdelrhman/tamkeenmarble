<template>
  <div>
    <section id="slider" class="slider-area">
      <Slider />
    </section>
    <section id="services" class="services-area1 pt-150">
      <Services />
    </section>
    <section id="about" class="support-company-area pt-150">
      <About />
    </section>
    <section
      id="contact"
      class="contact-with-area pt-150"
      data-background="media/img/gallery/section-bg2.jpg"
    >
      <Contact />
    </section>
    <section id="counters" class="count-area">
      <Counters />
    </section>
  </div>
</template>

<script>
import About from "@/components/home/About";
import Slider from "@/components/home/Slider";
import Contact from "@/components/home/Contact";
import Counters from "@/components/home/Counters";
import Services from "@/components/home/Services";

import layoutServices from "@/core/services/layout.service";

export default {
  name: "Home",
  components: {
    About,
    Slider,
    Contact,
    Counters,
    Services,
  },
  mounted() {
    this.setBackgroundImages();
  },
  methods: {
    ...layoutServices,
  },
};
</script>
