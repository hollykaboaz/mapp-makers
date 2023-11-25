import React from 'react';
import DashboardLayout from "../../components/DashboardLayout";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Table} from "../../components/Table";
import sImage from "../../assets/avatar.png";
import CourseBanner from "../../components/CourseBanner";

function Class(props) {
    const data = [
        {
            id: 1,
            image: sImage,
            lastName: 'Khawaja',
            firstName: 'Duaa',
            status: 'Present',
            in: '3:00pm'
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
                <Table data={data}>

                </Table>
            </div>



        </DashboardLayout>
    );
}

export default Class;