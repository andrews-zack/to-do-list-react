

function List() {
    const listItem = {
        text: "",
        done: false,
        id: 0,
    }
    
    return(
        <div className="container py-2">
            <ul className="list-group">
                <div className="row justify-content-center">
                    <div className="col-11 col-lg-7 py-1">
                        <li className="list-group-item ms-md-4">
                            <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"></input>
                            <label className="form-check-label" for="firstCheckbox">Take out the trash</label>
                        </li>
                    </div>
                    <div className="col-1 d-flex justify-content-center ps-1 py-1">
                        <button className="btn btn-danger me-3">X</button>
                    </div>
                    <div className="col-11 col-lg-7 py-1">
                        <li className="list-group-item ms-md-4">
                            <input className="form-check-input me-1" type="checkbox" value="" id="secondCheckbox"></input>
                            <label className="form-check-label" for="secondCheckbox">Clean dishes</label>
                        </li>
                    </div>
                    <div className="col-1 d-flex justify-content-center ps-1 py-1">
                        <button className="btn btn-danger me-3">X</button>
                    </div>
                    <div className="col-11 col-lg-7 py-1">
                        <li className="list-group-item ms-md-4">
                            <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox"></input>
                            <label className="form-check-label" for="thirdCheckbox">Do laundry</label>
                        </li>
                        </div>
                    <div className="col-1 d-flex justify-content-center ps-1 py-1">
                        <button className="btn btn-danger me-3 ">X</button>
                    </div>
                </div>
            </ul>
        </div>
    )
}

export default List
