import React, { memo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getSongDetailAction } from "@/pages/player/store";
import { PlayListWrapper, SongWrapper } from "./style";
import { formatDate } from "@/utils/format-utils";
const PlayList = memo(() => {
  // redux-hook
  const dispatch = useDispatch();
  const { playList, currentSong } = useSelector(
    (state) => ({
      currentSong: state.getIn(["player", "currentSong"]),
      playList: state.getIn(["player", "playList"]),
    }),
    shallowEqual
  );

  const handleDuration = (dt) => {
    const duration = dt || 0;
    const showDuration = formatDate(duration, "mm:ss");
    return showDuration;
  };
  // other handle
  const playMusic = (item) => {
    dispatch(getSongDetailAction(item.id));
  };
  return (
    <PlayListWrapper className="xui-scroll">
      <ul className="song_list">
        {playList.map((song) => {
          return (
            <SongWrapper
              key={song.id}
              className="song"
              currentSong={currentSong}
              song={song}
              onClick={(e) => playMusic(song)}
            >
              <div className="isplay">
                <i className="sprite_playlist icon"></i>
              </div>
              <div className="name text-nowrap">{song.name}</div>
              <div className="operator">
                <i className="sprite_playlist icon icon_add">收藏</i>
                <i className="sprite_playlist icon icon_share">分享</i>
                <i className="sprite_playlist icon icon_dl">下载</i>
                <i className="sprite_playlist icon icon_del">删除</i>
              </div>
              <div className="singer text-nowrap">{song.ar[0].name}</div>
              <div className="duration">{handleDuration(song.dt)}</div>
              <div className="src">
                <a
                  href="#/todo"
                  className="icon sprite_playlist"
                  title="来自榜单"
                >
                  来源
                </a>
              </div>
            </SongWrapper>
          );
        })}
      </ul>
    </PlayListWrapper>
  );
});

export default PlayList;
