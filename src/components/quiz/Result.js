import React from 'react';
import PropTypes from 'prop-types';
import {CSSTransitionGroup} from "react-transition-group";



function Result(props) {
  return (
    <CSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div className= "affichagePerso">
        Ton Pokémon fétiche est <strong className= "affichagePerso">{props.quizResult}</strong>
        <img src={props.quizResult === 'Mystherbe' ? 'https://www.pokepedia.fr/images/3/39/Mystherbe-RFVF.png': 
                props.quizResult === 'Elektek' ? 'https://www.pokepedia.fr/images/thumb/1/18/%C3%89lektek-RFVF.png/500px-%C3%89lektek-RFVF.png':
                props.quizResult === 'Ponyta' ? 'https://www.pokepedia.fr/images/8/8f/Ponyta-RFVF.png':
                props.quizResult === 'Nidorina' ? 'https://www.pokepedia.fr/images/b/b5/Nidorina-RFVF.png':
                props.quizResult === 'Racaillou' ? 'https://www.pokepedia.fr/images/b/b2/Racaillou-RFVF.png':
                props.quizResult === 'Aquali' ? 'https://www.pokepedia.fr/images/thumb/6/6b/Aquali-RFVF.png/500px-Aquali-RFVF.png':
                props.quizResult === 'Mewtwo' ? 'https://www.pokepedia.fr/images/thumb/d/db/Mewtwo-RFVF.png/500px-Mewtwo-RFVF.png' : 'https://www.pokepedia.fr/images/0/0c/Professeur_Chen-LGPE.png'}/>
      </div>
    </CSSTransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
};

export default Result;