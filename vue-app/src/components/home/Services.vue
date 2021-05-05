<template>
  <!-- Services Area Start -->
  <div class="container">
    <!-- section tittle -->
    <div class="row">
      <div class="col-lg-12">
        <div class="section-tittle mb-55">
          <div class="front-text">
            <h2 class="">Our Services</h2>
          </div>
          <span class="back-text">Services</span>
        </div>
      </div>
    </div>
    <div class="row">
      <div
        v-for="{ id, title, image } in services"
        :key="id"
        class="col-xl-4 col-lg-4 col-md-6"
      >
        <div class="single-service-cap mb-20">
          <div class="service-img">
            <img :src="image" alt="" />
          </div>
          <div class="service-cap">
            <h4>
              <a href="#">{{ title }}</a>
            </h4>
            <a href="#" class="more-btn">Read More <i class="ti-plus"></i></a>
          </div>
          <div class="service-icon">
            <img src="media/img/icon/services_icon1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Services Area End -->
</template>
<script>
export default {
  data() {
    return {
      services: [
        {
          id: 1,
          code: "free-consulting",
          title: "Free Consultation",
          description: "",
          image: "media/img/service/TAM_services01.PNG",
        },
        {
          id: 2,
          code: "supplying-and-importing",
          title: "Supplying & Importing",
          description: "",
          image: "media/img/service/TAM_services02.PNG",
        },
        {
          id: 3,
          code: "fixing-and-finishing",
          title: "Fixing & Finishing",
          description: "",
          image: "media/img/service/TAM_services03.PNG",
        },
      ],
    };
  },
};
</script>