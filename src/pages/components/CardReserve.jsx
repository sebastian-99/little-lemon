import { Link } from "react-router";
import FoodImg from "../../assets/img/food1.png";
const CardReserve = () => {
  return (
    <div className="card" style={{ backgroundColor: "#495E57" }}>
      <div className="card-body">
        <h1 style={{ color: "#F4CE14" }}>Little Lemon</h1>
        <h2 className="text-light">Chicago</h2>
        <div className="row mt-4">
          <div className="col-6 col-xs-6 col-sm-6 col-md-6 col-lg-12 col-xl-12 order-md-0 order-lg-1 order-xl-1 d-flex justify-content-center align-items-center flex-column mt-0 mt-xs-0 mt-sm-0 mt-md-0 mt-lg-5 mt-xl-5">
            <p className="text-light text-center fs-5">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <Link to="reserve-table">
              <button
                className="btn mt-3 fw-semibold"
                style={{ backgroundColor: "#F4CE14", borderRadius: "16px" }}
              >
                Reserve a table
              </button>
            </Link>
          </div>
          <div className="col-6 col-xs-6 col-sm-6 col-md-6 col-lg-12 col-xl-12 order-md-1 order-lg-0 order-xl-0 d-flex justify-content-center align-items-center">
            <img
              className="img-fluid rounded-3"
              src={FoodImg}
              alt="Image reserve table"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardReserve;
