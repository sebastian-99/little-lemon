import { RouterProvider } from "react-router";
import ROUTER from "./routes";

function App() {
  return (
    <>
      <RouterProvider router={ROUTER} />
    </>
  );
}

export default App;
