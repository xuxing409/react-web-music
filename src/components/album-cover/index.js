import React, { memo } from "react";

import { getSizeImage } from "@/utils/format-utils";

import { AlbumWrapper } from "./style";
const XXAlbumCover = memo((props) => {
  // state & props
  const { info, width = 153, size = 130, bgp = "-845px" } = props;

  return (
    <AlbumWrapper width={width} size={size} bgp={bgp}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl, size)} alt={info.name}></img>
        <a href="/todo" className="cover image-cover"></a>
      </div>
      <div className="album-info">
        <div className="name text-nowrap">{info.name}</div>
        <div className="artist text-nowrap">{info.artist.name}</div>
      </div>
    </AlbumWrapper>
  );
});

export default XXAlbumCover;
