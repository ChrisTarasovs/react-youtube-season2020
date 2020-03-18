import React, { useState, useEffect } from 'react';

function Dashboard(){
    const [employee, setEmployee] = useState([])
    useEffect(() =>{
        fetch('http://dummy.restapiexample.com/api/v1/employees')
        .then( res => res.json())
        .then( resp => setEmployee(resp['data']))
    })

    const employeeList = employee.map((item, index) => {
        return <div  key={index}>{item.employee_name}</div>
    })
    return (
        <div>Dashboard works {employeeList}</div>
    )

}

export default Dashboard;
