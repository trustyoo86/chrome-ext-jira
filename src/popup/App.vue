<template>
  <div id="app">
    <!-- {{ test }} -->
    <j-layout>
      <router-view />
    </j-layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Layout from '@/popup/organisms/Layout.vue';

@Component({
  components: {
    'j-layout': Layout,
  },
})
export default class App extends Vue {}
</script>
