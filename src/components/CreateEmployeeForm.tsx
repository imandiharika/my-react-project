import React from 'react';
import { Employee } from '../types/Employee.type';
import { SubmitHandler, useForm } from 'react-hook-form';

//create a type to represent the captured form data

const CreateEmployeeForm = () => {

    const {register , handleSubmit , watch , formState:{errors}} = useForm<Employee>();
    const onsubmit :SubmitHandler <Employee> = async(data)=>{
        console.log('Form is submitted')
        console.log('data : ',data)

       const reponse = await fetch('http://localhost:8081/api/employees',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })

        if(!reponse.ok)
            throw new Error('something went wrong')

        const responseData=  await reponse.json()
        console.log('Employee is created Successfully')
    }


    return (
        <div className='container'>
            <h1>Create a new Employee</h1>
            <form onSubmit={handleSubmit(onsubmit)}>
            <div className="mb-3">
                <label htmlFor="empName" className="form-label">Employee Name</label>
                <input type="text" 
                className="form-control" 
                id="name"
                {...register("name",{
                    required:"Name is required field",
                    minLength:{
                        value:3,
                        message:"Name should be at least 3 characters long"
                    }
                    })}/>
                {errors.name && <span className='errormessage'>{errors.name?.message}</span>}
                
        </div>
        <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" 
                className="form-control" 
                id="email"
                {...register("email")}/>
                
        </div>
        <div className="mb-3">
                <label htmlFor="city" className="form-label">City</label>
                <input type="text" 
                className="form-control" 
                id="city"
                {...register("city")}/>
                
        </div>
        <div className="mb-3">
                <label htmlFor="salary" className="form-label">Salary</label>
                <input type="text" 
                className="form-control" 
                id="salary"
                {...register("salary")}/>
                
        </div>

        <input type="submit" className='btn btn-primary' value="Create Employee"/>
        
        
        

            </form>
        </div>
    );
};

export default CreateEmployeeForm;