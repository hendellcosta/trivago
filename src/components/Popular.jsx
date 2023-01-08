import React, {useState} from 'react'
import {MdKeyboardArrowLeft} from  'react-icons/md'
import {MdKeyboardArrowRight} from  'react-icons/md'
function Popular() {

    
    let [cards, setCards] = useState([
        {
            img: '/media/PopularCities/lisboa.webp',
            title: 'Hotéis em Lisboa',
            quantity: '38.575',
            price: 0
        },

        {
            img: '/media/PopularCities/porto.webp',
            title: 'Hotéis em Porto',
            quantity: '38.575',
            price: 0
        },

        {
            img: '/media/PopularCities/paris.webp',
            title: 'Hotéis em Paris',
            quantity: '38.575',
            price: 0
        },

        {
            img: '/media/PopularCities/funchal.webp',
            title: 'Hotéis em Funchal',
            quantity: '38.575',
            price: 0
        },

        {
            img: '/media/PopularCities/barcelona.webp',
            title: 'Hotéis em Barcelona',
            quantity: '38.575',
            price: 0
        },

        {
            img: '/media/PopularCities/londres.webp',
            title: 'Hotéis em Londres',
            quantity: '38.575',
            price: 0
        },

        {
            img: '/media/PopularCities/lisboa.webp',
            title: 'Hotéis em Lisboa',
            quantity: '38.575',
            price: 0
        },

        {
            img: '/media/PopularCities/porto.webp',
            title: 'Hotéis em Porto',
            quantity: '38.575',
            price: 0
        }
        ])

  return (
    <div className='mt-60'>
        <h1 className='font-bold text-xl py-3'>Estes destinos populares estão à distância de um clique</h1>

        <button className='hover:bg-slate-300 px-4 py-2 font-semibold text-slate-700'>Cidades populares</button>
        <button className='hover:bg-slate-300 px-4 py-2 font-semibold text-slate-700'>Destinos populares</button>
        <div className='border-b'></div>

        <div className='gap-6 grid grid-cols-4 py-4 justify-center'>
            {cards.map(card => {
                return (
                    <div className='flex flex-col'>
                    <img src={card.img} className='rounded-2xl' />
                    <h1 className='font-bold mt-2'>{card.title}</h1>
                    <span className='flex flex-row'>
                    <span className='flex flex-row'>{card.quantity} hotéis - &nbsp;<p className='font-semibold'>Média: € {card.price}</p></span>
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
    </div>
  )
}

export default Popular