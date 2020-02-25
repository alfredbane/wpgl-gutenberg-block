/**
 * BLOCK: WPGL Gutenberg Post Grid v1
 * COMPONENT: Post Grid
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 *
 * Using inline styles - no external stylesheet needed.  Not recommended!
 * because all of these styles will appear in `post_content`.
 */

import { __ } from '@wordpress/i18n';
import GridPlaceholder from '../../common/gridplaceholder';
import GridWithInspectorControls from './settings/gridwithinspectorcontrols'

const PostGrid = (props) => {

    return (

      <div>

        <GridWithInspectorControls {...props} />

        <div className="wpgl-components__wrapper">

          <GridPlaceholder
            placeholderLabel = {__("POSTGRID")}
            gridTypeLabel = {
              <div className="components-placeholder__label">
                <div className="wpgl__grid--type">
                  <label className="wpgllabel__text wpgllabel__text--dark"> {props.attributes.gridType} </label>
                </div>
              </div>
            }

          />

        </div>

      </div>

    );

  }

export default PostGrid;
