<template>
  <div :style="styles.container">
    <div :style="styles.titleArea">
      <h3>Please enter the JIRA URL</h3>
    </div>
    <a-form
      :form="form"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
    >
      <a-form-item label="JIRA URL">
        <a-input v-model="test" />
      </a-form-item>
      <a-form-item
        :wrapper-col="{ span: 12, offset: 5 }"
      >
        <a-button
          type="primary" 
          html-type="submit"
        >
          Submit
        </a-button>
      </a-form-item>
    </a-form>
  </div>
  <!-- <a-layout class="layout">
    <a-layout-header>
      <div class="logo" />
    </a-layout-header>
    <a-layout-content style="padding: 10px 20px">
      
    </a-layout-content>
  </a-layout> -->
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class Init extends Vue {
  test = 'test';
  styles = {
    container: {
      background: '#fff',
      padding: '10px',
    },
    titleArea: {
      width: '100%',
      display: 'flex',
      'justify-content': 'center',
    },
  };
  form = this.$form.createForm(this, {});
}

</script>
