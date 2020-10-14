import React, { Component } from "react";
import "./ListItems.css";

class ListItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: this.props.todoItems 
    };
  }
  onItemClicked(item) {
    return (event) => {
      const isDone = item.isDone;
      const {todoItems} = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isDone: !isDone
          },
          ...todoItems.slice(index+1)
        ]
      });
    };
  }
  render() {
    let todoItems = this.state.todoItems;
    return (
      <div className="ListItems">
        {!todoItems.length && (
          <div className="no-data">
            <p>Seems like you have no list</p>
            <img
              src="https://cdn.glitch.com/445207dc-8744-4b60-9476-dde50d3ba7c3%2Fundraw_No_data_re_kwbl.svg?v=1602677540275"
              alt="empty"
            />
          </div>
        )}
        {todoItems.length > 0 && (
          <div>
            <div className="upcoming">
              <h5>Upcoming</h5>
              {todoItems.map(
                (item, index) =>
                  !item.isDone && (
                    <div
                      key={index}
                      item={item}
                      className="item new-item"
                      onClick={this.onItemClicked(item)}
                    >
                      {index + 1}. {item.title}
                    </div>
                  )
              )}
            </div>
            <div className="finished">
              <h5>Finished</h5>
              {todoItems.map(
                (item, index) =>
                  item.isDone && (
                    <div
                      key={index}
                      item={item}
                      className="item done"
                      onClick={this.onItemClicked(item)}
                    >
                      {index + 1}. {item.title}
                    </div>
                  )
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ListItems;
