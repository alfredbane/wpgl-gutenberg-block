/**
 * BLOCK: WPGL Gutenberg Post Grid v1
 * COMPONENT: Post Selector
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 *
 * Using inline styles - no external stylesheet needed.  Not recommended!
 * because all of these styles will appear in `post_content`.
 */

import PropTypes from 'prop-types';
import * as globalstrings from '../../../common/globalstrings.json';

import { __ } from '@wordpress/i18n';
import { Fragment, useEffect } from '@wordpress/element';
import { InspectorControls,
         BlockControls,
       } from '@wordpress/blockEditor';
import { IconButton,
        PanelBody,
        PanelRow,
        ToggleControl,
        SelectControl
      } from '@wordpress/components';

import PostSelectControl from './postselectorcontrol';
import PostCategorySelectControl from './categoryselectorcontrol';
import GridSelectControl from './gridselectorcontrol';
import SinglePostSelectControl from './singlepostselectorcontrol';
import GridSliderSettings from './gridslidersettings';

const GridWithInspectorControls = (props) => {

  const { isSinglePost,
          postType,
          gridType,
          sliderFadeTransition,
          sliderControls,
          isTaxonomySlider,
          filterPostByTaxonomy,
          slidesToShow,
          isSlideInfinite,
          enableCenterMode,
          slidesToShowInMobile,
          slidesToShowInTablet,
          slidesToShowInLaptop,
          selectedTerm,
          selectedTermTaxonomy
         } = props.attributes;

  useEffect(()=>{

    if( postType === "banner" ){

      props.setAttributes({
        postType: "banner",
        isSinglePost: true,
        gridType: globalstrings.gridtype.bannerSlider,
      });

    }

    if( gridType ===  globalstrings.gridtype.featuredProductBannerSlider ) {

      props.setAttributes({

        postType: "product",
        filterPostByTaxonomy: true,
        selectedTerm: "featured",
        selectedTermTaxonomy: "product_visibility",
        filterPostByTaxonomy: false

      });

    }

  },[postType]);

  const isPostTypeBanner  = (postType === "banner");
  const isGridTypeFeaturedProductSlider = (gridType === globalstrings.gridtype.featuredProductBannerSlider)

  const toggleSinglePostDisplay = () => {
    props.setAttributes({
        isSinglePost: !isSinglePost
    });
  };

  const toggleTaxonomySliderSelect = () => {
    props.setAttributes({
        isTaxonomySlider: !isTaxonomySlider
    });
  };

  const toggleFilterPostByTaxonomy = () => {
    props.setAttributes({
        filterPostByTaxonomy: !filterPostByTaxonomy
    });
  };

  return(
    <Fragment>
      <InspectorControls>
        <PanelBody
          title={ __( 'Post settings' ) }
          icon="welcome-write-blog"
          initialOpen={ true }
        >

          <PanelRow>
            <PostSelectControl {...props}/>
          </PanelRow>

          { !isPostTypeBanner && !isTaxonomySlider && !isGridTypeFeaturedProductSlider &&

            <PanelRow>

              <ToggleControl
                label= "Display single post"
                help={ __('Select to choose only one post from the post type. Highly effective for Banner type sliders', 'wpgl') }
                checked={ isSinglePost }
                onChange={ toggleSinglePostDisplay }
              />

            </PanelRow>
          }

          { !isPostTypeBanner && !isSinglePost && !isGridTypeFeaturedProductSlider &&


            <Fragment>

              { !isTaxonomySlider &&
                <PanelRow>

                  <ToggleControl
                    label= "Filter Posts by taxonomy"
                    help={ __('Select to filter posts by taxonomy. Posts categorised with selected term will be displayed here.', 'wpgl') }
                    checked={ filterPostByTaxonomy }
                    onChange={ toggleFilterPostByTaxonomy }
                  />

                </PanelRow>
              }

              <PanelRow>

                <ToggleControl
                  label= "Show Taxonomy Grid"
                  help={ __('Select to show taxonomies as grid instead. If enabled the front will display selected taxonomy grid rather posts.', 'wpgl') }
                  checked={ isTaxonomySlider }
                  onChange={ toggleTaxonomySliderSelect }
                />

              </PanelRow>
            </Fragment>

          }

          { postType && isSinglePost &&
            <PanelRow>
              <SinglePostSelectControl {...props}/>
            </PanelRow>
          }

          { !isPostTypeBanner &&
            <Fragment>
              { !isSinglePost && !isGridTypeFeaturedProductSlider && (
                <PanelRow>
                  <PostCategorySelectControl {...props}/>
                </PanelRow>
              )}
              <PanelRow>
                <GridSelectControl {...props}/>
              </PanelRow>
            </Fragment>
          }

        </PanelBody>

        <GridSliderSettings
          gridType = { gridType }
          sliderControls = { sliderControls }
          isSlideInfinite = { isSlideInfinite }
          enableCenterMode = { enableCenterMode }
          sliderFadeTransition = { sliderFadeTransition }
          slidesToShow = { slidesToShow }
          slidesToShowInMobile = { slidesToShowInMobile }
          slidesToShowInTablet = { slidesToShowInTablet }
          slidesToShowInLaptop = { slidesToShowInLaptop }
          setAttributes = { props.setAttributes }
        />

      </InspectorControls>
    </Fragment>
  );
}


GridWithInspectorControls.propTypes = {
  isSinglePost : PropTypes.bool,
  postType : PropTypes.string,
  gridType : PropTypes.string,
  sliderFadeTransition : PropTypes.bool,
  sliderControls : PropTypes.bool,
  isTaxonomySlider : PropTypes.bool,

}

GridWithInspectorControls.defaultProps = {
  isSinglePost : false,
  postType : null,
  gridType : null,
  sliderFadeTransition : false,
  sliderControls : true,
  isTaxonomySlider : false,
}

export default GridWithInspectorControls;
