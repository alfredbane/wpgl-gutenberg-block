/**
 * BLOCK: WPGL Gutenberg Admin Block Placeholder
 * COMPONENT: Grid Placeholder
 *
 * Placeholder component for blocks inside editor.
 * Simply displays a placeholder with grid type label.
 */

import PropTypes from 'prop-types';

import { __ } from '@wordpress/i18n';

const ButtonFrontUi = ({ buttonUrl, buttonText, buttonTarget }) => {


    return (


      <div className="c-site-button">
        <a target={buttonTarget && '_blank'} rel={buttonTarget && 'noopener noreferrer'}  alt={ buttonText } className="c-button wpgl-banner-cta" href={ buttonUrl ? buttonUrl : '' }>
          <span class="c-arrow-button">
            <span class="c-button__text">{ buttonText }</span>
            <span class="c-arrow-button__inner">
              <span class="c-arrow-button__line c-arrow-button__line--right-arrow"></span>
            </span>
          </span>
        </a>
     </div>


    );

  }

  ButtonFrontUi.propTypes = {
    buttonUrl : PropTypes.string,
    buttonText : PropTypes.string,
    buttonTarget: PropTypes.bool
  }

  ButtonFrontUi.defaultProps = {
    buttonUrl : '',
    buttonText : '',
    buttonTarget: false
  }

  export default ButtonFrontUi;
