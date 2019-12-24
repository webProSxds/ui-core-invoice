import React from 'react';
import { shallow, mount, render }from '../../../../enzyme'
import CheckBoxLabled from '../check-box-labled';

describe('CheckBoxLabled', () => {
	const mockFn = jest.fn();

  test('snapshot renders', () => {
    const component = mount(<CheckBoxLabled lable="test" changeHandler={mockFn} />);
     expect((component).prop('lable')).toEqual('test');
  });
});