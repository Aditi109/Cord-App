import React, { Component } from 'react';
import axios from 'axios';

export default class Add extends Component {
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
    axios.post('http://localhost:4000/business/add', obj)
        .then(res => console.log(res.data));
    
    this.setState({
      user_name: '',
      gender_name: ''
    })
  }
 
  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3>Add User</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label> Name:  </label>
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
                    <input type="submit" value="Add" className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}