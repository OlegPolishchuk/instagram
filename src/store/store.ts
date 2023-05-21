import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { logout } from '@/store/api';
import { api } from '@/store/api/api';

const UnAuthorizedCode = 401;

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),
  // .concat(() => () => action => {
  //   if (
  //     action.payload &&
  //     action.payload.error &&
  //     action.payload.error.status === UnAuthorizedCode
  //   ) {
  //     store.dispatch(logout.initiate());
  //   }
  // }),
});

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;

export const wrapper = createWrapper(makeStore);

export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
