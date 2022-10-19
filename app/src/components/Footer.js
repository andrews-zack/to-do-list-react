

function Footer() {
    return(
        <div className="container pt-2">
            <div className="row flex-column flex-md-row align-items-center">
                <div className="col-2 d-flex text-center">
                    <p className=" fw-2 fw-bold text-center">Count</p>
                </div>
                <div className="col-8 d-flex flex-column flex-md-row justify-content-center">
                    <button className="btn btn-info mx-1 my-1">All Tasks</button>
                    <button className="btn btn-info mx-1 my-1">Active Tasks</button>
                    <button className="btn btn-info mx-1 my-1">Completed Tasks</button>
                </div>
                <div className="col-auto">
                    <button className="btn btn-success my-1">Complete all tasks</button>
                </div>
            </div>
        </div>
    )
}

export default Footer