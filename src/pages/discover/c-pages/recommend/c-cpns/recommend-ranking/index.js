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
    dispatch(getTopListAction(19723756));
    dispatch(getTopListAction(3779629));
    dispatch(getTopListAction(2884035));
  }, [dispatch]);
  return (
    <RankingWrapper>
      <XXThemeHeaderRMC title="榜单"></XXThemeHeaderRMC>
      <div className="tops">
        {originRanking && <XXTopRanking info={originRanking}></XXTopRanking>}
        {upRanking && <XXTopRanking info={upRanking}></XXTopRanking>}
        {newRanking && <XXTopRanking info={newRanking}></XXTopRanking>}
      </div>
    </RankingWrapper>
  );
});

export default index;
