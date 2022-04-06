import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ButtonMain from '../ButtonMain.vue';

describe('ButtonMain', () => {
  it('renders properly', () => {
    const wrapper = mount(ButtonMain, {
      props: { title: 'Hello', iconName: '', id: 'TestingID' },
    });
    expect(wrapper.text()).toContain('Hello');
  });
  it('emits click event on button clicked', async () => {
    const wrapper = mount(ButtonMain, {
      props: { title: 'Hello', iconName: '', id: 'TestingID' },
    });
    const button = wrapper.find('.button');
    await button.trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
  });
});
