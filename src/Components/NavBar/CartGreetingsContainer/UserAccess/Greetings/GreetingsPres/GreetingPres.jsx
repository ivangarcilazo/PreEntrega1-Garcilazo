import './GreetingsPress.css'
const GreetingsUser=(props)=>{
    const{nameUser, surnameUser}=props
    return(
        <span className="greetingsText">Welcome <strong>{nameUser} {surnameUser}</strong></span>
    )
}
export default GreetingsUser