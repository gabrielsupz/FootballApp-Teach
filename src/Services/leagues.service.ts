import { Api } from './api'

export async function getLeagues() {
  try {
    const response = await Api.get('/leagues')
    return response.data
  } catch (err) {
    throw new Error(err as string)
  }
}

export async function getLeagueStandings(
  leagueId: string,
  season: number,
  sort: string
) {
  try {
    const response = await Api.get(
      `/leagues/${leagueId}/standings?season=${season}&sort=${sort}`
    )

    return response.data
  } catch (err) {
    console.error(err)
  }
}

export async function getLeaguesSeasons(leagueId: string) {
  try {
    const response = await Api.get(`/leagues/${leagueId}/seasons`)
    return response.data
  } catch (err) {
    throw new Error(err as string)
  }
}
