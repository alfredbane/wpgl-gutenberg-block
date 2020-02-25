/**
 * BLOCK: WPGL Gutenberg Banners v1
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 *
 * Using inline styles - no external stylesheet needed.  Not recommended!
 * because all of these styles will appear in `post_content`.
 */

import { __ } from '@wordpress/wp.i18n';
import { registerBlockType } from '@wordpress/blocks';
import apiFetch from '@wordpress/api-fetch';

import GridAttributes from './utils';
import PostGrid from './components/postgrids';

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

 registerBlockType( 'wpgl-gutenberg-block/grid', { // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title:'WPGL Grids', // Block title.
  icon: 'grid-view', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'wpgl-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  attributes: GridAttributes,
	// The "edit" property must be a valid function.
	edit: function( props ) {

		return (
      // Post grids component
			<PostGrid {...props}/> // Import from ./grids/components

		);
	},

  save: function( props ) {

		return null;
	},

} );
