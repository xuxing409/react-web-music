import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import XXThemeHeaderRMC from "@/components/theme-header-rcm";
import XXTopRanking from "@/components/top-ranking";
import { RankingWrapper } from "./style";
import { getTopListAction } from "../../store/actionCreators";

const index = memo(() => {
  // redux hooks
  const { upRanking, newRanking, originRanking } = useSelector(
    (state) => ({
      upRanking: state.getIn(["recommend", "upRanking"]),
      newRanking: state.getIn(["recommend", "newRanking"]),
      originRanking: state.getIn(["recommend", "originRanking"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getTopListAction(0));
    dispatch(getTopListAction(2));
    dispatch(getTopListAction(3));
  }, [dispatch]);
  return (
    <RankingWrapper>
      <XXThemeHeaderRMC title="榜单"></XXThemeHeaderRMC>
      <div className="tops">
        <XXTopRanking info={originRanking}></XXTopRanking>
        <XXTopRanking info={upRanking}></XXTopRanking>
        <XXTopRanking info={newRanking}></XXTopRanking>
      </div>
    </RankingWrapper>
  );
});

export default index;
