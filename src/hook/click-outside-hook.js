import { useEffect } from "react";

// 组件外部点击自动关闭hook
export const useOnClickOutside = (
  listening,
  setListening,
  menuRef,
  setIsOpen
) => {
  return useEffect(() => {
    if (listening) return;
    if (!menuRef.current) return;
    setListening(true);

    [`click`, `touchstart`].forEach((type) => {
      document.addEventListener(`click`, (evt) => {
        if (menuRef.current?.contains(evt.target)) return;
        setIsOpen(false);
      });
    });
  }, [listening, setListening, menuRef, setIsOpen]);
};
