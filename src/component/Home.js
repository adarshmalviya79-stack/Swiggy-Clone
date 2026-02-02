import Header from "./Header"
import FoodOption from "./foodoption"
import GroceryOption from "./Grocery"
import DineOption from "./DineOption"
import Footer from "./Footer"


export default function Home(){
    return(
        <>
            <Header></Header>
            <FoodOption></FoodOption>
            <GroceryOption></GroceryOption>
            <DineOption></DineOption>
            <Footer></Footer>
        </>
    )
   
}