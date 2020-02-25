/**
 * BANNER COMPONENT: WPGL Gutenberg Grid v1
 * BannerSettings
 */

import PropTypes from 'prop-types';

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { Fragment } from '@wordpress/element';
import { MediaUpload,
         MediaUploadCheck,
         InspectorControls,
         BlockControls,
       } from '@wordpress/blockEditor';

import { IconButton,
        PanelBody,
        PanelRow,
        ToggleControl,
        ColorPicker } from '@wordpress/components';



const BannerSettings = ({ isForegroundImage, foregroundImgURL, containerBackgroundColor, bannerType, setAttributes, buttonTarget }) => {

  const setForegroundImage = data => {
    setAttributes({
      foregroundImgURL : data.url,
    });
  };

  const toggleForegroundImage = () => {
    setAttributes( {
      isForegroundImage : !isForegroundImage,
      foregroundImgURL : null,
    });
  };

  const onRemoveImage = () => {
    setAttributes({
      foregroundImgURL : null,
    });
  }

  const setBackgroundColor = ( value ) => {
    setAttributes({
      containerBackgroundColor: value.hex
    });
  }


  return(

    <Fragment>
      <InspectorControls>
        <PanelBody className="wpgl-banner-controls" title={ __( 'Banner settings' ) }>

          <label className="wpgl-inspector-controls__label label--big" >{ __( 'Image settings' ) }</label>
          <PanelRow>
            <ToggleControl
            label= "Add image in banner"
            help={ __('Render image on top of this banner.', 'autumn') }
            checked={ isForegroundImage }
            onChange={ toggleForegroundImage }
            />
          </PanelRow>

          { isForegroundImage && (

            <PanelRow>

              <label className="wpgl-inspector-controls__label" >{ __( 'Select image' ) }</label>

              <MediaUploadCheck>
                <MediaUpload
                onSelect={setForegroundImage}
                allowedTypes={ ['image'] }
                value=""
                render={ ( { open } ) => (
                  <div>
                  { !foregroundImgURL ?
                    <IconButton
                      className="ab-container-inspector-media"
                      label={ __( 'Edit image' ) }
                      icon="format-image"
                      onClick={ open }
                    >
                      { __( 'Select Image' ) }
                    </IconButton>
                  :
                    <IconButton
                      className="ab-container-inspector-media"
                      label={ __( 'Remove Image' ) }
                      icon="dismiss"
                      onClick={ onRemoveImage }
                    >
                      { __( 'Remove' ) }
                    </IconButton>
                  }
                  </div>
                )}
                >
                </MediaUpload>
              </MediaUploadCheck>

            </PanelRow>
          )}

          { isForegroundImage && foregroundImgURL && !! foregroundImgURL.length && (

            <PanelRow>
              <div className="wpgl__image-preview">
              <img width="150px" height="150px" src= {foregroundImgURL} />
              </div>
            </PanelRow>

          ) }

          { bannerType === "bgTypeColor" && (
            <div className="wpgl-inspector-controls__colorpicker">
              <label className="wpgl-inspector-controls__label label--big" >{ __( 'Background color' ) }</label>
              <PanelRow>
                <ColorPicker
                color={ containerBackgroundColor }
                onChangeComplete={ setBackgroundColor }
                disableAlpha
                />
              </PanelRow>
            </div>
          )}
        </PanelBody>
      </InspectorControls>
    </Fragment>
  );
}

BannerSettings.propTypes = {

  isForegroundImage: PropTypes.bool,
  bannerType: PropTypes.string,
  foregroundImgURL: PropTypes.string,
  containerBackgroundColor: PropTypes.string

}

BannerSettings.defaultProps = {

  isForegroundImage: false,
  bannerType: null,
  foregroundImgURL: null,
  containerBackgroundColor: '#000'

}

export default BannerSettings;
