/**
 * BANNER COMPONENT: WPGL Gutenberg Grid v1
 * BannerButton
 */

import PropTypes from 'prop-types';

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { RichText } from '@wordpress/blockEditor';
import { TextControl, Button, IconButton } from '@wordpress/components';

import ButtonFrontUi from '../../common/buttonfrontui';

const Banner = (props) => {


      let { containerImgURL,
            containerBackgroundColor,
            isForegroundImage,
            foregroundImgURL,
            bannerType,
            className,
            headingType,
            headingContent,
            captionContent,
            buttonUrl,
            buttonText,
            buttonTarget,
            enableButton } = props.attributes;

  return (
    <div className = 'wpgl-banner' style={ bannerType === 'bgTypeImage' ? { backgroundImage:  `url(${containerImgURL})`} : { backgroundColor: `${ containerBackgroundColor }` } } data-banner-type={ bannerType }>
      <div className="container-fluid">
        <div className={`row wrapper-container`} data-wpgl-image={containerImgURL}>
          <div className="col-lg-6 col-md-7">
            <div className="c-banner__content wrapper__container wpgl__content">
              <div className="c-banner__counter">
                <label aria-label="current slide" className="c-banner__counter-text c-banner__counter-current"></label>
                <span className="c-banner__counter-text c-banner__counter-divider"> / </span>
                <label aria-label="total slides" className="c-banner__counter-text c-banner__counter-total"></label>
              </div>
              <div className="c-banner__heading wrapper__container__inner">
                <RichText.Content
                  className='c-banner__heading-text wpgl-banner-title'
                  data-heading-type={ headingType }
                  tagName={ headingType }
                  value={ headingContent } />
              </div>
              <div className="c-banner__description wrapper__container__inner">
                <RichText.Content
                  className='wpgl-banner-caption'
                  tagName="p"
                  value={ captionContent }/>
              </div>

              { !!enableButton &&
                <ButtonFrontUi
                  buttonUrl = { buttonUrl }
                  buttonText = { buttonText }
                  buttonTarget = { buttonTarget }
                />
              }

            </div>
          </div>

          { isForegroundImage &&
            <div className="col-lg-6 col-md-5">
              <div className="c-banner__picture">
                <img src={foregroundImgURL} className="c-banner-picture__image wpgl__image" />
              </div>
            </div>
          }

        </div>
      </div>
    </div>
  );
}


Banner.propTypes = {

}

Banner.defaultProps = {

}

export default Banner;
