import React, {useState} from 'react';
import {AddCategory} from './components/AddCategory'
import propTypes from 'prop-types'
import {GifGrid} from './components/GifGrid'


const GifExpertApp = () => {

    const [categories, setCategories] = useState( ['One Punch'] )


    return(
    <>
        <h2>GifExpert</h2>
        <AddCategory setCategories={ setCategories }/>
        <hr />

        <ol>
            {
                categories.map( category =>( 
                    <GifGrid
                        key= { category }
                        category={ category }
                    />
                ))
                
            }
        </ol>
    </>
    )
}
export default GifExpertApp

AddCategory.propTypes = {
    setCategories: propTypes.func.isRequired
}