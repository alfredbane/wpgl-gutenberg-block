<?php

/**
 * Helper class for Grids.
 *
 * @package WordPress
 * @subpackage WPGL Gutenberg Blocks
 * @since WPGL v1.0
 *
 */

if(!class_exists ('Wpgl_Featured_Product_Banner_Slider')) :

  class Wpgl_Featured_Product_Banner_Slider {

    public $output;

    private $attributes;

    function __construct($attributes) {

        $this->attributes = $attributes;

    }

    function renderHTML($wpgl_posts_query) {

      ob_start(); ?>

      <div class="wpgl-sliders" <?php echo $this->get_slider_settings()->all_setting_attributes() ?> >

          <?php

            if ( $wpgl_posts_query->have_posts() ) {

              while( $wpgl_posts_query->have_posts() ) : $wpgl_posts_query->the_post();

                $_product = wc_get_product( get_the_ID() );

                $featured_image = wp_get_attachment_image_src( get_post_thumbnail_id(get_the_ID()), 'single-post-thumbnail' ); ?>

                <div class="container-wrapper">
                  <div class="row">
                    <div class="col-lg-5 col-md-6">
                      <div class="c-item__picture">
                        <img src="<?php echo $featured_image[0]; ?>" data-id="">
                      </div>
                    </div>
                    <div class="col-lg-7 col-md-6">
                      <div class="c-item__content wrapper__container wpgl__content">
                        <div class="c-item__title">
                          <?php printf('<h2>%s</h2>', __("Featured Product", "wpgl-blocks")); ?>
                        </div>
                        <div class="c-item__name">
                          <?php printf('<h3>%s</h3>', $_product->get_name()); ?>
                        </div>
                        <div class="c-item__description">
                          <?php printf('<p>%s</p>', $_product->get_description()); ?>
                        </div>

                        <div class="c-item__price">
                          <?php echo sprintf('<span class="c-item__price-offer">%s</span>', $_product->get_price_html()); ?>
                        </div>

                        <div class="c-item__tags">
                          <?php $this->get_product_tags(get_the_ID()); ?>
                        </div>

                        <div class="c-site-button">
                          <a alt="<?php echo __("View product in detail") ?>" class="c-button" href="<?php echo get_permalink( get_the_ID() ); ?>">
                            <span class="c-arrow-button">
                              <span class="c-button__text"><?php echo __("View in detail", "wpgl-blocks")?></span>
                              <span class="c-arrow-button__inner">
                                <span class="c-arrow-button__line c-arrow-button__line--right-arrow"></span>
                              </span>
                            </span>
                          </a>
                       </div>
                      </div>
                    </div>
                  </div>
                </div>
              <?php endwhile;

            }

          ?>

      </div>

      <?php
        if( count( $wpgl_posts_query->posts) > 1 ):
          echo $this->get_slider_settings()->slider_controls_render();
        endif;

      $this->output = ob_get_contents();
      ob_end_clean();

      return $this->output;

    }

    function get_product_tags($product_id) {

      // get product_tags of the current product
      $current_tags = get_the_terms( $product_id, 'product_tag' );

      //only start if we have some tags
      if ( $current_tags && ! is_wp_error( $current_tags ) ) {

          //create a list to hold our tags
          echo '<ul class="c-product-tags">';

          //for each tag we create a list item
          foreach ($current_tags as $tag) {

              $tag_title = $tag->name; // tag name
              $tag_link = get_term_link( $tag );// tag archive link

              echo '<li class="c-product-tags__item"><a class="c-product-tags__link" href="'.$tag_link.'">'.$tag_title.'</a></li>';
          }

          echo '</ul>';
      }

    }

    function get_slider_settings() {

      return new Wpgl_Slider_Settings($this->attributes);

    }

  }

endif;
