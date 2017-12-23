import game from './GameReducer.jsx';
import score from './ScoreReducer.jsx';
import { combineReducers } from 'redux';


export default combineReducers({ game, score });
