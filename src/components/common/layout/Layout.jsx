import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

// components
import Footer from './Footer';
import Navbar from './navbar/index';
import Sidebar from './Sidebar';
import DashboardSidebar from './DashboardSidebar';
import NotificationPopup from '../pop-ups/NotificationPopup';

const Layout = ({
  children,
  withSidebar,
  withoutFooter,
  withDashboardSidebar,
  dashboardSidebarCollapse,
}) => {
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const handleFooterVisibilityChange = isVisible => {
    if (isVisible) {
      setIsFooterVisible(true);
    } else {
      setIsFooterVisible(false);
    }
  };

  return (
    <>
      <Navbar />
      <div style={{ position: 'relative' }}>
        {children}

        {withSidebar && <Sidebar isFooterVisible={isFooterVisible} />}
        {withDashboardSidebar && (
          <DashboardSidebar dashboardSidebarCollapse={dashboardSidebarCollapse} />
        )}
      </div>

      {!withoutFooter && (
        <VisibilitySensor onChange={handleFooterVisibilityChange} partialVisibility={true}>
          <Footer />
        </VisibilitySensor>
      )}
      <NotificationPopup />
    </>
  );
};

export default Layout;
