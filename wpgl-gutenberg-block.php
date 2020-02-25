<?php
/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              http://memorres.com
 * @since             1.1.0
 * @package           wpgl-gutenberg-block
 *
 * @wordpress-plugin
 * Plugin Name:       Wpgl Gutenberg Blocks
 * Plugin URI:        http://memorres.com
 * Description:       wpgl gutenberg blocks add an elegant way to show post types in grids, sliders, masonry and much more.
 * Version:           1.1.0
 * Author:            Memorres
 * Author URI:        http://memorres.com
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       wpgl-gutenberg-block
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'WPGL_GUTENBERG_BLOCKS_VERSION', '1.1.0' );

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-plugin-name-activator.php
 */
function activate_wpgl_gutenberg_blocks() {
	
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-wpgl-gutenberg-blocks-activator.php';

	WPGL_GUTENBERG_BLOCKS_Activator::activate();

}

require_once plugin_dir_path( __FILE__ ) . '/admin/post-types/banner.php';

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-plugin-name-deactivator.php
 */
// function deactivate_wpgl_gutenberg_blocks() {
// 	require_once plugin_dir_path( __FILE__ ) . 'includes/class-wpgl-gutenberg-blocks-deactivator.php';
// 	WPGL_GUTENBERG_BLOCKS_Deactivator::deactivate();
// }
register_activation_hook( __FILE__, 'activate_wpgl_gutenberg_blocks' );
// register_deactivation_hook( __FILE__, 'deactivate_plugin_name' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path( __FILE__ ) . 'includes/class-wpgl-gutenberg-blocks.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_wpgl_gutenberg_blocks() {
	$plugin = new WPGL_GUTENBERG_BLOCKS();
	$plugin->run();
}
run_wpgl_gutenberg_blocks();