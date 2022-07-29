import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getSizeImage } from "@/utils/format-utils";

import XXThemeHeaderPlayer from "@/components/theme-header-player";
import { SimiPlaylistWrapper } from "./style";
import { getSimiPlaylistAction } from "../../store/actionCreators";

export default memo(function SimiPlaylist() {
  // redux hooks
  const { simiPlaylist, songInfo } = useSelector(
    (state) => ({
      songInfo: state.getIn(["player", "songInfo"]),
      simiPlaylist: state.getIn(["player", "simiPlaylist"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // handel
  const { song } = songInfo;

  // other hooks
  useEffect(() => {
    dispatch(getSimiPlaylistAction(song.id));
  }, [dispatch, song]);

  return (
    <SimiPlaylistWrapper>
      <XXThemeHeaderPlayer title="包含这首歌的歌单" />
      <div className="songs">
        {simiPlaylist.map((item, index) => {
          return (
            <div className="song-item" key={item.id}>
              <a className="image" href="/#">
                {item.coverImgUrl && (
                  <img src={getSizeImage(item.coverImgUrl, 50)} alt="" />
                )}
              </a>
              <div className="info text-nowrap">
                <a href="#/" className="name">
                  {item.name}
                </a>
                <div className="auchor">
                  by
                  <a href="#/" className="nickname">
                    {item.creator.nickname}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SimiPlaylistWrapper>
  );
});
