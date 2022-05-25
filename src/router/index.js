import XXDiscover from "@/pages/discover";
import XXFriend from "@/pages/firend";
import XXMine from "@/pages/mine";
import { useEffect } from "react";

import { useRoutes, useNavigate } from "react-router-dom";
import XXAlbum from "@/pages/discover/c-pages/album";
import XXArtist from "@/pages/discover/c-pages/artist";
import XXDJRadio from "@/pages/discover/c-pages/djradio";
import XXRanking from "@/pages/discover/c-pages/ranking";
import XXRecommend from "@/pages/discover/c-pages/recommend";
import XXSongs from "@/pages/discover/c-pages/songs";
import XXPlayer from "@/pages/player";

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
          element: <XXPlayer />
        }
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
