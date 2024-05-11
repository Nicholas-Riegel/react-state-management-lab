import { useState } from "react";
import './App.css'
import Fighter from './components/Fighter'
import TeamMember from "./components/TeamMember";

const fightersArray = [
  {
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://via.placeholder.com/150/92c952',
  },
  {
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://via.placeholder.com/150/771796',
  },
  {
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://via.placeholder.com/150/24f355',
  },
  {
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/d32776',
  },
  {
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://via.placeholder.com/150/1ee8a4',
  },
  {
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://via.placeholder.com/150/66b7d2',
  },
  {
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://via.placeholder.com/150/56acb2',
  },
  {
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://via.placeholder.com/150/8985dc',
  },
  {
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://via.placeholder.com/150/392537',
  },
  {
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/602b9e',
  },
];

const App = () => {

  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [totalStrength, setTotalStrength] = useState(0)
  const [totalAgility, setTotalAgility] = useState(0)
  const [zombieFighters, setZombieFighters] = useState(fightersArray)

  const handleAddFighter = (fighter) => {
    
    if (fighter.price <= money){
      
      setMoney(prev => prev - fighter.price)
      
      setTeam(prev => [...prev, fighter])

      setTotalStrength(prev => prev + fighter.strength)

      setTotalAgility(prev => prev + fighter.agility)

      setZombieFighters(prev => prev.filter(x => x !== fighter))

    } else {
      console.log('Not enough money!');
    }
  }

  const handleRemoveMember = (member) => {
    
    setMoney(prev => prev + member.price)
      
    setZombieFighters(prev => [...prev, member])

    setTotalStrength(prev => prev - member.strength)

    setTotalAgility(prev => prev - member.agility)

    setTeam(prev => prev.filter(x => x !== member))
  }

  return (
    <>
      <h1>Zombie Fighters</h1>
      <h3>Money: {money}</h3>
      <h3>Team Strength: {totalStrength}</h3>
      <h3>Team Agility: {totalAgility}</h3>
      <h3>Team:</h3>
        <ul>
          {team.length > 0   
            ? team.map((member, i)=>(
                <TeamMember key={i} member={member} handleRemoveMember={handleRemoveMember}/>
              ))
            : <li>Pick some team members!</li> 
          }
        </ul>
      <h3>Fighters:</h3>
      <ul>
        {zombieFighters.map((fighter, i)=>(
          <Fighter key={i} fighter={fighter} handleAddFighter={handleAddFighter}/>
        ))}
      </ul>
    </>

  );
}

export default App
