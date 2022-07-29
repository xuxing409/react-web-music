import React, { memo } from "react";

import { headerLinks } from "@/common/local-data";

import { NavLink, useLocation } from "react-router-dom";
import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";
import SearchSuggestions from "./c-cpn/search-suggestions";

const XXAppHeader = memo(() => {
  const location = useLocation();
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      );
    } else {
      return <a herf={item.link}>{item.title}</a>;
    }
  };

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01">
            网易云音乐
          </a>
          <div className="select-list">
            {headerLinks.map((item, index) => {
              return (
                <div className="select-item" key={item.title}>
                  {showSelectItem(item, index)}
                </div>
              );
            })}
          </div>
        </HeaderLeft>

        <HeaderRight>
          <div className="search">
            <SearchSuggestions />
          </div>
          <div className="center">创作者中心</div>
          <div>登录</div>
        </HeaderRight>
      </div>
      {!location.pathname.includes("discover") && (
        <div className="divider"></div>
      )}
    </HeaderWrapper>
  );
});

export default XXAppHeader;
