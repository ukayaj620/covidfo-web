import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import image from '../helpers/ImageLoader';
import useScrollHeight from '../hooks/useScrollHeight';

const Drawer = ({ open, close }) => {
  const _location = useLocation();

  const _activePath = (path) => path === _location.pathname; 
  const _isLastLabel = (index) => index === menuItemsLabel.length-1;

  return (
    <div className="absolute left-0 top-0">
      <div 
        className={`lg:hidden nav-drawer-container ${open ? 'translate-x-0' : '-translate-x-full'}`} 
      >
        <div onClick={close} className="self-end mb-4">
          <img
            className="w-6"
            src={image.load("cross")}
            alt="Close"
          />
        </div>
        {menuItemsLabel.map(({ label, path }, index) => (
          <NavLink 
            key={`#drawer-link-${label}-${index}`}
            className={`
              nav-drawer mx-2 border-t-2 py-2
              ${_isLastLabel(index) ? 'border-b-2' : ''}
            `}
            to={path}
            activeClassName='active'
            isActive={ () => _activePath(path) }
          >
            {label}
          </NavLink>
        ))}
      </div>
      <div
        onClick={close}
        className={`bg-muted absolute top-0 left-0 opacity-75 z-10 w-screen h-screen lg:hidden 
        ${open ? 'block' : 'hidden'}`} />
    </div>
  );
};

const NavBar = () => {
  const [_drawerOpen, _setDrawerOpen] = useState(false);
  const _location = useLocation();
  const _height = useScrollHeight();

  const _activePath = (path) => path === _location.pathname;
  const _openDrawer = () => _setDrawerOpen(true);
  const _closeDrawer = () => _setDrawerOpen(false);

  return (
    <nav 
      className="flex-row lg:flex-row-reverse p-4 lg:px-8 navbar"
      style={{ boxShadow: `0 ${_height/200 * 4}px ${_height/200 * 16}px rgba(0, 0, 0, 0.06)` }}
    >
      <Drawer open={_drawerOpen} close={_closeDrawer} />
      <div onClick={_openDrawer} className="lg:hidden">
        <img
          className="w-8"
          src={image.load("hamburger")}
          alt="Menu"
        />
      </div>
      <div className="hidden lg:flex flex-row justify-center items-center">
        {menuItemsLabel.map(({ label, path }, index) => (
          <NavLink 
            key={`#drawer-link-${label}-${index}`}
            className={`
              nav-drawer mx-2
            `}
            to={path}
            activeClassName='active'
            isActive={() => _activePath(path)}
          >
            {label}
          </NavLink>
        ))}
      </div>
      <a href="/">
        <img
          className="w-48 lg:w-56"
          src={image.load("brand.logo")}
          alt="This is Codenitiva"
        />
      </a>
    </nav>
  );
};

const menuItemsLabel = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Map',
    path: '/map',
  },
  {
    label: 'Info',
    path: '/info'
  },
];

export default NavBar;
