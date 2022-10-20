

function Input(props) {
    return (
        <>
        <h1 className="text-center">To-Do List</h1>
        <div className="container d-flex align-content-center justify-content-center">
            <div className="col-12 col-lg-8">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="To-do..." aria-label="To-do list input" ref={props.inputRef}></input>
                    <button className="btn btn-outline-dark" type="button" onChange={props.handleAdd}>Add</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Input