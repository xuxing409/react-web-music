import styled from "styled-components";

export const PlayerInfoWrapper = styled.div``;
export const PlayerInfoLeft = styled.div`
  position: relative;
  float: left;
  width: 206px;
  .cover_wrap {
    position: relative;
    width: 198px;
    height: 198px;
    img {
      width: 130px;
      height: 130px;
      margin: 34px;
    }
    .mask {
      position: absolute;
      width: 206px;
      height: 205px;
      top: -4px;
      left: -4px;
      background-position: -140px -580px;
    }
  }
  .outchain {
    margin-top: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
    .music {
      width: 16px;
      height: 16px;
      background-position: -34px -863px;

      display: inline-block;
      overflow: hidden;
      vertical-align: middle;
    }
    a {
      text-decoration: underline;
      margin: 10px 0;
      color: #0c73c2;

      cursor: pointer;
    }
  }
`;

export const PlayerInfoRight = styled.div`
  float: right;
  width: 414px;
  .header {
    .tips {
      width: 54px;
      height: 24px;
      background-position: 0 -463px;

      vertical-align: middle;
      display: inline-block;
    }
    .title {
      margin-left: 10px;
      vertical-align: middle;
      display: inline-block;
    }
  }
  .singer {
    margin: 10px 0;
    color: #999;
    .singer_name {
      a {
        color: #0c73c2;
      }
    }
  }
  .album {
    margin: 10px 0;
    color: #999;

    span {
      margin-left: 10px;
      .album_name {
        color: #0c73c2;
      }
    }
    .singer_name:hover {
      text-decoration: underline;
    }
  }
  .lyric {
    margin-top: 40px;

    font-size: 12px;
    line-height: 23px;
    height: auto;
  }
  .lyric-control {
    margin: 10px 0;
    padding: 0px;
    text-decoration: none;
    color: #0c73c2;
    background-color: #fff;
    cursor: pointer;

    i {
      display: inline-block;
      width: 11px;
      height: 8px;

      background-position: ${(props) => (props.isSpread ? "-45px" : "-65px")} -520px;
    }
  }
  .lyric-control:hover {
    text-decoration: underline;
  }
`;
export const PlayerInfoOperator = styled.div``;
