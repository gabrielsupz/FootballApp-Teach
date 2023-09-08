import { useContext, createContext, useState } from 'react'
type LoadingContextType = {
  isLoading: boolean
  setLoadingState(state: boolean): void
}

interface LoadingContextProviderType {
  children: React.ReactNode
}

export const LoadingContext = createContext<LoadingContextType>(
  {} as LoadingContextType
)
export const LoadingContextProvider = ({
  children
}: LoadingContextProviderType) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const setLoadingState = (state: boolean) => {
    setIsLoading(state)
  }

  return (
    <LoadingContext.Provider value={{ isLoading, setLoadingState }}>
      {children}
    </LoadingContext.Provider>
  )
}
export function useLoading(): LoadingContextType {
  const context = useContext(LoadingContext)
  return context
}
