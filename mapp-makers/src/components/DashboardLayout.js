import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookBookmark, faChevronDown, faGear, faPlus, faQrcode, faUserGroup} from "@fortawesome/free-solid-svg-icons";
import * as fontawesome from "@fortawesome/fontawesome-svg-core";
import Sidebar from "./Sidebar";
import CourseBanner from "./CourseBanner";
import {DashNavbar} from "./DashNavbar";


fontawesome.library.add(faUserGroup, faBookBookmark, faPlus, faGear, faChevronDown,faQrcode);


function DashboardLayout({children}) {
    return (
        <div className='grid grid-cols-4 h-screen'>
            <Sidebar courses={['Software Development I', 'Software Development II','Intermediate Programming']}/>
            <div className='col-span-3'>
                    {children}
            </div>
        </div>
    );
}

export default DashboardLayout;