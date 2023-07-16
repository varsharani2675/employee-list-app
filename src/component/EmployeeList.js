import React from "react";
import { useState, useEffect } from "react";

function EmployeeList(){
    const [employees, setEmployees]= useState([]);
    const [searchTerm, setSearchTerm]= useState('');

    useEffect(() =>{
        fetch('https://reqres.in/api/users?page=2 ')
           .then((response)=> response.json())
           .then((data)=> setEmployees(data.data));

    },[]);

    const filteredEmployees = employees.filter((employee)=>
    employee.first_name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return(
        <div className="employee-list">
        <input 
          type="text"
          placeholder="Search by first name"
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="list-container">
        <ul className="list">
          {filteredEmployees.map((employee) => (
            <li key={employee.id} className="list-item">
               <div className="avatar-container">
              <img src={employee.avatar} alt={employee.first_name} className="avatar" />
              <span className="id">{employee.id}</span>
            </div>
              <p className="name">{employee.first_name}</p>
            </li>
             
             
             ))}
        </ul>
        </div>
      </div>
    );

      

}

export default EmployeeList;