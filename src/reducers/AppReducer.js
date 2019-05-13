import mock from '../mockdata';
import { sortByName } from '../util/sort.util';

const appReducer = (state, action) => {
  let { productData } = state;
  switch (action.type) {
    case 'FILTER': {
      productData = [ ...productData, ...mock ];
      productData = productData.filter(product => product[action.target].toLowerCase().includes(action.filter));
      return { ...state, productData };
    }
    case 'SORT': {
      productData = productData.sort((a, b) => sortByName(a[action.target], b[action.target]));
      return { ...state, productData };
    }
    case 'DELETE': {
      productData = productData.filter(product => product['ArticleID'] !== action.target);
      return { ...state, productData };
    }
    default:
      return state;
  }
}

export default appReducer;