<template>
  <div class="container">
    <div
      class="count-wrapper count-bg"
      data-background="media/img/gallery/section-bg3.jpg"
      ref="counters"
    >
      <div class="row justify-content-center">
        <div
          v-for="{ id, title, subtitle, count } in counts"
          :key="id"
          class="col-lg-4 col-md-6"
        >
          <div class="count-clients">
            <div class="single-counter">
              <div class="count-number">
                <span class="counter">{{ count }}</span>
              </div>
              <div class="count-text">
                <p>{{ title }}</p>
                <h5>{{ subtitle }}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import { CountUp } from "countup.js";
import layoutServices from "@/core/services/layout.service";
export default {
  data() {
    return {
      counted: false,
      counts: [
        {
          id: 1,
          title: "Projects",
          subtitle: "completed",
          count: 159,
        },
        {
          id: 2,
          title: "staff",
          subtitle: "workers",
          count: 89,
        },
        {
          id: 3,
          title: "Contractor",
          subtitle: "partners",
          count: 119,
        },
      ],
    };
  },
  mounted() {
    this.setBackgroundImages();
    this.countUpCounters();
  },
  methods: {
    ...layoutServices,
    countUpCounters() {
      var slf = this;
      $(window).on("scroll", function () {
        if (!slf.isInViewport(slf.$refs.counters)) return;
        if (slf.counted) return;
        slf.counted = true;
        $(".counter").each(function () {
          var $this = $(this);
          var value = +$this.text();
          const countUp = new CountUp($this.get(0), value, { duration: 5 });

          countUp.start();
        });
      });
    },

    isInViewport(elem) {
      var bounding = elem.getBoundingClientRect();
      return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    },
  },
};
</script>