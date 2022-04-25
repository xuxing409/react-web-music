import XXDiscover from "@/pages/discover";
import XXFriend from "@/pages/firend";
import XXMine from "@/pages/mine";
import { useRoutes } from "react-router-dom";

function GetRoutes() {
  const elements = useRoutes([
    {
      path: "/",
      exact: true,
      element: <XXDiscover />,
    },
    {
      path: "/mine",
      element: <XXMine />,
    },
    {
      path: "/friend",
      element: <XXFriend />,
    },
    {
      path: "/discover",
      element: <XXDiscover />,
    },
  ]);
  return elements;
}

export default GetRoutes;
