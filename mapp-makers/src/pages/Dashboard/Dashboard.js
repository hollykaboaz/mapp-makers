import React from 'react';
import CourseBanner from "../../components/CourseBanner";
import DashboardLayout from "../../components/DashboardLayout";

function Dashboard(props) {
    return (
        <div>
            <DashboardLayout>
                        <CourseBanner courseName = 'Software Development I, Section 01'/>
            </DashboardLayout>
        </div>
    );
}

export default Dashboard;