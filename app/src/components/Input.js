

function Input() {
    return (
        <>
        <h1 className="text-center">To-Do List</h1>
        <div className="container d-flex align-content-center justify-content-center">
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="To-do..." aria-label="To-do list input" aria-describedby="button-addon2"></input>
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Add</button>
            </div>
        </div>
        </>
    )
}

export default Input