<template>
  <a-layout class="layout">
    <jr-header :title="headerTitle" />
    <jr-content>
      <slot />
    </jr-content>
  </a-layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

import Header from '@/popup/molecules/Header.vue';
import Content from '@/popup/molecules/Content.vue';

@Component({
  components: {
    'jr-header': Header,
    'jr-content': Content,
  },
})
export default class Layout extends Vue {
  @Prop()
  headerTitle!: string;
}
</script>
