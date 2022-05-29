import styled from "styled-components";
export const PlayerPanelBodyWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 41px;
  width: 100%;
  height: 260px;
  overflow: hidden;
  background: url(${require("@/assets/img/playlist_bg.png")}) -1014px 0;
  background-repeat: repeat-y;
  display: flex;
  .line {
    position: absolute;
    left: 555px;
    top: -1px;
    z-index: 2;
    width: 6px;
    height: 260px;
    background: #000;
    opacity: 0.5;
  }
`;
