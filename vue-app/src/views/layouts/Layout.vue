<template>
  <header>
    <HeaderComponent />
  </header>
  <main style="min-height: 500px">
    <transition name="fade">
      <router-view />
    </transition>
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