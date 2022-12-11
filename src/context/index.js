import * as React from 'react';
import { reducer } from './reducers';
import * as material from './material';
import * as cart from './cart';

import PropTypes from 'prop-types';
const MaterialUI = React.createContext();
MaterialUI.displayName = 'MaterialUIContext';

function StoreProvider({ children }) {
  const initialState = {
    ...material.state,
    ...cart.state,
  };

  const [state, dispatch] = React.useReducer(reducer, initialState);

  const value = React.useMemo(() => [state, dispatch], [state, dispatch]);

  return <MaterialUI.Provider value={value}>{children}</MaterialUI.Provider>;
}

function useStore() {
  const context = React.useContext(MaterialUI);
  if (!context) {
    throw new Error('useStore should be used inside the StoreProvider.');
  }
  return context;
}

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const context = {
  StoreProvider,
  useStore,
  ...material.action,
  ...cart.action,
};

export default context;
