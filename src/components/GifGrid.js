import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ( { category, limit } ) => {
    const { data:images, loading } = useFetchGifs( category, limit );

    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> { category } </h3>

            { loading && 'Loading...'}

            <div className="card-grid">
                {
                    images.map( (image) =>  (
                        <GifGridItem key={image.id} {...image} />
                    ))
                }
            </div>
        </>
    );
};
