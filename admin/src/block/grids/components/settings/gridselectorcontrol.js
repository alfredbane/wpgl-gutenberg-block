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

import * as globalstrings from '../../../common/globalstrings.json';

import { __ } from '@wordpress/i18n';
import { Component, useEffect } from '@wordpress/element';
import { withState } from '@wordpress/compose';
import { SelectControl } from '@wordpress/components';


const GridSelectControl = (props) => {

  useEffect(()=>{
    if(!props.attributes.gridType){
      props.setAttributes( { gridType: globalstrings.gridtype.bannerSlider } )
    }
  },[])

  return(
    <SelectControl
        label={__("Select grid style")}
        value={ props.attributes.gridType }
        options={ [

            { label: 'Banner Slider', value: globalstrings.gridtype.bannerSlider },
            { label: 'Post Grid Slider', value: globalstrings.gridtype.postGridSlider },
            { label: 'Featured Product Slider', value: globalstrings.gridtype.featuredProductBannerSlider },

          ] }
        onChange={ ( gridType ) => { props.setAttributes( { gridType } ) } }
    />
  );
};


export default GridSelectControl;
