import { getGif } from '../../helpers/getGif'


describe(' Fetch', () => {

    test('Debe traer 10 elementos', async() => {

        const gifs = await getGif('One Puch')

        expect(gifs.length).toBe(10)

    })
    

    test('Debe traer ningun elementos', async() => {

        const gifs = await getGif('')

        expect(gifs.length).toBe(0)

    })
})
