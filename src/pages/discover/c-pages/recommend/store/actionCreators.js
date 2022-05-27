// action定义对状态做哪些改变
import * as actionTypes from "./constants";
import {
  getTopBanners,
  getHotRecommends,
  getNewAlbums,
  getTopList,
  getArtistList,
  getHotAnchor
} from "@/services/recommend";

// 处理state中的数据
const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners,
});

const changeHotRecommendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result,
});

// 处理state中的数据
const changeNewAlbum = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUMS,
  newAlbums: res.albums,
});

const changeUpRankingAction = (res) => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: res.playlist,
});

const changeNewRankingAction = (res) => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: res.playlist,
});

const changeOriginRankingAction = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist,
});

const changeArtistListAction = (res) => ({
  type: actionTypes.CHANGE_SETTLE_SONGER,
  settleSingers: res.artists,
});
const changeHotAnchorAction = (res) => ({
  type: actionTypes.CHANGE_HOT_ANCHOR,
  hotAnchor: res.djRadios,
});

// 发送网络请求，派发dispatch
// 这里嵌套两层是应为可能需要传递参数，例如分页参数等等
// 做一个参数中转
export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => {
      dispatch(changeTopBannerAction(res));
    });
  };
};
export const getHotRecommendAction = (limit) => {
  return (dispatch) => {
    getHotRecommends(limit).then((res) => {
      dispatch(changeHotRecommendAction(res));
    });
  };
};

export const getNewAlbumAction = (limit) => {
  return (dispatch) => {
    getNewAlbums(limit).then((res) => {
      dispatch(changeNewAlbum(res));
    });
  };
};
export const getTopListAction = (idx) => {
  return (dispatch) => {
    getTopList(idx).then((res) => {
      switch (idx) {
        case 19723756:
          dispatch(changeUpRankingAction(res));
          break;
        case 3779629:
          dispatch(changeNewRankingAction(res));
          break;
        case 2884035:
          dispatch(changeOriginRankingAction(res));
          break;
        default:
          return;
      }
    });
  };
};

export const getArtistListAction = () => {
  return (dispatch) => {
    getArtistList().then((res) => {
      dispatch(changeArtistListAction(res));
    });
  };
};

export const getHotAnchorAction = (limit) => {
  return (dispatch)=> {
    getHotAnchor(limit).then(res=> {
      dispatch(changeHotAnchorAction(res))
    })
  }
};
