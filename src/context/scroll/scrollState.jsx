import ScrollContext from "./scrollContext";
import React from "react";

const ScrollState = (props) => {
  const [scrollY, setScrollY] = React.useState(0);
  const [scrollInVh, setScrollInVh] = React.useState(0);
  const [scrollInVw, setScrollInVw] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const scrollInVh = (window.scrollY / window.innerHeight) * 100;

      const scrollInVw = (window.scrollX / window.innerWidth) * 100;

      setScrollInVh(scrollInVh);
      setScrollInVw(scrollInVw);
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);

    };
  }, []);
  return (
    <ScrollContext.Provider
      value={[
        scrollY,
        setScrollY,
        scrollInVh,
        setScrollInVh,
        scrollInVw
      ]}
    >
      {props.children}
    </ScrollContext.Provider>
  );
};

export default ScrollState;
