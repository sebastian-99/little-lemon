import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import tableStyle from "./CalendarReserveTable.module.css";
const CalendarReserveTable = ({ setTable }) => {
  const tileClassName = ({ date }) => {
    const today = new Date();
    if (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    ) {
      return tableStyle["tile-current"];
    }
    return tableStyle.tiles;
  };

  const tileContent = ({ date }) => {
    const today = new Date();
    if (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    ) {
      return (
        <div className={tableStyle["circle-today"]}>
          <span className={tableStyle.label}>{date.getDate()}</span>
        </div>
      );
    }
  };

  const selectDateHandler = (date) => {
    const formatDate = date.toLocaleDateString("es-MX");
    setTable((prev) => {
      return {
        ...prev,
        date: formatDate,
      };
    });
  };

  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <Calendar
          className={tableStyle.calendar}
          tileClassName={tileClassName}
          tileContent={tileContent}
          showNavigation={true}
          onClickDay={selectDateHandler}
        />
      </div>
      <div className="row mt-4">
        <div className="col-4 d-flex flex-row justify-content-center">
          <div
            className={tableStyle["circle-today"]}
            style={{
              backgroundColor: "#FFF",
              border: "1px solid #000",
              margin: "unset",
            }}
          >
            <span className={tableStyle.label}></span>
          </div>
          <p className="d-flex align-items-center mb-0 ms-1">Available</p>
        </div>
        <div className="col-4 d-flex flex-row justify-content-center">
          <div
            className={tableStyle["circle-today"]}
            style={{
              backgroundColor: "#EED833",
              border: "1px solid #000",
              margin: "unset",
            }}
          >
            <span className={tableStyle.label}></span>
          </div>
          <p className="d-flex align-items-center mb-0 ms-1">Almost Full</p>
        </div>
        <div className="col-4 d-flex flex-row justify-content-center">
          <div
            className={tableStyle["circle-today"]}
            style={{
              backgroundColor: "#FB0606",
              border: "1px solid #000",
              margin: "unset",
            }}
          >
            <span className={tableStyle.label}></span>
          </div>
          <p className="d-flex align-items-center mb-0 ms-1">Full</p>
        </div>
      </div>
    </>
  );
};

export default CalendarReserveTable;
