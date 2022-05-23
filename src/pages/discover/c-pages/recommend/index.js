import React, { memo, useEffect } from "react";

import XXTopBanner from "./c-cpns/top-banner";
import XXHotRecommend from "./c-cpns/hot-recommend";
import XXHotAlbum from "./c-cpns/new-album";
import XXRanking from "./c-cpns/recommend-ranking";
import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from "./style";
import UserLogin from "./c-cpns/use-login";
import SettleSinger from "./c-cpns/settle-singer";
import HotAnchor from "./c-cpns/hot-anchor";
const XXRecommend = memo((props) => {
  return (
    <RecommendWrapper>
      <XXTopBanner />
      <Content className={"wrap-v2"}>
        <RecommendLeft>
          <XXHotRecommend />
          <XXHotAlbum />
          <XXRanking />
        </RecommendLeft>
        <RecommendRight>
          <UserLogin />
          <SettleSinger />
          <HotAnchor />
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  );
});

// connect将store和组件联系在一起
export default XXRecommend;

// const XXRecommend = memo((props) => {
//   const { getBanners, topBanners } = props;

//   useEffect(() => {
//     getBanners();
//   }, [getBanners]);

//   return (
//     <div>
//       <h2>{topBanners.length}</h2>
//     </div>
//   );
// });
// /* 将store中的数据作为props绑定到组件中，
//  * 只要store更新了就会调用mapStateToProps方法，
//  *  mapStateToProps返回的结果必须是object对象，该对象中的值将会更新到组件中
//  */
// const mapStateToProps = (state) => ({
//   topBanners: state.recommend.topBanners,
// });
// /**
//  * 将action作为props绑定到组件中，mapDispatchToProps希望你返回包含对应action的object对象
//  */
// const mapDispathToProps = (dispath) => ({
//   getBanners: () => {
//     dispath(getTopBannerAction());
//   },
// });
// // connect将store和 组件联系在一起
// export default connect(mapStateToProps, mapDispathToProps)(XXRecommend);
