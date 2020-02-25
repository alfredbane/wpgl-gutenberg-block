/**
 * BANNER COMPONENT: WPGL Gutenberg Grid v1
 * Caption
 */

import PropTypes from 'prop-types';

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/blockEditor';


const Caption = ({ captionContent, setAttributes}) => {

  const setCaptionContent = captionContent => {
    setAttributes({
      captionContent,
    });
  };

  return (


  <div className="wpgl-components-placeholder wpgl-caption-settings">
    <div className="components-placeholder__label">
      <span className="wpgllabel">
        { __('Banner caption') }
      </span>
    </div>
    <RichText
      format="string"
      tagName="p"
      placeholder={ __( 'Enter caption...', 'wpglblocks' ) }
      value = { captionContent }
      onChange = { setCaptionContent }
      keepPlaceholderOnFocus={ true }
    />
  </div>

);};

Caption.propTypes = {
    captionContent : PropTypes.string,
    setAttributes : PropTypes.func,
}

Caption.defaultProps = {
    captionContent : null,
}

export default Caption;
