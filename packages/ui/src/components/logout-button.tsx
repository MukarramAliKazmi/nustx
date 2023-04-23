import React from 'react'
import { IoLogOutOutline } from 'react-icons/io5'

export interface LogoutButtonProps {}

export const LogoutButton: React.FC<LogoutButtonProps> = () => (
  <button
    type="submit"
    className="ui-flex ui-items-center ui-gap-2 ui-w-full ui-font-semibold ui-text-sky-500 md:hover:ui-gap-4 ui-duration-500 ui-transition-[gap]"
  >
    Logout
    <IoLogOutOutline className="ui-w-6 ui-h-6 ui-fill-sky-500 " />
  </button>
)
