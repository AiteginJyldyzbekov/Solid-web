export const Reason = ({ img, text }) => {
  return (
    <>
      <div className="reason">
        <img src={img} alt="#" />
        <p>
          {text}
        </p>
      </div>
    </>
  );
}

