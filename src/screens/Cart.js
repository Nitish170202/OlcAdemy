import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart, useDispatchCart } from '../components/ContextReducer';
import delImg from '../components/Images/delete.png';



export default function Cart() {

  const navigate = useNavigate();
  
 
  
  let data = useCart();
  let dispatch = useDispatchCart();
  if (data.length === 0) {
    return (
      <div style={{color:'white'}}>
        <div className='m-5 w-100 text-center fs-3'>The Cart is Empty!</div>
      </div>
    )
  }
  let totalPrice = data.reduce((total, food) => total + food.price, 0)


  // const handleCheckOut =()=>{
  //   navigate('/');
  // }



  
  
  return (
    
    <div style={{color:'white'}}>
      {console.log("all data",data)}
      <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' >
        <table className='table '>
          <thead className=' text-success fs-4'>
            <tr>
              <th scope='col' >#</th>
              <th scope='col' >Name</th>
              <th scope='col' >Quantity</th>
              <th scope='col' >Option</th>
              <th scope='col' >Amount</th>
              <th scope='col' >Remove</th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr style={{color:'white'}}>
                <th scope='row' >{index + 1}</th>
                <td>{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>{food.price}</td>
                <td><button type="button" className="btn p-0" onClick={() => { dispatch({ type: "REMOVE", index: index }) } } ><img style={{width:'25px' , height:'30px'}} src={delImg} alt='delete'></img></button> </td></tr>
            ))}
          </tbody>
        </table>
        <div><h1 className='fs-2'>Total Price: {totalPrice}/-</h1></div>
        <div>
          
        <div>
          <button className='btn bg-success mt-5 ' > Product Details </button>
          </div>
        </div>
      </div>
    </div>
  )
}