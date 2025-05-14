import React, { createContext, useState } from 'react'
 export const ThemeColor = createContext()
const ThemeContext = ({children}) => {
    const [theme, setTheme] = useState("Light") 
    const ToggleFunc = () => {
        setTheme((prev)=> prev=="Light" ? "Dark": "Light")
    }
  return (
      <ThemeColor.Provider value={{theme ,ToggleFunc}}>
          {children}
      </ThemeColor.Provider>
  )
}

export default ThemeContext;