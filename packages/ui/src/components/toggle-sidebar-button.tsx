import React from 'react'

export interface ToggleSidebarButtonProps {
  isOpen: boolean
  handleIsOpen: () => void
}

export const ToggleSidebarButton: React.FC<ToggleSidebarButtonProps> = ({
  isOpen,
  handleIsOpen,
}) => (
  <button
    type="button"
    className={`ui-w-6 ui-h-4 md:ui-hidden ui-flex ui-flex-col ui-items-center ui-justify-center ui-relative ${
      isOpen ? '-ui-gap-2' : 'ui-gap-1.5'
    }`}
    onClick={handleIsOpen}
  >
    <div
      className={`ui-w-full ui-h-1 ui-bg-sky-500 ui-rounded-full ui-absolute ui-top-0 ui-transition-all ui-duration-500 ${
        isOpen && 'ui-rotate-45 ui-top-1.5'
      }`}
    />
    <div
      className={`ui-w-full ui-h-1 ui-bg-sky-500 ui-rounded-full ui-absolute ui-bottom-0 ui-transition-all ui-duration-500 ${
        isOpen && '-ui-rotate-45 ui-bottom-1.5'
      }`}
    />
  </button>
)
