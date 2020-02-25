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
require plugin_dir_path( __FILE__ ) . 'class-render-wpgl-breadcrumb.php';

function wpgl_gutenberg_breadcrumb_callback( $attributes, $content ) {

    $breadcrumb_init = new Render_Wpgl_Breadcrumb();

    return $breadcrumb_init->renderHTML();

}


function wpgl_gutenberg_breadcrumb_dynamic() {
  // Skip block registration if Gutenberg is not enabled/merged.
	if (!function_exists('register_block_type')) {
		return;
	}

  register_block_type('wpgl-gutenberg-block/breadcrumb', array(

		'render_callback' => 'wpgl_gutenberg_breadcrumb_callback',
    'attributes' => [ ]

	));
}
/**
 * Register block
 */
add_action('init', 'wpgl_gutenberg_breadcrumb_dynamic');


?>
