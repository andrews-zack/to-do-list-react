

function Footer() {
    return(
        <div className="container pt-2">
            <div className="row">
                <div className="col-2">
                    <p className=" fw-2 fw-bold">Count</p>
                </div>
                <div className="col-8 d-flex justify-content-center">
                    <button className="btn btn-info mx-1">All Tasks</button>
                    <button className="btn btn-info mx-1">Active Tasks</button>
                    <button className="btn btn-info mx-1">Completed Tasks</button>
                </div>
                <div className="col-2">
                    <button className="btn btn-success">Complete all tasks</button>
                </div>
            </div>
        </div>
    )
}

export default Footer