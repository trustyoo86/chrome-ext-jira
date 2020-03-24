import { expect } from 'chai';
import { shallowMount, mount } from '@vue/test-utils';
import Input from '@/popup/atoms/Input.vue';

describe('[Atoms] Input test', () => {
  test('Input render test', () => {
    const wrapper = shallowMount(Input);
    expect(wrapper.exists()).equal(true);
  });

  test('Input element test', () => {
    const wrapper = mount(Input);
    expect(wrapper.find('input').exists()).equal(true);
  });

  test('Input props value test', () => {
    const value = 'test';
    const wrapper = mount(Input, {
      propsData: {
        value,
      },
    });
    expect(wrapper.find('input').element.value).equal('test');
  });
});
