import React, { memo } from "react";
import { UserLogin } from "./style";

const index = memo(() => {
  return (
    <UserLogin className="sprite_02">
      <p className="note">
        登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
      </p>
      <a href="#/todo" className="btn sprite_02">
        用户登录
      </a>
    </UserLogin>
  );
});

export default index;
