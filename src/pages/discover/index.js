import React, { memo, useEffect } from "react";

import { dicoverMenu } from "@/common/local-data";

import { DiscoverWrapper, TopMenu } from "./style";
import { NavLink, Outlet } from "react-router-dom";
// import request from "@/services/request";
const XXDiscover = memo(() => {
  useEffect(() => {
    // request({
    //   url: "/banner",
    // }).then((res) => {
    //   console.log(res);
    // });
  }, []);

  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="warp-v1">
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
