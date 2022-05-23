import request from "./request";

export function getTopBanners() {
  return request({
    url: "/banner",
  });
}

export function getHotRecommends() {
  return request({
    url: "/personalized",
    params: {
      limit: 8,
    },
  });
}

export function getNewAlbums(limit) {
  return request({
    url: "/top/album",
    param: {
      limit,
    },
  });
}

export function getTopList(idx) {
  return request({
    url: "/top/list",
    params: {
      idx,
    },
  });
}
