import React, { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import LyricPanel from "./c-cpn/lyric-panel";
import PlayList from "./c-cpn/play-list";
import { PlayerPanelBodyWrapper } from "./style";

const PlayerPanelBody = memo(() => {
  const { currentSong } = useSelector(
    (state) => ({
      currentSong: state.getIn(["player", "currentSong"]),
    }),
    shallowEqual
  );

  const picUrl =
    currentSong.al &&
    currentSong.al.picUrl &&
    currentSong.al.picUrl + "?imageView&blur=40x20";
  return (
    <PlayerPanelBodyWrapper>
      <img className="image" src={picUrl} alt="" />
      <PlayList></PlayList>
      <div className="line"></div>
      <LyricPanel></LyricPanel>
    </PlayerPanelBodyWrapper>
  );
});

export default PlayerPanelBody;
