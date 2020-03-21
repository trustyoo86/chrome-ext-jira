<template>
  <button>
    {{ buttonName }}
  </button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Button',
  props: {
    buttonName: {
      type: String,
      default: '',
    },
  },
});
</script>
