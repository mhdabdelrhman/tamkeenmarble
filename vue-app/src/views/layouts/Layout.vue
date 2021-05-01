<template>
  <header>
    <HeaderComponent />
  </header>
  <main style="min-height: 100px">
    <router-view />
  </main>
  <footer>
    <FooterComponent />
  </footer>
</template>
<script>
import HeaderComponent from "@/components/layout/Header";
import FooterComponent from "@/components/layout/Footer";
export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>