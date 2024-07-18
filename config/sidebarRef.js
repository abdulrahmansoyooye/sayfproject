import { useEffect, useState } from "react";

export default function OutsideClick(ref, istoggle, setIstoggle) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIstoggle(false);
      } else {
        setIstoggle(true);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  return istoggle;
}
