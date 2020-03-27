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
require plugin_dir_path( __FILE__ ) . 'class-wpgl-grids-controller.php';


function wpgl_gutenberg_grid_callback( $attributes, $content ) {

    if ( empty( $attributes ) || $attributes['postType'] == '' ){
      return ;
    }

    $grid_init = new Wpgl_grids_controller($attributes);

    return $grid_init->with_post_data_using_type();

}


function wpgl_gutenberg_grid_dynamic() {
  // Skip block registration if Gutenberg is not enabled/merged.
	if (!function_exists('register_block_type')) {
		return;
	}

  register_block_type('wpgl-gutenberg-block/grid', array(

		'render_callback' => 'wpgl_gutenberg_grid_callback',

    'attributes' => [
      'postType' => [
        'default' => 'post',
        'type' => 'string'
      ],
      'gridType' => [
        'default' => '',
        'type' => 'string'
      ],
      'isSinglePost' => [
        'type' => 'boolean',
        'default' => false
      ],
      'singlePostId' => [
        'type' => 'string',
        'default' => null
      ],
      'sliderFadeTransition' =>[
        'type' => 'boolean',
        'default' => false
      ],
      'sliderControls'=>[
        'type' => 'boolean',
        'default' => true
      ],
      'slidesToShow'=>[
        'type' => 'number',
        'default' => 1
      ],
      'isSlideInfinite'=> [
        'type' => 'boolean',
        'default' => true
      ],
      'enableCenterMode'> [
        'type' => 'boolean',
        'default' => true
      ],
      'slidesToShowInMobile'=>[
        'type' => 'number',
        'default' => 1
      ],
      'slidesToShowInTablet'=>[
        'type' => 'number',
        'default' => 1
      ],
      'slidesToShowInLaptop'=>[
        'type' => 'number',
        'default' => 1
      ],
      'isTaxonomySlider' => [
        'type' => 'boolean',
        'default' => false
      ],
      'filterPostByTaxonomy' => [
        'type' => 'boolean',
        'default' => false
      ],
      'selectedTerm'=> [
        'type'=> 'string',
        'default'=> ''
      ],
      'selectedTermTaxonomy'=> [
        'type' => 'string',
        'default'=> ''
      ],

    ]
	));
}
/**
 * Register block
 */
add_action('init', 'wpgl_gutenberg_grid_dynamic');


?>
