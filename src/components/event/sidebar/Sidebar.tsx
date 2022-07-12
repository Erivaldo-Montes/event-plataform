import { gql, useQuery } from "@apollo/client";
import { useGetLessonsQuery } from "../../../graphql/generated";
import { Lessons } from "./Lessons";
import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { closeMenuReducer } from "../../../redux/sidebarSlice"


export function Sidebar() {

  const { data } = useGetLessonsQuery()

  const dispatch = useAppDispatch()

  const isOpen = useAppSelector(state => state.toggleIsOpen.value)

  return (
    <aside className={`${isOpen ? `fixed z-20 right-0 md:static `
      : `fixed z-10 -right-full md:static `

      } 
      transition-all bg-gray-700 p-6 border-l flex-col w-screen md:w-[21.75rem]  md:block md:right-0 max-h-[90vh] md:max-h-full border-gray-600 overflow-y-scroll md:overflow-auto`}>
      <span className="font-bold text-2xl mb-6 pb-6 border-b border-zinc-500 block">
        Cronograma de aulas
      </span>

      <div className={`flex flex-col gap-8 `} onClick={() => dispatch(closeMenuReducer())}>
        {data?.lessons.map(lesson => {
          return (
            <Lessons
              key={lesson.id}
              availableAT={new Date(lesson.availableAt)}
              title={lesson.title}
              slug={lesson.slug}
              type={lesson.lessonType}
            />
          )
        })}

      </div>
    </aside>
  )
}