import React, { memo, useEffect, useRef } from "react";
import classnames from "classnames";
import { shallowEqual, useSelector } from "react-redux";
import { LyricPanelWrapper } from "./style";
import { scrollTo } from "@/utils/ui-utils";

const LyricPanel = memo(() => {
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
    scrollTo(lyricPanelRef.current, (currentLyricIndex - 3) * 32, 300);
  }, [currentLyricIndex]);

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
