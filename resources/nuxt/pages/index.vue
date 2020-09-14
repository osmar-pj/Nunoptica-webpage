<template>
  <div class="bg">
      <n-header></n-header>
      <n-banner></n-banner>
      <n-section1></n-section1>
      <n-section2></n-section2>
      <n-section3></n-section3>
      <n-footer></n-footer>
  </div>
</template>
 
<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()

import NHeader from './components/Header.vue'
import NBanner from './components/Banner.vue'
import NSection1 from './components/Section1.vue'
import NSection2 from './components/Section2.vue'
import NSection3 from './components/Section3.vue'
import NFooter from './components/Footer.vue'

export default {
  data: () => {
    return {

    }
  },
  components: {
    NHeader,
    NBanner,
    NSection1,
    NSection2,
    NSection3,
    NFooter
  }
}
</script> 

<style lang="scss">
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #ec9b3b;
$primary-invert: findColorInvert($primary);
$oscuro: #7e8287;
$oscuro-invert: findColorInvert($oscuro);
$claro: #eeeeee;
$claro-invert: findColorInvert($claro);
$azul: #111d5e;
$azul-invert: findColorInvert($azul);
$rojo: #c70039;
$rojo-invert: findColorInvert($rojo);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "oscuro": ($oscuro, $oscuro-invert),
    "claro": ($claro, $claro-invert),
    "azul": ($azul, $azul-invert),
    "rojo": ($rojo, $rojo-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "twitter": ($twitter, $twitter-invert)
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;
$footer-background-color: $azul;
$footer-color: $claro;
$hero-body-padding: 10rem 1.5rem;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

.bg {
  background-color: #eeeeee;
}
</style>