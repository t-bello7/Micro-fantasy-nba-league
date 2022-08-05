import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import "../assets/styles/Detail.scss"
import { fetchTeamStatistics } from '../redux/team/teamSlice'

const data = [
      {
        "games": 94,
        "fastBreakPoints": 941,
        "pointsInPaint": 4334,
        "biggestLead": 1237,
        "secondChancePoints": 1318,
        "pointsOffTurnovers": 1394,
        "longestRun": 1026,
        "points": 10550,
        "fgm": 3782,
        "fga": 8204,
        "fgp": "46.2",
        "ftm": 1829,
        "fta": 2261,
        "ftp": "80.9",
        "tpm": 1157,
        "tpa": 3174,
        "tpp": "36.3",
        "offReb": 971,
        "defReb": 3292,
        "totReb": 4263,
        "assists": 2197,
        "pFouls": 1870,
        "steals": 653,
        "turnovers": 1198,
        "blocks": 433,
        "plusMinus": 124
      }
]
const Detail = () => {
    const { dataStat: teamStat, status, error} = useSelector((store) => store.teams)
    const dispatch = useDispatch();

    const params  = useParams()
    console.log(params)

    useEffect(() => {
  
        dispatch(fetchTeamStatistics(params.name))
      }, [params.name])
  
    return (
        <main className="detail__container">
             <div>Games {teamStat.games} </div>
             <div> Fast Break Points {teamStat.fastBreakPoints}</div>
        </main>
    )
}

export default Detail