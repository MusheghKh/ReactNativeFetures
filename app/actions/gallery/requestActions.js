import * as actions from './actionTypes';
import { GALLERY_API_URL, CONSUMER_KEY } from '../../helpers/constants';
import { asyncDispatcher } from '../../helpers/RealmDB';

export function sendRequest(keyword, page, sorting) {
  return asyncDispatcher(dispatch => {
  	fetch(`${GALLERY_API_URL}/search?term=${keyword}&page=${page}&rpp=20&image_size=440&sort=${sorting}&consumer_key=${CONSUMER_KEY}`)
  	.then(response => response.json())
  	.then(response => {
    	let res = response;
    	debugger;
  	})
  	.catch(error => throw new Error(error));
  });
}