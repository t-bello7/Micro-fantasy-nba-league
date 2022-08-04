import React from 'react'
import { useEffect } from 'react'
import { useSelector} from 'react-redux'
import { useAppDispatch } from '../redux/hooks'
import { fetchTeams } from '../redux/team/teamSlice'
import Card from '../components/Card'
import "../assets/styles/Home.scss"
import { NavLink } from 'react-router-dom' 

const Home = () => {
  const { data: teams, status} = useSelector((store) => store.teams)
  const dipatch = useAppDispatch();

  useEffect (() => {
    if (status === 'idle'){
      dipatch(fetchTeams());
    }
  }, [])

  return (
      <main className='container home__container'>   
        {teams.map(item =>   <NavLink to={`/${item.nickname}`}  key={item.id}><Card logo={item.logo} name={item.name} />  </NavLink>)}
      </main>
  )
}
export default Home