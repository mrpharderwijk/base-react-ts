import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { UiActionTypes } from './models/IUiActions';
import { FIXME } from '../../models/TFixMe';

const getAllNavigationItems: ActionCreator<ThunkAction<FIXME, FIXME, FIXME, FIXME>> = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = {
        data: {
          results: [
            {
              id: 1,
              label: 'home',
              href: '/',
            },
            {
              id: 2,
              label: 'about',
              href: '/about',
            },
            {
              id: 3,
              label: 'contact',
              href: '/contact',
            },
          ],
        },
      };
      dispatch({
        navItems: response.data.results,
        type: UiActionTypes.GET_NAVIGATION_ITEMS,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export default getAllNavigationItems;
