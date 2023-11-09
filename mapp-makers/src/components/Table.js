import React,{useState, useEffect} from 'react'
import DataTable from 'react-data-table-component';
import defaultImage from '../assets/sign_in_background.jpg';

export const Table = (props) => {

  
  
  const columns = [
    {
      name: '',
      cell: row => (
        <div className=" h-8 w-8 overflow-hidden">
          <img className="h-full w-full object-cover rounded-full" 
          src={row.image || defaultImage} 
          alt={row.firstName} />
        </div>

      ),
      width: '70px',

    },
    
    {
      name:'Last Name',
      selector: row => row.lastName,
      sortable: true,
      width: '150px',

    },
    {
      name:'First Name',
      selector: row => row.firstName,
      sortable: true,
      width: '150px',

    },
    {
      name: 'Email',
      selector: row => row.email,
      sortable: true,
      width: '200px',


    },
    {
      name: 'Attendance',
      selector: row => row.attendance,
      sortable: true,
      width: '200px',



    }
  ];

 

  return (
    <div className='container m-5 p-5  w-4/5'>
      <div className='text-end'><input type="text"></input></div>
      
      <DataTable
        columns= {columns}
        data = {props.data}
        selectableRows
        fixedHeader
        pagination
        >

      </DataTable>
      
      
      </div>
  );
}
