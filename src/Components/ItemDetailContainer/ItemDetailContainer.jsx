import GreetingsText from "./GreetingsText/GreetingsText.jsx"
const ItemDetailContainer=()=>{
    const users={
        nameUser:'Ivan',

    }
    return(
        <div className="containerGreetingUser">
            <GreetingsText greetings={users.nameUser}></GreetingsText>
        </div>
    )
}
export default ItemDetailContainer