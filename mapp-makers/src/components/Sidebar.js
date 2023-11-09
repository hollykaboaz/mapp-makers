import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Sidebar({courses}) {
    return (
        <div className='flex flex-col border-gray-200 border-r-2 px-8 py-12 content-center gap-y-8'>

            <a className='flex flex-row  items-center text-gray-500 gap-x-4'>
                <img className='rounded-full w-12 h-12' src="" alt=""/>
                <div className='flex flex-col'>
                    <div className='text-sm'>Welcome back,</div>
                    <div className='font-light'>Dr.Johnson</div>
                </div>
            </a>

            <a href='#' className='flex flex-row gap-4 items-center'>
                <FontAwesomeIcon className='h-4 w-4 text-gray-600' icon="fa-solid fa-user-group"/>
                <div className='text-gray-500 font-light'>Students</div>
            </a>

            <div href='#' className='flex flex-row w-full justify-between text-gray-400 text-sm font-light -mb-4'>
                <div>MY COURSES</div>
                <a href="">
                    <FontAwesomeIcon icon="fa-solid fa-plus"/>
                </a>
            </div>

            {courses.map((course, index) => {
                return <a key={index} href='#' className='flex flex-row gap-4 items-center'>
                    <FontAwesomeIcon className='h-4 w-4 text-gray-600' icon="fa-solid fa-book-bookmark"/>
                    <div className='text-gray-500 font-light'>{course}</div>
                </a>
            })}

            <div href='#' className='flex flex-row w-full justify-between text-gray-400 text-sm font-light -mb-4'>
                <div>SETTINGS</div>
            </div>

            <a href='#' className='flex flex-row gap-4 items-center'>
                <FontAwesomeIcon className='h-4 w-4 text-gray-600' icon="fa-solid fa-gear"/>
                <div className='text-gray-500'>Settings</div>
            </a>

        </div>
    );
}

export default Sidebar;