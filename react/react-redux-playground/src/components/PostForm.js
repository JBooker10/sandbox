import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { createPost } from '../actions/postActions'

class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: ''
        }
    }

    onChange = e => {
        this.setState({[e.target.name] : e.target.value })
    }

    onSubmit = e => {
        e.preventDefault()
        const post = {
            title: this.state.title,
            body: this.state.body
        }

        this.props.createPost(post);
    }


    render() {
    
        return (
            <div>
            <h1>Add Post</h1>
            <form onSubmit={this.onSubmit}>
                <div>
                <label>Title: </label>
                <input type="text" value={this.state.title} 
                onChange={this.onChange}
                name="title" className="form-control form-control-lg"/>
                </div>
                <div>
                <label>Body: </label>
                <input type="text" value={this.state.body} 
                onChange={this.onChange}
                name="body" className="form-control form-control-lg"/>
                </div>
                <br/>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        )
    }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(PostForm);