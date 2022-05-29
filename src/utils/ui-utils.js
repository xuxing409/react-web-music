export const scrollTo = (elem, to, duration) => {
  if (duration <= 0) return;
  let difference = to - elem.scrollTop;
  let perTick = (difference / duration) * 10;

  setTimeout(() => {
    elem.scrollTop = elem.scrollTop + perTick;
    if (elem.scrollTo === to) return;
    scrollTo(elem, to, duration - 10);
  }, 10);
};
