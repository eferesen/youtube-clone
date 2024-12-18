import { useTheme } from "@/hooks/useTheme"
import { createContext, ReactNode, useState } from "react"

// Start by creating a component
// Create the props for the component
// Children must exist in it
// Next start by creating a context
// Use the props from the ThemeProvider to fill the context
// Next return the provider

type ThemeContextProps = {
  primaryColor: string,
  secondaryColor: string,
  isDarkMode: boolean,
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)


type ThemeProviderProps = {
  children: ReactNode
  initialDarkMode: boolean,
  customColors?: {
    primary: string,
    secondary: string
  }
}

const ThemeProvider = ({ children, initialDarkMode = false, customColors }: ThemeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(initialDarkMode)

  const ThemeContextValues: ThemeContextProps = {
    primaryColor: customColors?.primary ?? '#FFF',
    secondaryColor: customColors?.secondary ?? '#FFF',
    isDarkMode,
    toggleTheme: () => setIsDarkMode(prev => !prev)
  }

  return (
    <ThemeContext.Provider value={ThemeContextValues}>
      {children}
    </ThemeContext.Provider>
  )
}


const ThemeAppUsage = () => {
  <div>
    <ThemeProvider initialDarkMode={false} customColors={{
      primary: '#FFF',
      secondary: '#DDD'
    }} >
      <h1>Test</h1>
    </ThemeProvider>
  </div>
}

const MyComponent = () => {
  const { primaryColor, secondaryColor, isDarkMode, toggleTheme } = useTheme()
}

export { ThemeProvider, ThemeAppUsage, ThemeContext }


