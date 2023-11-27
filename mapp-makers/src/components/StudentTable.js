import React from 'react';
import DataTable from 'react-data-table-component';

const StudentTable = (props) => {
  const columns = [
    {
      name: 'Date',
      selector: (row) => row.date,
      sortable: true,
      width: '150px',
    },
    {
      name: 'Status',
      selector: (row) => row.status,
      sortable: true,
      width: '150px',
    },
    {
      name: 'Scanned In Time',
      selector: (row) => row.in,
      sortable: true,
      width: '200px',
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

export default StudentTable;
