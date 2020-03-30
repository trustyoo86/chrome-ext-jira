<template>
  <a-layout-header>
    <div class="logo" />
  </a-layout-header>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component({})
export default class Header extends Vue {
  @Prop()
  title = 'Title';
}
</script>
