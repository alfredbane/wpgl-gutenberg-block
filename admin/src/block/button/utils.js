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


const ButtonAttributes = {

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

export default ButtonAttributes;
