<?php

/**
 * WPGL Custom REST API end point for
 * getting posts of post types
 *
 *
 * @since   wpgl 1.0.0
 * @package WordPress_GridLife
 *
 */


 class Wpgl_Fetch_PostType_Posts
 {

   public $term;

   public $namespace;

   public $base;

   public function __construct() {

     $version = '2';
     $this->namespace = 'wpgl/v' . $version;
     $this->base = '/types/(?P<post_type>\w+)/';

   }

   public function get_all_posts_from_post_type($request) {

      $query = '';

      if( ! post_type_exists($request['post_type']) ) {
       return new WP_REST_Response("Post type was not found", 404);
      }

      $args = array(
        'post_type' => $request['post_type'],
        'post_status' => 'publish',
      );

      // Custom query.
      $query = new WP_Query( $args );
      $posts = $query->get_posts();

      return new WP_REST_Response($posts, 200);

   }

   public function enqueue_endpoints() {

     register_rest_route($this->namespace, '/' . $this->base, array(
         'methods' => 'GET',
         'callback' => array($this, 'get_all_posts_from_post_type'),
     ));

   }
 }
