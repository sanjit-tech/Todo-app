import React, {useState, Fragment} from 'react'

export const FunToDoList =(listItems)=>{
    return(
         <ul className="list-unstyled row">
                 {listItems.map((data, i)=>{
                     return(
                         <Fragment>
                             <li className="col-sm-8">{data}</li>
                             <li className="col-sm-2"><a className="btn btn-info"><i className="bi bi-pencil-square"></i></a> </li>
                             <li className="col-sm-2"><a className="btn btn-danger"><i className="bi bi-trash-fill"></i></a> </li>
                         </Fragment>
                     )
                 })}
         </ul>
    )
}