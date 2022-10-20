import Input from "./components/Input"
import List from "./components/List"
import Footer from "./components/Footer"
import { useState } from 'react'


function App() {

    const [ page, setPage ] = useState('all');
    const [ item, setItem ] = useState([]);
    // const pageState = ['all', 'active', 'completed'];


    function handlePage(page) {
        setPage(page);
    }


    return(
        <div className="d-flex flex-column justify-content-center align-content-center vh-100">
            <Input item={item} setItem={setItem}/>
            <List item={item} setItem={setItem}/>
            <Footer handlePage={handlePage} page={page}/>
            {/* {console.log(item)} */}
        </div>
    )
}

export default App
