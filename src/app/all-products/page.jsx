import React from 'react';

const AllProductsPage = async () => {
    const res = await fetch('https://suncart-smoky.vercel.app/data.json');
    const data = await res.json()
    console.log(data,'data')
    return (
        <div>
            
        </div>
    );
};

export default AllProductsPage;