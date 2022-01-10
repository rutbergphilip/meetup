import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { List } from '../components/List/List';
import { seeder } from '../database/seeder.database';
import { render, screen } from '@testing-library/react';
import { isDateSortedByAscending } from '../utils/misc.utils';

Enzyme.configure({ adapter: new Adapter() });
beforeAll(() => {
  seeder();
});

describe('Test for <List/>', () => {
  it('should check if <List/> is rendered', () => {
    const wrapper = shallow(<List />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should have a length of 10 seeded list items', async () => {
    const wrapper = shallow(<List />);
    expect(wrapper.find('ListItem').length).toBe(10);
  });

  it('should have buttons for signups', async () => {
    render(<List />);
    const buttons = screen.getAllByRole('button', {
      name: /signup-button/gi,
    });
    expect(buttons).toBeTruthy();
  });

  it('should have a title', async () => {
    render(<List />);
    const titles = screen.getAllByRole('heading', { name: /\s\S/gi });
    expect(titles).toBeTruthy();
  });

  it('should be in chronological order', async () => {
    render(<List />);
    const dates = screen.getAllByText(/\d\d\d\d-\d\d-\d\d/i);
    const dateValues = dates.map(
      (date) => new Date(date.textContent as string)
    );

    expect(isDateSortedByAscending(dateValues)).toBe(true);
  });
});
