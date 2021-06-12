import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories, limit, setLimit } ) => {

    const [inputValue, setInputValue] = useState('');
    const [numberValue, setNumberValue] = useState(limit)

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleNumberChange = (e) => {
        setNumberValue(e.target.value);
    };

    const handleSubmit = (e) => {
        console.log("Sending...");
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories( cats => [inputValue, ...cats]);
            setLimit(numberValue);
            setInputValue('');
        }
        
    };

    return (
        <form onSubmit={ handleSubmit }>
            <label htmlFor="searchText" className="long">Buscar</label>
            <label htmlFor="limitNumber" className="short">Imagenes a buscar </label>   
            <input className="long" id="searchText" type="text" value={inputValue} onChange={ handleInputChange } placeholder="Buscar ... " required></input>
            <input className="short" id="limitNumber" type="number" value={numberValue} onChange={ handleNumberChange } placeholder="Cantidad ..." required></input>
            <button type="submit">Buscar</button>
        </form>
    )
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
    setLimit: PropTypes.func.isRequired,
    limit: PropTypes.number
};

AddCategory.defaultProps = {
    limit: 10
}
