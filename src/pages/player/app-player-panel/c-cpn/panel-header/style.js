import styled from "styled-components";

export const PlayerPanelHeaderWrapper = styled.div`
  background: url(${require("@/assets/img/playlist_bg.png")}) 0 0;
  height: 41px;
  padding: 0 5px;
  position: relative;
  .close {
    position: absolute;
    top: 6px;
    right: 8px;
    width: 30px;
    height: 30px;
    overflow: hidden;
    text-indent: -999px;
    cursor: pointer;
    background-position: -195px 9px;
  }
`;
export const HeaderLeft = styled.div`
  h4 {
    position: absolute;
    left: 25px;
    top: 0;
    height: 39px;
    line-height: 39px;
    font-size: 14px;
    color: #e2e2e2;
  }
  .icon {
    width: 16px;
    height: 16px;
    margin: 1px 6px 0 0;
    float: left;
  }
  .addall {
    position: absolute;
    left: 398px;
    top: 12px;
    height: 15px;
    line-height: 15px;
    color: #ccc;
    cursor: pointer;
    .favor {
      background-position: -24px 0;
    }
  }
  .line {
    position: absolute;
    top: 13px;
    left: 477px;
    height: 15px;
    border-left: 1px solid #000;
    border-right: 1px solid #2c2c2c;
    box-sizing: inherit;
    margin: 0;
  }
  .clear {
    position: absolute;
    left: 490px;
    top: 12px;
    height: 15px;
    line-height: 15px;
    color: #ccc;
    cursor: pointer;
    .remove {
      width: 13px;
      background-position: -51px 0;
    }
  }
`;
export const HeaderRight = styled.div`
  position: absolute;
  left: 595px;
  top: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  p {
    width: 346px;
    text-align: center;
    height: 39px;
    line-height: 39px;
    color: #fff;
    font-size: 14px;
  }
`;
