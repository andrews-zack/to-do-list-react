

function Footer() {
    return(
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <p>Count</p>
                </div>
                <div className="col-6">
                    <button className="btn btn-success">All Tasks</button>
                    <button className="btn btn-success">Active Tasks</button>
                    <button className="btn btn-success">Completed Tasks</button>
                </div>
                <div className="col-2">
                    <button className="btn btn-primary">Complete all tasks</button>
                </div>
            </div>
        </div>
    )
}