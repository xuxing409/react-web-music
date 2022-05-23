import React, { memo, useEffect } from "react";

import XXThemeHeaderRMC from "@/components/theme-header-rcm";
import XXSongsCover from "@/components/song-cover";
import { HotRecommendWrapper } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getHotRecommendAction } from "../../store/actionCreators";
import { HOT_RECOMMEND_LIMIT } from "@/common/constants";
const index = memo(() => {
  // state

  // redux hooks
  const { hotRecommends } = useSelector(
    (state) => ({
      hotRecommends: state.getIn(["recommend", "hotRecommends"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT));
  }, [dispatch]);
  return (
    <HotRecommendWrapper>
      <XXThemeHeaderRMC
        title="热门推荐"
        keywords={["华语", "流行", "民谣", "摇滚", "电子"]}
      />
      <div className="recommend-list">
        {hotRecommends.map((item, index) => {
          return (
            <XXSongsCover key={item.id} info={item}>
              {item.name}
            </XXSongsCover>
          );
        })}
      </div>
    </HotRecommendWrapper>
  );
});

export default index;
