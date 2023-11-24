import React, {useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import AddStudentForm from './AddStudentForm';
import { MultipurposeButton } from './MultipurposeButton';
import {Modal} from './Modal';



export const DashNavbar = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        setSelectedItem(item);
        console.log(selectedItem)
    };
    const [isOpen, setIsOpen] = useState(false);

    return (

        <div className='flex flex-row justify-between navbar'>
            <div className=" font-light">
                <a className = { selectedItem === 'Classes' ? 'font-medium nav-link nav-link-grow-up' : 'nav-link nav-link-grow-up'}
                   onClick= {() => handleItemClick('Classes')}  href="#">Classes</a>
                <a  className = { selectedItem === 'Students' ? 'font-medium nav-link nav-link-grow-up' : 'nav-link nav-link-grow-up'} onClick= {() => handleItemClick('Students')} href="#">Students</a>
                <a  className = { selectedItem === 'Attendance' ? 'font-medium nav-link nav-link-grow-up' : 'nav-link nav-link-grow-up'}
                    onClick= {() => handleItemClick('Attendance')} href="#">Attendance</a>
            </div>

            <button  className='flex flex-row gap-2 rounded text-white text-xs p-2 bg-black items-center mb-2'onClick={() => setIsOpen(true)}>Add Student</button>
      <Modal open={isOpen} onClose={()=>setIsOpen(false)}>
        <AddStudentForm/>
      </Modal>
        </div>



    );
}
