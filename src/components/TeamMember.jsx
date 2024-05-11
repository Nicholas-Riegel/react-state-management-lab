
function TeamMember({member, handleRemoveMember}) {

    const {name, img, price, strength, agility } = member

    return (
        <li>
            <img src={img} alt={`${name} picture`} />
            <p>{name}</p>
            <p>Price: {price}</p>
            <p>Strength: {strength}</p>
            <p>Agility: {agility}</p>
            <button onClick={()=>handleRemoveMember(member)}>Remove</button>
        </li>
    )
}

export default TeamMember