import React, {useState, Fragment} from 'react'
import {FunToDoList} from "./FunToDoList";

export const FunToDo =()=>{
    const [text, setText] = useState('')
    const [items, setItems] = useState([])

   const addItems =()=> {
      if(!text){
       alert('This field can not blank..')
      } else {
          setItems([...items, text])
          setText('')
      }

    }
    const deleteItem =(id)=> {
        const updatedItem = items.filter((element, nid)=>{
            return(
                nid !== id
            )
        })
        setItems(updatedItem)

    }
    const editItem =()=> {


    }
    const deleteAll =()=>{
        setItems([])
    }
    return(
        <div className="container mt-5 p-5">
            <div className="row">
                <div className="col-sm-6 mx-auto">
                    <h1 className="text-center">To Do List</h1>
                    <div className="row mt-5">
                        <div className="col-sm-9">
                            <input type="text" className="form-control" placeholder="Add Item" value={text}
                            onChange={(e)=>{
                                setText(e.target.value)
                            }}
                            />
                        </div>
                        <div className="col-sm-2">
                            <button className="btn btn-primary"
                            onClick={addItems}
                            >Add</button>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-sm-12">
                            <ul className="list-unstyled row">
                                {items.map((data, id)=>{
                                    return(
                                        <Fragment key={id}>
                                            <li className="col-sm-8 mt-4">{data}</li>
                                            <li className="col-sm-2 mt-4"><a className="btn btn-info"
                                                                             onClick={editItem}
                                            ><i className="bi bi-pencil-square"></i></a> </li>
                                            <li className="col-sm-2 mt-4"><a className="btn btn-danger"
                                                                             onClick={()=>{deleteItem(id)}}
                                            ><i className="bi bi-trash-fill"></i></a> </li>
                                        </Fragment>
                                        )

                                })}

                            </ul>
                            <a className="btn btn-danger" onClick={deleteAll}><i className="bi bi-trash-fill"></i> Delete All</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}