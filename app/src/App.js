import Input from "./components/Input"
import List from "./components/List"
import Footer from "./components/Footer"


function App() {
    return(
        <div className="d-flex flex-column justify-content-center align-content-center vh-100">
            <Input />
            <List />
            <Footer />
        </div>
    )
}

export default App
