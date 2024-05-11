
function Fighter({fighter, handleAddFighter}) {

    const {name, img, price, strength, agility } = fighter
    return (
        <li>
            <img src={img} alt={`${name} picture`} />
            <p>{name}</p>
            <p>Price: {price}</p>
            <p>Strength: {strength}</p>
            <p>Agility: {agility}</p>
            <button onClick={()=>handleAddFighter(fighter)}>Add</button>
        </li>
    )
}

export default Fighter