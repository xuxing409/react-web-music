import React, { memo, useEffect } from "react";
import XXThemeHeaderSmall from "@/components/theme-header-small";
import { HotAnchorWrapper } from "./style";
import { getHotAnchorAction } from "../../store/actionCreators";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
const HotAnchor = memo(() => {
  // redux
  const dispatch = useDispatch();
  const { hotAnchor = [] } = useSelector(
    (state) => ({
      hotAnchor: state.getIn(["recommend", "hotAnchor"]),
    }),
    shallowEqual
  );
  // react hook
  useEffect(() => {
    dispatch(getHotAnchorAction(5));
  }, [dispatch]);
  return (
    <HotAnchorWrapper>
      <XXThemeHeaderSmall title="热门主播" more="" />
      <div className="radio-list">
        {hotAnchor.map((item, index) => {
          return (
            <div className="item" key={item.picUrl}>
              <a href="/abc" className="image">
                <img src={item.picUrl.replace(/^(http:)/, "https:")} alt="" />
              </a>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="position text-nowrap">{item.rcmdtext}</div>
              </div>
            </div>
          );
        })}
      </div>
    </HotAnchorWrapper>
  );
});

export default HotAnchor;
