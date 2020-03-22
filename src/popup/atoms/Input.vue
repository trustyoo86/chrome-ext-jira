<template>
  <a-input />
</template>

<script lang="ts">
import Vue from 'vue';
import { Input } from 'ant-design-vue';

export default Vue.extend({
  name: 'Input',
  components: {
    [Input.name]: Input,
  },
});
</script>
