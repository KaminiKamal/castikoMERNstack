import React from 'react';
import SmartDeck from './SmartDeck.jsx';
import SmartPile from  './SmartPile.jsx';
import SmartFoundation from './SmartFoundation.jsx';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import range from 'lodash/utility/range';
import { connect } from 'react-redux';
import ActionCreators from '../../actions';
import { Colors, Dimensions } from '../../constants';
import { browserHistory } from 'react-router';
import { LOGOUT } from '../../constants/constants.jsx';


@connect((state) => { return { game: state.game.toJS(), score: state.score } })
@DragDropContext(HTML5Backend)
class Game extends React.Component {

    turnCard = () => {
        const { dispatch } = this.props;
        dispatch(ActionCreators.turnCard());
    }

    moveCards = (cards, where) => {
        const { dispatch } = this.props;
        dispatch(ActionCreators.moveCard(cards, where));
    }

    userLogout = () =>{
      console.log("user logging out");
      var details ={
        "username": "kamini",
        "password": "123456"
      }
      const { dispatch } = this.props;
      dispatch(ActionCreators.logoutUser());
    }

    resume = () => {
      //const { dispatch } = this.props;
      let userdata = null;

        fetch("http://localhost:3000/resume-game")
        .then(res => res.json())
        .then(response => {
          console.log("logout response", response.response.userInfo);
          if(response.status!==200){
            return false;
          }
          else{
             userdata = response.response.userInfo;
             userdata.forEach((el, i) => {
               console.log("cards", el.payload.cards);
               console.log("where", el.payload.where);
               const { dispatch } = this.props;
               dispatch(ActionCreators.resumeCard(el.payload.cards, el.payload.where));
             })

          }
        })

    }

    render() {
        const { game, score } = this.props;
        const { moveCards, turnCard } = this;
        console.log(score);
        let style={
          display: "none"
        }
        if(score>=90){
          console.log("show button now");
           style={
            display: "inline"
          }
        }
        return (
            <div style={{
                width: Dimensions.Game.width,
                height: Dimensions.Game.height,
                backgroundColor: Colors.Game.backgroundColor,
                padding: 10
            }}>
            <div>
              <button type="button" onClick={this.resume}>RESTART</button>
              <button type="button" style={style} onClick={this.userLogout}>LOGOUT</button>

              </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>

                    <div style={{
                        width: 540,
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        <SmartFoundation
                            suit="HEARTS"
                            cards={game.FOUNDATION.HEARTS}
                            moveCards={moveCards}
                        />
                        <SmartFoundation
                            suit="DIAMONDS"
                            cards={game.FOUNDATION.DIAMONDS}
                            moveCards={moveCards}
                        />
                        <SmartFoundation
                            suit="CLUBS"
                            cards={game.FOUNDATION.CLUBS}
                            moveCards={moveCards}
                        />
                        <SmartFoundation
                            suit="SPADES"
                            cards={game.FOUNDATION.SPADES}
                            moveCards={moveCards}
                        />
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                    marginTop: 40
                }}>
                {
                    range(0, 4).map(index =>
                        <SmartPile
                            cards={game.PILE[index]}
                            index={index}
                            key={index}
                            moveCards={moveCards}
                        />
                    )
                }

                </div>

            </div>
        );
    }
}

export default Game;
