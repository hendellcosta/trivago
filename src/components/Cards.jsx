import React from 'react'

function Cards(props) {
  return (
    <div className='gap-6 grid grid-cols-4 py-4 justify-center'>
            {e.map(e => {
                return (
                    <div className='flex flex-col'>
                    <img src={props.img} className='rounded-2xl' />
                    <h1 className='font-bold mt-2'>{props.title}</h1>
                    <span className='flex flex-row'>
                    <span className='flex flex-row'>{props.quantity} hotéis - &nbsp;<p className='font-semibold'>Média: € {props.price}</p></span>
                    </span>
                    </div> 
                )
            })}

            <div className='flex flex-row items-center max-w-max justify-center gap-2'>
                <button><MdKeyboardArrowLeft /></button>
                <button className='rounded-full w-3 h-3 bg-slate-400'>&nbsp;</button>
                <button className='rounded-full w-3 h-3 bg-slate-400'>&nbsp;</button>
                <button><MdKeyboardArrowRight /></button>
            </div>
        </div>
  )
}

export default Cards