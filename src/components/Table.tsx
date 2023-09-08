export interface Team {
  name: string
  displayName: string
  logos: {
    href: string
  }[]
}
export interface Stat {
  displayValue: string
}
export interface Standings {
  team: Team
  stats: Stat[]
}
interface Props {
  standings: Standings[]
}

export function Table({ standings }: Props) {
  const RenderTableRows = () => {
    return standings.map((e, index) => (
      <tr
        className="border-b border-neutral-300 text-left font-light"
        key={e.team.name}
      >
        <td className="px-6 py-4 ">{index + 1}</td>
        <td className=" flex items-center gap-2 px-6 py-4">
          {e.team.logos && (
            <img
              className="w-7 h-7"
              src={e.team.logos[0].href}
              alt={e.team.name}
            ></img>
          )}
          {e?.team.displayName}
        </td>
        {e.stats && (
          <>
            <td className="px-6 py-4 text-center">{e.stats[3].displayValue}</td>
            <td className="px-6 py-4 text-center">{e.stats[0].displayValue}</td>
            <td className="px-6 py-4 text-center">{e.stats[7].displayValue}</td>
            <td className="px-6 py-4 text-center">{e.stats[1].displayValue}</td>
            <td className="px-6 py-4 text-center">{e.stats[6].displayValue}</td>
            <td className="px-6 py-4 text-center">{e.stats[2].displayValue}</td>
            <td className="px-6 py-4 text-center whitespace-nowrap">
              {e.stats[12].displayValue}
            </td>
          </>
        )}
      </tr>
    ))
  }
  return (
    <div className="flex flex-col ">
      <div className="overflow-x-auto">
        <table className="min-w-full table-fixed text-left font-light">
          <thead className="border-b-neutral-400 font-medium text-left">
            <tr>
              <th
                scope="col"
                className="max-sm:stickyn  px-6 whitespace-nowrap py-4 w-3"
              >
                Pos
              </th>
              <th
                scope="col"
                className="max-sm:stickyn  px-6 whitespace-nowrap py-4 w-3"
              >
                Team
              </th>
              <th
                scope="col"
                className="max-sm:stickyn text-center px-6 whitespace-nowrap py-4 w-3"
              >
                Points
              </th>
              <th
                scope="col"
                className="max-sm:stickyn text-center px-6 whitespace-nowrap py-4 w-3"
              >
                Games
              </th>
              <th
                scope="col"
                className="max-sm:stickyn text-center px-6 whitespace-nowrap py-4 w-3"
              >
                W
              </th>
              <th
                scope="col"
                className="max-sm:stickyn text-center px-6 whitespace-nowrap py-4 w-3"
              >
                L
              </th>
              <th
                scope="col"
                className="max-sm:stickyn text-center px-6 whitespace-nowrap py-4 w-3"
              >
                D
              </th>
              <th
                scope="col"
                className="max-sm:stickyn text-center px-6 whitespace-nowrap py-4 w-3"
              >
                GD
              </th>
              <th
                scope="col"
                className="max-sm:stickyn text-center px-6 whitespace-nowrap py-4 w-3"
              >
                Record
              </th>
            </tr>
          </thead>
          <tbody>{RenderTableRows()}</tbody>
        </table>
      </div>
    </div>
  )
}
