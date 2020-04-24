import React, { Component } from 'react';
import axios from 'axios';

class MovieCall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            poster: '',
            comment: '',
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    axios = require('axios').default;
    submitForm(e) {

        e.preventDefault();
        const url = 'https://post-a-form.herokuapp.com/api/movies/';
        axios.post(url, this.state)
            .then(res => res.data)
            .then(res => {
                alert(`Film ajouté avec l'id ${ res.id } !`);
            })
            .catch(e => {
                console.error(e);
                alert(`Erreur lors de l'ajout du film : ${ e.message }`);
            });
    }


    render() {
        return (
            <div className="FormMovie">
                <h1>Looking for a mindfuck movie :)</h1>

                <form onSubmit={this.submitForm}>
                    <fieldset>
                        <legend>Informations</legend>
                        <div className="form-data">
                            <label htmlFor="title">Title </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                onChange={this.onChange}
                                value={this.state.title}
                            />
                        </div>

                        <div className="form-data">
                            <label htmlFor="poster">Poster</label>
                            <input
                                type="url"
                                id="poster"
                                name="poster"
                                onChange={this.onChange}
                                value={this.state.poster}
                            />
                        </div>

                        <div className="form-data">
                            <label htmlFor="comment">Comment</label>
                            <input
                                type="text"
                                id="comment"
                                name="comment"
                                onChange={this.onChange}
                                value={this.state.firstname}
                            />
                        </div>

                        <hr />
                        <div className="form-data">
                            <input type="submit" value="Send" />
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}
export default MovieCall;