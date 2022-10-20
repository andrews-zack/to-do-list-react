import { useRef } from 'react'

function Input(props) {
    
    let userInput = useRef(null);
    let done = false;
    let id = Date.now();

    function handleAdd() {
        let itemText = userInput.current.value
        props.setItem([...props.item, {itemText, done, id}])
        userInput.current.value = null
        
    }
    
    return (
        <>
        <h1 className="text-center">To-Do List</h1>
        <div className="container d-flex align-content-center justify-content-center">
            <div className="col-12 col-lg-8">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="To-do..." aria-label="To-do list input" ref={userInput}></input>
                    <button className="btn btn-outline-dark" type="button" onClick={handleAdd}>Add</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Input