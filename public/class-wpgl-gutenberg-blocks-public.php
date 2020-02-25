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
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package           wpgl-gutenberg-block
 * @subpackage wpgl-gutenberg-block/includes
 */
class Wpgl_Gutenberg_Blocks_Public {
	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;
	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;
	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {
		$this->plugin_name = $plugin_name;
		$this->version = $version;

		$this->load_front_dependencies();
	}



	public function load_front_dependencies() {

		require_once (plugin_dir_path( __FILE__ ) .'grids/wpgl-grids.php');

		require_once (plugin_dir_path( __FILE__ ) .'breadcrumbs/wpgl-breadcrumb.php');

		require_once (plugin_dir_path( __FILE__ ) .'latestposts/wpgl-latestposts.php');


	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {
		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Plugin_Name_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Plugin_Name_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */
		// wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/plugin-name-public.css', array(), $this->version, 'all' );

		// Helper scripts


		// Styles.
		wp_enqueue_style(
			'wpgl-slick-slider-css', // Handle.
			plugins_url( '/build/assets/vendor/slick/slick.css', dirname( __FILE__ ) ),
			array()
		);

		// Styles.
		wp_enqueue_style(
			'wpgl-slick-theme-css', // Handle.
			plugins_url( '/build/assets/vendor/slick/slick-theme.css', dirname( __FILE__ ) ),
			array( 'wpgl-slick-slider-css' )
		);

	}
	/**
	 * Register the JavaScript for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {
		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Plugin_Name_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Plugin_Name_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */
		// wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/plugin-name-public.js', array( 'jquery' ), $this->version, false );

		wp_enqueue_script(
		$this->plugin_name.'-init-js', // Handle.
		plugins_url( 'build/assets/js/wpgl-slider.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'jquery' ), // Dependencies, defined above.
		true // Enqueue the script in the footer.
		);

		// Helper scripts
		wp_enqueue_script(
		$this->plugin_name.'-helper-js', // Handle.
		plugins_url( 'build/assets/js/helper.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'jquery', $this->plugin_name.'-init-js' ), // Dependencies, defined above.
		true // Enqueue the script in the footer.
		);

		// Vendor scripts
		wp_enqueue_script(
		'wpgl-slick-slider-js', // Handle.
		plugins_url( 'build/assets/vendor/slick/slick.min.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'jquery' ), // Dependencies, defined above.
		true // Enqueue the script in the footer.
		);
	}
}
