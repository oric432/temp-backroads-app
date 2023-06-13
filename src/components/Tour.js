const Tour = (props) => {
  const { img, date, title, text, country, duration, startPrice } = props;
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={img} className="tour-img" alt="" />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
        </div>
        <p>{text}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>{" "}
            {country}
          </p>
          <p>{duration} days</p>
          <p>from ${startPrice}</p>
        </div>
      </div>
    </article>
  );
};
export default Tour;
