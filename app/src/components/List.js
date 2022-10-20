

function List(props) {
    
    function complete() {
        let text = document.getElementById("list-item")
        let checkbox = document.getElementById("list-checkbox")
        if (checkbox.checked === true) {
            text.classList.add("text-decoration-line-through", "text-success")
        } else {
            text.classList.remove("text-decoration-line-through", "text-success")
        }
    }


    let listItem = props.item.map((thing) =>
        <>
            <div className="col-11 col-lg-7 py-1" key={thing.id}>
                <li className="list-group-item ms-md-4">
                    <input className="form-check-input me-1" type="checkbox" value="" id="list-checkbox" onClick={complete}></input>
                    <label className="form-check-label" for="firstCheckbox" id="list-item">{thing.itemText}</label>
                </li>
            </div>
            <div className="col-1 d-flex justify-content-center ps-1 py-1">
                <button className="btn btn-danger me-3" onClick={() => {props.setItem(props.item.filter(x => x.id !== thing.id))}}>X</button>
            </div>
        </>
    )

    return(
        <div className="container py-2">
            <ul className="list-group">
                <div className="row justify-content-center">
                    {listItem}
                </div>
            </ul>
        </div>
    )
}

export default List
