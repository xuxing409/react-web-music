import styled from "styled-components";

export const AppPlayerBar = styled.div`
  position: fixed;
  bottom: -47px;
  left: 0px;
  right: 0px;
  background-position: 0px 0px;
  height: 53px;
  background-repeat: repeat-x;
  transition: bottom 0.3s;
  .hand {
    position: absolute;
    top: -10px;
    width: 100%;
    height: 20px;
    cursor: pointer;
  }
  .playbar {
    .top {
      position: absolute;
      top: -14px;
      right: 15px;
      width: 52px;
      height: 67px;
      background-position: 0 -380px;
      .lock-icon {
        width: 18px;
        height: 18px;
        margin: 6px 0 0 17px;
        background-position: ${(props) => (props.isLock ? "-100px" : "-80px")} -380px;
      }
    }
    .content {
      display: flex;
      align-items: center;
      justify-content: space-between;

      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0;
      height: 47px;
      z-index: 100;
    }
  }
`;

export const Control = styled.div`
  display: flex;
  align-items: center;

  .prev,
  .next {
    width: 28px;
    height: 28px;

    cursor: pointer;
  }

  .prev {
    background-position: 0 -130px;
  }

  .play {
    width: 36px;
    height: 36px;
    margin: 0 8px;
    background-position: 0 ${(props) => (props.isPlaying ? "-165px" : "-204px")};

    cursor: pointer;
  }

  .next {
    background-position: -80px -130px;
  }
  .prev:hover {
    background-position: -30px -130px;
  }
  .next:hover {
    background-position: -110px -130px;
  }

  .play:hover {
    background-position: -40px
      ${(props) => (props.isPlaying ? "-165px" : "-204px")};
  }
`;

export const PlayInfo = styled.div`
  display: flex;
  width: 642px;
  align-items: center;

  .image {
    width: 34px;
    height: 34px;
    border-radius: 5px;
  }

  .info {
    flex: 1;
    color: #a1a1a1;
    margin-left: 10px;

    .song {
      color: #e1e1e1;
      position: relative;
      top: 8px;
      left: 8px;
      display: flex;
      .song-name {
        a {
          color: #e8e8e8;
        }
      }

      .singer-name {
        color: #9b9b9b;
        margin-left: 10px;
        max-width: 220px;
        a {
          color: #9b9b9b;
        }
      }
    }

    .progress {
      display: flex;
      align-items: center;

      .ant-slider {
        width: 493px;
        margin-right: 10px;

        .ant-slider-rail {
          height: 9px;
          background: url(${require("@/assets/img/progress_bar.png")}) right 0;
        }

        .ant-slider-track {
          height: 9px;
          background: url(${require("@/assets/img/progress_bar.png")}) left -66px;
        }

        .ant-slider-handle {
          width: 22px;
          height: 24px;
          border: none;
          margin-top: -7px;
          background: url(${require("@/assets/img/sprite_icon.png")}) 0 -250px;
        }
        .ant-slider-handle:hover {
          background-position: 0 -280px;
        }
      }

      .time {
        .now-time {
          color: #e1e1e1;
        }
        .divider {
          margin: 0 3px;
        }
      }
    }
  }
`;

export const Operator = styled.div`
  position: relative;
  top: 5px;

  display: flex;
  align-items: center;
  .btn {
    width: 25px;
    height: 25px;
    margin-left: 3px;
    cursor: pointer;
  }

  .favor {
    background-position: -88px -163px;
  }

  .share {
    background-position: -114px -163px;
  }
  .favor:hover {
    background-position: -88px -189px;
  }
  .share:hover {
    background-position: -114px -189px;
  }
  .left {
    display: flex;
    align-items: center;
  }
  .right {
    /* width: 126px; */
    padding-left: 13px;
    background-position: -147px -248px;
    position: relative;
    display: flex;
    align-items: center;
    .volume_bar {
      position: absolute;
      top: -123px;
      left: 9px;
      clear: both;
      height: 113px;

      padding: 15px 0;

      background-position: 0 -503px;
      box-sizing: border-box;

      display: ${(props) => {
        return props.isShowVolume ? "block" : "none";
      }};
      .ant-slider {
        margin-bottom: 10px;

        .ant-slider-rail {
          height: 9px;
          background: url(${require("@/assets/img/playbar_sprite.png")}) 0px
            bottom;
        }

        .ant-slider-track {
          height: 9px;
          background: url(${require("@/assets/img/playbar_sprite.png")}) -40px bottom;
        }

        .ant-slider-handle {
          width: 22px;
          height: 24px;
          border: none;
          margin-left: -9px;
          background: url(${require("@/assets/img/sprite_icon.png")}) 0 -250px;
        }
        .ant-slider-handle:hover {
          background-position: 0 -280px;
        }
      }
    }
    .lyric {
      background-position: ${(props) => {
        return props.showLyric ? "-50px -10px" : "-10px -10px";
      }};
    }
    /* .lyric:hover {
      background-position: -50px -10px;
    } */
    .volume {
      background-position: -2px -248px;
    }

    .loop {
      background-position: ${(props) => {
        switch (props.sequence) {
          case 1:
            return "-66px -248px";
          case 2:
            return "-66px -344px";
          default:
            return "-3px -344px";
        }
      }};
    }

    .playlist {
      width: 59px;
      background-position: -42px -68px;

      text-align: center;
      color: #666;
      line-height: 27px;
      text-shadow: 0 1px 0 #080707;
      text-indent: 0;
      text-decoration: none;

      padding-left: 21px;
    }
    .volume:hover {
      background-position: -31px -248px;
    }
    .loop:hover {
      background-position: -33px -344px;
      background-position: ${(props) => {
        switch (props.sequence) {
          case 1:
            return "-93px -248px";
          case 2:
            return "-93px -344px";
          default:
            return "-33px -344px";
        }
      }};
    }
    .playlist:hover {
      background-position: -42px -98px;
    }
  }
`;
