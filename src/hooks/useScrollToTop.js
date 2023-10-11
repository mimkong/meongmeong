import { useEffect } from "react";

function useScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // 컴포넌트가 마운트 될때만 실행되도록
}

export default useScrollToTop;
