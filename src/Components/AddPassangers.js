import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import axios from 'axios';
import {useFormik} from 'formik';
import * as Yup from'yup';
import {Link} from 'react-router-dom';

function AddPassangers() {
  let url="https://61ee2070d593d20017dbac63.mockapi.io/passenger/"
    
    let handleSubmit=async(values)=>{
  let response=await axios.post(url,values)
    // {
    //   "Name": "HHH",
    //   "StartLocation": "West Robbport",
    //   "DepartLocation": "New Mohammedshire",
    //   "email": "Haley_Bashirian@gmail.com",
    //   "phone": "55766666",
    //   "Gender": "Female",
    //   "id    ": "1"
    //  })
 //console.log(response.data)
    
}

const formik= useFormik({
  intialValues:{Name:"",StartLocation:"",DepartLocation:"",email:"",phone:"",Gender:""},
  validationSchema:Yup.object({
    Name: Yup.string().required('Required'),
    StartLocation:Yup.string().required('Required'),
    DepartLocation:Yup.string().required('Required'),
    email:Yup.string().email('Invalid Email').required('Required'),
    phone:Yup.string().required('Required'),
    Gender:Yup.string().required('Required')

  }),
  onSubmit: values=>{
    handleSubmit(values);
  }

})

  return<>
  <h1>Add PASSENGER</h1>

  <div>
 <Link to='/allpassengers'>
 AllPassaners
 </Link> 

</div>
    <Form onSubmit={formik.handleSubmit}>
  <Form.Group className="form-control" controlId="name">
    <Form.Label>Name</Form.Label>
    <br></br>
    <Form.Control type="text" placeholder="Enter Name" onChange={formik.handleChange} value={formik.values.Name} />
    {formik.touched.Name && formik.errors.Name?<div style={{color:'red'}}>{formik.errors.Name}</div>:null}
  </Form.Group>

  
    <Form.Group className="form-control" controlId="startLocation">
    <Form.Label>Start Location</Form.Label>
    <br></br>
    <Form.Control type="text" placeholder="Enter Location" value={formik.values.StartLocation} />
    </Form.Group>
    

    
    <Form.Group className="form-control" controlId="DepartLocation">
    <Form.Label>Depart Location</Form.Label>
    <br></br>
    <Form.Control type="text" placeholder="Enter Location" value={formik.values.DepartLocation} />
  </Form.Group>
   

<Form.Group className="form-control" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <br></br>
    <Form.Control type="email" placeholder="Enter email" value={formik.values.email} />
  </Form.Group>

  <Form.Group className="form-control" controlId="phone">
    <Form.Label>Phone</Form.Label>
    <br></br>
    <Form.Control type="text" placeholder="Enter Phone Number" value={formik.values.phone} />
  </Form.Group>

  <Form.Group className="form-control" controlId="gender">
    <Form.Label>Gender</Form.Label>
    <br></br>
    <Form.Control type="text" placeholder="Enter Gender" value={formik.values.Gender}/>
  </Form.Group>
 
  <Button variant="primary" type="submit"  >
    Submit
  </Button>
</Form>
  {/* <form onSubmit ={formik.handleSubmit}>
        <div className='form-group'>
            <label for='name'>Name</label>
            <input type='text'
            id="name"
            name='name'
            className='form-control'
            placeholder='Enter Name'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
            />
            {formik.touched.Name && formik.errors.Name?<div style={{color:'red'}}>{formik.errors.Name}</div>:null}
        </div>

        <div className='form-group'>
            <label for='StartLocation'>StartLocation</label>
            <input type='text'
            id="StartLocation"
            name='StartLocation'
            className='form-control'
            placeholder='Enter StartLocation'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.StartLocation}
            />
            {formik.touched.StartLocation && formik.errors.StartLocation?<div style={{color:'red'}}>{formik.errors.StartLocation}</div>:null}
        </div>

        <div className='form-group'>
            <label for='DepartLocation'>DepartLocation</label>
            <input type='text'
            id="DepartLocation"
            name='DepartLocation'
            className='form-control'
            placeholder='Enter DepartLocation'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.DepartLocation}
            />
            {formik.touched.DepartLocation && formik.errors.DepartLocation?<div style={{color:'red'}}>{formik.errors.DepartLocation}</div>:null}
        </div>

        <div className='form-group'>
            <label for='email'>email</label>
            <input type='text'
            id="email"
            name='email'
            className='form-control'
            placeholder='Enter email'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email?<div style={{color:'red'}}>{formik.errors.email}</div>:null}
        </div>

        <div className='form-group'>
            <label for='phone'>phone</label>
            <input type='text'
            id="phone"
            name='phone'
            className='form-control'
            placeholder='Enter phone'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.phone}
            />
            {formik.touched.phone && formik.errors.phone?<div style={{color:'red'}}>{formik.errors.phone}</div>:null}
        </div>

        <div className='form-group'>
            <label for='Gender'>Gender</label>
            <input type='text'
            id="Gender"
            name='Gender'
            className='form-control'
            placeholder='Enter Gender'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.Gender}
            />
            {formik.touched.Gender && formik.errors.Gender?<div style={{color:'red'}}>{formik.errors.Gender}</div>:null}
        </div>

        
  </form> */}
  </>
}

export default AddPassangers
