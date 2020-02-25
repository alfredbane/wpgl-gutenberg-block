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

import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import { SelectControl } from '@wordpress/components';

class PostSelectControl extends Component {

  constructor(props) {

    super(props);

    this.state = {
      postSelection : [{label:'Select post', value:0}],
      value: 0
    }

    this.getPostType = this.getPostType.bind(this);

  }

  getPostType() {

		apiFetch({path: "/wp/v2/types"}).then(post_types => {

        const postSelection = Object.keys(post_types).map((key)=>({
          label:post_types[key].name,
          value:post_types[key].slug
        }));


				this.setState( {

					postSelection

				},()=>{

            const { postType } = this.props.attributes;
            const { postSelection } = this.state;

            if(!postType && postSelection && postSelection[0]) {

              this.props.setAttributes({
                postType: postSelection[0].value
              });

            }

        })

		}). catch( error => console.log(error));

	}

  componentDidMount() {
    this.getPostType();
  }

  render() {

    const { postSelection, value } = this.state;
    const { postType } = this.props.attributes;

    const setPostType = (postType) => {
      this.props.setAttributes({
        postType
      });
    };

    return(

      <SelectControl
        label={__('Select Post type')}
        value={ postType }
        options={ postSelection }
        onChange={ setPostType }
      />

    );
  }

}

export default PostSelectControl;
