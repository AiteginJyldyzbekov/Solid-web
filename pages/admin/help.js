import DashboardHeader from "../../components/common/dashboardHeader/dashboardHeader";
import DashboardAside from "../../components/common/aside/Aside";
export default function Help(props) {

  return (
    <div className="dashboard-wrapper">
      <DashboardAside  {...props} />
      <div className="dashboard-under-wrapper">
        <DashboardHeader />
        {/* Code here ..... */}
      </div>
    </div>
  );
}
