<template>
  <div class="header-bottom header-sticky">
    <div class="container-fluid">
      <div class="row align-items-center">
        <!-- Logo -->
        <div class="col-xl-2 col-lg-2 col-md-1">
          <div class="logo">
            <!-- logo-1 -->
            <a href="index.html" class="big-logo"
              ><img src="assets/img/logo/logo-picc.png" alt=""
            /></a>
            <!-- logo-2 -->
            <a href="index.html" class="small-logo"
              ><img src="assets/img/logo/logo-picc.png" alt=""
            /></a>
          </div>
        </div>
        <div class="col-xl-8 col-lg-8 col-md-8">
          <!-- Main-menu -->
          <div class="main-menu f-right d-none d-lg-block">
            <nav>
              <ul id="navigation">
                <MenuItems />
              </ul>
            </nav>
          </div>
        </div>
        <!-- Mobile Menu -->
        <div class="col-12">
          <div class="mobile_menu d-block d-lg-none"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MenuItems from "./MenuItems";
export default {
  components: {
    MenuItems,
  },
};
</script>