<?php
/**
 * The public-facing functionality of the plugin.
 *
 * @link              http://memorres.com
 * @since             1.0.0
 *
 * @package           wpgl-gutenberg-block
 * @subpackage wpgl-gutenberg-block/includes
 */
/**
 * The public-facing functionality of the plugin.
 *
 * Defines grid structure for the public-facing site
 *
 * @package           wpgl-gutenberg-block
 * @subpackage wpgl-gutenberg-block/includes
 */
class Wpgl_Grids_Controller {

	/**
	 * The attributes to be passed to create grid structure.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      array    $this->attributes    attributes to be used for the grid setup.
	 */
	private $attributes;

	/**
	 * The banner type template loader for public-facing site.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $this->banner_type_template    template to be used for the banner setup.
	 */
	private $banner_type_template;

	/**
	 * The post grid type template loader for public-facing site.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $this->postgrid_type_template    template to be used for the post grid setup.
	 */
	private $postgrid_type_template;

	/**
	 * The Featured post type template loader for public-facing site.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $this->featured_product_template    template to be used for the featured post grid setup.
	 */
	private $featured_product_template;


	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $attributes ) {

		$this->attributes = $attributes;

		$this->load_dependency();

	}

	public function load_dependency() {

		/**
		 * The class responsible for orchestrating the banner slider html structure
		 * for public-facing site.
		 */
		require_once (plugin_dir_path( __FILE__ ) .'class-wpgl-banner-slider.php');


		/**
		 * The class responsible for orchestrating the post grids html structure
		 * for public-facing site.
		 */
		require_once (plugin_dir_path( __FILE__ ) .'class-wpgl-post-grid-slider.php');

		/**
		 * The class responsible for orchestrating the post grids html structure
		 * for public-facing site.
		 */
		require_once (plugin_dir_path( __FILE__ ) .'class-wpgl-featured-product-banner-slider.php');


		/**
		 * The class responsible for defining the global slider settings
		 * for public-facing site.
		 */
		require_once (plugin_dir_path( __FILE__ ) .'class-wpgl-slider-settings.php');


		$this->banner_type_template = new Wpgl_Banner_Slider($this->attributes);
		$this->postgrid_type_template = new Wpgl_Post_Grid_Slider($this->attributes);
		$this->featured_product_template = new Wpgl_Featured_Product_Banner_Slider($this->attributes);

	}

	public function post_query_arguments() {

		$includeOne = array();
		$tax_query  = '';

		if( $this->attributes['isSinglePost'] && isset($this->attributes['singlePostId']) ) {

			array_push( $includeOne, $this->attributes['singlePostId'] );

		}

		if( $this->attributes['filterPostByTaxonomy'] ) {

			$tax_query = array(
			  'taxonomy' => $this->attributes['selectedTermTaxonomy'] ,
			  'terms' => $this->attributes['selectedTerm'],
			  'field' => 'slug',
			  'include_children' => true,
			  'operator' => 'IN'
			);

		}

		$postargs = array(
			'post_type'   => $this->attributes['postType'],
			'post_status' => 'publish',
			'post__in'     => $includeOne,
			'tax_query' => array( $tax_query )
		);

		return $postargs;

	}

	function with_post_data_using_type () {

		$postArguments    = $this->post_query_arguments();

		$wpgl_posts_query = new WP_Query( $postArguments );

		// print_r($wpgl_posts_query->request);
		// wp_die();

		$output = '';


		$output .= '<div class="grid grid-layout grid-wrapper grid-'.$this->attributes['postType'].' grid-type-'.$this->attributes['gridType'].'">';

			switch ( $this->attributes['gridType'] ) {
				case "bannerSlider" :
					$output .= $this->banner_type_template->renderHTML($wpgl_posts_query);
				break;

				case "postGridSlider" :
					$output .= $this->postgrid_type_template->renderHTML($wpgl_posts_query);
				break;

				case "featuredProductBannerSlider" :
					$output .= $this->featured_product_template->renderHTML($wpgl_posts_query);
				break;

				default :
					$output .= '';
				break;
			}

		$output .= '</div>';

		return $output;


	}
}
