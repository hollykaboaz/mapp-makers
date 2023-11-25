import React from 'react';
import DashboardLayout from "../../components/DashboardLayout";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Table} from "../../components/Table";
import sImage from "../../assets/avatar.png";
import ClassSummaryTable from '../../components/ClassSummaryTable';
import CourseBanner from "../../components/CourseBanner";
import ClassesPageTable from '../../components/ClassesPageTable';

function Class(props) {
    const data = [
        {
            id: 1,
            lastName: 'Khawaja',
            firstName: 'Duaa',
            status: 'Present',
            in: '3:00pm'
        },
        {
            id: 2,
            lastName: 'Moore',
            firstName: 'Amber',
            status: 'Present',
            in: '3:01pm'
        }

    ]


    const classesData= [
        {
            id: 1,
            date: '11/25/2023',
            attendance: '28/32',
            note: 'Present',

        }
    ]

    return (
        <DashboardLayout>
            <div className=' py-4'>
                <div className='grid grid-rows-1 grid-cols-3 gap-16'>

                    <div className='flex flex-col text-green-900 bg-green-200 px-4 py-4 rounded-3xl'>
                        <FontAwesomeIcon className='h-6 w-6 pb-6' icon="fa-solid fa-user-group"/>
                        <div className='text-5xl font-semibold'>23</div>
                        <div className='font-light'>Present</div>
                    </div>

                    <div className='flex flex-col text-red-900 bg-red-200 px-4 py-4 rounded-3xl'>
                        <FontAwesomeIcon className='h-6 w-6 pb-6' icon="fa-solid fa-user-xmark" />
                        <div className='text-5xl font-semibold'>5</div>
                        <div className='font-light'>Absent</div>
                    </div>

                    <div className='flex flex-col text-gray-900 bg-gray-200 px-4 py-4 rounded-3xl'>
                        <FontAwesomeIcon className='h-6 w-6 pb-6' icon="fa-solid fa-qrcode"/>
                        <div className='font-light'>Scan in Students</div>
                    </div>
                </div>
                <div className='text-2xl font-medium mt-12'> Attendance Report</div>
                <ClassSummaryTable data={data}>

                </ClassSummaryTable>


                <div className='text-2xl font-medium mt-12'> Classes Table</div>
                <ClassesPageTable data={classesData}>

                </ClassesPageTable>
            </div>



        </DashboardLayout>
    );
}

export default Class;