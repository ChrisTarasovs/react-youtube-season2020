import React, { useState, useEffect } from 'react';

function Dashboard() {
    const [employees, setEmployees] = useState([]);
    useEffect(()=>{
        fetch('http://dummy.restapiexample.com/api/v1/employees')
        .then( res => res.json())
        .then( responce =>{
           setEmployees(responce['data'])
        })
    })
    const employeeList = employees.map( (item, index) => {
        return <div key={index}>{item.employee_name}</div>
    })
    return (
    <div>Dashboard works {employeeList}</div>
    )
  
}

export default Dashboard;
