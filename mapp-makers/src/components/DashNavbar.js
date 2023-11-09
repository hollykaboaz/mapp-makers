import React, {useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export const DashNavbar = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        setSelectedItem(item);
        console.log(selectedItem)
    };

    return (

        <div className='flex flex-row justify-between navbar'>
            <div className=" font-light">
                <a className = { selectedItem === 'Classes' ? 'font-medium nav-link nav-link-grow-up' : 'nav-link nav-link-grow-up'}
                   onClick= {() => handleItemClick('Classes')}  href="#">Classes</a>
                <a  className = { selectedItem === 'Students' ? 'font-medium nav-link nav-link-grow-up' : 'nav-link nav-link-grow-up'} onClick= {() => handleItemClick('Students')} href="#">Students</a>
                <a  className = { selectedItem === 'Attendance' ? 'font-medium nav-link nav-link-grow-up' : 'nav-link nav-link-grow-up'}
                    onClick= {() => handleItemClick('Attendance')} href="#">Attendance</a>
            </div>

            <a href='#' className='flex flex-row gap-2 rounded text-white text-sm p-2 bg-black items-center mb-2'>
                <p>Add Student</p>
                <a href="">
                    <FontAwesomeIcon icon="fa-solid fa-plus"/>
                </a>
            </a>
        </div>



        // <div className="mt-2 items-center border-b border-gray-200 border-solid">
        //     <div
        //         className='flex w-full items-start gap-12 max-md:justify-center mt-8 font-light '>
        //
        //         <div className={`absolute text-base self-stretch ${selectedItem === 'Classes' ? 'text-black border-b-2 border-green-500' : 'text-gray-400'}
        //         ${selectedItem !== 'Classes' ? 'hover:text-gray-900 hover:font-medium hover:border-b-2 hover:border-green-500' : ''}`}
        //             onClick={() => handleItemClick('Classes')}>
        //             Classes
        //         </div>
        //         <div className={` text-base self-stretch ${selectedItem === 'Students' ? 'text-black border-b-2 border-green-500' : 'text-gray-400'}
        //         ${selectedItem !== 'Students' ? 'hover:text-gray-900 hover:font-medium hover:border-b-2 hover:border-green-500' : ''}`}
        //             onClick={() => handleItemClick('Students')}
        //         > Students
        //         </div>
        //         <div
        //             className={` text-base self-stretch ${selectedItem === 'Attendance' ? 'text-black border-b-2 border-green-500' : 'text-gray-400'}
        //          ${selectedItem !== 'Attendance' ? 'hover:text-gray-900 hover:font-medium hover:border-b-2 hover:border-green-500' : ''}`}
        //             onClick={() => handleItemClick('Attendance')}
        //         > Attendance
        //         </div>
        //     </div>
        // </div>
    );
}
