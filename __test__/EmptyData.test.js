import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-14';
import EmptyData from '../src/';

Enzyme.configure({ adapter: new Adapter() });

test('EmptyData should render correctly', () => {
  mount(<EmptyData />);
});

test('EmptyData props', () => {
  const emptydata = shallow(<EmptyData className="test" />);
  expect(emptydata.find('.ewt-empty-data-content')).toBeTruthy();
});

