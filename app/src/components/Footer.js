

function Footer(props) {
    
    
    
    return(
        <div className="container pt-2">
            <div className="row flex-column flex-md-row align-items-center justify-content-center">
                <div className="col-2 col-md-1 d-flex justify-content-center">
                    <p className=" fw-2 fw-bold">{props.item.filter((x) => x.done === false).length} left</p>
                </div>
                <div className="col-6 col-lg-5 d-flex flex-column flex-md-row justify-content-center">
                    {props.pageState.map((x) => (<button className="btn btn-info mx-1 my-1" onClick={() => props.handlePage(x)}>{x}</button>))}
                    {/* <button className="btn btn-info mx-1 my-1" onClick={() => props.handlePage(this.value)}>All Tasks</button>
                    <button className="btn btn-info mx-1 my-1" onClick={() => props.handlePage(this.value)}>Active Tasks</button>
                    <button className="btn btn-info mx-1 my-1" onClick={() => props.handlePage(this.value)}>Completed Tasks</button> */}
                </div>
                <div className="col-auto ms-lg-4">
                    <button className="btn btn-success my-1 mx-1">✓ all</button>
                    <button className="btn btn-danger my-1 mx-1" onClick={() => props.setItem(props.item.filter(x => x === 'go away'))}>X all</button>
                </div>
            </div>
        </div>
    )
}

export default Footer