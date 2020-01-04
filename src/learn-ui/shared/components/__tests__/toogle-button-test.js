import React from 'react';
import { shallow, mount, render } from '../../../../enzyme'
import ToggleButton from '../toogle-button';

describe('ToggleButton', () => {

    const mockFn = jest.fn();
    let component;

    test('snapshot renders', () => {
        component = mount(<ToggleButton lable="test" clickHandler={mockFn} />);
        expect((component).prop('lable')).toEqual('test');
    });

    test('snapshot has default class', () => {

        expect(component.find('input').hasClass('btn-default')).toEqual(true);
    });

    test('click sim', () => {

        component.find('input').simulate('click');

        expect(component.find('input').hasClass('btn-selected')).toEqual(true);
    });
});