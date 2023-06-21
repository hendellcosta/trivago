import { useState } from "react"
import logo from '/media/logo.png'
import {IoMdSearch} from 'react-icons/io'
import {BsCalendar4Event} from 'react-icons/bs'
import {MdOutlinePeopleAlt} from 'react-icons/md'

import booking from '/media/Companies/booking.com.png'
import hoteis from '/media/Companies/hoteis.com.png'
import agada from '/media/Companies/agada.png'
import vrbo from '/media/Companies/vrbo.png'
import all from '/media/Companies/all.png'
import trip from '/media/Companies/trip.com.png'
import geostar from '/media/Companies/geostar.png'


function Start() {

    const [companies, setCompanies] = useState([
        {
            imgUrl: booking
        },

        {
            imgUrl: hoteis
        },

        {
            imgUrl: agada
        },

        {
            imgUrl: vrbo
        },

        {
            imgUrl: all
        },

        {
            imgUrl: trip
        },

        {
            imgUrl: geostar
        }
    ])

  return (
    <section className=''>
        <div className='flex flex-row items-center divide-x-2 px-36'>
            <img src={logo} alt="Logo Trivago" className='w-52 pr-4'/>
            <span className='flex flex-col gap-2 pl-4'>
            <h1 className='font-bold text-2xl'>Ofertas dos seus sites de reserva favoritos</h1>
            <p>Pesquise uma cidade, um hotel específico ou até mesmo um local famoso!</p>
            </span>
        </div>

        <div className='px-6 py-12 gap-6 bg-slate-100'>
            <div className='flex flex-col justify-center items-center'>
            <div>
            <span className='flex flex-row gap-3'>
                <button className='bg-white text-blue-700 font-bold px-4 py-2 rounded-t-lg cursor-default'>Todas as opções</button>
                <button className='bg-blue-100 activate:bg-white active:text-blue-200 px-4 py-2 rounded-t-lg hover:underline hover:text-blue-600 cursor-pointer'>Hotel</button>
                <button className='bg-blue-100 activate:bg-white active:text-blue-200 px-4 py-2 rounded-t-lg hover:underline hover:text-blue-600 cursor-pointer'>Moradia/Apartamento</button>
            </span>

            <div className='bg-white flex flex-row items-center px-5 py-3 divide-x-2 text-xs font-light rounded-b-lg rounded-tr-lg max-w-fit'>
            <label className='flex flex-row items-center gap-2 pr-20'>
                <IoMdSearch className='text-3xl text-slate-500' />
                <input type="text" placeholder='Introduza o nome do hotel...' className='py-4' />
            
            </label>
            <span className='flex flex-row items-center pl-3 pr-24 gap-2'>
                <BsCalendar4Event className='text-lg' />
                <span className='flex flex-col items-center'>
                <p>Check-in</p>
                <p>_ _ /_ _ /_ _</p>
                </span>
            </span>
            <span className='flex flex-row items-center pl-3 pr-24'>
            <span className='flex flex-col items-center'>
                <p>Check-out</p>
                <p>_ _ /_ _ /_ _</p>
                </span>
            </span>
            <span className='flex flex-row items-center pl-3 pr-16 gap-2'>
                <MdOutlinePeopleAlt className='text-2xl' />
                <span className='flex flex-col'>
                <p>1 quarto</p>
                <p className='font-semibold'>2 hóspedes</p>
                </span>
            </span>
            <button className='text-white bg-blue-600 hover:bg-blue-700 px-10 py-3 text-lg font-semibold rounded-lg'>
                Pesquisar
            </button>
            </div>
            </div>
            </div>
            <div className='flex flex-col items-center mr-auto'>
        <p>Comparamos vários sites de reserva ao mesmo tempo</p>
        <span className='flex flex-row items-center justify-between'>
        
        {companies.map(company => {
            return (
                <img src={company.imgUrl} className='w-16 h-4' />
            )
        })}
    <p className='text-sm'>Mais de 100 sites</p>
        </span>
        
        </div>
        </div>

    </section>
  )
}

export default Start