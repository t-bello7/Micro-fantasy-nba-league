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
  const { dataStat: teamStat, status, error } = useSelector((store) => store.teams)
  const dispatch = useDispatch();

  const params = useParams()
  useEffect(() => {
    dispatch(fetchTeamStatistics(params.name))
  }, [params.name])

  return (
    <main className="container detail__container">
      <div> <span>Games  </span>  {teamStat.games}  </div>
      <div> <span>Fast Break Points </span>  {teamStat.fastBreakPoints} </div>
      <div> <span>Points In Paint </span>  {teamStat.pointsInPaint}  </div>
      <div> <span>Biggest Lead  </span>  {teamStat.biggestLead} </div>
      <div> <span>Second Chance Points </span> {teamStat.secondChancePoints}  </div>
      <div> <span>Points Off Turnovers  </span> {teamStat.pointsOffTurnovers}  </div>
      <div> <span>Longest Run  </span> {teamStat.longestRun} </div>
      <div> <span>Field Goals Made   </span> {teamStat.fgm}  </div>
      <div> <span>Field Goals Attempted  </span> {teamStat.fga} </div> 
      <div> <span>Field Goals Percentage  </span>{teamStat.fgp} </div>
      <div> <span>Field Throws Made  </span>{teamStat.ftm} </div>
      <div> <span>Field Throws Attempted </span> {teamStat.fta} </div>
      <div> <span>Field Throws Percentage </span> {teamStat.ftp} </div>
      <div> <span>Three-point Field Goals Made  </span> {teamStat.tpm} </div>
      <div> <span>Three-point field Goals Attempted </span> {teamStat.tpa} </div>
      <div> <span>Three-point Field Goals Percentage </span> {teamStat.tpp} </div>
      <div> <span>Offensive Rebounds </span> {teamStat.offReb} </div>
      <div> <span>Defensive Rebounds </span> {teamStat.defReb} </div>
      <div> <span>Rebounds </span> {teamStat.totReb} </div>
      <div> <span>Steals </span>{teamStat.steals} </div>
      <div> <span>Blocks </span>{teamStat.blocks} </div>
      <div> <span>Turnovers </span> {teamStat.turnovers} </div>
      <div> <span>Assits </span>{teamStat.assists} </div>     
    </main>
  )
}

export default Detail