import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ()=> 
{
    const [categories, setCategories] = useState( ['Sailor Moon']);

    // const handleAdd = () => {
    //     setCategories([...categories, 'Mazinger Z']);
    //     //setCategories( cats => [...cats, 'Mazinger Z']);
    // }

    return (
    <> 
    <h2>GifExpertApp</h2>
    <AddCategory setCategories={setCategories}></AddCategory>
    <hr/>
    <ol>
        {
            categories.map( category => (
                <GifGrid
                    key= {category}
                    category={category} 
                />
            ))
        } 
    </ol>
    </>
        )
};