'use client'

import { useState, useEffect, ChangeEventHandler } from 'react'
import { useTheme } from 'next-themes'
import { setThemeCookie } from '@/theme/setThemeCookie'
import { MoonIcon, SunIcon, TvIcon } from '@heroicons/react/24/solid'
import { DEFAULT_THEME } from '@/constants'

enum Theme {
  light = 0,
  system = 1,
  dark = 2,
}

function themeStringToValue(theme: string): Theme {
  switch (theme) {
    case 'light':
      return Theme.light
    case 'system':
      return Theme.system
    case 'dark':
      return Theme.dark
    default:
      return Theme.system
  }
}

interface DarkModeToggleProps {
  initialTheme?: string
}

export const DarkModeToggle = ({ initialTheme }: DarkModeToggleProps) => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely enable dark mode toggling
  useEffect(() => {
    setMounted(true)
  }, [])

  const onChangeTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
    const themeValue = Number(e.target.value)
    let newTheme: keyof typeof Theme

    switch (themeValue) {
      case Theme.light:
        newTheme = 'light'
        break
      case Theme.system:
        newTheme = 'system'
        break
      case Theme.dark:
      default:
        newTheme = 'dark'
        break
    }

    setThemeCookie(newTheme)
    setTheme(newTheme)
  }

  return (
    // <select disabled={!mounted} value={theme} onChange={onChangeTheme}>
    //   <option value="system">System</option>
    //   <option value="dark">Dark</option>
    //   <option value="light">Light</option>
    // </select>

    <div className="w-35">
      <label htmlFor="steps-range" className="w-full grid grid-cols-3 gap-7">
        <SunIcon />
        <TvIcon />
        <MoonIcon />
      </label>
      <input
        id="steps-range"
        type="range"
        min="0"
        max="2"
        value={
          theme ? themeStringToValue(theme) : initialTheme ?? DEFAULT_THEME
        }
        step="1"
        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-light-200"
        onChange={onChangeTheme}
        disabled={!mounted}
      />
    </div>
  )
}
