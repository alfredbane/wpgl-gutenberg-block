/**
 * UTILS: WPGL Gutenberg attributes for banner block
 * COMPONENT: Attributes for block
 *
 * Re-Render blocks from this attributes data.
 *
 * @package WordPress
 * @subpackage WPGL Gutenberg Blocks
 * @since WPGL v1.0
 *
 */


const BannerAttributes = {

  containerImgURL: {
    selector: '.wrapper-container',
    source: 'attribute',
    attribute: 'data-wpgl-image'
  },
  containerBackgroundColor :{
    type: 'string',
    default: '#1D2308',
  },
  isForegroundImage: {
    type: 'boolean',
    default: false,
  },
  foregroundImgURL: {
    type: 'string',
    default: '',
  },
  bgBannerClass: {
    type: 'object',
    attribute: 'class',
    selector:'.wpgl-banner'
  },
  bannerType: {
    selector: '.wpgl-banner',
    source: 'attribute',
    attribute: 'data-banner-type'
  },
  headingType: {
    type:'string',
    selector: '.wpgl-banner-title',
    attribute: 'data-heading-type'
  },
  headingContent: {
    type:'string',
    selector: '.wpgl-banner-title',
    source: 'text'
  },
  captionContent: {
    type:'string',
    selector: '.wpgl-banner-caption',
    source: 'html',
  },
  enableButton: {
    type:'boolean',
    default: false,
  },
  buttonUrl: {
    type:'string',
    selector: '.wpgl-banner-cta',
    source: 'attribute',
    attribute:'href'
  },
  buttonText: {
    type: "string",
    source: "text",
    selector: ".wpgl-banner-cta"
  },
  buttonTarget: {
    type: "boolean",
    default: false
  },
};

export default BannerAttributes;
