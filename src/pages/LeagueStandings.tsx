import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useLoading } from '../Contexts/LoadingContext'
import {
  getLeagueStandings,
  getLeaguesSeasons
} from '../Services/leagues.service'
import { Header } from '../components/Header'
import { Standings, Table } from '../components/Table'
import { Select } from '../components/Select'
import { Spinner } from '../components/Spinner'

interface league {
  name: string
  seasonDisplay: string
  standings: Standings[]
}
interface Season {
  year: number
}

export function LeagueStandings() {
  const { isLoading, setLoadingState } = useLoading()
  const [seasons, setSeasons] = useState<string[]>([])

  const [selectedSeason, setSelectedSeason] = useState<string>('')
  const [league, setLeague] = useState<league>()

  const { leagueId } = useParams()

  const getStandingsByLeague = async () => {
    setLoadingState(true)
    const response =
      leagueId &&
      (await getLeagueStandings(leagueId, parseInt(selectedSeason), 'asc'))
    setLeague(response.data)
    setLoadingState(false)
  }

  const getSeasonsByLeague = async () => {
    setLoadingState(true)
    const response = leagueId && (await getLeaguesSeasons(leagueId))
    setSeasons(response.data.seasons.map((item: Season) => String(item.year)))
    setLoadingState(false)
  }

  const handleChangeSelectedSeason = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    event.preventDefault()
    setSelectedSeason(event.target.value)
  }

  useEffect(() => {
    if (selectedSeason?.length) getStandingsByLeague()
  }, [selectedSeason])

  useEffect(() => {
    if (!selectedSeason?.length) setSelectedSeason(seasons[0])
  }, [seasons, selectedSeason])

  useEffect(() => {
    getSeasonsByLeague()
  }, [leagueId])

  return (
    <main className="max-sm:px-4 py-14 px-40">
      <Header />
      <a className="cursor-pointer hover:underline" href="/">
        {' '}
        ⬅️ Voltar
      </a>
      <section className=" m-full mt-3">
        <div className="flex justify-between">
          <h3 className="font-light text-xl flex justify-between">
            {league?.name} - {league?.seasonDisplay}
          </h3>
          <Select options={seasons} onChange={handleChangeSelectedSeason} />
        </div>
        <hr className="mt-4" />
        {isLoading ? (
          <div className="my-10 flex justify-center items-center">
            <Spinner />
          </div>
        ) : (
          league && <Table standings={league.standings} />
        )}
      </section>
    </main>
  )
}
