import styled from "styled-components";

export const AppPlayerBar = styled.div`
  position: fixed;
  bottom: -40px;
  left: 0px;
  right: 0px;
  background-position: 0px 0px;
  height: 53px;
  background-repeat: repeat-x;
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
  .playbar {
    .content {
      display: flex;
      align-items: center;
      justify-content: space-between;

      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0;
      height: 47px;
    }
  }
  &.lock {
    bottom: 0px;
  }
  &.unlock {
    bottom: 0px;
  }
  &.unlock-enter,
  &.unlock-appear {
    bottom: -40px;
  }

  &.unlock-enter-active,
  &.unlock-appear-active {
    /* bottom: -40px; */
    transform: translateY(-40px);
    transition: transform 300ms;
  }

  &.unlock-enter-done,
  &.unlock-appear-done {
    bottom: 0px;
  }

  &.unlock-exit {
    bottom: 0px;
  }

  &.unlock-exit-active {
    transform: translateY(40px);
    transition: transform 300ms;
  }

  &.unlock-exit-done {
    bottom: -40px;
  }

  &.lock-enter,
  &.lock-appear {
    bottom: 0px;
  }

  &.lock-enter-active,
  &.lock-appear-active {
    /* bottom: -40px; */
    transform: translateY(-40px);
    transition: transform 300ms;
  }

  &.lock-enter-done,
  &.lock-appear-done {
    bottom: -40px;
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

      .singer-name {
        color: #9b9b9b;
        margin-left: 10px;
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
  display: flex;
  position: relative;
  top: 5px;

  .btn {
    width: 25px;
    height: 25px;
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

  .right {
    width: 126px;
    padding-left: 13px;
    background-position: -147px -248px;

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
