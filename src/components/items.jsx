import React from 'react';
import { Link } from 'react-router-dom';
import star from './assets/star_icon.png'; 
import stardull from './assets/star_dull_icon.png'; 

const Item = (props) => {
    return (
        <div className='w-[280px] hover:scale-105 transition duration-150 hover:shadow-2xl relative'>
            <Link to={`/product/${props.id}`} onClick={() => window.scrollTo(0, 0)}>
                <img className='w-full h-auto' src={props.image} alt={props.name} />
            </Link>
            <p className='mt-2 mb-2 text-center'>{props.name}</p>
            <div className='item-prices flex justify-between items-center'>
                <div className='item-price-new text-[#374151] text-[18px] font-bold'>
                    ${props.new_price}
                </div>
                <div className='items-price-old text-[#8c8c8c] text-[18px] font-semibold line-through'>
                    ${props.old_price}
                </div>
            </div>

            <div className='flex items-center justify-start gap-1 mt-2'>
                {Array.from({ length: 5 }, (_, index) => (
                    <img
                        key={index}
                        src={index < props.rating ? star : stardull} 
                        alt="star"
                        className='w-4 h-4' 
                    />
                ))}
            </div>

            {/* Review Count */}
            <div className='text-black text-sm text-left mt-1 ml-1'>
                ({props.reviewCount} reviews)
            </div>
            
        </div>
    );
};

export default Item;
