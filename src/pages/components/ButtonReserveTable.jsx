const ButtonReserveTable = ({ data, setTable, hour }) => {
  const clikedHelper = () => {
    console.log(data.time);
    setTable((prev) => {
      return {
        ...prev,
        time: data.time,
      };
    });
  };
  return (
    <button
      type="button"
      className="btn fw-semibold mx-2"
      style={{
        background: hour == data.time ? "rgb(190, 249, 209)" : "#EDEFEE",
        borderRadius: "16px",
      }}
      onClick={clikedHelper}
    >
      {data.time}
    </button>
  );
};

export default ButtonReserveTable;
