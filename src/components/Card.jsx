import React, { useContext, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import CartContext from '../context/CartContext';
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";
const generateStarRating = (rating) => {
  const maxStars = 5;
  const starRating = [];

  for (let i = 1; i <= maxStars; i++) {
    if (i <= rating) {
      starRating.push(<IoMdStar key={i} />);
    } else if (i - 0.5 <= rating) {
      starRating.push(<IoMdStarHalf key={i} />);
    } else {
      starRating.push(<IoMdStarOutline key={i} />);
    }
  }

  return starRating;
};

const Card = ({ item }) => {
  const [disable, setDisable] = useState(false);
  const { dispatch } = useContext(CartContext);

  const handleadd = (item) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: item,
    });
    setDisable(true);
  };

  return (
    <div className='w-full md:w-1/2 lg:w-1/3 xl:w-2/5 bg-opacity-50 bg-white h-32 flex my-2 border border-solid border-black rounded-lg'>
      <div className='w-1/3 md:w-1/2 h-full'>
        <img className='w-full h-full rounded-s-lg' src={item.img} alt='' />
      </div>
      <div className='w-2/3 md:w-1/2 p-2 flex-col flex justify-around'>
        <h1 className='font-bold text-xl font-mono'>{item.Dish}</h1>
        <h1 className='flex items-center'>
          <span >
          Rating:
          </span>
          <span className='flex text-yellow-600'>
          {generateStarRating(item.Rating)}
          </span>
        </h1>
        <span className='flex justify-between'>
          <h1 className='font-bold'>Price: ₹{item.Price}</h1>
          <button
            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-md text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 z-0"
            onClick={() => handleadd(item)}
            disabled={disable}
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <FaShoppingCart />
            </span>
          </button>
        </span>
      </div>
    </div>
  );
};

export default Card;
