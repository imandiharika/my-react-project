import React, { useEffect, useState } from 'react';
import { Employee } from '../types/Employee.type';

const MainContentFunctional:React.FC = () => {

    const[count, setCount]=useState(0);
    // const[count, setGreeting]=useState("good morning");

    const[employees, setEmployees]=useState<Employee[]>([]);


//     useEffect(()=>{
    
//         console.log('useeffect callback is exceutes!')


//         //if no dependencies defined, this callback wiill run after every render
//  } );

// useEffect(()=>{
    
//     console.log('useeffect callback is exceutes!')


//     //if empty dependencies defined, then this call back wiill run only once
// },[]);

// useEffect(()=>{
    
//     console.log('useeffect callback is exceutes!')


//     //if dependencies defined, this callback wiill run after every render
// } ,[greeting]);

    useEffect(()=>{
        
        console.log('load the data from backend api')

        fetch('http://localhost:8081/api/employees')
        .then((response)=> response.json() )
        .then((data:Employee[])=> {
            console.log('employee data received')
            console.log(data)
            setEmployees(data)
        })
        .catch((error)=>{
            console.log('Something went wrong')
            console.log(error)
        })



    } ,[]);

    
    return (
        <div>
            <h1>Employee List</h1>
            <a href='/addemployee'>Add a new Employee</a>
            {/* <h2>Count:{count}</h2>
            
            <button onClick={()=> setCount(count+1)} className='btn btn-primary'>Increment</button>
            
            <hr/> */}

            <table className='table'>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Email</th>
                        <th>Salary</th>
                        
                    </tr>
                </thead>
                    <tbody>
                        {
                           employees.map((employee)=>{
                            return <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.city}</td>
                                <td>{employee.email}</td>
                                <td>{employee.salary}</td>
                            </tr>
                           })
                        }
                    </tbody>
            </table>

        </div>
    );
};

export default MainContentFunctional;