<template>
  <div id="app">
    <!-- {{ test }} -->
    <jr-layout header-title="테스트">
      <router-view />
    </jr-layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Layout from '@/popup/organisms/Layout.vue';

@Component({
  components: {
    'jr-layout': Layout,
  },
})
export default class App extends Vue {}
</script>
