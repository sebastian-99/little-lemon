import { Fragment, useState } from "react";
import { useNavigate } from "react-router";
import CalendarReserveTable from "./components/CalendarReserveTable";
import ButtonReserveTable from "./components/ButtonReserveTable";
import SelectGuests from "./components/SelectGuests";
import { TIME } from "../data/timeData";
import { toast } from "react-toastify";
const WebReserveTable = () => {
  const navi = useNavigate();
  const [table, setTable] = useState({
    date: null,
    time: null,
    guests: null,
  });

  const reserveHandler = () => {
    if (table.date == null) {
      toast.warning("Please pick a date to reserve.");
    }
    if (table.time == null) {
      toast.warning("Please pick a hour to reserve.");
    }
    if (table.guests == null) {
      toast.warning("Please select how many guests will be.");
    }
    if (table.date != null && table.time != null && table.guests != null) {
      navi("/payment", { state: { ...table } });
    }
  };

  return (
    <>
      <h1 className="text-center color-text-little">Reserve a Table</h1>
      <div>
        <h3 className="color-text-little">DATE</h3>
        <CalendarReserveTable setTable={setTable} />
      </div>
      <div className="mt-5">
        <h3 className="color-text-little">Time</h3>
        <div className="overflow-x-auto text-nowrap pb-4 pb-xs-4 pb-sm-4 pb-md-3 pb-lg-3 pb-xl-3 mt-4">
          {TIME.map((time, index) => (
            <Fragment key={index}>
              <ButtonReserveTable
                data={time}
                setTable={setTable}
                hour={table.time}
              />
            </Fragment>
          ))}
        </div>
      </div>
      <div className="mt-3">
        <h3 className="color-text-little mb-4">Guests</h3>
        <SelectGuests setTable={setTable} />
      </div>
      <div className="d-grid gap-2 col-3 mx-auto mt-4">
        <button
          className="btn"
          style={{ borderRadius: "16px", backgroundColor: "#F4CE14" }}
          type="button"
          onClick={reserveHandler}
        >
          Reserve
        </button>
      </div>
    </>
  );
};

export default WebReserveTable;
