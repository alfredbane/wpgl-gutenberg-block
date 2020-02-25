/**
 * BANNER COMPONENT: WPGL Gutenberg Grid v1
 * BannerBackground
 */

import PropTypes from 'prop-types';

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { MediaUpload, MediaUploadCheck } from '@wordpress/blockEditor';
import { IconButton } from '@wordpress/components';


const BannerBackground = ({ containerImgURL, setAttributes  }) => {


  const onSelectImage = ( content ) => {
    setAttributes({
      containerImgURL : content.url,
    });
  };

  return (

    <div className="banner__image">
      <div className="dropzone-simulation">

      { ! containerImgURL ? (
        <img className="img-responsive" src="https://picsum.photos/800/400"/>
      ) : (
        <img className="img-responsive" src= {containerImgURL}/>
      )}

      <MediaUploadCheck>

        <MediaUpload
          onSelect={onSelectImage}
          allowedTypes={ ['image'] }
          render={ ( { open } ) => (
            <div className="upload-controls">
              { containerImgURL ? (
                <IconButton
                  className="button button-large button-primary wpgl-button add-button"
                  label = { __('Edit image', 'wpglblocks') }
                  icon="edit"
                  onClick={ open }>
                </IconButton>
              ) : (
                <IconButton
                  className="button button-large button-primary wpgl-button edit-button"
                  label = { __('Add image', 'wpglblocks') }
                  icon="plus"
                  onClick={ open }>
                </IconButton>
              ) }
            </div>
          )}
        />

      </MediaUploadCheck>

      </div>
    </div>
  );
};

BannerBackground.propTypes = {
  containerImgURL : PropTypes.string,
  setAttributes : PropTypes.func,
}

BannerBackground.defaultProps = {

  containerImgURL : null,
}

export default BannerBackground;
