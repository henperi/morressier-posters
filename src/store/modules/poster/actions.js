import { types } from './types';
import { httpService } from '../../../services/httpService';
import { axiosErrorHandler } from '../../../helpers/axiosErrorHandler';

/**
 * @description method to set the poster in the store
 * @param {object} data
 * @returns {object} reducer action type and payload
 */
export const setPoster = (data) => ({
  type: types.SET_POSTER,
  payload: {
    data,
  },
});

/**
 * @description An api request to fetch a poster
 * @typedef {{
 *  posterId: string,
 * }} posterParams
 * @param {posterParams} posterParams
 * @returns {Function} dispatch an action
 */
export const getPoster = ({ posterId }) => async (dispatch) => {
  try {
    const { data } = await httpService.get(
      `/v2/posters/${posterId}`,
    );

    dispatch(setPoster(data));

    return data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    return axiosErrorHandler(error, dispatch);
  }
};
