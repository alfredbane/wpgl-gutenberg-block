/**
 * BLOCK: Breadcrumb block - Gutenberg (WPGL)
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { Fragment } from  '@wordpress/element';

import GridPlaceholder from '../common/gridplaceholder';


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

registerBlockType( 'wpgl-gutenberg-block/breadcrumb', {
	title: __( 'Wpgl Breadcrumb', 'wpgl-blocks' ), // Block title.
	icon: 'external', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'wpgl-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'page breadcrumb — WPGL Block' ),
		__( 'Memorres creative' ),
		__( 'create-guten-block' ),
	],
	attributes: {},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: function( props ) {

		return (
			<Fragment>
        <GridPlaceholder
          placeholderLabel = {__("Page Breadcrumb")}
          className = {" placeholder--small wpgl-block-banner-select" }
        />
			</Fragment>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: function( props) {

		return null;
	},
} );
