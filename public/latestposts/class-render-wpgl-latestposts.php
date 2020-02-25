<?php

/**
 * Output the breadcrumbs in front end
 *
 * @param int $post_id The post ID
 * @return string
 *
 */

if( !class_exists( 'Render_Wpgl_Latestposts' ) ) :

class Render_Wpgl_Latestposts {



  public function __construct() {

  }

  public function renderHTML() {

    ob_start();

    $args = array(
      'post_status' => 'publish',
      'posts_per_page' => 6,
      'order_by' => 'date',
      'order' => 'DESC'
    );

    $latest = new WP_Query( $args );

    if( $latest->have_posts() ) :
      echo '<div class="c-latest-posts">';
        while ( $latest->have_posts() ) : $latest->the_post() ;
          echo '<ul class="c-list">';
            echo '<li class="c-list-item">';
              echo get_the_post_thumbnail(get_the_ID(),'small');
              echo '<a title="'.get_the_title(get_the_ID()).'" href="'.get_the_permalink(get_the_ID()).'">';
                echo sprintf ('<span>%s</span>', get_the_title(get_the_ID()));
              echo '</a>';
            echo '</li>';
          echo '</ul>';
        endwhile;
      echo '</div>';
    endif;

    $output = ob_get_contents();
    ob_end_clean();

    return $output;
  }
}

endif;
