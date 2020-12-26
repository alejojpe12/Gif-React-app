
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';
import React from 'react';
describe('<GifGridItem />', () =>{

    const title = 'Un titulo'
    const url = 'https://localhost/algo.jpg'
    const wrapper = shallow(<GifGridItem title= {title} url= {url} />)


    test('Debe mostrar el componente correctamente', () => {
    
        expect( wrapper ).toMatchSnapshot()
    
    })

    test('Debe de tener un p con title', () => {
        
        const p = wrapper.find('p');
        expect(p.text().trim() ).toBe( title )
    })

    test('Debe tener la imagen igual al url y al alt de los props', () => {
        const img = wrapper.find('img');

        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );

    });

    test('Debe tener animate__fadeIn', ()=> {
        const div = wrapper.find('div');
        const className = div.prop('className')
    
        expect(className.includes('animate__fadeIn')).toBe(true)

    })
    
    
    
})
