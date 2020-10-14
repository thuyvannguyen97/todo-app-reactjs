import React, { Component } from 'react';
import './AddItem.css';

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        title: "",
        isDone: false
      }
    }
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(event) {
    let text = event.target.value;
    if(!text) return;
    text = text.trim();
    if(!text) return;
    this.setState({
      item: {
        title: event.target.value,
        isDone: false
      }
    });
  }
  onSubmit() {
    const {item} = this.state;
    if(item.title === "") return;
    this.props.onAddClick(item);
  }
  onKeyUp(event) {
    if(event.keyCode === 13) {
      const {item} = this.state;
      if(item.title === "") return;
      this.props.onAddClick(item);
    }
  }
  render() {
    return (
      <div className="AddItem">
        <div className="add">
          <input placeholder="Add a new item" onChange={this.onChange} onKeyUp={this.onKeyUp}/>
        </div>
        <button onClick={this.onSubmit}>Add</button>
      </div>
    );
  }
}

export default AddItem;
