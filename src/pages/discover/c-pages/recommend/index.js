import React, { memo, useEffect } from "react";

import XXTopBanner from "./c-cpns/top-banner";
import { RecommendWrapper } from "./style";
const XXRecommend = memo((props) => {
  return (
    <RecommendWrapper>
      <XXTopBanner />
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
