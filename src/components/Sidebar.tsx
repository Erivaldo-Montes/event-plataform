import { gql,useQuery } from "@apollo/client";
import { useGetLessonsQuery } from "../graphql/generated";
import { Lessons } from "./Lessons";



export function Sidebar() {

  const {data} = useGetLessonsQuery()

  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl mb-6 pb-6 border-b border-zinc-500 block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
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