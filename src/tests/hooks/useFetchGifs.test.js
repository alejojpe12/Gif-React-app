import {useFetchGifs} from '../../hooks/useFetchGifs'
describe('Prueba para el hook useFetchGifs', () => {
    
    test('debe de retornar el estado inicial', () => {

        const { data, loading } = useFetchGifs( 'One Puch' );

        console.log(data)
    });
    
})
