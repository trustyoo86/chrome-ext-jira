import { expect } from 'chai';
import { shallowMount, mount } from '@vue/test-utils';
import Input from '@/popup/atoms/Input.vue';

describe('[Atoms] Input test', () => {
  test('Input render test', () => {
    const wrapper = shallowMount(Input);
    expect(wrapper.exists()).equal(true);
  });
});
