import React, { memo } from "react";

import { dicoverMenu } from "@/common/local-data";

import { DiscoverWrapper, TopMenu } from "./style";
import { NavLink, Outlet } from "react-router-dom";
const XXDiscover = memo(() => {
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {dicoverMenu.map((item, index) => {
            return (
              <div className="item" key={item.title}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            );
          })}
        </TopMenu>
      </div>
      <Outlet />
    </DiscoverWrapper>
  );
});

export default XXDiscover;
