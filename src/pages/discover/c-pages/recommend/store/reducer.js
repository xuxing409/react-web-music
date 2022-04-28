/**
 * reducer是我们传给createStore的一个函数，
 * 用来表示我们的状态可以被执行哪些操作。
 * 它是一个纯函数，
 * 所谓纯函数是指根据一个函数输入在任意时间和任意情况下都只会有一种确定的输出。
 * 在Redux中，
 * 一个reducer会接受两个参数:
 * previousState(老的状态数据)和action(在何种操作下)，
 * 返回newState(返回新的状态数据)。
 */
import { Map } from "immutable";
import * as actionTypes from "./constants";

// immutable 管理数据，优化多次拷贝的性能问题，该库会尽量使用原本的节点，返回一个新的对象
const defaultStore = Map({
  topBanners: [],
});

function reducer(state = defaultStore, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      // return { ...state, topBanners: action.topBanners };
      return state.set("topBanners", action.topBanners);
    default:
      return state;
  }
}

export default reducer;
