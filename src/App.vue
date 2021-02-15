<template>
  <div id="app" class="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Config from './config.yml';

export default Vue.extend({
  mounted() {
    document.body.style.backgroundImage = 'url(' + Config.backgroundImage + ')';
  }
})
</script>