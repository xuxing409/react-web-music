import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getSizeImage } from "@/utils/format-utils";
import { getArtistListAction } from "../../store/actionCreators";
import { SetterSongerWrapper } from "./style";
import XXThemeHeaderSmall from "@/components/theme-header-small";
const XXSettleSinger = memo(() => {
  // redux
  const dispatch = useDispatch();
  const { settleSingers = [] } = useSelector(
    (state) => ({
      settleSingers: state.getIn(["recommend", "settleSingers"]),
    }),
    shallowEqual
  );

  // react hook
  useEffect(() => {
    dispatch(getArtistListAction());
  }, [dispatch]);
  return (
    <SetterSongerWrapper>
      <XXThemeHeaderSmall title="入驻歌手" more="查看全部>" />
      <ul className="singer-list">
        {settleSingers.slice(0, 5).map((singer) => {
          return (
            <li key={singer.id} className="singer">
              <a href="#/todo" className="info">
                <img
                  className="img"
                  src={getSizeImage(
                    singer.picUrl.replace(/^(http)/, "$1" + "s"),
                    62
                  )}
                  alt=""
                ></img>
                <div className="name">
                  <h4>{singer.name}</h4>
                  <h5 className="nickname  text-nowrap">
                    {singer.alias[0] || singer.name}
                  </h5>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
      <div className="apply-for">
        <a href="#/todo" className="btn">
          <i>申请成为网易音乐人</i>
        </a>
      </div>
    </SetterSongerWrapper>
  );
});

export default XXSettleSinger;
