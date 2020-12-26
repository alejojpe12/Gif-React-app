import { shallow } from 'enzyme'
import '@testing-library/jest-dom'
import { AddCategory } from '../../components/AddCategory'
import React from 'react';

describe('prueba', () => {
    
    
    const setCategories = jest.fn();

    let wrapper = shallow( <AddCategory setCategories={setCategories}/>)

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={setCategories}/>)

    })


    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de cambiar el texbox', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo'
        input.simulate('change', { target: {
            value: value
        } });

        expect(wrapper.find('p').text().trim() ).toBe(value)
    })
    
    
    test('No debe de postear la informacion onSubmit', () => {

        wrapper.find('form').simulate('submit', { preventDefault: () => {} });

        expect( setCategories ).not.toHaveBeenCalled()
    })

    
    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        
        const value = 'Hello World'  
        // Simular el input Change
        wrapper.find('input').simulate('change', { target: { value } })
        // Simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} })
        // setCateories debe haberse llamado una vez
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );

        // saber si se llama dos veces {

        // expect( setCategories ).toHaveBeenCalledTimes(2);

        // }


        // el valor del input debe ser ''
        expect(wrapper.find('input').prop('value')).toBe('')

    })
    


})

