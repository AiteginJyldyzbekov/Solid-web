export const Timelineright = ({des, title}) => {
  return (
    <>
      <div className="col-md-6">
        <div className="works works-description-right">
          <h3>{title}</h3>
          <p className="web-cta-desc mx-auto text-muted">{des}</p>
        </div>
      </div> 
      <div className="col-md-6">
        <div className="duration duration-right">
          <img src="images/intranet.png" alt="Intranet" className="img-fluid" />
        </div>
      </div>
    </>
  );
}


