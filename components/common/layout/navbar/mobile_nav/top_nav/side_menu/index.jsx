import React, { useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";

// styles
import styles from "../../../../../../../styles/navbar.module.scss";

// compoents
import SideMenu from "./SideMenuContainer";

const Menu = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [swipeCoordiates, setSwipeCoordiates] = useState({ start: 0, end: 0 });

  const sideMenu = useRef(null);

  const handlers = useSwipeable({
    trackMouse: true,
    // onSwipeStart: (e) => {
    //   setSwipeCoordiates({ ...swipeCoordiates, start: e.deltaX });
    // },
    // onSwiping: (e) => {
    //   if (e.dir === "Right") {
    //     const distance = swipeCoordiates.start - e.deltaX;
    //     sideMenu.current.style.left =
    //       -sideMenu.current.offsetWidth - distance + "px !important";
    //     if (sideMenu.current.style.left.split("px")[0] >= -100) {
    //       setIsSideMenuOpen(true);
    //     }
    //   }
    // },
    // onSwiped: (e) => {
    //   setSwipeCoordiates({ start: 0, end: 0 });
    // },
    onSwipedRight: () => {
      setIsSideMenuOpen(true);
    },
  });

  return (
    <>
      <div className={styles.menuBars} onClick={() => setIsSideMenuOpen(true)}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
      <div {...handlers} className={styles.swipeDiv} />

      <SideMenu
        closeMenu={() => setIsSideMenuOpen(false)}
        isOpen={isSideMenuOpen}
        sideMenu={sideMenu}
      />
    </>
  );
};

export default Menu;
