export const Courcescontainer = ({img, title, desc}) => {

  console.log("sgfdg");

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

