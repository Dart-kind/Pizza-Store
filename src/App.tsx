import "./App.css"
import { Header } from "./components/Header/header"
import { PizzaPromoContainer } from "@/components/PizzasPromo/PizzaPromoContainer/PizzasPromoContainer"
import TextForMainPage from "@/components/TextForMainPage/TextForMainPage"
import { PostContainer } from "@/components/PizzasPost/PostContainer/PostContainer"
import { PizzasHeader } from "@/components/PizzasHeader/PizzasHeader"
import { MapCover } from "@/components/Location/Cover/MapCover"




const App = () => {

  return (
    <div className="wrapper">
      <Header />

      <div className={"header__text"}>
        <h1 className={"header__title"}> Famous hand tossed pizza </h1>
        <p className={"header__text--p"}>Yes we toss our pizza in mid air it collects all the dirt particles of metropolitan pollution that creates <span>a distinct flavor of each pizza crust.</span> </p>
      </div>

      <PizzaPromoContainer/>

      <TextForMainPage
        title="Pizza Menu"
        paragraph="Choose from our plethora of exquisite pizza creations."
      />
      <PizzasHeader/>

    <PostContainer/>

      <TextForMainPage
        title={"Our Locations"}
        paragraph={"We have store locations all over the Philippines."}
      />

      <MapCover/>
      <div>

      </div>
    </div>
  )
}

export default App
