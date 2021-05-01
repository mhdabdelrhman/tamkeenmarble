<template>
  <!-- Header Start -->
  <div class="header-area header-transparent">
    <div class="main-header">
      <Top />
      <Menu />
    </div>
  </div>
  <!-- Header End -->
</template>
<script>
import Top from "./Top";
import Menu from "./Menu";
export default {
  components: {
    Top,
    Menu,
  },
};
</script>