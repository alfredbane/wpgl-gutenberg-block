<?php

/**
 * Output the breadcrumbs in front end
 *
 * @param int $post_id The post ID
 * @return string
 *
 */

if( !class_exists( 'Render_Wpgl_Breadcrumb' ) ) :

class Render_Wpgl_Breadcrumb {



  public function __construct() {

  }

  public function renderHTML() {

    ob_start();

  	global $post;
    $query = get_queried_object();
    $postType = get_post_type_object(get_post_type($query));

    ?>

      <ul id="breadcrumbs">
        <li><a href="<?php echo get_option('home') ?>"> <?php echo __('Home') ?> </a></li>
        <li class="separator"> / </li>
        <?php if( is_single() || is_singular() ) : ?>
          <li><a href="<?php echo get_permalink( get_option( 'page_for_posts' ) ); ?>"> <?php echo esc_html($postType->labels->singular_name);  ?> </a></li>
          <li class="separator"> / </li>
          <li><a href="<?php echo get_the_permalink(get_the_ID()) ?>"> <?php echo get_the_title(get_the_ID())  ?> </a></li>
        <?php endif; ?>
      </ul>

      <?php

      $output = ob_get_contents();
      ob_end_clean();

      return $output;
  }
}

endif;
