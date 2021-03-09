import React from 'react'

function Options({addOptions,uid,deleteOptions,updateText,key}) {
    return (
         <>
         <div className="col-md-8 offset-2 col-12 input-group">
             <input type="text" className="form-control" placeholder="Enter Options" onChange={e=>(updateText(uid, e.target.value))}/>
             <div className="input-group-append">
                 <button className="btn btn-outline-secondary" type="button" onClick={()=>addOptions()} >+</button>
                 <button className="btn btn-outline-secondary" type="button"onClick={()=>deleteOptions()} >-</button>
             </div>
         </div>
         </>
    )
}
export default Options
