import React from 'react';
import DashboardLayout from "../../components/DashboardLayout";
import { faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import CourseBanner from "../../components/CourseBanner";
import StudentTable from '../../components/StudentTable';

function Student(props) {
    const data = [
        {
            id: 1,
            date: '11-25-2023',
            status: 'present',
            in: '3:00pm', 
            note: 'completed quiz during class',

        }

    ]


    return (
        <div>
            <DashboardLayout>
                <div className='mx-12 py-4'>
                    <div className='grid grid-cols-6 gap-2'>

                        <div className='mb-4 col-span-3'>
                            <h1 className='text-3xl'> Holly Boaz </h1>
                            <div className='text-gray-400 font-light text-sm'>hboaz@ggc.edu</div>
                            <div className='text-gray-400 font-light text-sm'>Last attended <span
                                className='font-light text-black underline'>Nov 23, 2023</span></div>
                        </div>

                        <div className='col-span-3'>
                            <div className= 'flex flex-row gap-2 place-content-end'>
                                <div className='flex flex-row gap-2 rounded text-white text-sm px-4 py-2 bg-black'>
                                    <p>Enrolled</p>
                                    <a href="">
                                        <FontAwesomeIcon className='text-white' icon="fa-solid fa-chevron-down" />
                                    </a>
                                </div>

                                <div className='text-gray-500 font-light text-xs p-2 h-fit '> Remove from class</div>
                            </div>
                        </div>

                        <div className='bg-green-200 rounded-2xl col-span-3'>
                            <div className='p-4'>
                                <div className='text-5xl text-green-950 '> 98%</div>
                                <div>Attendance</div>
                            </div>
                            <div className='w-full bg-green-950 text-white rounded-b-2xl px-4 py-2'>View All</div>
                        </div>

                        <div className='bg-red-200 rounded-2xl col-span-3'>
                            <div className='p-4'>
                                <div className='text-5xl text-red-950 '> 2</div>
                                <div>Absences</div>
                            </div>
                            <div className='w-full bg-red-950 text-white rounded-b-2xl px-4 py-2'>View All</div>
                        </div>
                        

                    </div>

                    <div className='text-2xl font-medium mt-12'> Attendance Report</div>
                <StudentTable data={data}>

                </StudentTable>
                </div>
                    
            



            </DashboardLayout>
        </div>
    );
}

export default Student;