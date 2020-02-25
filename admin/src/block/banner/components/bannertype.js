/**
 * BANNER COMPONENT: WPGL Gutenberg Grid v1
 * SelectBannerType
 */

import PropTypes from 'prop-types';

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';


const SelectBannerType = ({ bannerType, setAttributes }) => {

  const setBannerBGTypeImage = data => {
    setAttributes({
      bannerType : 'bgTypeImage',
    });
  };

  const setBannerBGTypeColor = data => {
    setAttributes({
      bannerType : 'bgTypeColor',
    });
  };

  return (

    <div className="wpgl-components-placeholder wpgl-block-banner-select">
      <div className="components-placeholder__label">
        <div className="label__container">
          <div className="wpgllabel">
            <img className="wpgl__brand--image" width="100" height="100" src={images_data.logo_url} />
            <label className="wpgllabel__text"> {__('WPGL')} </label>
            <label className="wpgllabel__text wpgllabel__text--dark"> {__('Banner')} </label>
          </div>
        </div>
      </div>
      <div className="components-placeholder__buttons">
        <div onClick={setBannerBGTypeImage} className="wpglbutton">
          <span className="dashicons dashicons-format-gallery"></span>
          <label className="wpglbutton__text">{__('Background with image')}</label>
        </div>
        <div onClick={setBannerBGTypeColor} className="wpglbutton">
          <span className="dashicons dashicons-art"></span>
          <label className="wpglbutton__text">{__('Background with color')}</label>
        </div>
      </div>
    </div>

  );
};


SelectBannerType.propTypes = {
  bannerType: PropTypes.string
}

SelectBannerType.defaultProps = {
  bannerType: null,
}

export default SelectBannerType;
