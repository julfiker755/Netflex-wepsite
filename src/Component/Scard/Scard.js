import React from 'react'

function Scard({id,name,image,price,company}) {
    return (
        <div className='w-[300px] h-[300px] border-2 p-1 rounded-md'>
            <img className='h-[200px] w-full' src={image} alt="" />
            <h2>{company}</h2>
            <h1>{name}</h1>
            <div className='flex justify-between '>
                <h2>${price}</h2>
                <h2 className='bg-[green] px-2 text-white rounded-md cursor-pointer'>+</h2>
            </div>
        </div>
    )
}

export default Scard
