import styled from "styled-components";

export const PlayListWrapper = styled.div`
  font-size: 12px;
  color: #ccc;
  height: 260px;
  width: 553px;
  overflow: auto;
  z-index: 10;
  background: url(${require("@/assets/img/playlist_bg.png")}) -1014px 0;
  background-repeat: repeat-y;
  .song_list {
    overflow: hidden;
  }
`;

export const SongWrapper = styled.li`
  display: flex;
  cursor: pointer;

  .isplay {
    width: 20px;
    height: 28px;
    line-height: 28px;
    padding-left: 10px;
    .icon {
      margin-top: 8px;
      width: 10px;
      height: 13px;
      background-position: -182px 0;
      display: ${(props) => {
        return props.song.id === props.currentSong.id ? "block" : "none";
      }};
    }
  }
  .name {
    width: 256px;
    height: 28px;
    line-height: 28px;
    padding-left: 10px;
  }
  .operator {
    width: 100px;
    line-height: 28px;
    height: 28px;
    color: #fff;
    overflow: hidden;
    .icon {
      height: 16px;
      overflow: hidden;
      margin: 7px 0 0 10px;
      text-indent: -9999px;
      display: none;
    }
    .icon_add {
      width: 16px;
      background-position: -24px 0;
    }
    .icon_share {
      width: 14px;
      background-position: 0 0;
    }
    .icon_dl {
      width: 14px;
      background-position: -57px -50px;
    }
    .icon_del {
      width: 13px;
      background-position: -51px 0;
    }

    .icon_add:hover {
      width: 16px;
      background-position: -24px -20px;
    }
    .icon_share:hover {
      width: 14px;
      background-position: 0 -20px;
    }
    .icon_dl:hover {
      width: 14px;
      background-position: -80px -50px;
    }
    .icon_del:hover {
      width: 13px;
      background-position: -51px -20px;
    }
  }
  .singer {
    width: 80px;
    height: 28px;
    line-height: 28px;
    padding-left: 10px;
  }
  .duration {
    width: 45px;
    height: 28px;
    line-height: 28px;
    padding-left: 10px;
  }
  .src {
    width: 43px;
    padding-left: 6px;
    .icon {
      display: block;
      width: 14px;
      margin: 7px 0 0 10px;
      background-position: -80px 0px;
      text-indent: -9999px;
    }
  }

  &:hover {
    color: #fff;
    background-color: rgba(0, 0, 0, 0.4);

    .operator {
      .icon {
        display: inline-block;
      }
    }
  }
`;
