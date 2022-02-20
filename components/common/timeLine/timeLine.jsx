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