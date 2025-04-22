import { useState } from "react";
const ButtonOrder = ({ data, setFilterType }) => {
  const [isSelectded, setIsSelected] = useState(false);
  const clickedHandler = () => {
    const setSelect = !isSelectded;
    setIsSelected(setSelect);
    if (setSelect) {
      setFilterType((prev) => {
        return [...prev, data.type];
      });
    } else {
      setFilterType((prev) => {
        return prev.filter((type) => type !== data.type);
      });
    }
  };
  return (
    <button
      type="button"
      className="btn fw-semibold mx-2"
      style={{
        background: isSelectded ? "rgb(190 249 209)" : "#EDEFEE",
        borderRadius: "16px",
      }}
      onClick={clickedHandler}
    >
      {data.type}
    </button>
  );
};

export default ButtonOrder;
