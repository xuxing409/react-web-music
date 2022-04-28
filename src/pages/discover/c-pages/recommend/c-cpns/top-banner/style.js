import styled from "styled-components";

export const BannerWrapper = styled.div`
  background: url(${(props) => props.bgImage}) center center/6000px;

  .banner {
    height: 270px;
    background-color: red;

    display: flex;
    position: relative;
  }
`;

export const BannerLeft = styled.div`
  width: 730px;

  /* 重置slider圆点 */
  .ant-carousel .slick-dots-bottom {
    bottom: 20px;
  }
  .ant-carousel .slick-dots li.slick-active {
    // 选中向上1像素
    margin-top: -1px;
  }
  .ant-carousel .slick-dots li.slick-active button {
    width: 20px;
    height: 20px;
    border-radius: 50%;

    background-position: -16px -343px;
  }
  .ant-carousel .slick-dots li button:hover {
    background-position: -16px -343px;
  }
  .ant-carousel .slick-dots li button {
    // 未选中的
    width: 20px;
    height: 20px;
    border-radius: 50%;

    background: url(${require("@/assets/img/banner.png")});
    background-position: 3px -343px;
  }
  .ant-carousel .slick-dots li.slick-active {
    width: unset;
  }

  .ant-carousel .slick-dots li {
    position: relative;
    display: inline-block;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    box-sizing: content-box;
    width: 20px;
    height: 3px;
    margin: 0 2px;
    margin-right: 3px;
    margin-left: 3px;
    padding: 0;
    text-align: center;
    text-indent: -999px;
    vertical-align: top;
    transition: unset;
  }

  .ant-carousel .slick-dots li.slick-active {
    width: 20px;
  }

  .banner-item {
    overflow: hidden;
    height: 270px;
    .image {
      width: 100%;
    }
  }
`;

export const BannerRight = styled.a.attrs({
  href: "https://music.163.com/#/download",
  target: "_blank",
})`
  width: 254px;
  height: 270px;
  background: url(${require("@/assets/img/download.png")});
`;

export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${require("@/assets/img/banner_sprite.png")});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`;
