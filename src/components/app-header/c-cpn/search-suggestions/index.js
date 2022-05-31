import { SearchOutlined } from "@ant-design/icons";
import { AutoComplete, Input } from "antd";
import React, { memo, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSearchSuggest } from "@/services/search";
// import { searchResult } from "./search-result";
import { SearchSuggestionsWrapper } from "./style";

// 高亮渲染
const renderName = (name, query) => {
  if (query.length && name.indexOf(query) > -1 && query !== name) {
    const temp = name.split(query);
    const dom = [];
    for (let i = 0; i < temp.length - 0.5; i += 0.5) {
      if (Math.floor(i) !== i) {
        dom.push(
          <span key={i} style={{ color: "#0c73c2" }}>
            {query}
          </span>
        );
      } else if (temp[i].length) {
        dom.push(<span key={i}>{temp[i]}</span>);
      }
    }
    return dom;
  } else {
    return (
      <span style={{ color: query === name ? "#0c73c2" : null }}>{name}</span>
    );
  }
};
// 渲染组标题
const renderTitle = (category) => {
  let categoryTitle = "";
  switch (category) {
    case "songs":
      categoryTitle = "单曲";
      break;
    case "artists":
      categoryTitle = "歌手";
      break;
    case "albums":
      categoryTitle = "专辑";
      break;
    case "playlists":
      categoryTitle = "歌单";
      break;
    default:
      break;
  }
  return (
    <span key={category}>
      {categoryTitle}
    </span>
  );
};

// 渲染组项
const renderItem = (category, item, query) => {
  let label = "";
  switch (category) {
    case "songs": // 单曲
      let artists = item.artists.map((item) => item.name);
      label = item.name + "-" + artists.join(" ");
      break;
    case "artists": // 歌手
      label = item.name;
      break;
    case "albums": // 专辑
      label = item.name + "-" + item.artist.name;
      break;
    case "playlists": // 歌单
      label = item.name;
      break;
    default:
      break;
  }
  const { id: value } = item;
  return {
    value: value.toString(),
    category: category,
    label: (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
        key={item.id}
      >
        <span>{renderName(label, query)}</span>
      </div>
    ),
  };
};

const SearchSuggestions = memo(() => {
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState("");

  // other hook
  const navigate = useNavigate();
  // handle
  const searchResult = async (query) => {
    let newOptions = [];
    const { result } = await getSearchSuggest(query);
    newOptions = result.order.map((category, index) => {
      return {
        label: renderTitle(category),
        options: result[category].map((item, index) => {
          return renderItem(category, item, query);
        }),
      };
    });
    return newOptions;
    // setOptions(newOptions);
  };

  const onSearch = useCallback(
    async (value) => {
      setValue(value);
      setOptions(value ? await searchResult(value) : []);
    },
    [setValue, setOptions]
  );

  const handleUrl = ({ category, value }) => {
    let url;
    switch (category) {
      case "songs": // 单曲
        url = "/discover/player?id=" + value;
        break;
      case "artists": // 歌手
        url = "/discover/song?id=" + value;
        break;
      case "albums": // 专辑
        url = "/discover/album?id=" + value;
        break;
      case "playlists": // 歌单
        url = "/discover/songs?id=" + value;
        break;
      default:
        break;
    }

    navigate(url);
  };
  const onSelect = useCallback((value, option) => {
    handleUrl(option);
  }, []);
  const onChange = useCallback((value, option) => {}, []);

  return (
    <SearchSuggestionsWrapper>
      <AutoComplete
        dropdownClassName="certain-category-search-dropdown"
        dropdownMatchSelectWidth={500}
        style={{
          width: 158,
        }}
        onSearch={onSearch}
        onSelect={onSelect}
        onChange={onChange}
        options={options}
        value={value}
      >
        <Input
          className="search_input"
          placeholder="音乐/视频/电台/用户"
          prefix={<SearchOutlined />}
        />
      </AutoComplete>
    </SearchSuggestionsWrapper>
  );
});

export default SearchSuggestions;
