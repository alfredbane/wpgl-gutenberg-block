<?php
/**
 * The public-facing functionality of the plugin.
 *
 * @link              http://memorres.com
 * @since             1.0.0
 *
 * @package           		wpgl-gutenberg-block
 * @subpackage wpgl-gutenberg-block/public/grids
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines grid slider settings for the slides in public-facing functionality.
 *
 * @package           		wpgl-gutenberg-block
 * @subpackage wpgl-gutenberg-block/public/grids
 */
class Wpgl_Slider_Settings {

	/**
	 * The attributes to be passed to create grid structure.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      array    $attributes    attributes to be used for the grid setup.
	 */
	private $attributes;

	/**
	 * The settings to be created for the slider.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      array    $settings    settings to be used for the slider setup.
	 */
	private $settings;

	/**
	 * The controls to be displayed for the slider.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $slidercontrollershtml    controls to be displayed for the slider.
	 */
	private $slidercontrollershtml;


	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of the plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $attributes ) {

		$this->attributes = $attributes;

	}

	public function slider_settings() {

		if( empty( $this->attributes ) ) {
			return;
		}

		return $this->settings = [

			'data-fade' => !empty( $this->attributes['sliderFadeTransition'] ) ? $this->attributes['sliderFadeTransition'] : '',

			'data-controls' => !empty( $this->attributes['sliderControls'] ) ? $this->attributes['sliderControls'] : '',

			'data-slidestoshow' => !empty( $this->attributes['slidesToShow'] ) ? $this->attributes['slidesToShow'] : '',

			'data-infinite' => !empty( $this->attributes['isSlideInfinite'] ) ? $this->attributes['isSlideInfinite'] : '',

			'data-centermode' => !empty( $this->attributes['enableCenterMode'] ) ? $this->attributes['enableCenterMode'] : '',

			'data-slidestoshowinmobile' => !empty( $this->attributes['slidesToShowInMobile'] ) ? $this->attributes['slidesToShowInMobile'] : '',

			'data-slidestoshowintablet' => !empty( $this->attributes['slidesToShowInTablet'] ) ? $this->attributes['slidesToShowInTablet'] : '',

			'data-slidestoshowinlaptop' => !empty( $this->attributes['slidesToShowInLaptop'] ) ? $this->attributes['slidesToShowInLaptop'] : '',

		];

	}

	public function slider_controls_render() {

		// $controlClass = ( isset($controltype) && $controltype === 'small' ) ? 'c-button__small-arrow' : '';

		$buttonSizeClass = ( $this->attributes['postType'] !== 'banner' ) ? 'c-button__small-arrow' : '';

	    $this->slidercontrollershtml = '
				<div class="c-slider__controls">
				  <button class="c-button c-button__only-arrow '.$buttonSizeClass.' jsclickevent" data-jsclickevent="slick-prev" aria-label="Previous" type="button">
						<span class="c-arrow-button">
							<span class="c-arrow-button__inner">
								<span class="c-arrow-button__line c-arrow-button__line--left-arrow"></span>
							</span>
						</span>
				  </button>
				  <button class="c-button c-button__only-arrow '.$buttonSizeClass.'  jsclickevent" data-jsclickevent="slick-next" aria-label="Next" type="button">
						<span class="c-arrow-button">
							<span class="c-arrow-button__inner">
								<span class="c-arrow-button__line c-arrow-button__line--right-arrow"></span>
							</span>
						</span>
				  </button>
				</div>';

	    return $this->slidercontrollershtml;

	}

	public function all_setting_attributes() {

		return implode(' ', array_map(

			function ($v, $k) { if($v !== '') return sprintf("%s='%s'", $k, $v); },
			$this->slider_settings(),
			array_keys($this->slider_settings())

		));

	}


}
