import { ReactNode, createContext, useState, useContext } from 'react'

type Classes =
  | 'show-hide'
  | 'animation-controls'
  | 'scroll-animations'
  | 'view-based'
  | 'gesture'

interface CurrentClassInterface {
  currentClass: Classes
  setCurrentClass: (currentClass: Classes) => void
}

const CurrentClassContext = createContext<CurrentClassInterface>(
  {} as CurrentClassInterface,
)

const CurrentClassProvider = ({ children }: { children: ReactNode }) => {
  const [currentClass, setCurrentClass] = useState<Classes>('show-hide')

  const value = {
    currentClass,
    setCurrentClass,
  }

  return (
    <CurrentClassContext.Provider value={value}>
      {children}
    </CurrentClassContext.Provider>
  )
}

const useCurrentClass = () => {
  const context = useContext<CurrentClassInterface>(CurrentClassContext)

  if (context === undefined) {
    throw new Error(
      'useCurrentClass must be used within a CurrentClassProvider',
    )
  }

  return { ...context }
}

export { CurrentClassProvider, useCurrentClass }
