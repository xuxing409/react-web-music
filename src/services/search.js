import request from "./request";

export const getSearchSuggest = (keywords) => {
  return request({
    url: "/search/suggest",
    params: {
      keywords,
    },
  });
};
