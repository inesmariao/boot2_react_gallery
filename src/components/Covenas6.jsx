import covenas6 from '../assets/img/covenas6.jpg'
import PropTypes from 'prop-types';

export const Covenas6 = ( {className} ) => {
  return (
    <div className={`image-container ${className}`}>
      <img src={covenas6} alt="Paisaje de Coveñas, Sucre" className="image" />
    </div>
  )
}

Covenas6.propTypes = {
  className: PropTypes.string
};
