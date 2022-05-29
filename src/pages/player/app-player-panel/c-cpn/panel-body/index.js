import React, { memo } from "react";
import LyricPanel from "./c-cpn/lyric-panel";
import PlayList from "./c-cpn/play-list";
import { PlayerPanelBodyWrapper } from "./style";

const PlayerPanelBody = memo(() => {
  return (
    <PlayerPanelBodyWrapper>
      <PlayList></PlayList>
      {/* <div className="line"></div> */}
      <LyricPanel></LyricPanel>
    </PlayerPanelBodyWrapper>
  );
});

export default PlayerPanelBody;
