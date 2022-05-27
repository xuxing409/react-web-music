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
    url: "/album/newest",
    param: {
      limit,
    },
  });
}

export function getTopList(id) {
  return request({
    url: "/playlist/detail",
    params: {
      id,
    },
  });
}

export function getArtistList() {
  return request({
    url: "/artist/list",
  });
}

export function getHotAnchor(limit) {
  return request({
    url: "/dj/hot",
    params: {
      limit,
    },
  });
}
