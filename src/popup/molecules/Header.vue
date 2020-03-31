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
  title!: string;

  constructor() {
    super();
  }
}

/**
 * 현재 라우터 알아내기
 * this.$route
 *
 * 라우터 전체 정보 알아내기
 * this.$router.options
 */
</script>
