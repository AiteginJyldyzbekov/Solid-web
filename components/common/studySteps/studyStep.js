export const Studystep = ({title, description}) => {
  return (
    <div className="study__steps--step">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}