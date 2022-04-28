// action定义对状态做哪些改变
import * as actionTypes from "./constants";
import { getTopBanners } from "@/services/recommend";

// 处理state中的数据
const changeTopBannerAction = (res)=> ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

// 发送网络请求，派发dispatch
// 这里嵌套两层是应为可能需要传递参数，例如分页参数等等
// 做一个参数中转
export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => {
      dispatch(changeTopBannerAction(res))
    });
  };
};
