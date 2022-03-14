import React from 'react'
import DashboardAside from '../../../components/common/aside/Aside'
import NewCourse from '../../../components/pages/NewCourse'

export default function NewCourses() {
  return (
    <div className="dashboard-wrapper">
      <DashboardAside />
      <NewCourse/>
    </div>
  )
}