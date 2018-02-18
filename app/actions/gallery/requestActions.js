import { GALLERY_API_URL, CONSUMER_KEY } from '../../helpers/constants';
import { API_CALL } from './actionTypes';
import { asyncDispatcher } from '../../helpers/RealmDB';

export function sendRequest(keyword, page, feature) {
	const searchTerms = keyword ? `/search?term=${keyword}&` : '?';

  return asyncDispatcher(dispatch => {
  	fetch(`${GALLERY_API_URL}${searchTerms}page=${page}&rpp=20&image_size=440&feature=${feature}&consumer_key=${CONSUMER_KEY}`)
	  	.then(response => response.json())
	  	.then(response => dispatch({ type: API_CALL, images: response.photos }))
	  	.catch(error => throw new Error(error));
  });
}