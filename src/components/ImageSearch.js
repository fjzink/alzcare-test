import React, { Component } from 'react';
import { Form, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import jsonp from 'jsonp';

import { setTags } from '../actions/search_actions';

function jsonFlickrFeed(json) {
    return json;
}

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
        const flickrFeedURL = 'https://api.flickr.com/services/feeds/photos_public.gne';
        const requestURL = `${flickrFeedURL}?format=json&tags=${formattedTags}`;
        jsonp(requestURL, { name: 'jsonFlickrFeed' }, (err, data) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log(data.items);
            }
        });
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
