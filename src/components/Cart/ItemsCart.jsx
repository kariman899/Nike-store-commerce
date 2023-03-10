import React from "react";

import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { setRemoveItemsFromCart,setIncreaseItemQTY,setDecreaseItemQTY } from "../../app/CartSlice.js";

export default function ItemsCart({
  item: { id, title, text, img, color, shadow, price, cartQuantity },
}) {
  const dispatch = useDispatch();

  function onRemoveItem() {
    dispatch(
      setRemoveItemsFromCart(
    {id,
      title,
      text,
      img,
      color,
      shadow,
      price,
      cartQuantity}
      )
    );
  }
  function onIncreaseQTY(){
    dispatch(setIncreaseItemQTY({ id, title, text, img, color, shadow, price, cartQuantity }))
  }
  function onDecreaseQTY(){
    dispatch(setDecreaseItemQTY({ id, title, text, img, color, shadow, price, cartQuantity }))
  }
  return (
    <>
    <div className="flex justify-between p-4 xsm:px-1.5 xsm:py-2">
        <div className="flex gap-5 xsm:gap-2  md:items-center">
          <div
            className={` bg-gradient-to-b ${color} ${shadow} p-3 rounded relative 
          transition-all duration-200 ease-in-out hover:scale-105`}
          >
            <img src={img} className="w-32 lg:w-28 xsm:w-16 " alt="" />
            <div className='absolute right-1 top-1 blur-theme-effect bg-white/80 text-black text-xs xsm:text-[10px] px-1 rounded '>
              ${price}</div>
          </div>
          
          <div>
            <div>
              <h4 className=" font-medium text-lg text-slate-900 lg:text-sm xsm:text-xs">
                {title}
              </h4>
              <p className="text-sm text-slate-700 lg:text-xs xsm:text-[10px]">{text}</p>
            </div>
            <div className=" flex items-center gap-4 xsm:gap-2 mt-2">
              <button className="bg-theme-cart text-slate-100 p-0.5 rounded shadow shadow-slate-900 active:scale-90"
              onClick={onDecreaseQTY}>
                <MinusIcon className="w-5 h-5 lg:w-4 lg:h-4" />{" "}
              </button>
              <span className="xsm:text-sm">{cartQuantity}</span>
              <button className="bg-theme-cart text-slate-100 p-0.5 rounded-sm shadow shadow-slate-900 active:scale-90"
              onClick={onIncreaseQTY}>
                <PlusIcon className="w-5 h-5 lg:w-4 lg:h-4" />{" "}
              </button>
            </div>
          </div>
        </div>
        <div className=" grid justify-between xsm:gap-5 md:items-center ">
          <div>
            <span className=" text-slate-900 xsm:text-sm ">${price * cartQuantity}</span>
          </div>
          <div className=" grid items-center justify-center md:items-center ">
            <button
              className="bg-theme-cart text-slate-200 rounded shadow shadow-slate-900 
          active:scale-90 p-1 cursor-pointer"
              onClick={onRemoveItem}
            >
              {" "}
              <TrashIcon className="w-5 h-5 lg:w-4 lg:h-4 " />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
