import React from 'react';

const Card = ({medium_cover_image,summary,rating,year,onClick}) => {
    return (
        <div onClick={onClick} class="w-40 ml-[10px] mt-5 p-2 rounded-md bg-slate-900 hover:translate-y-1 transition-all">
            <img src={medium_cover_image} alt="" />
            <div class="mt-2">
            <h2 class="text-white truncate">{summary}</h2>
            <div class="flex justify-between items-center">
            <div class="flex w-fit px-2 border border-blue-500 space-x-1 items-center text-white">
            <span>{rating}</span>
            </div>
            <div class="text-white">{year}</div>
            </div>
            </div>
        </div>
    );
};

export default Card;