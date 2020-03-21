
import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Button from '@/popup/atoms/Button.vue';

describe('[Atoms] Button test', () => {
  test('Button props test', () => {
    const buttonName = 'buttonName';
    const wrapper = shallowMount(Button, {
      propsData: { buttonName },
    });
    expect(wrapper.text()).to.include(buttonName);
  });
});
