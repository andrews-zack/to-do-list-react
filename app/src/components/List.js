

function List(props) {
    
    const handleCheck = (id, e) => {
        // console.log(e.target)
        let checkbox = e.target
        if (checkbox.checked === true) {
            e.target.classList.add("text-decoration-line-through", "text-success")
            props.setItem(props.item.map(keith => keith.id === id ? {...keith, done: true} : keith))
            checkbox.checked = true
        } else {
            e.target.classList.remove("text-decoration-line-through", "text-success")
            props.setItem(props.item.map(keith => keith.id === id ? {...keith, done: false} : keith))
            checkbox.checked = false
        }
    }

    let renderTask = [];
    if (props.page === "All Tasks") {
        renderTask = props.item
    } else if (props.page === "Active Tasks") {
        renderTask = props.item.filter((x) => x.done === false)
    } else if (props.page === "Completed Tasks") {
        renderTask = props.item.filter((x) => x.done === true)
    }
    // console.log(props.item)
    
    let listItems = renderTask.map((item) =>
    <>
        <div className="col-11 col-lg-7 py-1" key={item.id}>
            <li className="list-group-item ms-md-4">
                <input className="form-check-input me-1" type="checkbox" value="" defaultChecked={item.done} id="list-checkbox" onClick={(e) => handleCheck(item.id, e)}></input>
                <label className="form-check-label" for="firstCheckbox" id="list-item">{item.itemText}</label>
            </li>
        </div>
        <div className="col-1 d-flex justify-content-center ps-1 py-1">
            <button className="btn btn-danger me-3" onClick={() => {props.setItem(props.item.filter(x => x.id !== item.id))}}>X</button>
        </div>
    </>
    )
    
    return(
        <div className="container py-2">
            <ul className="list-group">
                <div className="row justify-content-center">
                    {listItems}
                </div>
            </ul>
        </div>
    )
}

export default List
