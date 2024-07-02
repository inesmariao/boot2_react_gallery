import covenas3 from '../assets/img/covenas3_2.jpg'
import PropTypes from 'prop-types';

export const Covenas3 = ( {className} ) => {
  return (
<div className={`image-container ${className}`}>
      <img src={covenas3} alt="Paisaje de Coveñas, Sucre" className="image" />
    </div>
  )
}

Covenas3.propTypes = {
  className: PropTypes.string
};