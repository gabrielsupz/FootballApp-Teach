import { useNavigate } from 'react-router-dom'

interface Props {
  id: string
  title: string
  imageSrc: string
}

export function Card({ id, imageSrc, title }: Props) {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => navigate(`/standings/${id}`)}
      role="button"
      className="felx flex-col gap-3 justify-center items-center p-3 rounded-sm bg-neutral-50 drop-shadow-md hover:drop-shadow-lg cursor-pointer"
    >
      <img src={imageSrc} alt={title} />
      <h3 className="gray-800 font-medium">{title}</h3>
    </div>
  )
}
