import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getTopBannerAction } from "../../store/actionCreators";

import { Carousel } from "antd";
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from "./style";

const XXTopBanner = memo(() => {
  // 组件和redux关联，获取数据和进行操作
  const { topBanners } = useSelector(
    (state) => ({
      // topBanners: state.get("recommend").get("topBanners"),
      topBanners: state.getIn(["recommend", "topBanners"]),
    }),
    shallowEqual
  ); //shallowEqual允许浅层比较
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);

  const bannerRef = useRef();
  // 发起网络请求
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);

  const bannerChange = useCallback((from, to) => {
    setCurrentIndex(to);
  }, []);

  const bgImage = topBanners[currentIndex]  && (topBanners[currentIndex].imageUrl+"?imageView&blur=40x20")

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            ref={bannerRef}
            effect="fade"
            autoplaySpeed={5000}
            beforeChange={bannerChange}
            autoplay
          >
            {topBanners.map((item, index) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img
                    className={"image"}
                    src={item.imageUrl}
                    alt={item.title}
                  ></img>
                </div>
              );
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button
            className="btn left"
            onClick={(e) => bannerRef.current.prev()}
          ></button>
          <button
            className="btn right"
            onClick={(e) => bannerRef.current.next()}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
});

export default XXTopBanner;
