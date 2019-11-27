import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeGenderName = this.onChangeGenderName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      user_name: '',
      gender_name: ''
    }
  }

  componentDidMount() {
      axios.get('http://localhost:4000/business/edit/'+this.props.match.params.id)
          .then(response => {
              this.setState({ 
                user_name: response.data.user_name, 
                gender_name: response.data.gender_name });
          })
          .catch(function (error) {
              console.log(error);
          })
    }

  onChangeUserName(e) {
    this.setState({
      user_name: e.target.value
    });
  }
  onChangeGenderName(e) {
    this.setState({
      gender_name: e.target.value
    });  
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      user_name: this.state.user_name,
      gender_name: this.state.gender_name
    };
    axios.post('http://localhost:4000/business/update/'+this.props.match.params.id, obj)
        .then(res => console.log(res.data));
    
    axios.post(this.baseURL+'user/update/'+this.props.match.params.id, obj)
        .then(res => {console.log(res.data);
        this.props.history.push('/');})
        .catch(function (error) {
          console.log(error);
      });
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Update User</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.user_name}
                      onChange={this.onChangeUserName}
                      />
                </div>
                <div className="form-group">
                    <label>Gender: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.gender_name}
                      onChange={this.onChangeGenderName}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Update User" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}