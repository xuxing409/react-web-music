import React, { memo, useEffect, useRef, useState } from "react";
import classnames from "classnames";
import { shallowEqual, useSelector } from "react-redux";
import { LyricPanelWrapper } from "./style";
import { scrollTo } from "@/utils/ui-utils";

const LyricPanel = memo(() => {
  const [isFirstShow, setIsFirstShow] = useState(true); //是否第一次打开
  // redux
  const { lyricList, currentLyricIndex } = useSelector(
    (state) => ({
      lyricList: state.getIn(["player", "lyricList"]),
      currentLyricIndex: state.getIn(["player", "currentLyricIndex"]),
    }),
    shallowEqual
  );

  // other hooks
  const lyricPanelRef = useRef();

  useEffect(() => {
    if (currentLyricIndex > 0 && currentLyricIndex < 3) return;
    if (isFirstShow) {
      lyricPanelRef.current.scrollTop = (currentLyricIndex - 3) * 32;
      setIsFirstShow(false);
    } else {
      scrollTo(lyricPanelRef.current, (currentLyricIndex - 3) * 32, 300);
    }
  }, [currentLyricIndex, isFirstShow]);

  return (
    <LyricPanelWrapper className="xui-scroll" ref={lyricPanelRef}>
      {lyricList.map((lyricLine, index) => {
        return (
          <p
            key={lyricLine.time}
            className={classnames({ active: index === currentLyricIndex })}
          >
            {lyricLine.content}
          </p>
        );
      })}
    </LyricPanelWrapper>
  );
});

export default LyricPanel;
