import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Quote } from '../../icons/guillemets.svg';

import './blockQuote.scss';

const BlockQuote = ({ text, bordered }) => (
  <div class="blockQuote">
    {text.split(/(?<=\.)/).map(e => (
      <p>{e}</p>
    ))}
    <Quote className="blockQuote__icon blockQuote__icon--right"/>
    <Quote className="blockQuote__icon blockQuote__icon--left"/>
    {bordered && ( <>
      <div className="blockQuote__border blockQuote__border--top" />
      <div className="blockQuote__border blockQuote__border--bottom" />
    </>
    )}
  </div>
);

BlockQuote.propTypes = {
  text: PropTypes.string.isRequired,
  bordered: PropTypes.bool,
};

export default BlockQuote;
