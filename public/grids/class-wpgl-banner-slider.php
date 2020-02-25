<?php

/**
 * Helper class for Grids.
 *
 * @package WordPress
 * @subpackage WPGL Gutenberg Blocks
 * @since WPGL v1.0
 *
 */

if( !class_exists( 'Wpgl_Banner_Slider' ) ) :


  class Wpgl_Banner_Slider {

    private $slider_settings_loader;

    private $attributes;

    public function __construct($attributes) {

      $this->attributes = $attributes;

      $this->slider_settings_loader = new Wpgl_Slider_Settings($this->attributes);

    }

    public function renderHTML($wpgl_posts_query) {



      ob_start(); ?>

        <div class="wpgl-sliders" <?php echo $this->slider_settings_loader->all_setting_attributes() ?> >

          <?php

            if ( $wpgl_posts_query->have_posts() ) {

              while( $wpgl_posts_query->have_posts() ) : $wpgl_posts_query->the_post();
                the_content();
              endwhile;
            }

            wp_reset_query();
          ?>
          
        </div>


        <?php


          echo $this->slider_settings_loader->slider_controls_render();

          $this->output = ob_get_contents();
          ob_end_clean();

      return $this->output;

    }

  }

endif;
