<template>
  <div>Init {{ test1 }}</div>
</template>

<script lang="ts">
export default {
  name: 'Init',
  props: {
    test1: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      test: 'test',
    };
  },
};
</script>
