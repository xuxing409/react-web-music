import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import {
  getSimiSongAction,
  getSongDetailAction,
} from "../../store/actionCreators";
import XXThemeHeaderPlayer from "@/components/theme-header-player";
import { RelevantWrapper } from "./style";
const SongRelevant = memo(() => {
  const { songInfo, simiSongs } = useSelector(
    (state) => ({
      songInfo: state.getIn(["player", "songInfo"]),
      simiSongs: state.getIn(["player", "simiSongs"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  // handle
  const { song } = songInfo;

  // other hook
  useEffect(() => {
    dispatch(getSimiSongAction(song.id));
  }, [dispatch, song]);

  const playMusic = (id) => {
    dispatch(getSongDetailAction(id));
  };
  return (
    <RelevantWrapper>
      <XXThemeHeaderPlayer title="相似歌曲" />
      <div className="songs">
        {simiSongs.map((item, index) => {
          return (
            <div className="song-item" key={item.id}>
              <div className="info">
                <div className="title">
                  <a href="#/">{item.name}</a>
                </div>
                <div className="artist">
                  <a href="#/">{item.artists[0].name}</a>
                </div>
              </div>
              <div className="operate">
                <button
                  className="item sprite_icon3 play"
                  onClick={(e) => playMusic(item.id)}
                ></button>
                <button className="item sprite_icon3 add"></button>
              </div>
            </div>
          );
        })}
      </div>
    </RelevantWrapper>
  );
});

export default SongRelevant;
