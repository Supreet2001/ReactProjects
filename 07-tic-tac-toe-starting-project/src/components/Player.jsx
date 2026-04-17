import { useState } from "react"
export default function Player({ player, symbol, isActive }) {
    const [isEditing, setIsEditing] = useState(false)
    const[name, setName] = useState(player)
    let content = <span className="player-name">{name}</span>

    function handleBtnClick() {
        // setIsEditing(!isEditing) => schedule a future update
        // if the state value depends on old state, never update like above, rather use function to update

        setIsEditing(item=>!item) // this is the correct way

    }

    function handleChange(event){
        setName(event.target.value) //two-way-binding
    }

    if (isEditing) {
        content = <input type="text" required value={name} onChange={handleChange}/>
    }

    return (
        <li className={isActive?"active":undefined}>
            <span className="player">
                {content}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleBtnClick}>{isEditing?"Save":"Edit"}</button>
        </li>
    )
}