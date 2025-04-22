const OrderDescription = ({ data }) => {
  return (
    <div className="row px-3">
      <div className="col-12">
        <h3>
          {data.name} <span className="badge text-bg-success">{data.type}</span>
        </h3>
      </div>
      <div className="col-12 col-xs-6 col-sm-8 col-md-8 col-lg-8 col-xl-8">
        <p className="fw-light fs-4">{data.description}</p>
        <p className="fs-3" style={{ color: "#495E57" }}>
          ${data.price}
        </p>
      </div>
      <div className="col-12 col-xs-6 col-sm-4 col-md-4 col-lg-4 col-xl-4 d-flex justify-content-center align-items-center">
        <img
          className="img-fluid"
          style={{ width: "150px", height: "150px" }}
          src={data.image}
          alt={data.name}
        />
      </div>
      <hr className="mt-3" />
    </div>
  );
};

export default OrderDescription;
