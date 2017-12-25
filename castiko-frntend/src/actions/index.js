import { ActionTypes } from '../constants';

export function moveCard(cards, where) {console.log("inside move card", cards, where);
    return {
        type: ActionTypes.MOVE_CARD,
        payload: { cards, where }
     };
}

export function turnCard() {
    return {
        type: ActionTypes.TURN_CARD
    };
}

export function shuffleDeck() {
    return { type: 'SHUFFLE_DECK' }
}
export function logoutUser() {console.log("logout user called");
  return {
    type: 'LOGOUT'
  }
}
export function resumeCard(cards, where){
  return {
    type: ActionTypes.RESUME_CARD,
    payload: { cards, where }
  }
}
export default {
    moveCard,
    turnCard,
    shuffleDeck,
    logoutUser,
    resumeCard
}
