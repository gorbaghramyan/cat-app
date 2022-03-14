import * as CategoryActions from './categoryActionCreator';
import * as CatActions from './catActionCreator';

const ActionCreators = {
	...CategoryActions,
	...CatActions,
};

export default ActionCreators;
