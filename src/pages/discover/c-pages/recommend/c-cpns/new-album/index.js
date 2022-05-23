import React, { memo, useEffect, useRef } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getNewAlbumAction } from "../../store/actionCreators";

import { Carousel } from "antd";
import XXAlbumCover from "@/components/album-cover";
import XXThemeHeaderRMC from "@/components/theme-header-rcm";
import { AlbumWrapper } from "./style";

const index = memo(() => {
  // redux hooks
  const dispatch = useDispatch();
  const { newAlbums } = useSelector(
    (state) => ({
      newAlbums: state.getIn(["recommend", "newAlbums"]),
    }),
    shallowEqual
  ); //shallowEqual 可以帮助该对象浅层比较，如果没有变化，组件就不会重新刷新

  // other hooks
  const pageRef = useRef();
  useEffect(() => {
    dispatch(getNewAlbumAction(10));
  }, [dispatch]);
  return (
    <AlbumWrapper>
      <XXThemeHeaderRMC title="新碟上架"></XXThemeHeaderRMC>
      <div className="content">
        <button
          className="arrow arrow-left sprite_02"
          onClick={(e) => pageRef.current.prev()}
        ></button>
        <div className="album">
          <Carousel ref={pageRef}>
            {[0, 1].map((item) => {
              return (
                <div key={item} className="page">
                  {newAlbums.slice(item * 5, (item + 1) * 5).map((item) => {
                    return (
                      <XXAlbumCover
                        key={item.id}
                        info={item}
                        width={118}
                        size={100}
                        bgp="-570px"
                      />
                    );
                  })}
                </div>
              );
            })}
          </Carousel>
        </div>
        <button
          className="arrow arrow-right sprite_02"
          onClick={(e) => pageRef.current.next()}
        ></button>
      </div>
    </AlbumWrapper>
  );
});

export default index;
