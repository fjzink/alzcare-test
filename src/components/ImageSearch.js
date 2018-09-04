import React, { Component } from 'react';
import axios from 'axios';
import { Form, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { setTags } from '../actions/search_actions';

class ImageSearch extends Component {
    handleTagChange = (e, { value }) => {
        this.props.setTags(value);
    }

    formatTags = (tags) => {
        let formattedTags = tags;
        formattedTags = formattedTags.replace(/\s+/g, ',');
        formattedTags = formattedTags.replace(/,+/g, ',');
        const lastChar = formattedTags[formattedTags.length - 1];
        if (lastChar === ',') {
            formattedTags = formattedTags.slice(0, -1);
        }
        return formattedTags;
    }

    handleSubmit = () => {
        const { tags } = this.props.search;
        const formattedTags = this.formatTags(tags);
        console.log(formattedTags);
    }

    render() {
        const { tags } = this.props.search;
        return (
            <div className={'ImageSearch'}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Field width='8'>
                            <label>Tags</label>
                            <Input icon='search' fluid placeholder='Search for photos...' value={tags} onChange={this.handleTagChange} />
                        </Form.Field>
                    </Form.Group>
                    <Form.Button>Search</Form.Button>
                </Form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { search: state.search };
}

export default connect(mapStateToProps, { setTags })(ImageSearch);
