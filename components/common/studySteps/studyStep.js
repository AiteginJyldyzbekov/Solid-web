export const Studystep = ({name, description}) => {
  return (
    <>
      <div className="study__steps--step">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </>
  );
}