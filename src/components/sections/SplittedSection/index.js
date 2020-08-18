import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../../Button';
import { ReactComponent as Flower } from '../../../icons/flower.svg';

import './SplittedSection.scss';

const SplittedSection = ({
  title,
  text,
  linkLabel,
  linkTo,
  imageSource,
  imageAlt,
  hasFlower = false,
  isTextOnRight = false,
  isButtonAlt = false,
  altColor = false,
  roundedImage = false,
}) => {
  const sectionClass = classNames('splitted-section', {'splitted-section--alt-color': altColor})
  const gridClass = classNames('splitted-section__grid', {'splitted-section__grid--reverse': isTextOnRight});
  const imageClass = classNames('splitted-section__image', {'splitted-section__image--rounded': roundedImage});
  return (
  <section className={sectionClass}>
    <div className={gridClass}>
      <div className="splitted-section__text">
        <h2>{title}</h2>
        <p>{text}</p>
        {linkLabel && isButtonAlt && <Button alt name={linkLabel} link={linkTo} />}
        {linkLabel && !isButtonAlt && <Button name={linkLabel} link={linkTo} />}
      </div>
      <div className={imageClass}>
        <img src={imageSource} alt={imageAlt} />
      </div>
    </div>
    {hasFlower && <Flower className="splitted-section__flower" />}
  </section>
);
};

SplittedSection.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  linkLabel: PropTypes.string,
  linkTo: PropTypes.string,
  imageSource: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  hasFlower: PropTypes.bool,
  isTextOnRight: PropTypes.bool,
  isButtonAlt: PropTypes.bool,
  altColor: PropTypes.bool,
  roundedImage: PropTypes.bool,
};

export default SplittedSection;
