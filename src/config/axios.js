import Axios from 'axios';

import {Api} from '../constants';

const CancelToken = Axios.CancelToken;
export let cancel;

export default Axios.create({
  baseURL: Api.baseUrl,
  timeout: 10000,
  responseType: 'json',
  cancelToken: new CancelToken(c => {
    cancel = c;
  }),
});
