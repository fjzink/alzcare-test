import React, { Component } from 'react';
import axios from 'axios';
import { Form, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { setTags } from '../actions/search_actions';

class ImageSearch extends Component {
    handleTagChange = (e, { value }) => {
        this.props.setTags(value);
    }

    handleSubmit = () => {
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
