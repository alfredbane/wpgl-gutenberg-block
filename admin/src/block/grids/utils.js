/**
 * UTILS: WPGL Gutenberg attributes for grids block
 * COMPONENT: Attributes for block
 *
 * Re-Render blocks from this attributes data.
 *
 * @package WordPress
 * @subpackage WPGL Gutenberg Blocks
 * @since WPGL v1.0
 *
 */


const GridAttributes = {
    postType: {
      type: 'string',
      default: 'posts'
    },
    gridType: {
      type: 'string',
      default: undefined
    },
    isSinglePost: {
      type: 'boolean',
      default: false
    },
    singlePostId: {
      type: 'string',
      default: undefined
    },
    selectedTerm: {
      type: 'string',
      default: undefined
    },
    selectedTermTaxonomy: {
      type: 'string',
      default: undefined
    },
    isTaxonomySlider: {
      type: 'boolean',
      default: false
    },
    filterPostByTaxonomy: {
      type: 'boolean',
      default: false
    },
    sliderFadeTransition: {
      type: 'boolean',
      default: false
    },
    sliderControls: {
      type: 'boolean',
      default: true
    },
    isSlideInfinite: {
      type: 'boolean',
      default: true
    },
    enableCenterMode: {
      type: 'boolean',
      default: false
    },
    slidesToShow: {
      type: 'number',
      default: 1
    },
    slidesToShowInMobile: {
      type: 'number',
      default: 1
    },
    slidesToShowInTablet: {
      type: 'number',
      default: 1
    },
    slidesToShowInLaptop: {
      type: 'number',
      default: 1
    },

};

export default GridAttributes;
