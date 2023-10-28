'use client'

import { useState, useEffect, ChangeEventHandler } from 'react'
import { useTheme } from 'next-themes'
import { setThemeCookie } from '@/theme/setThemeCookie'
import { MoonIcon, SunIcon, TvIcon } from '@heroicons/react/24/solid'
import { DEFAULT_THEME } from '@/constants'
import { cn } from '@/utils/cn'

enum ThemeEnum {
  light = 0,
  system = 1,
  dark = 2,
}

type Theme = 'light' | 'system' | 'dark'

function themeStringToValue(theme: string): ThemeEnum {
  switch (theme) {
    case 'light':
      return ThemeEnum.light
    case 'system':
      return ThemeEnum.system
    case 'dark':
      return ThemeEnum.dark
    default:
      return ThemeEnum.system
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

  const onChangeTheme = (themeValue: Theme) => {
    setThemeCookie(themeValue)
    setTheme(themeValue)
  }

  const onChangeSlider: ChangeEventHandler<HTMLInputElement> = (e) => {
    const themeValue = Number(e.target.value)
    let newTheme: keyof typeof ThemeEnum

    switch (themeValue) {
      case ThemeEnum.light:
        newTheme = 'light'
        break
      case ThemeEnum.system:
        newTheme = 'system'
        break
      case ThemeEnum.dark:
      default:
        newTheme = 'dark'
        break
    }

    onChangeTheme(newTheme)
  }

  const onClickIcon: React.MouseEventHandler<SVGSVGElement> = (e) => {
    const themeValue = e.currentTarget.getAttribute('data-theme') as Theme
    if (themeValue) {
      onChangeTheme(themeValue)
    }
  }

  return (
    // <select disabled={!mounted} value={theme} onChange={onChangeTheme}>
    //   <option value="system">System</option>
    //   <option value="dark">Dark</option>
    //   <option value="light">Light</option>
    // </select>

    <div className="w-full sm:w-50s">
      <label
        htmlFor="steps-range"
        className="w-full flex justify-between items-center sm:gap-3"
      >
        <SunIcon
          className={cn(['flex-1 cursor-pointer', 'h-6 sm:h-7'], {
            // 'text-gray-400': theme !== 'light',
          })}
          onClick={onClickIcon}
          data-theme="light"
        />
        <TvIcon
          className={cn(['flex-1 cursor-pointer', 'h-6 sm:h-7'], {
            // 'text-gray-400': theme !== 'system',
          })}
          onClick={onClickIcon}
          data-theme="system"
        />
        <MoonIcon
          className={cn(['flex-1 cursor-pointer', 'h-6 sm:h-7'], {
            // 'text-gray-400': theme !== 'dark',
          })}
          onClick={onClickIcon}
          data-theme="dark"
        />
      </label>

      <input
        id="steps-range"
        type="range"
        min="0"
        max="2"
        value={
          theme
            ? themeStringToValue(theme)
            : themeStringToValue((initialTheme as Theme) ?? DEFAULT_THEME)
        }
        step="1"
        className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-slate-200 accent-gray-300"
        onChange={onChangeSlider}
        disabled={!mounted}
      />
    </div>
  )
}
