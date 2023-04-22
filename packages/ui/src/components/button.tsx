import React from 'react'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({ ...rest }) => (
  <button
    type="button"
    {...rest}
    className={`ui-w-full ui-rounded-lg ui-text-white ui-p-4 ui-outline-none ui-bg-sky-500 focus:ui-border-sky-500 hover:ui-bg-sky-600 ${rest.className}`}
  >
    {rest.children}
  </button>
)
