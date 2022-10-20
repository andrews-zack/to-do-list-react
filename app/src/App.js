import Input from "./components/Input"
import List from "./components/List"
import Footer from "./components/Footer"
import { useState } from 'react'


function App() {

    const [ page, setPage ] = useState('all');
    const [ text, setText ] = useState('');
    const pageState = ['all', 'active', 'completed'];
    const items = []


    function handlePage(page) {
        setPage(page);
    }

    const handleChange = (e) => {
        console.log("text stored")
    }


    return(
        <div className="d-flex flex-column justify-content-center align-content-center vh-100">
            <Input handleChange={handleChange} text={text}/>
            <List text={text} items={items}/>
            <Footer handlePage={handlePage} page={page}/>
        </div>
    )
}

export default App
