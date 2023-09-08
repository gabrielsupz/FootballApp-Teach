interface Props {
  options: string[]
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export function Select({ onChange, options }: Props) {
  return (
    <select name="season" onChange={onChange}>
      {options.map(e => (
        <option key={e} value={e}>
          {e}
        </option>
      ))}
    </select>
  )
}
