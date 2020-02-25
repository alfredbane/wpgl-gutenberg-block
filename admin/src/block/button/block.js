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
import {
         RichText,
       } from '@wordpress/blockEditor';

import { IconButton,
         TextControl,
         Button } from '@wordpress/components';

// import BannerButton from '../banner/components/bannerbutton';
import WpglAdminButton from '../common/wpgladminbutton';
import ButtonFrontUi from '../common/buttonfrontui';
import ButtonAttributes from './utils';

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

 registerBlockType( 'wpgl-gutenberg-block/button', { // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title:__('WPGL button', 'wpglblocks'), // Block title.
  icon: 'external', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'wpgl-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  attributes: ButtonAttributes,

	// The "edit" property must be a valid function.
	edit: function( props ) {

    let { enableButton, buttonUrl, buttonText, buttonTarget } = props.attributes;
    // Creates a banner block with settings.
		return (

      <div className="wrapperDiv">
        <WpglAdminButton
          enableButton = { enableButton }
          buttonUrl = { buttonUrl }
          buttonText = { buttonText }
          setAttributes = { props.setAttributes }
          buttonTarget = { buttonTarget }
        />
      </div>

		);
	},

  save: function(props) {

    let { buttonUrl, buttonText, buttonTarget } = props.attributes;

    return (

      <ButtonFrontUi
        buttonUrl = { buttonUrl }
        buttonText = { buttonText }
        buttonTarget = { buttonTarget }
      />

    );
	},

} );
