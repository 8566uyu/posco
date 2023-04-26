import "./styles/Proj4.scss";

const Proj4 = () => {
  return (
    <div className="Proj4">
      <div>
        <img src={process.env.PUBLIC_URL + "/images/1.png"} alt="sample" />
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + "/images/2.png"} alt="sample" />
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + "/images/3.png"} alt="sample" />
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + "/images/4.png"} alt="sample" />
      </div>
      <div>
        <img src={process.env.PUBLIC_URL + "/images/5.png"} alt="sample" />
      </div>
    </div>
  );
};

export default Proj4;
