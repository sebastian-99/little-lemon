import { createBrowserRouter } from "react-router";
// eslint-disable-next-line no-unused-vars
import * as webExport from "./pages/webExports";
const ROUTER = createBrowserRouter([
  {
    path: "/",
    element: <webExport.WebLayout />,
    children: [
      {
        index: true,
        element: <webExport.WebHome />,
      },
      {
        path: "reserve-table",
        element: <webExport.WebReserveTable />,
        children: [
          {
            path: "payment",
            element: <h1>entro</h1>,
          },
        ],
      },
      {
        path: "payment",
        element: <webExport.WebPayment />,
      },
    ],
  },
]);

export default ROUTER;
