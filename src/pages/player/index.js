import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import PlayerInfo from "./c-cpn/player-info";
import SimiPlaylist from "./c-cpn/simi_playlist";
import SongContent from "./c-cpn/song-comments";
import SongRelevant from "./c-cpn/song-relevant";
import { getSongInfoAction } from "./store/actionCreators";
import { PlayerWrapper, PlayerLeft, PlayerRight } from "./style";

const XXPlayer = memo(() => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const id = searchParams.get("id");
  useEffect(() => {
    dispatch(getSongInfoAction(id));
  }, [dispatch, id]);

  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <PlayerInfo></PlayerInfo>
          <SongContent></SongContent>
        </PlayerLeft>
        <PlayerRight>
          <SimiPlaylist></SimiPlaylist>
          <SongRelevant></SongRelevant>
          {/* <h2>DownLoad</h2> */}
        </PlayerRight>
      </div>
    </PlayerWrapper>
  );
});

export default XXPlayer;
