import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs'

export interface ToggleThemeButtonProps {}

export const ToggleThemeButton: React.FC = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      type="button"
      onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
    >
      {theme === 'dark' ? (
        <BsMoonStarsFill className="ui-w-6 ui-h-6 ui-fill-sky-500" />
      ) : (
        <BsSunFill className="ui-w-6 ui-h-6 ui-fill-sky-500" />
      )}
    </button>
  )
}