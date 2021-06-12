import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    
    const [categories, setCategories] = useState([]);
    const [limit, setLimit] = useState(10);

    return (
        <>
            <h2>GifExpertApp</h2>  
            <AddCategory setCategories={ setCategories } limit={ parseInt(limit) } setLimit={ setLimit } />

            <ul>
                {
                    categories.map( category => <GifGrid key={ category } category={ category } limit={ limit } /> )
                }
            </ul>
        </>
    );
};