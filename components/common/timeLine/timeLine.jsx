import { Timelineright } from "./timeLineright";
import { Timelineleft } from './timeLineLeft';

export const Timeline = ({ des, title, isOdd, img }) => {
  return (
    <div className="timeline-item">
      <div className="row">
        {
          !isOdd ? <Timelineleft img={img} des={des} title={title}/> : <Timelineright img={img} des={des} title={title}/>
        }
      </div>
    </div>
  );
}