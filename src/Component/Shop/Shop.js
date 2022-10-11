import React, { useEffect, useState } from 'react'
import Scard from '../Scard/Scard'

function Shop() {
    const [Product,setproduct]=useState([])
    const [loadedProduct,setloadedProduct]=useState([])
    console.log(loadedProduct)
    useEffect(()=>{
        fetch("https://course-api.com/react-store-products")
        .then(res=>res.json())
        .then(data=>{
            setproduct(data)
            setloadedProduct(crepagation(data))
        })
    },[])
    const crepagation=(items,limit=4,offset=0)=>{
      let arr=[];
      items.forEach((item,index)=>{
        if(index >= offset && index<limit+offset)
            arr.push(item)
        
      })
      return arr;
    }
    function Loadend(){
        if(Product.length == loadedProduct.length) return
        const newproduct=crepagation(Product,4,loadedProduct.length)
        setloadedProduct([...loadedProduct,...newproduct])
    }
    return (
        <div className='container mx-auto my-5'>
           <div className='flex flex-wrap gap-3 justify-center'>
           {loadedProduct.map(Pro=> <Scard key={Pro.id} {...Pro}></Scard>)}
           </div>
          <div className='text-center my-5'>
          {loadedProduct.length != Product.length && (
            <button  onClick={()=>Loadend()} className='bg-[#239ae9] py-2 px-3 text-white text-center'>See More</button>
          )}
          </div>
        </div>
    )
}

export default Shop
