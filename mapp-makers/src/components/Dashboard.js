import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookBookmark, faGear, faPlus, faUserGroup} from "@fortawesome/free-solid-svg-icons";
import * as fontawesome from "@fortawesome/fontawesome-svg-core";


fontawesome.library.add(faUserGroup, faBookBookmark, faPlus, faGear);


function Dashboard(props) {
    return (
        <div className='grid grid-cols-4 h-screen'>
            {/*Sidebar*/}
            <div className='flex flex-col border-gray-200 border-r-2 p-8 content-center gap-y-8' w-full>

                <a className='flex flex-row  items-center text-gray-500 gap-x-4'>
                    <img className='rounded-full w-12 h-12' src="" alt=""/>
                    <div className='flex flex-col'>
                        <div className='text-sm'>Welcome back,</div>
                        <div className='font-light'>Dr.Johnson</div>
                    </div>
                </a>

                <a href='#' className='flex flex-row gap-4 items-center'>
                    <FontAwesomeIcon className='h-6 w-6 text-gray-600' icon="fa-solid fa-user-group"/>
                    <div className='text-gray-500'>Students</div>
                </a>

                <div href='#' className='flex flex-row w-full justify-between text-gray-400 text-sm font-light -mb-4'>
                    <div>MY COURSES</div>
                    <a href="">
                        <FontAwesomeIcon icon="fa-solid fa-plus"/>
                    </a>
                </div>

                <a href='#' className='flex flex-row gap-4 items-center'>
                    <FontAwesomeIcon className='h-6 w-6 text-gray-600' icon="fa-solid fa-book-bookmark"/>
                    <div className='text-gray-500'>Software Development I</div>
                </a>

                <a href='#' className='flex flex-row gap-4 items-center'>
                    <FontAwesomeIcon className='h-6 w-6 text-gray-600' icon="fa-solid fa-book-bookmark"/>
                    <div className='text-gray-500'>Software Development II</div>
                </a>

                <a href='#' className='flex flex-row gap-4 items-center'>
                    <FontAwesomeIcon className='h-6 w-6 text-gray-600' icon="fa-solid fa-book-bookmark"/>
                    <div className='text-gray-500'>Intermediate Programming</div>
                </a>


                <div href='#' className='flex flex-row w-full justify-between text-gray-400 text-sm font-light -mb-4'>
                    <div>SETTINGS</div>
                </div>

                <a href='#' className='flex flex-row gap-4 items-center'>
                    <FontAwesomeIcon className='h-6 w-6 text-gray-600' icon="fa-solid fa-gear"/>
                    <div className='text-gray-500'>Preferences</div>
                </a>
            </div>
            <div>


            </div>

            <div>

            </div>

        </div>
    );
}

export default Dashboard;