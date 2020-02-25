<?php

/**
 * Helper class for Grids.
 *
 * @package WordPress
 * @subpackage WPGL Gutenberg Blocks
 * @since WPGL v1.0
 *
 */

if(!class_exists ('Wpgl_Post_Grid_Slider')) :

  class Wpgl_Post_Grid_Slider {

    public $output;

    private $attributes;

    function __construct($attributes) {

        $this->attributes = $attributes;

    }

    function renderHTML($wpgl_posts_query) {


      ob_start(); ?>


          <?php

          if($this->attributes['isTaxonomySlider']) : ?>

              <?php echo $this->renderTaxonomyHTML(); ?>

           <?php else :

            if ( $wpgl_posts_query->have_posts() ) : ?>

            <div class="wpgl-sliders" <?php echo $this->get_slider_settings()->all_setting_attributes() ?> >

              <?php while( $wpgl_posts_query->have_posts() ) : $wpgl_posts_query->the_post(); ?>

                <article class="c-post">
                  <div class="c-post__counter">
                    <span>
                      <?php
                        echo sprintf("%02d", $wpgl_posts_query->current_post+1);
                      ?>
                    </span>
                  </div>
                  <div class="c-post__date">
                    <span>
                      <?php
                        echo get_the_date("d.m.Y", get_the_id());
                      ?>
                    </span>
                  </div>
                  <div class="c-post__meta new-meta">
                    <div class="c-post__title">
                      <?php
                        echo sprintf("<h5>%s</h5>", get_the_title(get_the_ID()));
                      ?>
                    </div>
                    <div class="c-post__picture image-as-thumbnail">
                      <?php
                        echo get_the_post_thumbnail(get_the_ID(), 'post-thumbnail');
                      ?>
                    </div>
                    <div class="c-post__link">
                      <a alt="read more" class="c-button c-button--white" href=<?php echo get_the_permalink(get_the_ID());?>>
                        <span class="c-arrow-button">
                          <span class="c-button__text"><?php echo __("Read more"); ?></span>
                          <span class="c-arrow-button__inner">
                            <span class="c-arrow-button__line c-arrow-button__line--right-arrow"></span>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>

                </article>

               <?php endwhile; ?>

            <?php endif; ?>
          </div>

          <?php endif; ?>

      <?php if( $wpgl_posts_query->posts && count( $wpgl_posts_query->posts ) > $this->attributes['slidesToShow'] ):
        echo $this->get_slider_settings()->slider_controls_render($controltype="small");
      endif; ?>

      <?php



      $this->output = ob_get_contents();
      ob_end_clean();

      return $this->output;

    }

    function taxonomy_query() {

      $term =  get_term_by('slug', $this->attributes['selectedTerm'], $this->attributes['selectedTermTaxonomy'] );
      return $term->term_id;

    }

    function renderTaxonomyHTML() {

      /* Post Custom Loop Settings */
      $term_id = $this->taxonomy_query();
      $taxonomy = $this->attributes['selectedTermTaxonomy'];
      $wpgl_taxonomy_query = get_term_children($term_id, $taxonomy );
      $output = '';

      ob_start(); ?>

      <div class="wpgl-sliders" <?php echo $this->get_slider_settings()->all_setting_attributes() ?> >
        <?php foreach( $wpgl_taxonomy_query as $dataID ):

          $term = get_term_by('id', $dataID, $taxonomy );
          $term_link = get_term_link($dataID, $taxonomy);
          $thumb_id = get_term_meta( $dataID, 'thumbnail_id', true );
          $thumb_meta = get_post_meta ( $thumb_id, '_wp_attachment_image_alt', true );
          $term_img = wp_get_attachment_url(  $thumb_id ); ?>


          <div class="o-tile c-gradient-cycle">
            <a class="o-tile__inner o-tile__inner--xxpd" title="<?php echo $term->name ?>" href="<?php echo $term_link ?>">
             <div class="o-picture">
               <picture class="o-picture__inner">
                 <img alt="<?php $thumb_meta  ?>" class="img--imgfull" src=<?php echo $term_img  ?>>
               </picture>
             </div>
             <div class="o-tile__content">
                <h3 class="o-tile__title">
                  <?php echo $term->name ?>
                </h3>
                <p class="o-tile__description">
                  <?php echo $term->description ?>
                </p>
             </div>
           </a>
          </div>

        <?php endforeach; ?>
      </div>
      <?php
      if( $wpgl_taxonomy_query && count( $wpgl_taxonomy_query ) > $this->attributes['slidesToShow'] ):
        echo $this->get_slider_settings()->slider_controls_render($controltype="small");
      endif;

      $output = ob_get_contents();
      ob_end_clean();

      return $output;

    }

    function get_post_count($query_object) {



    }

    function get_slider_settings() {

      return new Wpgl_Slider_Settings($this->attributes);

    }

  }

endif;
