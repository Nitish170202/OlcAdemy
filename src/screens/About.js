import React from 'react'
import Footer from '../components/Footer'
import Navbars from '../components/Navbars'
import '../styles/About.css'

function About() {
  return (
    <div>
    <Navbars/>
    <h1 className='my-4'>About Us Page</h1>
    <div className='container d-flex'>
        <div className='box'>
            <img src='https://img.freepik.com/premium-photo/perfume-bottle-table-with-flowers_931022-8316.jpg'></img>
        </div>
        <div className='box my-5'>
            <h1>About Our Perfumes</h1>
            <h4>At Perfumes, the art of perfumery is crafted into a science of everlasting memories through their fragrances. stands strong as a corporate entity with a vast portfolio of over 300 of the finest and most captivating fragrances. The brand has a strong retail presence with over 240+ exclusive retail outlets across the GCC and the world. also has a presence on the international front; currently exporting to 45+ countries across the globe and with an exclusive presence through select 30 global Duty-Free locations and International Airlines.</h4>
        </div>
        
    </div>

    <div className='container d-flex'>
        <div className='box my-5'>
            <h1>About Our Perfumes</h1>
            <h4>At Perfumes, the art of perfumery is crafted into a science of everlasting memories through their fragrances. stands strong as a corporate entity with a vast portfolio of over 300 of the finest and most captivating fragrances. The brand has a strong retail presence with over 240+ exclusive retail outlets across the GCC and the world. also has a presence on the international front; currently exporting to 45+ countries across the globe and with an exclusive presence through select 30 global Duty-Free locations and International Airlines.</h4>
        </div>
        <div className='box'>
            <img src='https://thumbs.dreamstime.com/b/perfume-flowers-close-up-around-31723967.jpg'></img>
        </div>
    </div>

    <div className='container d-flex'>
        <div className='box'>
            <img src='https://thumbs.dreamstime.com/b/women-s-perfume-beautiful-bottle-freesia-isolated-white-background-67287781.jpg'></img>
        </div>
        <div className='box my-5'>
            <h1>About Our Perfumes</h1>
            <h4>At Perfumes, the art of perfumery is crafted into a science of everlasting memories through their fragrances. stands strong as a corporate entity with a vast portfolio of over 300 of the finest and most captivating fragrances. The brand has a strong retail presence with over 240+ exclusive retail outlets across the GCC and the world. also has a presence on the international front; currently exporting to 45+ countries across the globe and with an exclusive presence through select 30 global Duty-Free locations and International Airlines.</h4>
        </div>
        
    </div>
    <Footer/>
    </div>
  )
}

export default About
