import React from 'react';
import { shallow } from 'enzyme';
import MenuPage from '../../components/MenuPage';

test('should render MenuPage correctly', () => {
    const wrapper = shallow(<MenuPage />);
    expect(wrapper).toMatchSnapshot();
})