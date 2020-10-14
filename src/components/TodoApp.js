import React, { Component } from "react";
import "./TodoApp.css";
import Bar from "./Bar/Bar";
import ListItems from "./ListItems/ListItems";
import AddItem from './AddItem/AddItem';
export default class TodoApp extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
        { title: "Work on project", isDone: false },
        { title: "Do homework", isDone: false },
        { title: "Call my mom", isDone: false },
        { title: "Read a book", isDone: false },
        { title: "Practice speaking English", isDone: true },
        { title: "Learn 100 new Japanese words", isDone: true }
      ],
      display: true
    };
    this.onAddClick = this.onAddClick.bind(this);
    this.onAddBtnClick = this.onAddBtnClick.bind(this);
  }
  onAddBtnClick() {
    this.setState({display: false})
  }
  onAddClick(item) {
    //Pass a function instead of an object to setState to ensure the call always uses "the most updated version of state"
    this.setState((state) => {
      return {
        todoItems: [
        item,
        ...state.todoItems
        ],
        display: true
      }
    });
    
  }
  render() {
    const display = this.state.display;
    const todoItems = this.state.todoItems;
    return (
      <div className="TodoApp">
        <Bar />
        {display && <ListItems todoItems={todoItems} />}
        {display && <div className="add-btn" onClick={this.onAddBtnClick}>
          <img src="https://cdn.glitch.com/445207dc-8744-4b60-9476-dde50d3ba7c3%2Fadd.svg?v=1602673396520" alt="ic-add"/>
        </div>}
        {!display && <AddItem onAddClick={this.onAddClick}/>}
      </div>
    );
  }
}

// Requirements:
// Viết một app todo-list có giao diện như hình https://cdn.glitch.com/780fd861-6c5c-464f-8b1b-c3c0ed64e30a%2FPasted_Image_4_20_20__9_05_PM.png?v=1587384320345
// Không cần phải giống 100%, nhưng càng giống càng tốt và phải có tính thẩm mỹ
// Illustration có thể tải ở đây https://undraw.co/illustrations hoặc các nguồn khác và upload lên Glitch assets
// Cần làm:
// - Màn hình danh sách todo list, nếu trống thì hiển thị một hình nào đó như trong ảnh
// - Khi ấn nút + để tạo todo mới thì hiển thị modal có chứa 1 text input và nút để add
// - Khi ấn vào 1 item thì sẽ toggle trạng thái isDone của nó
// - Nếu isDone là true thì cho vào danh sách Finished, còn không thì ở Upcoming
