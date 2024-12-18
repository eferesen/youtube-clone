import { ThemeContext } from "@/component/ThemeProvider"
import { useContext } from "react"

const useTheme = () => {
  const themeContext = useContext(ThemeContext)
  if (themeContext === undefined) {
    throw new Error('Theme context is not defined')
  }

  return themeContext
}

export { useTheme }