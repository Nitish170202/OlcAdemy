import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Navbars from './../components/Navbars';

export default function Home() {

  const [perfumeCat,setPerfumeCat] = useState([]);
  const [perfumeItem,setPerfumeItem] = useState([]);
  const loadData = async () =>{
    let response = await fetch("/loadData" , {
      method:"POST",
      headers:{
        'Content-Type' : 'application/json'
      }
    });
    response = await response.json();
    setPerfumeCat(response[1]);
    setPerfumeItem(response[0]);
    console.log(response[0] , response[1]);

  }

  useEffect(()=>{
    loadData()
  },[])

  
  return (
    <>
     <div> <Navbars /> </div>
    
    <div className='container'>
    
    {
      perfumeCat !== '[]'
      ? perfumeCat.map((data)=>{
        return(
          <div className='row mb-3'>
              <div key={data._id} className='fs-3 m-3' style={{color:'black'}} >
                <b>{data.CategoryName}</b>
              </div>
              <hr/>
              {
                perfumeItem !== '[]'
                ? perfumeItem.filter((item)=> item.CategoryName === data.CategoryName)
                .map(filterItems=>{
                  return(
                    <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                        <Card
                          perfumeName={filterItems.name} item={filterItems} options={filterItems.options[0]} ImgSrc={filterItems.img}
                          descriptions = {filterItems.description} mykey={filterItems._id}
                        />
                    </div>
                  )
                }):<div>No such Data</div>
              }
          </div>
        )
      })
      :<div>""""""</div>
    }
      {/* <Card /> */}
    </div>
    <hr/>
    <Footer/>
      
    </>
  )
}
