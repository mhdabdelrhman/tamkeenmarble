<template>
  <div class="header-top d-none d-lg-block">
    <div class="container-fluid">
      <div class="col-xl-12">
        <div class="row d-flex justify-content-between align-items-center">
          <div class="header-info-left">
            <ul>
              <li>{{ getConfig("mobile") }}</li>
              <li>{{ getConfig("email") }}</li>
              <!--<li>Mon - Sat 8:00 - 17:30, Sunday - CLOSED</li>-->
            </ul>
          </div>
          <div class="header-info-right">
            <ul class="header-social">
              <!--<li><a href="#"><i class="fab fa-twitter"></i></a></li>-->
              <!--<li><a href="#"><i class="fa fa-facebook-f"></i></a></li>-->
              <!--<li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>-->
              <!--<li> <a href="#"><i class="fab fa-google-plus-g"></i></a></li>-->
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import configService from "@/core/services/config.service";
export default {
  methods: {
    ...configService,
  },
};
</script>