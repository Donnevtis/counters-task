import { mount, enableAutoUnmount } from '@vue/test-utils';
import TimeCounter from '@/components/TimeCounter.vue';

jest.useFakeTimers();
enableAutoUnmount(afterEach);

describe('TimeCounter.vue', () => {
  it('renders init count', async () => {
    const wrapper = mount(TimeCounter);
    const count = wrapper.find('p');

    expect(count.text()).toContain('0');
  });

  it('start, pause and stop count', async () => {
    const wrapper = mount(TimeCounter);
    const count = wrapper.find('p');
    const play = wrapper.find('[data-test=play-button]');
    const stop = wrapper.find('[data-test=stop-button]');

    expect(wrapper.find('.counter').classes()).toContain('counter__inactive');

    await play.trigger('click');

    expect(wrapper.find('.counter').classes('counter__inactive')).toBe(false);

    jest.advanceTimersByTime(2000);

    await play.trigger('click');

    expect(count.text()).toContain('2');

    await stop.trigger('click');

    expect(count.text()).toContain('0');
  });
});
