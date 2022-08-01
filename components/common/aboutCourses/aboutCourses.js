export const Courses = ({ title, desc }) => {
  return (
    <div className="col-md-4">
      <div className="service-box">
        <div className="services-icon">
          <i className="fad fa-chart-pie"></i>
        </div>
        <div className="mt-3">
          <p className="services-title mb-3">{title}</p>
          <p className="services-subtitle text-muted">{desc}</p>
        </div>
      </div>
    </div>
  );
};
