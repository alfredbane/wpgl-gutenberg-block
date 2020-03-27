/**
 * BLOCK: WPGL Gutenberg Grid v1
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 *
 * Using inline styles - no external stylesheet needed.  Not recommended!
 * because all of these styles will appear in `post_content`.
 */

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { MediaUpload,
         MediaUploadCheck,
         RichText,
       } from '@wordpress/blockEditor';

import { IconButton,
         TextControl,
         Button } from '@wordpress/components';

import GridPlaceholder from '../common/gridplaceholder';
import WpglAdminButton from '../common/wpgladminbutton';


import SelectBannerType from './components/bannertype';
import Heading from './components/bannerheading';
import Caption from './components/bannercaption';
import BannerBackground from './components/bannerbackground';
import BannerSettings from './components/bannersettings';
import Banner from './components/banner';
import BannerAttributes from './utils';


/**
 * Register Basic Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made available as an option to any
 * editor interface where blocks are implemented.
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

 registerBlockType( 'wpgl-gutenberg-block/banner', { // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title:__('WPGL banners', 'wpglblocks'), // Block title.
  icon: 'images-alt2', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'wpgl-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  attributes: BannerAttributes,

	// The "edit" property must be a valid function.
	edit: function( props ) {

    let { containerImgURL,
          containerBackgroundColor,
          isForegroundImage,
          foregroundImgURL,
          bannerType,
          headingType,
          headingContent,
          captionContent,
          enableButton,
          buttonUrl,
          buttonText,
          buttonTarget } = props.attributes;



    // Creates a banner block with settings.
		return (

      <div>

        { ! bannerType ?

          <SelectBannerType
            bannerType={bannerType}
            setAttributes ={props.setAttributes}
          />

        :

        <div>
          <BannerSettings
              bannerType = { bannerType }
              isForegroundImage = { isForegroundImage }
              foregroundImgURL = { foregroundImgURL }
              containerBackgroundColor = { containerBackgroundColor }
              buttonTarget = { buttonTarget }
              setAttributes = { props.setAttributes }
          />

          <div className="wpgl-components__wrapper">

            <GridPlaceholder
              placeholderLabel = {__("Banner")}
              className = {" placeholder--small wpgl-block-banner-select" }
            />

            { bannerType === 'bgTypeImage' && (
              <div className="wpgl banner">
                <BannerBackground
                  containerImgURL = { containerImgURL }
                  setAttributes = { props.setAttributes }
                />
              </div>
            )}

            <div className="wrapperDiv">
              <Heading
                headingType = { headingType }
                headingContent = { headingContent }
                setAttributes = { props.setAttributes }
              />
            </div>

            <div className="wrapperDiv">
              <Caption
                captionContent = { captionContent }
                setAttributes = { props.setAttributes }
              />
            </div>

            <div className="wrapperDiv">
              <WpglAdminButton
                enableButton = { enableButton }
                buttonUrl = { buttonUrl }
                buttonText = { buttonText }
                setAttributes = { props.setAttributes }
                buttonTarget = { buttonTarget }
              />
            </div>
          </div>
        </div>
        }

      </div>

		);
	},

  save: function(props) {

    return (
      <Banner {...props} />
    );
	},

} );
