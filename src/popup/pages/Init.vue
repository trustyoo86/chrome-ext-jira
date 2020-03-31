<template>
  <div :style="styles.container">
    <div :style="styles.titleArea">
      <h3>Please enter the JIRA URL</h3>
    </div>
    <a-form
      :form="form"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
      @submit="handleSubmit"
    >
      <a-form-item label="JIRA URL">
        <a-input 
          v-decorator="decorator"
          :value="url"
          placeholder="ex) https://jira.test.com"
        />
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
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class Init extends Vue {
  url = '';
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
  decorator = [
    'url',
    {
      rules: [
        { required: true, message: 'URL is required' },
      ],
    },
  ];
  form = this.$form.createForm(this, {});

  handleSubmit(e: Event) {
    e.preventDefault();
    this.form.validateFields((err: boolean, values: any) => {
      if (!err) {
        console.log('Received values of form:', values);
      }
    });
  }
}

</script>
