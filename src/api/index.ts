import { IItem } from '../types';

const API_URL = 'https://api.yelp.com/v3/businesses/search';
const API_KEY =
  'SQ06-93C98WxVmlqogeiJihJdsPSd6EinmeRkRJ676wqyjvtF3BK_plzuGHZz808Hz4LbfcVk618HX1qYp5NIifG41cWXEtrRvoHgElMCrpsWFjMystsaP6j8SOTYHYx';

export interface ApiReturnType<T> {
  result?: T;
  error?: string;
}

export const fetchBusinesses = async (
  searchTerm: string,
): Promise<ApiReturnType<IItem[]>> => {
  try {
    const response = await fetch(
      API_URL + `?term=${searchTerm}&location=Los%20Angeles`,
      {
        headers: {
          Authorization: 'Bearer ' + API_KEY,
        },
      },
    );
    const responseJSON = await response.json();
    return { result: responseJSON.businesses };
  } catch (e: any) {
    return { error: e };
  }
};
