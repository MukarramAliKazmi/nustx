import React from 'react'

export interface SidebarBackdropProps {
  isSidebarOpen: boolean
  handleIsSidebarOpen: () => void
}

export const SidebarBackdrop: React.FC<SidebarBackdropProps> = ({
  isSidebarOpen,
  handleIsSidebarOpen,
}) => (
  <div
    className={`ui-w-screen ui-h-full ui-absolute ui-left-full ui-top-0 ui-pointer-events-none md:ui-pointer-events-none md:ui-backdrop-blur-none ui-transition-[backdrop-filter,border-color] ui-duration-500 ui-z-20 ui-border-l ui-border-t ui-border-gray-200 dark:ui-border-gray-800 ui-rounded-tl-3xl ${
      isSidebarOpen && 'ui-pointer-events-auto ui-backdrop-blur-sm'
    }`}
    onClick={handleIsSidebarOpen}
    onKeyDown={handleIsSidebarOpen}
    role="button"
    tabIndex={0}
    aria-label="Close sidebar"
  />
)
