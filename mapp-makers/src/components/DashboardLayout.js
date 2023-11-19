import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookBookmark, faChevronDown, faGear, faPlus, faUserGroup} from "@fortawesome/free-solid-svg-icons";
import * as fontawesome from "@fortawesome/fontawesome-svg-core";
import Sidebar from "./Sidebar";
import CourseBanner from "./CourseBanner";


fontawesome.library.add(faUserGroup, faBookBookmark, faPlus, faGear, faChevronDown);


function DashboardLayout({children}) {
    return (
        <div className='grid grid-cols-4 h-screen'>
            <Sidebar courses={['Software Development I', 'Software Development II','Intermediate Programming']}/>
            <div className='col-span-3'>
                <CourseBanner courseName = 'Software Development I, Section 01'/>
                <div className='mx-12 my-4'>
                    {children}
                </div>

            </div>
        </div>
    );
}

export default DashboardLayout;