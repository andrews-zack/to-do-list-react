import Input from "./components/Input"
import List from "./components/List"
import Footer from "./components/Footer"
import { useState } from 'react'


function App() {

    const [ page, setPage ] = useState('All Tasks');
    const [ item, setItem ] = useState([]);
    const pageState = ['All Tasks', 'Active Tasks', 'Completed Tasks'];


    function handlePage(page) {
        setPage(page);
    }


    return(
        <div className="d-flex flex-column justify-content-center align-content-center vh-100">
            <Input item={item} setItem={setItem}/>
            <List item={item} setItem={setItem} page={page}/>
            <Footer handlePage={handlePage} page={page} pageState={pageState} item={item} setItem={setItem}/>
            {/* {console.log(item)} */}
        </div>
    )
}

export default App
