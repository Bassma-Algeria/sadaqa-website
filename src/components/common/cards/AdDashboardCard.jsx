import React, { useEffect, useRef, useState } from 'react';
import { ReactSVG } from 'react-svg';
import { useDispatch } from 'react-redux';

// styles
import styles from '../../../styles/cards.module.scss';

// images and icons
import checkMarkIcon from '../../../../public/svg/check_mark_icon.svg';

// redux
import { deletePost, makePostInactive } from '../../../redux/actions/postsActions';

// helpers
import { getAvailabiltyText, getPostStatusText } from '../../../utils/postsHelpers';
import { isClickedElementInsideTarget } from '../../../utils/navbarHelpers';

// components
import Button from '../buttons/Button';
import ConfirmDeletePopup from '../pop-ups/CofirmDeletePopup';
import { Ribbon } from '../others/Ribbon';
import AdCard from './AdCard';

const AdDashboardCard = props => {
  const adCardRef = useRef(null);

  return (
    <AdCard {...props} adCardRef={adCardRef} isDashboardCard>
      {!props.active && (
        <Ribbon>
          <p>{getAvailabiltyText(props.type, props.active)}</p>
        </Ribbon>
      )}
      <DashboardActionButtons
        type={props.type}
        active={props.active}
        adCardRef={adCardRef}
        postId={props.post_id}
      />
    </AdCard>
  );
};

const DashboardActionButtons = props => {
  const [isGridView, setIsGridView] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const resize_ob = new ResizeObserver(entries => {
      if (entries[0].contentRect.width < 400) setIsGridView(true);
      else setIsGridView(false);
    });

    resize_ob.observe(props.adCardRef.current);
  }, []);

  return (
    <>
      {isGridView ? (
        <DotsMenu
          active={props.active}
          type={props.type}
          openPopup={() => setIsPopupOpen(true)}
          inactiveAd={() => dispatch(makePostInactive(props.postId))}
        />
      ) : (
        <Buttons
          active={props.active}
          type={props.type}
          openPopup={() => setIsPopupOpen(true)}
          inactiveAd={() => dispatch(makePostInactive(props.postId))}
        />
      )}
      {isPopupOpen && (
        <ConfirmDeletePopup
          confirmDelete={() => dispatch(deletePost(props.postId))}
          setIsPopupOpen={setIsPopupOpen}
        />
      )}
    </>
  );
};

const DotsMenu = ({ active, type, openPopup, inactiveAd }) => {
  const [isMenuListOpen, setisMenuListOpen] = useState(false);

  return (
    <div className={styles.dashboardMenu} onClick={() => setisMenuListOpen(true)}>
      <div className={styles.menuDots}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>

      {isMenuListOpen && (
        <MenuList
          type={type}
          active={active}
          openPopup={openPopup}
          inactiveAd={inactiveAd}
          closeMenu={() => setisMenuListOpen(false)}
        />
      )}
    </div>
  );
};

const MenuList = props => {
  useEffect(() => {
    const handleClick = e => props.closeMenu();
    window.addEventListener('click', handleClick);

    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className={styles.menuList} id="dashboard_menu_list">
      <div className={!props.active && styles.disabled} onClick={props.inactiveAd}>
        {getPostStatusText(props.type)}
      </div>
      <div onClick={props.openPopup}>Delete</div>
    </div>
  );
};

const Buttons = props => {
  return (
    <div className={styles.dashboardButtons}>
      <Button size="sm" secondary onClick={props.openPopup}>
        Delete
      </Button>
      <Button
        size="sm"
        primary
        disabled={!props.active}
        onClick={props.inactiveAd}
        className={`${styles.statusBtn} ${!props.active && styles.btnActive}`}
      >
        {props.active ? (
          getPostStatusText(props.type)
        ) : (
          <div className="flex items-center gap-2">
            <p>{getPostStatusText(props.type)}</p>
            <ReactSVG src={checkMarkIcon.src} />
          </div>
        )}
      </Button>
    </div>
  );
};

export default AdDashboardCard;
