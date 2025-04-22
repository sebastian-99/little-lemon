import Select from "react-select";

const SelectGuests = ({ setTable }) => {
  const options = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
  ];
  const customStyles = {
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none", // Oculta la barra separadora si no la necesitas
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: state.isFocused ? "blue" : "gray", // Cambia el color al enfocar
      padding: 8,
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      display: state.hasValue ? "flex" : "inline-grid",
      padding: 0,
      marginLeft: "10px",
    }),
    control: (baseStyles) => ({
      ...baseStyles,
      border: "2px solid #000",
      borderRadius: 19,
      width: "100%",
    }),
  };
  const SingleValue = ({ children, ...props }) => (
    <div style={{ display: "flex", alignItems: "center" }} {...props}>
      <i className="fa-solid fa-user color-text-little me-2"></i>
      <span>{children}</span>
    </div>
  );
  const DropdownIndicator = (props) => {
    return (
      <div
        style={customStyles.dropdownIndicator(
          props,
          props.selectProps.menuIsOpen
        )}
      >
        <i className="fa-solid fa-circle-chevron-down color-text-little"></i>
      </div>
    );
  };

  const onChangeGuest = (event) => {
    setTable((prev) => {
      return {
        ...prev,
        guests: event.value,
      };
    });
  };

  return (
    <Select
      placeholder="Select the number of guests"
      options={options}
      styles={customStyles}
      components={{ DropdownIndicator, SingleValue }}
      onChange={(event) => onChangeGuest(event)}
    />
  );
};

export default SelectGuests;
