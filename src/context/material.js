export const state = {
  miniSidenav: false,
  transparentSidenav: false,
  whiteSidenav: false,
  sidenavColor: 'info',
  transparentNavbar: true,
  fixedNavbar: true,
  openConfigurator: false,
  direction: 'ltr',
  layout: 'dashboard',
  darkMode: false,
};

export const action = {
  setMiniSidenav: (dispatch, value) => dispatch({ type: 'MINI_SIDENAV', value }),
  setTransparentSidenav: (dispatch, value) => dispatch({ type: 'TRANSPARENT_SIDENAV', value }),
  setWhiteSidenav: (dispatch, value) => dispatch({ type: 'WHITE_SIDENAV', value }),
  setSidenavColor: (dispatch, value) => dispatch({ type: 'SIDENAV_COLOR', value }),
  setTransparentNavbar: (dispatch, value) => dispatch({ type: 'TRANSPARENT_NAVBAR', value }),
  setFixedNavbar: (dispatch, value) => dispatch({ type: 'FIXED_NAVBAR', value }),
  setOpenConfigurator: (dispatch, value) => dispatch({ type: 'OPEN_CONFIGURATOR', value }),
  setDirection: (dispatch, value) => dispatch({ type: 'DIRECTION', value }),
  setLayout: (dispatch, value) => dispatch({ type: 'LAYOUT', value }),
  setDarkMode: (dispatch, value) => dispatch({ type: 'DARKMODE', value }),
};
