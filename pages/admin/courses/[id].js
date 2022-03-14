import React from 'react'
import DashboardAside from '../../../components/common/aside/Aside'
import CourseEdit from '../../../components/pages/CourseEdit'

export default function() {
  return (
    <div className='dashboard-wrapper'>
       
      <DashboardAside/>
        <CourseEdit/>
    </div>
  )
}