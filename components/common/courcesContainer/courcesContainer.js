export const Courcescontainer = ({img, title, desc}) => {

  return (
    <>
      <div className="a__courses__card">
        <img src={img} alt="#" />
        <div className="title">{title}</div>
        <p>{desc}</p>
      </div>
    </>
  );
}

