import React, { Component } from 'react';
import { connect } from 'react-redux'
import { gotoPrepScreen, chooseCharacter } from '../actions';


class StartScreen extends Component {
    render() {
        const {characters, chosen} = this.props
      return (
        <div>
            This is the StartScreen
                {characters.map((character, i) => (
                <div key={i} >
                    <p>
                     <span>{character.name}</span><span>{(character.name === this.props.chosen.name) ? "  (chosen)" : "" }</span><br />
                     Stats:                      <br />
                     Attack: {character.attack}pts,<br />
                     Health: {character.health}hp,<br />
                     <button onClick={() => this.props.chooseCharacter(character.name)}>CHOOSE ME</button><br />
                     </p>   
                </div>
                ))}
                <span>{chosen.bool === true ? <button onClick={() => this.props.gotoPrepScreen()}>Go to PrepScreen</button> : ""}</span>
                
        </div>
      );
    }
  }

const mapDispatchToProps = dispatch => ({
    gotoPrepScreen: () => {dispatch(gotoPrepScreen())},
    chooseCharacter: (name) => {dispatch(chooseCharacter(name))},
});

const mapStateToProps = state => ({
    characters: state.onChosen.characters,
    chosen: state.onChosen.chosen,
})

export default connect(mapStateToProps, mapDispatchToProps)(StartScreen)