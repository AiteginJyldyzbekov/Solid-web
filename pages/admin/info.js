import DashboardHeader from "../../components/common/dashboardHeader/dashboardHeader";
import DashboardAside from "../../components/common/aside/Aside";
export default function Info(props) {

  return (
    <div className="dashboard-wrapper">
      <DashboardAside  {...props} />
      <div className="dashboard-under-wrapper">
        <DashboardHeader {...props}/>
        {/* Code here ..... */}
      </div>
    </div>
  );
}
