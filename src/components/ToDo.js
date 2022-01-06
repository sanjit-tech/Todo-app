import React, {Component, Fragment} from "react";
import TodoList from "./TodoList";

class Todo extends Component{
    constructor(props){
        super(props)
        this.state = {
          items: [],
          text: '',
        }
    }
    handleChange =(e)=>{
        this.setState({text: e.target.value})
    }
    handleAdd =()=>{
    if(this.state.text !== ''){
        const items = [...this.state.items, this.state.text]
        console.log(items)
        this.setState({items: items, text: ''})
    }
    }
    handleDelete =(id)=>{
        console.log(`Delete click ${id}`)
        const oldItems  =  [...this.state.items]
        console.log('Old Items', oldItems)
        const items = oldItems.filter((element, i) =>{
            return i !== id
        })
        console.log('NewItems', items)
        this.setState({items: items})
    }
    handleDeleteAll = () =>{
        this.setState({items: []})
    }
    render() {
        const {items} = this.state
        return(
            <div className="container mt-5 p-5">
                <div className="row">
                    <div className="col-sm-6 mx-auto">
                        <h1 className="text-center">Today Plan</h1>
                        <div className="row p-3">
                            <div className="col-sm-9">
                                 <input type="text" className="form-control" placeholder="write plane"
                                        value={this.state.text}
                                        onChange={this.handleChange}
                                 />
                            </div>
                            <div className="col-sm-3">
                                <button className="btn btn-warning px-5 fw-bold" onClick={this.handleAdd}>Add</button>
                            </div>
                        </div>
                        {items.length > 0 &&
                        <TodoList dataList={items} delData={this.handleDelete} deleteAll={this.handleDeleteAll}/>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default Todo