import React from 'react';
import { shallow } from 'enzyme';
import ContactPage from '../../components/ContactPage';

test('Should render ContactPage correctly', () => {
    const wrapper = shallow(<ContactPage />);
    expect(wrapper).toMatchSnapshot();
})