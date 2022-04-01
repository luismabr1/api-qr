
import React from 'react';

import MenuListas from '../MenuListas';

const Listas = (data) => {
    console.table(data)
    return (
        <>
        <MenuListas data={data}/>
        </>
    );
};

export default Listas;


