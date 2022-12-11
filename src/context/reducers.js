export function reducer(state, action) {
  switch (action.type) {
    ///### reducer material
    case 'MINI_SIDENAV': {
      return { ...state, miniSidenav: action.value };
    }
    case 'TRANSPARENT_SIDENAV': {
      return { ...state, transparentSidenav: action.value };
    }
    case 'WHITE_SIDENAV': {
      return { ...state, whiteSidenav: action.value };
    }
    case 'SIDENAV_COLOR': {
      return { ...state, sidenavColor: action.value };
    }
    case 'TRANSPARENT_NAVBAR': {
      return { ...state, transparentNavbar: action.value };
    }
    case 'FIXED_NAVBAR': {
      return { ...state, fixedNavbar: action.value };
    }
    case 'OPEN_CONFIGURATOR': {
      return { ...state, openConfigurator: action.value };
    }
    case 'DIRECTION': {
      return { ...state, direction: action.value };
    }
    case 'LAYOUT': {
      return { ...state, layout: action.value };
    }
    case 'DARKMODE': {
      return { ...state, darkMode: action.value };
    }

    ///### reducer cart
    case 'CART_TOTAL': {
      localStorage.setItem('total', parseInt(state.total + 1));
      return { ...state, total: parseInt(state.total + 1) };
    }

    ///### return default
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
