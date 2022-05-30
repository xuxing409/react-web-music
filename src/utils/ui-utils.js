/**
 * 滚动函数
 * @param {Object} elem 滚动的元素
 * @param {Number} to  滚动到
 * @param {Number} duration 滚动一次多久
 * @returns 
 */
export const scrollTo = (elem, to, duration) => {
  if (duration <= 0) return;
  let difference = to - elem.scrollTop;
  let perTick = (difference / duration) * 10; //滚一次的距离，一个定时代表一次

  setTimeout(() => {
    elem.scrollTop = elem.scrollTop + perTick;
    if (elem.scrollTo === to) return;
    scrollTo(elem, to, duration - 10);
  }, 10); // 设置越低触发越频繁，过低会浪费性能
};
