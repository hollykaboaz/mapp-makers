import React from 'react';
import DataTable from 'react-data-table-component';

const ClassesPageTable = (props) => {
  const columns = [
    {
      name: 'Date',
      selector: (row) => row.date,
      sortable: true,
      width: '200px',
    },
    {
      name: 'Attendance',
      selector: (row) => row.attendance,
      sortable: true,
      width: '150px',
    },
    {
      name: 'Note',
      selector: (row) => row.note,
      sortable: true,
      width: '200px',
    },
  ];

  return (
    <div className='container mt-5 border rounded-2xl border-gray-200'>
      <DataTable
        columns={columns}
        data={props.data}
        selectableRows
        fixedHeader
        pagination
      />
    </div>
  );
};

export default ClassesPageTable;
