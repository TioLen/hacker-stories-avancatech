import React, { useState } from 'react';

function Search({ onSearch, searchTerm}){
    // const [searchTerm, setSearchTerm] = useState('');

    // const handleChange = (event) => {
    //     console.log(event.target.value);
    //     setSearchTerm(event.target.value);
    // };


    return(
        <div>
            <label htmlFor="search">Pesquisar: </label>
            <input id="search" type="text" value={searchTerm} onChange={onSearch}/>
            
        </div>
    );
}

export default Search;