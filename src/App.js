import logo from "./logo.svg"
import "./App.css"
import MyNavBar from "./components/MyNavBar"
import MyFooter from "./components/MyFooter"
import Welcome from "./components/Welcome"
import AllBooks from "./components/AllBooks"
import MyAlert from "./components/MyAlert"
import MyBadge from "./components/MyBadge"
import books from "./data/romance.json"

function App() {
  return (
    <div className="App">
      <MyAlert variant="warning" text="warning"></MyAlert>
      <MyNavBar></MyNavBar>
      <Welcome
        title="EpiShop Open Now"
        description="Hello to our land of books where reading is Epic"
      ></Welcome>
      <MyBadge text="new" color="warning"></MyBadge>
      <AllBooks books={books}></AllBooks>
      <MyFooter></MyFooter>
    </div>
  )
}

export default App
