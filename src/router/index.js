import React from "react";
import { useEffect } from "react";

import { useRoutes, useNavigate } from "react-router-dom";

const XXDiscover = React.lazy((_) => import("@/pages/discover"));
const XXFriend = React.lazy((_) => import("@/pages/firend"));
const XXMine = React.lazy((_) => import("@/pages/mine"));
const XXAlbum = React.lazy((_) => import("@/pages/discover/c-pages/album"));
const XXArtist = React.lazy((_) => import("@/pages/discover/c-pages/artist"));
const XXDJRadio = React.lazy((_) => import("@/pages/discover/c-pages/djradio"));
const XXRanking = React.lazy((_) => import("@/pages/discover/c-pages/ranking"));
const XXRecommend = React.lazy((_) =>
  import("@/pages/discover/c-pages/recommend")
);
const XXSongs = React.lazy((_) => import("@/pages/discover/c-pages/songs"));
const XXPlayer = React.lazy((_) => import("@/pages/player"));

function GetRoutes() {
  const elements = useRoutes([
    {
      path: "/",
      element: <Redirect to="/discover" />,
      // element: {<Redirect to="/discover" />},
      // element: <XXDiscover />,
    },
    {
      path: "/discover",
      element: <XXDiscover />,
      children: [
        {
          path: "/discover",
          element: <Redirect to="/discover/recommend" />,
        },
        {
          path: "/discover/recommend",
          element: <XXRecommend />,
        },
        {
          path: "/discover/album",
          element: <XXAlbum />,
        },
        {
          path: "/discover/djradio",
          element: <XXDJRadio />,
        },
        {
          path: "/discover/ranking",
          element: <XXRanking />,
        },
        {
          path: "/discover/artist",
          element: <XXArtist />,
        },
        {
          path: "/discover/songs",
          element: <XXSongs />,
        },
        {
          path: "/discover/player",
          element: <XXPlayer />,
        },
      ],
    },
    {
      path: "/mine",
      element: <XXMine />,
    },
    {
      path: "/friend",
      element: <XXFriend />,
    },
  ]);
  return elements;
}
function Redirect({ to }) {
  let navigate = useNavigate();
  useEffect(() => {
    navigate(to);
  });
  return null;
}
export default GetRoutes;
