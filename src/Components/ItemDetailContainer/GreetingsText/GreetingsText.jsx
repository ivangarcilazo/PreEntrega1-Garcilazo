import './GreetingsText.css'
const GreetingsText=(props)=>{
    const{greetings}=props
    return(
        <span className="greetingsText">Welcome <strong>{greetings}</strong></span>
    )
}
export default GreetingsText