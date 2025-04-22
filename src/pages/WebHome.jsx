import CardReserve from "./components/CardReserve";
import OrderList from "./components/OrderList";
const WebHome = () => {
  return (
    <>
      <CardReserve />
      <div className="mt-5">
        <h3>ORDER FOR DELIVERY!</h3>
        <OrderList />
      </div>
    </>
  );
};

export default WebHome;
