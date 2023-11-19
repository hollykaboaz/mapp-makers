import React from 'react'
import { DashNavbar } from '../../components/DashNavbar'
import {Table} from '../../components/Table'
import sImage from "../../assets/avatar.png";
import { CourseHeader } from '../../components/CourseHeader';
import Student from "../Student/Student";
import CourseBanner from "../../components/CourseBanner";
import DashboardLayout from "../../components/DashboardLayout";


function Dashboard() {

const courseName = "Software Dev,";// need to fix how these will be passed through the db and the App
const courseSection= " Section 2";
const customImage = sImage;


  const data = [
    {id:1,
    image:sImage,
    lastName: 'Khawaja',
    firstName: 'Duaa',
    email: 'duaak@ggc.edu',
    attendance:'75%'
    },

    {id:2,
    image:sImage,
    lastName: 'Khawaja',
    firstName: 'Fatima',
    email:  'fatimak@ggc.edu',
    attendance:'85%'
    },

    {id:3,
    image:sImage,
    lastName: 'Boaz',
    firstName: 'Holly',
    email: 'hollyB@ggc.edu',
    attendance:'95%'},
    {
      id: 4,
      image:'',
      lastName: 'Doe',
      firstName: 'John',
      email: 'john.doe@example.com',
      attendance: '80%'
    },

  ] 
  return (
    <>
      <DashboardLayout>
        <CourseBanner></CourseBanner>
        <div className='mx-12 py-4'>
          <Table data={data}/>
        </div>
      </DashboardLayout>


    </>
  )
}

export default Dashboard;