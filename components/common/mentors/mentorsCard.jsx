export const Mentorscard = ({ img, name, info}) => {
  return (
    <>
      <div className="col-md-4">
        <div className="mt-5 text-center">
          <img data-src="images/team/Ilyas.png" alt="Ilyas"
            className="lazy img-fluid mx-auto d-block rounded img-thumbnail loaded" src={img} />
          <div className="text-center mt-3">
            <p className="font-weight-bold mb-0">{name}</p>
            <p className="text-muted mb-0">{info}</p>
          </div>
        </div>
      </div>
    </>
  );
}

