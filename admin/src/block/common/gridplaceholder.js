/**
 * BLOCK: WPGL Gutenberg Admin Block Placeholder
 * COMPONENT: Grid Placeholder
 *
 * Placeholder component for blocks inside editor.
 * Simply displays a placeholder with grid type label.
 */

import PropTypes from 'prop-types';

import { __ } from '@wordpress/i18n';

const GridPlaceholder = ({ placeholderLabel, className, gridTypeLabel }) => {


    return (


      <div className={`wpgl-components-placeholder${ className }`}>
        <div className="components-placeholder__label">
          <div className="label__container">
            <div className="wpgllabel">
              <img className="wpgl__brand--image" width="100" height="100" src={images_data.logo_url} />
              <label className="wpgllabel__text"> {__('WPGL')} </label>
              <label className="wpgllabel__text wpgllabel__text--dark"> { placeholderLabel } </label>
            </div>
          </div>
        </div>
        { gridTypeLabel }
      </div>


    );

  }

  GridPlaceholder.propTypes = {
    placeholderLabel : PropTypes.string,
    className : PropTypes.string,
    gridTypeLabel: PropTypes.node
  }

  GridPlaceholder.defaultProps = {
    placeholderLabel : 'Grid',
    className : '',
    gridTypeLabel: ''
  }

  export default GridPlaceholder;
