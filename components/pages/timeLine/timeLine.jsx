import { Timelineright } from "./timeLineright";
import { Timelineleft } from './timeLineLeft';

export const Timeline = ({ des, title, isOdd }) => {
  return (
    <div className="timeline-item">
      <div className="row">
        {
          !isOdd ? <Timelineleft des={des} title={title}/> : <Timelineright des={des} title={title}/>
        }
      </div>
    </div>
  );
}
























{/* {
  !isOdd ? <div className="col-md-6">
    <div className="duration date-label-left"><img src="images/intranet.png" alt="Intranet" className="img-fluid" />
    </div>
  </div> : <div className="col-md-6">
    <div className="works works-description-left">
      <h3>{title}</h3>
      <p className="web-cta-desc mx-auto text-muted">{des}</p>
    </div>
  </div>
}
{
  !isOdd ? <div className="col-md-6">
    <div className="works works-description-right">
      <h3>{title}</h3>
      <p className="web-cta-desc mx-auto text-muted">{des}</p>
    </div>
  </div> : <div className="col-md-6">
    <div className="duration duration-right"><img src="images/intranet.png" alt="Intranet" className="img-fluid" />
    </div>
  </div>
} */}






































