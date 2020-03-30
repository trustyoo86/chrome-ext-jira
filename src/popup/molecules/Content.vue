<template>
  <a-layout-content :style="styles.container">
    <slot />
  </a-layout-content>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class Content extends Vue {
  styles = {
    container: {
      padding: '10px 20px',
    },
  };
}
</script>
