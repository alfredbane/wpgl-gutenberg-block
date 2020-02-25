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

class PostCategorySelectControl extends Component {

  constructor(props) {

    super(props);

    this.state = {
      categorySelection : [{label:'Select Category', value:0}],
      value: 0
    }

    this.getPostCategoryTerms = this.getPostCategoryTerms.bind(this);

  }

  getPostCategoryTerms() {

    const { postType } = this.props.attributes;

		apiFetch({path: `wpgl/v2/taxonomies/${postType}`}).then(terms => {

        const categorySelection = terms.map((term)=>({
          label : term.name,
          value : term.slug,
          taxonomy: term.taxonomy
        }));


				this.setState( {
					categorySelection,
				},()=>{

            const { selectedTerm, selectedTermTaxonomy } = this.props.attributes;
            const { categorySelection } = this.state;


            if( categorySelection && categorySelection[0]) {

              if( !selectedTerm ) {
                this.props.setAttributes({
                  selectedTerm: categorySelection[0].value
                });
              }

              if( !selectedTermTaxonomy ) {

                this.props.setAttributes({
                  selectedTermTaxonomy: categorySelection[0].taxonomy
                });

              }

            }

        })

		}). catch( error => console.log(error));

	}

  componentDidMount() {
    this.getPostCategoryTerms();
  }

  componentDidUpdate(prevProps) {

    const { postType:prevPostType } = prevProps.attributes;
    const { postType } = this.props.attributes;


    if( postType !== prevPostType  ) {
      this.getPostCategoryTerms();
    }

  }

  render() {

    const { categorySelection, value } = this.state;
    const { selectedTerm, selectedTermTaxonomy } = this.props.attributes;

    const setCategoryTerm = (selectedTerm) => {

      const selectedIndex = categorySelection.findIndex((category) => ( category.value === selectedTerm ));

      this.props.setAttributes({
        selectedTermTaxonomy: categorySelection[selectedIndex].taxonomy
      })

      this.props.setAttributes({
        selectedTerm
      });

    };

    return(

      <SelectControl
        label={__('Select category')}
        value={ selectedTerm }
        options={ categorySelection }
        onChange={ setCategoryTerm }
      />

    );
  }

}

export default PostCategorySelectControl;
