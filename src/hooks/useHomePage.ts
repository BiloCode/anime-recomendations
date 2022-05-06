import { useEffect, useRef, useState } from "react";

const useHomePage = () => {
  const [showUpIndicator, setShowUpIndicator] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);

  const onScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const onScroll = () => {
      if (!headerRef.current) {
        return;
      }

      const { bottom } = headerRef.current.getBoundingClientRect();

      if (scrollY > bottom) {
        setShowUpIndicator(true);
      }

      if (scrollY < bottom) {
        setShowUpIndicator(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return {
    headerRef,
    onScrollTop,
    showUpIndicator,
  };
};

export default useHomePage;
