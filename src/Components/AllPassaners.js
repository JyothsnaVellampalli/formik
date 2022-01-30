import React,{useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';


function AllPassaners() {
  let url="https://61ee2070d593d20017dbac63.mockapi.io/passenger/";
  let [passengers,setPassengers]=useState([]);
  let getdata=async()=>{
   try{
    let response= await axios.get(url)
    //console.log(response);
    setPassengers(response.data);
   }catch(error){
      console.log(error);
   }
  }
  useEffect(()=>{
    getdata();
  },[])
  return<>
  <h1>PASSENGERS LIST</h1>
    <Table striped bordered hover>
  <thead>
    <tr>
      
      <th>Name</th>
      <th>Start Location</th>
      <th>Depart Location</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Gender</th>
    </tr>
  </thead>
  <tbody>
    {
    passengers.map(b=>{
      console.log(b);
      return   <tr key={b.id}>
      <td>{b.Name}</td>
      <td>{b.StartLocation}</td>
      <td>{b.DepartLocation}</td>
      <td>{b.email}</td>
      <td>{b.phone}</td>
      <td>{b.Gender}</td>
    </tr>
    })
  }
   
  </tbody>
</Table>
    
  </>
      
    
}

export default AllPassaners
