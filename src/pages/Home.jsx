import Card from '../components/Card'
import "../assets/styles/Home.scss"
import { NavLink } from 'react-router-dom' 

const data =  [
    {
      "id": 1,
      "name": "Atlanta Hawks",
      "nickname": "Hawks",
      "code": "ATL",
      "city": "Atlanta",
      "logo": "https://upload.wikimedia.org/wikipedia/fr/e/ee/Hawks_2016.png",
      "allStar": false,
      "nbaFranchise": true,
      "leagues": {
        "standard": {
          "conference": "East",
          "division": "Southeast"
        },
        "vegas": {
          "conference": "East",
          "division": "Southeast"
        },
        "utah": {
          "conference": "East",
          "division": "Southeast"
        },
        "sacramento": {
          "conference": "East",
          "division": "Southeast"
        }
      }
    },
    {
      "id": 2,
      "name": "Boston Celtics",
      "nickname": "Celtics",
      "code": "BOS",
      "city": "Boston",
      "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/6/65/Celtics_de_Boston_logo.svg/1024px-Celtics_de_Boston_logo.svg.png",
      "allStar": false,
      "nbaFranchise": true,
      "leagues": {
        "standard": {
          "conference": "East",
          "division": "Atlantic"
        },
        "vegas": {
          "conference": "East",
          "division": "Atlantic"
        },
        "utah": {
          "conference": "East",
          "division": "Atlantic"
        },
        "sacramento": {
          "conference": "East",
          "division": "Atlantic"
        }
      }
    },
    {
      "id": 3,
      "name": "Brisbane Bullets",
      "nickname": "Bullets",
      "code": "BNE",
      "city": "Brisbane",
      "logo": "https://upload.wikimedia.org/wikipedia/fr/thumb/1/1b/Brisbane_Bullets_1992.png/130px-Brisbane_Bullets_1992.png",
      "allStar": false,
      "nbaFranchise": false,
      "leagues": {
        "standard": {
          "conference": "Intl",
          "division": null
        }
      }
    }
]
const Home = () => {
    return (
        <main className='container'>
            
          { data.map(item =>   <NavLink to={`/${item.nickname}`}  key={item.id}><Card logo={item.logo} name={item.name} />  </NavLink>)}
        </main>
    )
}
export default Home