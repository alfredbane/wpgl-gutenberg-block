/**
 * BANNER COMPONENT: WPGL Gutenberg Grid v1
 * Heading
 */

import PropTypes from 'prop-types';

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/blockEditor';
import { IconButton } from '@wordpress/components';


const Heading = ({ headingType, headingContent, setAttributes}) => {

  const setBannerHeadingStyle = headingType => {
    setAttributes({
      headingType
    });
  };

  const setHeadingContent = headingContent => {
    setAttributes({
      headingContent
    });
  };

  return (

    <div>

      {! headingType  ?


        <div className="wpgl-components-placeholder wpgl-heading-settings">
          <div className="components-placeholder__label">
            <span className="wpgllabel">
              {__('Select heading type')}
            </span>
          </div>
          <div className="components-placeholder__group">
            <button onClick={()=>setBannerHeadingStyle('h1')} className="btn"> h1 </button>
            <button onClick={()=>setBannerHeadingStyle('h2')} className="btn"> h2 </button>
            <button onClick={()=>setBannerHeadingStyle('h3')} className="btn"> h3 </button>
          </div>

        </div>
      :
        <div>

          { headingType  &&
            <div className="wpgl-components-placeholder wpgl-heading-settings">
              <div className="components-placeholder__label">
                <span className="wpgllabel">
                  { __('Banner Title') }
                </span>
              </div>
              <RichText
                tagName={headingType}
                placeholder={ __( 'Enter title...', 'wpglblocks' ) }
                keepPlaceholderOnFocus={true}
                value = { headingContent }
                onChange = { setHeadingContent }
              />
              <div className="components-placeholder__button">
                <IconButton
                  className="button button-small button-primary wpgl-button edit-button"
                  label = { __('Select heading styles', 'wpglblocks') }
                  icon="edit"
                  onClick={()=>setBannerHeadingStyle('')}>
                </IconButton>
              </div>
            </div>
          }

        </div>
      }
    </div>
);};

Heading.propTypes = {

    headingType : PropTypes.string,
    headingContent : PropTypes.string,
    setAttributes : PropTypes.func,
}

Heading.defaultProps = {
    headingType : null,
    headingContent : null,
}

export default Heading;
