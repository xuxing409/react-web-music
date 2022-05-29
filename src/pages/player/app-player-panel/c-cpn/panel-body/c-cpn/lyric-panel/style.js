import styled from "styled-components";

export const LyricPanelWrapper = styled.div`
  width: 420px;
  height: 250px;
  p {
    display: flex;
    justify-content: center;
    align-items: center;

    color: #989898;
    word-wrap: break-word;
    text-align: center;
    line-height: 32px;
    height: auto !important;
    height: 32px;
    min-height: 32px;
    -webkit-transition: color 0.7s linear;
    -moz-transition: color 0.7s linear;
    -o-transition: color 0.7s linear;
    transition: color 0.7s linear;
  }
  .active {
    color: #fff;
    font-size: 14px;
    -webkit-transition: color 0.7s linear;
    -moz-transition: color 0.7s linear;
    -o-transition: color 0.7s linear;
    transition: color 0.7s linear;
  }
`;
