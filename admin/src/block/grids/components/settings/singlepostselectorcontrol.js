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

class SinglePostSelectControl extends Component {

  constructor(props) {

    super(props);

    this.state = {
      singlePostSelection : [{label:'No posts to select', value:0}],
      value: 0
    }

    this.getPosts = this.getPosts.bind(this);

  }

  getPosts() {

    const { postType } = this.props.attributes ;

		apiFetch({path: `wpgl/v2/types/${postType}` }).then(post_item => {


        const singlePostSelection = Object.keys(post_item).map((key)=>({
          label:post_item[key].post_title,
          value:post_item[key].ID
        }));

        singlePostSelection.unshift({label:'Select Posts', value:0});

				this.setState({
					singlePostSelection
				});

		}). catch( error => console.log(error));


	}

  componentDidMount() {
    this.getPosts();
  }

  componentDidUpdate(prevProps) {

    const { singlePostId:prevSinglePostId } = prevProps.attributes;
    const { singlePostId } = this.props.attributes;

    if( singlePostId !== prevSinglePostId ) {
      this.getPosts();
    }

  }

  render() {

    const { singlePostSelection } = this.state;
    const { singlePostId } = this.props.attributes;

    console.log("after save", singlePostId);


    const setSelectedPost = (singlePostId) => {
      console.log("onchange", singlePostId);
      this.props.setAttributes({
        singlePostId
      });
    };

    return(

      <SelectControl
        label="Select particular post"
        value={ singlePostId }
        options={ singlePostSelection }
        onChange={ setSelectedPost }
      />

    );
  }

}

export default SinglePostSelectControl;
