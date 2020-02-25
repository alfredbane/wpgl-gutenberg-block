/**
 * BLOCK: WPGL Gutenberg Admin Button
 * COMPONENT: Wpgl Custom button
 *
 * Button component for blocks inside editor.
 * Simply displays a button with name and link attributes.
 */

import PropTypes from 'prop-types';

import { __ } from '@wordpress/i18n';

import { TextControl,
         Button,
         IconButton,
         PanelRow,
         ToggleControl } from '@wordpress/components';
import { Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/blockEditor';


const WpglAdminButton = ({ enableButton, buttonUrl, buttonText, setAttributes, buttonTarget }) => {

    const toggleButton = () => {
      setAttributes({
        enableButton : !enableButton
      });

    };

    const setButtonUrl = buttonUrl => {
      setAttributes({
        buttonUrl
      });
    };

    const setButtonText = buttonText => {
      setAttributes({
        buttonText
      });
    };

    const setButtonTarget = () => {
      console.log(buttonTarget);
      setAttributes({
        buttonTarget: !buttonTarget
      });
    }

    return (

      <div>
        <Fragment>
          <InspectorControls>
              <label className="wpgl-inspector-controls__label label--big" >{ __( 'Button settings' ) }</label>
              <PanelRow>
                <ToggleControl
                label= "Is external link ?"
                help={ __('Enable if the button is an external url.', 'autumn') }
                checked={ buttonTarget }
                onChange={ setButtonTarget }
                />
              </PanelRow>
          </InspectorControls>
        </Fragment>

        { enableButton ?

          <div className="wpgl-components-placeholder wpgl-bannercta-settings">
            <div className="components-placeholder__label">
              <span className="wpgllabel">
                { __('Banner button') }
              </span>
            </div>
            <div className="components-placeholder__button">
              <a href={ buttonUrl ? buttonUrl : '' } target={ buttonTarget ? "_blank" : '' } className="btn btn-solid wpgl__button"> {buttonText ? buttonText : 'Button'} </a>
            </div>
            <div className="components-placeholder__button">
              <IconButton
                className="button button-small button-primary wpgl-button edit-button"
                label = { __('Add image', 'wpglblocks') }
                icon="edit"
                onClick={ toggleButton }>
              </IconButton>
            </div>
          </div>
        :
          <div className="wpgl-components-placeholder wpgl-bannercta-settings">
            <div className="components-placeholder__label">
              <span className="wpgllabel">
                { __('Banner button link') }
              </span>
            </div>

            <div className="wpgl__group">
              <TextControl
                type="text"
                className="input input__value"
                onChange={setButtonUrl}
                value ={buttonUrl ? buttonUrl : ''}
                placeholder="Add link to button"
              />
              <TextControl
                type="text"
                className="input input__value"
                onChange={setButtonText}
                value ={buttonText ? buttonText : ''}
                placeholder="Add button text"
              />
              <Button
                onClick={toggleButton}
                className="button button-type"
                title= {__('Create Button')}
              >
                <span className="dashicons dashicons-yes-alt"></span>
              </Button>
            </div>
          </div>
        }
      </div>


    );

  }

  WpglAdminButton.propTypes = {
    enableButton : PropTypes.bool,
    buttonUrl : PropTypes.string,
    buttonText: PropTypes.string,
    buttonTarget: PropTypes.bool,
    setAttributes: PropTypes.func
  }

  WpglAdminButton.defaultProps = {
    enableButton : false,
    buttonUrl : '',
    buttonText: '',
    buttonTarget: false,
    setAttributes: ''
  }

  export default WpglAdminButton;
