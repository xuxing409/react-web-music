import React, { memo, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { PlayerInfoLeft, PlayerInfoRight, PlayerInfoWrapper } from "./style";
import OperationBarWrapper from "@/components/song-operation-bar";
import SingerName from "../../../../components/singer-name";

const PlayerInfo = memo(() => {
  // props and hooks
  const [isSpread, setIsSpread] = useState(false);
  // redux

  const { songInfo } = useSelector(
    (state) => ({
      songInfo: state.getIn(["player", "songInfo"]),
    }),
    shallowEqual
  );
  const { song, lyricList } = songInfo;

  // handle
  const songId = song.id;
  const singers = song.ar || ["未知歌手"];
  const album = song.al || "未知专辑";
  const lyricLine = isSpread ? lyricList.length : 13;

  return (
    <PlayerInfoWrapper className="clear_float">
      <PlayerInfoLeft className="clear_float">
        <div className="cover_wrap">
          {album && (
            <img
              src={
                album.picUrl + "?param=130y130"
              }
              alt=""
            />
          )}
          <span className="sprite_covor mask"></span>
        </div>
        <div className="outchain">
          <i className="sprite_icon2 music"></i>
          <a href="#/todo">生成外链播放器</a>
        </div>
      </PlayerInfoLeft>
      <PlayerInfoRight className="clear_float" isSpread={isSpread}>
        <div className="header">
          <i className="sprite_icon2 tips"></i>
          <h1 className="title">{song.name}</h1>
        </div>
        <p className="singer">
          歌手:&nbsp;
          <span className="singer_name">
            <SingerName singers={singers} />
          </span>
        </p>

        <p className="album">
          所属专辑:
          <span>
            <a href={`/album/?id=${album.id}`} className="album_name">
              {album.name}
            </a>
          </span>
        </p>

        <OperationBarWrapper
          songId={songId}
          favorTitle="收藏"
          shareTitle="分享"
          downloadTitle="下载"
          commentTitle="(167366)"
        />
        <div className="lyric">
          {lyricList.slice(0, lyricLine).map((lyricLine, index) => {
            return (
              <p key={lyricLine.time}>
                {lyricLine.content}
                <br />
              </p>
            );
          })}
        </div>
        <button
          className="lyric-control"
          onClick={(e) => setIsSpread(!isSpread)}
        >
          {isSpread ? "收起" : "展开"}
          <i className="sprite_icon2"></i>
        </button>
      </PlayerInfoRight>
    </PlayerInfoWrapper>
  );
});

export default PlayerInfo;
