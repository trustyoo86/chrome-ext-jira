<template>
  <div id="app">
    <!-- {{ test }} -->
    <router-view />
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      test: 'test!',
    };
  },
};
</script>
