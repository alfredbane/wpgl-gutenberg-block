<?php
/**
 * The admin-specific functionality of the plugin.
 *
 * @link              http://memorres.com
 * @since             1.0.0
 *
 * @package           wpgl-gutenberg-block
 * @subpackage wpgl-gutenberg-block/includes
 */
/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package           wpgl-gutenberg-block
 * @subpackage wpgl-gutenberg-block/includes
 */
class Wpgl_Gutenberg_Blocks_Admin {
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
	 * @param      string    $plugin_name       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {
		$this->plugin_name = $plugin_name;
		$this->version = $version;
	}
	/**
	 * Register the stylesheets for the admin area.
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
		// wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/plugin-name-admin.css', array(), $this->version, 'all' );

		wp_enqueue_style(
			$this->plugin_name.'-css', // Handle.
			plugins_url( '/build/assets/css/editor.css', dirname( __FILE__ ) ),
			array( 'wp-edit-blocks' )
		);

	}
	/**
	 * Register the JavaScript for the admin area.
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
		// wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/plugin-name-admin.js', array( 'jquery' ), $this->version, false );

		$url = untrailingslashit( plugin_dir_url( __FILE__ ) );

	// Scripts.

		$dir = dirname(__FILE__);
		$index_js = 'index.js';

		wp_enqueue_script(
			$this->plugin_name, // Handle.
			plugins_url( 'build/index.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
			array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ), // Dependencies, defined above.
			true // Enqueue the script in the footer.
		);

		

		wp_localize_script(
			$this->plugin_name,
			'images_data',
			array(
			'logo_url' => plugins_url( 'build/assets/images/wpgl-logo.png', dirname(__FILE__) ),
					'button_arrow_icon' => plugins_url( 'build/assets/images/right-arrow.svg', dirname(__FILE__) ),
			)
		);

	}

	/**
	 * Add a block category for "Get With Gutenberg" if it doesn't exist already.
	 *
	 * @param array $categories Array of block categories.
	 *
	 * @return array
	 */
	function enqueue_block_categories( $categories ) {
	    $category_slugs = wp_list_pluck( $categories, 'slug' );
	    return in_array( 'wpgl-blocks', $category_slugs, true ) ? $categories : array_merge(
	        $categories,
	        array(
	            array(
	                'slug'  => 'wpgl-blocks',
	                'title' => __( 'WPGL Blocks', 'wpgl-blocks' ),
	                'icon'  => null,
	            ),
	        )
	    );
	}

}