import React, { memo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getShowPlayListAction } from "../../../store/actionCreators";
import { HeaderLeft, HeaderRight, PlayerPanelHeaderWrapper } from "./style";

const PlayerPanelHeader = memo(() => {
  // redux-hook
  const dispatch = useDispatch();
  const { currentSong } = useSelector(
    (state) => ({
      currentSong: state.getIn(["player", "currentSong"]),
    }),
    shallowEqual
  );
  return (
    <PlayerPanelHeaderWrapper>
      <HeaderLeft>
        <h4>播放列表</h4>
        <a href="#/todo" className="addall">
          <span className="sprite_playlist icon favor"></span>
          <span>收藏全部</span>
        </a>
        <span className="line"></span>
        <a href="#/todo" className="clear">
          <span className="sprite_playlist icon remove"></span>
          <span>清除</span>
        </a>
      </HeaderLeft>
      <HeaderRight className="text-nowrap">
        <p>{currentSong.name}</p>
      </HeaderRight>
      <span
        className="sprite_playlist icon close"
        onClick={(e) => dispatch(getShowPlayListAction(false))}
      ></span>
    </PlayerPanelHeaderWrapper>
  );
});

export default PlayerPanelHeader;
