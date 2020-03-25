<template>
  <a-input v-model="val" />
</template>

<script lang="ts">
import Vue from 'vue';
import { Input } from 'ant-design-vue';

export default Vue.extend({
  name: 'Input',
  components: {
    [Input.name]: Input,
  },
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      val: this.value,
    };
  },
});
</script>
