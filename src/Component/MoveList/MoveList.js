import React, { useEffect, useState } from 'react';
import Card from '../Card/Card'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 9
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
const MoveList = ({title,filter,carousel=false}) => {
    const [move,setmove]=useState([]);
    const [deltlis,setdeltlis]=useState(null)
    useEffect(()=>{
        fetch(`https://yts.mx/api/v2/list_movies.json?${filter}`)
        .then(res=>res.json())
        .then(dataa=>setmove(dataa.data.movies))
    },[])
 console.log(deltlis)
    return (
     <div className='container mx-auto'>
        <h1 className='text-[40px] text-bold'>{title}</h1>
        <>
        {carousel ? (
            <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={1000} keyBoardControl={true} transitionDuration={500}>
            {move.map(Moveet=><Card onClick={()=>setdeltlis(Moveet)} {...Moveet}></Card>)}
          </Carousel>
        ):(
         <div className='container mx-auto flex flex-wrap'>
            {move.map(Moveet=><Card onClick={()=>setdeltlis(Moveet)} {...Moveet}></Card>)}
        </div>
        )}
        </>
        {/* React pop alert demo with wepsite */}
       {deltlis && <div className='fixed text-center bg-slate-500 w-screen h-screen top-0 left-0 z-[9999]'>
        <div onClick={()=>setdeltlis(null)}>close</div>
        <div><img src={deltlis?.large_cover_image} alt="" /></div>
       </div>}
     </div>
    );
};

export default MoveList;