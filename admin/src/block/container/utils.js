/**
 * UTILS: WPGL Gutenberg attributes for container block
 * COMPONENT: Attributes for block
 *
 * Re-Render blocks from this attributes data.
 *
 * @package WordPress
 * @subpackage WPGL Gutenberg Blocks
 * @since WPGL v1.0
 *
 */


const ContainerAttributes = {

  isOverlay: {
    type: 'boolean',
    default: false,
  },
  containerImgID: {
    type: 'string',
    default: ''
  },
  containerImgURL: {
    type: 'string',
    default: ''
  },
  containerImgAlt: {
    type: 'string',
    default: ''
  },
  containerBackgroundColor: {
    type: 'string',
    default: ''
  },
  innerContainerBackgroundColor: {
    type: 'string',
    default: ''
  },
  setColor: {
    type: 'string',
    default: ''
  },
  enableRowStretch: {
    type: 'boolean',
    default: false
  }

};

export default ContainerAttributes;
