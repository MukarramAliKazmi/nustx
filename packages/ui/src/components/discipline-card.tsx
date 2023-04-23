import React from 'react'

export interface DisciplineCardProps {
  name: string
  semesters: number
  students: number
  teachers: number
  courses: number
}

export const DisciplineCard: React.FC<DisciplineCardProps> = ({ ...rest }) => (
  <div className="ui-p-4 ui-overflow-hidden ui-border ui-border-gray-200 dark:ui-border-gray-800 ui-rounded-3xl ui-transition-[border,transform] ui-duration-500 ui-cursor-pointer md:hover:ui-scale-105">
    <div className="ui-text-sky-500 ui-font-bold ui-text-xl ui-mb-4">
      {rest.name}
    </div>
    <ul className="ui-flex ui-flex-col ui-gap-1">
      <li>Semesters: {rest.semesters}</li>
      <li>Students: {rest.students}</li>
      <li>Teachers: {rest.teachers}</li>
      <li>Courses: {rest.courses}</li>
    </ul>
  </div>
)
