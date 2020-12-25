
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';
import React from 'react';
describe('<GifGridItem />', () =>{


    test('Debe mostrar el componente correctamente', () => {
        const wrapper = shallow(<GifGridItem />)
        expect( wrapper ).toMatchSnapshot()
    })
    
})