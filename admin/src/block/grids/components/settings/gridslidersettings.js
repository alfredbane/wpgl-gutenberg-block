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
import {
        PanelBody,
        PanelRow,
        ToggleControl,
        RangeControl
      } from '@wordpress/components';

const GridSliderSettings = ({ gridType, sliderFadeTransition, sliderControls, enableCenterMode, isSlideInfinite, slidesToShow, slidesToShowInMobile, slidesToShowInTablet, slidesToShowInLaptop, setAttributes }) => {

  const toggleSliderTransition = () => {
    setAttributes({
        sliderFadeTransition: !sliderFadeTransition
    });
  };

  const toggleSliderControls = () => {
    setAttributes({
        sliderControls: !sliderControls
    });
  };

  const setSlidesToShow = (slidesToShow) => {
    setAttributes({
        slidesToShow
    });
  };

  const setSlidesToShowInMobile = (slidesToShowInMobile) => {
    setAttributes({
        slidesToShowInMobile
    });
  };

  const setSlidesToShowInTablet = (slidesToShowInTablet) => {
    setAttributes({
        slidesToShowInTablet
    });
  };

  const setSlidesToShowInLaptop = (slidesToShowInLaptop) => {
    setAttributes({
        slidesToShowInLaptop
    });
  };

  const toggleSlideInfiniteValue = (isSlideInfinite) => {
    setAttributes({
        isSlideInfinite
    });
  };
  const toggleSlideCenterMode = (enableCenterMode) => {
    setAttributes({
        enableCenterMode
    });
  }

  return (
    <Fragment>

      { gridType && (gridType === globalstrings.gridtype.bannerSlider ||
        gridType === globalstrings.gridtype.postGridSlider ||
        gridType === globalstrings.gridtype.featuredProductBannerSlider ) && (

        <PanelBody
          title={ __( 'Slider settings' ) }
          icon="tide"
          className="wpgl-slider-controls"
          initialOpen={ false }
        >
          <PanelRow>

            <ToggleControl
              label= "Fade in transition"
              help={ __('Select to enable fade transition for slider instead of slide transitions', 'wpgl') }
              checked={sliderFadeTransition}
              onChange={toggleSliderTransition}
            />

          </PanelRow>

          <PanelRow>

            <ToggleControl
              label= "Enable slider controls"
              help={ __('Select to enable slider previous and next buttons.', 'wpgl') }
              checked={sliderControls}
              onChange={toggleSliderControls}
            />

          </PanelRow>

          <PanelRow>

            <ToggleControl
              label= "Scroll slides infinitely"
              help={ __('Select to enable infinite slides in the slider.', 'wpgl') }
              checked={isSlideInfinite}
              onChange={toggleSlideInfiniteValue}
            />

          </PanelRow>

          <PanelRow>

            <ToggleControl
              label= "Enable Center Mode"
              help={ __('Select to enable center mode for slides. Helpful for slides to get center slide attention.', 'wpgl') }
              checked={enableCenterMode}
              onChange={toggleSlideCenterMode}
            />

          </PanelRow>

          <RangeControl
            label="Slides to Show"
            value={ slidesToShow }
            onChange={ setSlidesToShow }
            min={ 1 }
            max={ 7.0 }
            step={ 0.1 }
          />

          <label className="wpgl-inspector-controls__label label--big" >{ __( 'Responsive Settings' ) }</label>

          <RangeControl
            label='Slides to show in mobile'
            value={ slidesToShowInMobile }
            onChange={ setSlidesToShowInMobile }
            min={ 1 }
            max={ 5.0 }
            step={ 0.1 }
          />

          <RangeControl
            label='Slides to show in tablet'
            value={ slidesToShowInTablet }
            onChange={ setSlidesToShowInTablet }
            min={ 1 }
            max={ 3 }
          />

          <RangeControl
            label='Slides to show in laptop'
            value={ slidesToShowInLaptop }
            onChange={ setSlidesToShowInLaptop }
            min={ 1 }
            max={ 7.0 }
            step={ 0.1 }
          />

        </PanelBody>

      )}
    </Fragment>
  );
}

export default GridSliderSettings;
