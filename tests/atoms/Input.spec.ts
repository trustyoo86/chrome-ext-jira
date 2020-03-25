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
    const $input = wrapper.find('input');
    const el = $input.element as HTMLInputElement;
    expect(el.value).equal('test');
    $input.setValue('test1');
    const changeEl = $input.element as HTMLInputElement;
    expect(changeEl.value).equal('test1');
  });
});
