import React from 'react';
import DashboardLayout from "../../components/DashboardLayout";
import ClassesPageTable from "../../components/ClassesPageTable";
import {DashNavbar} from "../../components/DashNavbar";

function Classes(props) {
    const classesData= [
        {
            id: 1,
            date: '11/25/2023',
            attendance: '28/32',
            note: 'Present',

        }
    ]
    return (
        <div>
            <DashNavbar/>
            <div className='text-2xl font-medium mt-12'> Your Classes</div>
            <ClassesPageTable data={classesData}>
            </ClassesPageTable>
        </div>


    );
}

export default Classes;