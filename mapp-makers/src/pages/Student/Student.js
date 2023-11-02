import React from 'react';
import DashboardLayout from "../../components/DashboardLayout";

function Student(props) {
    return (
        <div>
            <DashboardLayout>
                <div className='grid grid-cols-6 gap-2'>

                    <div className='mb-4 col-span-3'>
                        <h1 className='text-3xl'> Holly Boaz </h1>
                        <div className='text-gray-400 font-light text-sm'>hboaz@ggc.edu</div>
                        <div className='text-gray-400 font-light text-sm'>Last attended <span
                            className='font-light text-black underline'>Nov 23, 2023</span></div>
                    </div>

                    <div className='col-span-3 flex flex-row gap-2'>
                        <div className='rounded-full text-white text-xs p-2 bg-gray-500 h-fit'> Enrolled </div>
                        <div className='rounded-full text-gray-00 text-xs border border-gray-600 p-2 h-fit'> Export Report </div>
                        <div className='text-gray-500 text-xs p-2 h-fit'> Remove from class </div>


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
                            <div className='text-5xl text-red-950 '> 2 </div>
                            <div>Absences</div>
                        </div>
                        <div className='w-full bg-red-950 text-white rounded-b-2xl px-4 py-2'>View All</div>
                    </div>


                </div>


            </DashboardLayout>
        </div>
    );
}

export default Student;