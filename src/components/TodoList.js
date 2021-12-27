import React, {Component, Fragment} from "react";

class TodoList extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
        const {dataList, delData} = this.props
        return(
            <div className="row p-3">
                <div className="col-sm-12">
                    <ul className="list-unstyled row m-5">
                        {dataList.map((data, i)=>{
                            return(
                                <Fragment key={i} >
                                <li className="col-sm-9">{data}</li>
                                <li className="col-sm-2">
                                    <button className="btn btn-danger px-2"
                                        onClick={()=>delData(i)}
                                ><i className="bi bi-trash-fill"></i></button></li>
                                </Fragment>
                            )
                        })}

                    </ul>
                </div>
            </div>
        )
    }
}
export default TodoList