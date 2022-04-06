import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import HomeView from '../HomeView.vue';

describe('HomeView', () => {
  it('renders properly', () => {
    const wrapper = mount(HomeView);
    expect(wrapper.text()).toContain('Register for our new app');
  });

  it('clicks on the register button', async () => {
    const wrapper = mount(HomeView);
    const button = wrapper.find('#registerButton');
    await button.trigger('click');

    expect(wrapper.emitted('click')).toBeTruthy();
    expect(wrapper.text()).toContain('Drop file here to upload');
  });

  it('validates email field', async () => {
    const wrapper = mount(HomeView);
    const button = wrapper.find('#registerButton');
    await button.trigger('click');

    expect(wrapper.text()).toContain('Please enter a valid email');
    const emailField = wrapper.find('#email');
    await emailField.setValue('test@tes.com');
    expect(wrapper.text()).not.toContain('Please enter a valid email');
  });

  it('first name should populate within the submit button on input', async () => {
    const msg = 'Save your Profile';
    const name = 'Kite';
    const wrapper = mount(HomeView);
    const button = wrapper.find('#registerButton');
    await button.trigger('click');

    expect(wrapper.text()).toContain(msg);
    const firstNameField = wrapper.find('#firstName');
    await firstNameField.setValue(name);

    expect(wrapper.text()).toContain(`Hey ${name}, ${msg}`);
  });
});
