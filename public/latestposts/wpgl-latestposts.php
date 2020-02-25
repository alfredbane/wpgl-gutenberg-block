<?php

/**
 * Include the post grid php classes
 * Banner Slider, Post Slider
 *
 * @package WordPress
 * @subpackage WPGL Gutenberg Blocks
 * @since WPGL v1.0
 *
 */


/**
* The class is used to define grid structure to be shown in site front,
* setting up post query, setting post data.
*/
require plugin_dir_path( __FILE__ ) . 'class-render-wpgl-latestposts.php';

function wpgl_gutenberg_latestposts_callback( $attributes, $content ) {

    $latestposts_init = new Render_Wpgl_Latestposts();

    return $latestposts_init->renderHTML();

}


function wpgl_gutenberg_latestposts_dynamic() {
  // Skip block registration if Gutenberg is not enabled/merged.
	if (!function_exists('register_block_type')) {
		return;
	}

  register_block_type('wpgl-gutenberg-block/latestposts', array(

		'render_callback' => 'wpgl_gutenberg_latestposts_callback',
    'attributes' => [ ]

	));
}
/**
 * Register block
 */
add_action('init', 'wpgl_gutenberg_latestposts_dynamic');


?>
