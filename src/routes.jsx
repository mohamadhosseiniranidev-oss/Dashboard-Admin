import { createBrowserRouter } from "react-router";

import DashboardLayout from "./Components/Layouts/DashboardLayout";
import Home from "./pages/Home/Page.jsx";
import Products from "./pages/Products/Page.jsx";
import Users from "./pages/Users/Page.jsx";
import Tickets from "./pages/Tickets/Page.jsx";
import DetailTicket from "./pages/DetailTicket/Page.jsx";
import Comments from "./pages/Comments/Page.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "tickets",
        element: <Tickets />,
      },
      {
        path: "tickets/:ticketId",
        element: <DetailTicket />,
      },
      {
        path: "comments",
        element: <Comments />,
      },
    ],
  },
]);

export default router;
