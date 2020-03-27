<?php

/**
 * Registers the `banner` post type.
 */
function banner_init() {
	register_post_type( 'banner', array(
		'labels'                => array(
			'name'                  => __( 'Banners', 'autumn' ),
			'singular_name'         => __( 'Banner', 'autumn' ),
			'all_items'             => __( 'All Banners', 'autumn' ),
			'archives'              => __( 'Banner Archives', 'autumn' ),
			'attributes'            => __( 'Banner Attributes', 'autumn' ),
			'insert_into_item'      => __( 'Insert into Banner', 'autumn' ),
			'uploaded_to_this_item' => __( 'Uploaded to this Banner', 'autumn' ),
			'featured_image'        => _x( 'Featured Image', 'banner', 'autumn' ),
			'set_featured_image'    => _x( 'Set featured image', 'banner', 'autumn' ),
			'remove_featured_image' => _x( 'Remove featured image', 'banner', 'autumn' ),
			'use_featured_image'    => _x( 'Use as featured image', 'banner', 'autumn' ),
			'filter_items_list'     => __( 'Filter Banners list', 'autumn' ),
			'items_list_navigation' => __( 'Banners list navigation', 'autumn' ),
			'items_list'            => __( 'Banners list', 'autumn' ),
			'new_item'              => __( 'New Banner', 'autumn' ),
			'add_new'               => __( 'Add New', 'autumn' ),
			'add_new_item'          => __( 'Add New Banner', 'autumn' ),
			'edit_item'             => __( 'Edit Banner', 'autumn' ),
			'view_item'             => __( 'View Banner', 'autumn' ),
			'view_items'            => __( 'View Banners', 'autumn' ),
			'search_items'          => __( 'Search Banners', 'autumn' ),
			'not_found'             => __( 'No Banners found', 'autumn' ),
			'not_found_in_trash'    => __( 'No Banners found in trash', 'autumn' ),
			'parent_item_colon'     => __( 'Parent Banner:', 'autumn' ),
			'menu_name'             => __( 'Banners', 'autumn' ),
		),
		'public'                => false,
		'hierarchical'          => false,
		'show_ui'               => true,
		'show_in_nav_menus'     => true,
		'supports'              => array( 'title', 'editor', 'thumbnail' ),
		'has_archive'           => true,
		'rewrite'               => true,
		'query_var'             => true,
		'menu_position'         => 5,
		'menu_icon'             => 'dashicons-images-alt2',
		'show_in_rest'          => true,
		'rest_base'             => 'banner',
		'rest_controller_class' => 'WP_REST_Posts_Controller',
	) );

	register_taxonomy( 'banner_category', array( 'banner' ), array(
	        'hierarchical'      => false,
	        'public'            => true,
	        'show_in_nav_menus' => true,
	        'show_ui'           => true,
	        'show_admin_column' => false,
	        'query_var'         => true,
	        'rewrite'           => true,
	        'capabilities'      => array(
	            'manage_terms'  => 'edit_posts',
	            'edit_terms'    => 'edit_posts',
	            'delete_terms'  => 'edit_posts',
	            'assign_terms'  => 'edit_posts',
	        ),
	        'labels'            => array(
	            'name'                       => __( 'Banner categories', 'autumn' ),
	            'singular_name'              => _x( 'Banner category', 'taxonomy general name', 'autumn' ),
	            'search_items'               => __( 'Search Banner categories', 'autumn' ),
	            'popular_items'              => __( 'Popular Banner categories', 'autumn' ),
	            'all_items'                  => __( 'All Banner categories', 'autumn' ),
	            'parent_item'                => __( 'Parent Banner category', 'autumn' ),
	            'parent_item_colon'          => __( 'Parent Banner category:', 'autumn' ),
	            'edit_item'                  => __( 'Edit Banner category', 'autumn' ),
	            'update_item'                => __( 'Update Banner category', 'autumn' ),
	            'view_item'                  => __( 'View Banner category', 'autumn' ),
	            'add_new_item'               => __( 'Add New Banner category', 'autumn' ),
	            'new_item_name'              => __( 'New Banner category', 'autumn' ),
	            'separate_items_with_commas' => __( 'Separate banner categories with commas', 'autumn' ),
	            'add_or_remove_items'        => __( 'Add or remove banner categories', 'autumn' ),
	            'choose_from_most_used'      => __( 'Choose from the most used banner categories', 'autumn' ),
	            'not_found'                  => __( 'No banner categories found.', 'autumn' ),
	            'no_terms'                   => __( 'No banner categories', 'autumn' ),
	            'menu_name'                  => __( 'Banner categories', 'autumn' ),
	            'items_list_navigation'      => __( 'Banner categories list navigation', 'autumn' ),
	            'items_list'                 => __( 'Banner categories list', 'autumn' ),
	            'most_used'                  => _x( 'Most Used', 'banner_category', 'autumn' ),
	            'back_to_items'              => __( '&larr; Back to Banner categories', 'autumn' ),
	        ),
	        'show_in_rest'      => true,
					'public'       => true,
	        'rest_base'         => 'banner_category',
	        'rest_controller_class' => 'WP_REST_Terms_Controller',
	    ) );


}
add_action( 'init', 'banner_init', 1 );

/**
 * Sets the post updated messages for the `banner` post type.
 *
 * @param  array $messages Post updated messages.
 * @return array Messages for the `banner` post type.
 */
function banner_updated_messages( $messages ) {
	global $post;

	$permalink = get_permalink( $post );

	$messages['banner'] = array(
		0  => '', // Unused. Messages start at index 1.
		/* translators: %s: post permalink */
		1  => sprintf( __( 'Banner updated. <a target="_blank" href="%s">View Banner</a>', 'autumn' ), esc_url( $permalink ) ),
		2  => __( 'Custom field updated.', 'autumn' ),
		3  => __( 'Custom field deleted.', 'autumn' ),
		4  => __( 'Banner updated.', 'autumn' ),
		/* translators: %s: date and time of the revision */
		5  => isset( $_GET['revision'] ) ? sprintf( __( 'Banner restored to revision from %s', 'autumn' ), wp_post_revision_title( (int) $_GET['revision'], false ) ) : false,
		/* translators: %s: post permalink */
		6  => sprintf( __( 'Banner published. <a href="%s">View Banner</a>', 'autumn' ), esc_url( $permalink ) ),
		7  => __( 'Banner saved.', 'autumn' ),
		/* translators: %s: post permalink */
		8  => sprintf( __( 'Banner submitted. <a target="_blank" href="%s">Preview Banner</a>', 'autumn' ), esc_url( add_query_arg( 'preview', 'true', $permalink ) ) ),
		/* translators: 1: Publish box date format, see https://secure.php.net/date 2: Post permalink */
		9  => sprintf( __( 'Banner scheduled for: <strong>%1$s</strong>. <a target="_blank" href="%2$s">Preview Banner</a>', 'autumn' ),
		date_i18n( __( 'M j, Y @ G:i', 'autumn' ), strtotime( $post->post_date ) ), esc_url( $permalink ) ),
		/* translators: %s: post permalink */
		10 => sprintf( __( 'Banner draft updated. <a target="_blank" href="%s">Preview Banner</a>', 'autumn' ), esc_url( add_query_arg( 'preview', 'true', $permalink ) ) ),
	);

	return $messages;
}
add_filter( 'post_updated_messages', 'banner_updated_messages' );
