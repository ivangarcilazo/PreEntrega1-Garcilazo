import GreetingsUser from "./GreetingsPres/GreetingPres"
const GreetingsContainer=()=>{
    const users={
        nameUser:'Ivan',
        surnameUser:'Garcilazo'

    }
    return(
        <div className="containerGreetingUser">
            <GreetingsUser nameUser={users.nameUser} surnameUser={users.surnameUser}></GreetingsUser>
        </div>
    )
}
export default GreetingsContainer