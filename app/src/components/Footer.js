

function Footer(props) {
    
    const completeAll = () => {
        props.setItem(
            props.item.map((x) => {
                return {...x, done: true}
            })
        )
        let checkboxes = document.getElementsByName('special');
        for(let i=0, n=checkboxes.length; i<n; i++) {
            checkboxes[i].checked = true;
        }
    }
    
    return(
        <div className="container pt-2">
            <div className="row flex-column flex-md-row align-items-center justify-content-center">
                <div className="col-2 col-md-1 d-flex justify-content-center">
                    <p className=" fw-2 fw-bold">{props.item.filter((x) => x.done === false).length} left</p>
                </div>
                <div className="col-6 col-lg-5 d-flex flex-column flex-md-row justify-content-center">
                    {props.pageState.map((x) => (<button className="btn btn-info mx-1 my-1" onClick={() => props.handlePage(x)}>{x}</button>))}
                </div>
                <div className="col-auto ms-lg-4">
                    <button className="btn btn-success my-1 mx-1" onClick={completeAll}>✓ all</button>
                    <button className="btn btn-danger my-1 mx-1" onClick={() => props.setItem(props.item.filter(x => x.done === false))}>X all</button>
                </div>
            </div>
        </div>
    )
}

export default Footer