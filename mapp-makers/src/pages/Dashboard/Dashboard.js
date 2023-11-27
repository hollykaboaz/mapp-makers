import React, {useState, useEffect} from 'react'
import { DashNavbar } from '../../components/DashNavbar'
import {Table} from '../../components/Table'
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import DashboardLayout from "../../components/DashboardLayout";

function Dashboard() {
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    
        const db = getFirestore();
        const studentsCollection = collection(db, 'students');
  // Use onSnapshot to listen for changes in the collection
  const studentSnapshot = onSnapshot(studentsCollection, (querySnapshot) => {
    const studentsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setStudentData(studentsData);
    });

       // Cleanup the subscription when the component unmounts
    return () => studentSnapshot();
  }, []); // The empty dependency array ensures that this effect runs once when the component mounts

const columns = [
  { Header: 'ID', accessor: 'id' },
  { Header: 'Image', accessor: 'image' },
  { Header: 'Last Name', accessor: 'lastName' },
  { Header: 'First Name', accessor: 'firstName' },
  { Header: 'Email', accessor: 'email' },
  { Header: 'Attendance', accessor: 'attendance' },
];
  return (
    <>
            <DashNavbar/>
            <Table columns={columns} data={studentData}/>

    </>
  )
}

export default Dashboard;