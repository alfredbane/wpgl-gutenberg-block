/**
 * BLOCK: Almost Slider Block - Gutenberg (WPGRDLFE)
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks,
  InspectorControls,
  ColorPalette,
  PanelColorSettings,
  MediaUploadCheck,
  MediaUpload} from '@wordpress/blockEditor';
import { Fragment } from '@wordpress/element';
import { TextControl,
        ToggleControl,
        RangeControl,
        Toolbar,
      	Button,
      	PanelBody,
      	PanelRow,
      	FormToggle,
      	SelectControl,
      	IconButton,
        ColorPicker } from '@wordpress/components';

import ContainerAttributes from './utils';
import GridPlaceholder from '../common/gridplaceholder';


/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'wpgl-gutenberg-block/container', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'WPGL Container', 'autumn' ), // Block title.
	icon: 'desktop', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'wpgl-blocks', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'container - WPGL Block' ),
		__( 'Memorres creative' ),
		__( 'create-guten-block' ),
	],
	attributes: ContainerAttributes,

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: function( props ) {

    const { isOverlay,
            enableRowStretch,
            contentAlignment,
            containerImgID,
            containerImgAlt,
            containerImgURL,
            containerBackgroundColor,
            innerContainerBackgroundColor } = props.attributes;

    const onSelectImage = content => {
			props.setAttributes( {
				containerImgID: content.id,
				containerImgURL: content.url,
				containerImgAlt: content.alt,
			} );
		};

		const onRemoveImage = () => {
			props.setAttributes({
				containerImgID: null,
				containerImgURL: null,
				containerImgAlt: null,
			});
		}

    const onChangeBackgroundColor = value => {
      props.setAttributes({
        containerBackgroundColor : value
      })
    }


		return (
			<Fragment>
				<InspectorControls>
          <PanelBody title={ __('Container Settings') }>
             <PanelRow>
                <ToggleControl
                  label= { __("Stretch row content ") }
                  help={ __("Enable to stretch row content overriding the padding of container") }
                  checked={ enableRowStretch }
                  onChange={  enableRowStretch => props.setAttributes( { enableRowStretch } )}
                />
              </PanelRow>
          </PanelBody>
          <PanelBody title={ __( 'Background Options' ) } initialOpen={ false }>
            <PanelRow>
              <label className="wpgl-inspector-controls__label" >{ __( 'Select BG image' ) }</label>
              <MediaUploadCheck>
                  <MediaUpload
                  	onSelect={ onSelectImage }
                  	allowedTypes={ ['image'] }
                  	value=""
                  	render={ ( { open } ) => (
                  		<div>
                        { !containerImgURL ?
                    			<IconButton
                    				className="ab-container-inspector-media"
                    				label={ __( 'Edit image' ) }
                    				icon="format-image"
                    				onClick={ open }
                    			>
                    				{ __( 'Select Image' ) }
                    			</IconButton>
                          :
                  				<IconButton
                  					className="ab-container-inspector-media"
                  					label={ __( 'Remove Image' ) }
                  					icon="dismiss"
                  					onClick={ onRemoveImage }
                  				>
                  					{ __( 'Remove' ) }
                  				</IconButton>
                    		}
                  		</div>
                  	) }
                  >
                  </MediaUpload>
                </MediaUploadCheck>
              </PanelRow>

              { containerImgURL && !! containerImgURL.length && (
                <PanelRow>
                  <div className="wpgl-components__img--preview">
                    <img width="200px" height="200px" src= {containerImgURL} />
                  </div>
                </PanelRow>
              ) }

              <PanelRow>
                <ToggleControl
                  label= "Add Image Overlay"
                  help={ isOverlay ? 'This adds overlay on main background image. Color is managed from css.' : '' }
                  checked={ isOverlay }
                  onChange={  content => props.setAttributes( { isOverlay: content } )}
                />
              </PanelRow>


              { !containerImgURL && (
                <PanelColorSettings
                  title={ __( 'Container Background Color' ) }
                  initialOpen={ false }
                  colorSettings={ [ {
                  value: containerBackgroundColor,
                  label: __( 'Background Color' ),
                  onChange: onChangeBackgroundColor,
                  } ] }
                >
                </PanelColorSettings>
              )}

      			</PanelBody>
				</InspectorControls>

        <div className="wpgl-components__wrapper wpgl-components__wrapper--hasbg">

          <GridPlaceholder
            placeholderLabel = {__("Container")}
            className = {" placeholder--small wpgl-block-banner-select" }
          />

          <div className="wrapperDiv">
          	<InnerBlocks/>
          </div>

        </div>

			</Fragment>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: function( props ) {

    const { isOverlay, enableRowStretch, containerImgURL, containerBackgroundColor, innerContainerBackgroundColor } = props.attributes;

    const backgroundImage = containerImgURL ? { backgroundImage:`url(${containerImgURL})` } : '';
    const backgroundColor = containerBackgroundColor ? { backgroundColor: containerBackgroundColor } : '';
    const rowStretchClass = enableRowStretch ? "stretch-content" : '';

    	return (

  			<section className="o-section" style={{...backgroundImage, ...backgroundColor}}>
          <div className={ `container-fluid ${rowStretchClass}` }>
  			     <InnerBlocks.Content />
           </div>
  			</section>

  		);
	},
} );
