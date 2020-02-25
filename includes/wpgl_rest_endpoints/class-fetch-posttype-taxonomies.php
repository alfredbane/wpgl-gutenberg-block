<?php

/**
 * WPGL Custom REST API end point for
 * getting taxonomies and terms from post types
 *
 * @since   wpgl 1.0.0
 * @package WordPress_GridLife
 *
 */


 class Wpgl_Fetch_PostType_Taxonomies
 {
   
   public $term;

   public $namespace;

   public $base;

   public function __construct() {

     $version = '2';
     $this->namespace = 'wpgl/v' . $version;
     $this->base = '/taxonomies/(?P<post_type>\w+)/';

   }

   public function get_post_type_taxonomy($posttype) {

     $taxonomies_data = array();



     $taxonomies = get_object_taxonomies($posttype, 'objects');

     foreach ( $taxonomies as $taxonomy ) {
       $taxonomies_data[] = $taxonomy->name;
     }


     return $taxonomies_data; // returning array of taxonomies

   }

   public function get_all_post_type_categories($request) {

     $query = '';
     $post_type = '';

     if( $request['post_type'] === 'posts' ) {
       $post_type = 'post';
     } else {
       $post_type = $request['post_type'];
     }

     if( ! post_type_exists($post_type) ) {

       return new WP_REST_Response("Post type was not found", 404);

     }

     $arguments = array(
            'type'                     => $post_type,
            'child_of'                 => 0,
            'parent'                   => 0,
            'orderby'                  => 'name',
            'order'                    => 'ASC',
            'hide_empty'               => 0,
            'hierarchical'             => 1,
            'taxonomy'                 => $this->get_post_type_taxonomy($post_type),
            'pad_counts'               => false );

     $query = get_categories($arguments);
     return new WP_REST_Response($query, 200);

   }

   public function enqueue_endpoints(){

     register_rest_route($this->namespace, '/' . $this->base, array(
         'methods' => 'GET',
         'callback' => array($this, 'get_all_post_type_categories'),
     ));

   }
 }