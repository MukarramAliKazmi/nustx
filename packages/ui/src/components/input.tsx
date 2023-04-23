import React from 'react'
import useInputEvents from '@/hooks/use-input-events'

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label: string
}

export const Input: React.FC<InputProps> = ({ label, ...rest }) => {
  const { value, focus, handleChange, handleFocus, handleBlue } =
    useInputEvents(rest)

  const labelPosition = focus || value ? 'ui-top-1' : 'ui-top-4'

  return (
    <div className="ui-relative">
      <input
        {...rest}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlue}
        className={`ui-border ui-border-gray-200 dark:ui-border-gray-800 ui-duration-500 ui-w-full ui-rounded-lg ui-px-4 ui-py-2 ui-pt-6 ui-outline-none ui-bg-transparent focus:ui-border-sky-500 ui-transition-[border] ${rest.className}`}
      />
      <label
        htmlFor={rest.id}
        className={`ui-absolute ui-left-0 ui-px-4 ui-text-sky-500 ui-transition-[top] ui-duration-500 ${labelPosition}`}
      >
        {label}
      </label>
    </div>
  )
}
