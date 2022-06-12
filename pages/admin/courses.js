import DashboardHeader from "../../components/common/dashboardHeader/dashboardHeader";
import DashboardAside from "../../components/common/aside/Aside";
import EditCoursesPage from "../../components/pages/EditCoursesPage";
export default function Courses(props) {

  return (
    <div className="dashboard-wrapper">
      <DashboardAside  {...props} />
      <div className="dashboard-under-wrapper">
        <DashboardHeader {...props} />
        <EditCoursesPage/>
      </div>
    </div>
  );
}
