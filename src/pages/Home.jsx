import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { useAppDispatch } from '../redux/hooks'
import { fetchTeams } from '../redux/team/teamSlice'
import Card from '../components/Card'
import "../assets/styles/Home.scss"
import { NavLink } from 'react-router-dom' 

const Home = () => {
  let { data: teams, status, error} = useSelector((store) => store.teams)
  const [ query, setQuery] = useState("")
  const dispatch = useDispatch();
  const keys = ["name", "nickname", "code", "city"]
  const search = (data) => {
    return data.filter((item) => item.logo ).filter((item) => keys.some(key => item[key].toLowerCase().includes(query.toLowerCase())))
  } 
  useEffect (() => {
    if (status === 'idle'){
      dispatch(fetchTeams());
    }
  }, [])

  teams = search(teams)
  return (
    <main className='container home__container'>
      <div className='search__container'>
        <input 
            type="text"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
          />
          <img src="/icon/search.svg" className='icon'/>
        </div>
      <div className='team__container'>  
      
        {teams.map(item =>   <NavLink to={`/${item.id}`}  key={item.id}><Card logo={item.logo} name={item.name} />  </NavLink>)}
      </div>
      </main>
  )
}
export default Home