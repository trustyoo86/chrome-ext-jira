<template>
  <a-input v-model="val" />
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { Input } from 'ant-design-vue';

@Component({
  components: {
    [Input.name]: Input,
  },
})
export default class FormInput extends Vue {
  @Prop({ default: '' })
  public value!: string;

  val: string = this.value;
}
// export default Vue.extend({
//   name: 'Input',
//   components: {
//     [Input.name]: Input,
//   },
//   props: {
//     value: {
//       type: String,
//       default: '',
//     },
//   },
//   data() {
//     return {
//       val: this.value,
//     };
//   },
// });
</script>
