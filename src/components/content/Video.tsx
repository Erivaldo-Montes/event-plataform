import { useGetLessonBylugQuery } from "../../graphql/generated";
import { EventLoading } from "../loadingEventPage"
import { ComunidadeDiscordCard } from "../linksCards/comunidadeDiscordCard"
import { PlayerEvent } from "./player";
import { CardWallpaperComplementar } from "../linksCards/cardWallpaperComplementar"


interface VideoProps {
  lessonSlug: string
}

export function Video(props: VideoProps) {

  // busca a nova lesson 
  const { data } = useGetLessonBylugQuery({
    variables: {
      slug: props.lessonSlug
    },

  });

  if (!data || !data.lesson) {
    return (
      <EventLoading />
    )

  }

  return (
    <div className="flex-1">
      {/* player do video */}
      <div className="flex-1">
        <PlayerEvent slug={props.lessonSlug} />
      </div>

      {/* seção de titulo de descrição */}
      <div className="mx-auto p-6 max-w-[1100px]">
        {/* cabeça */}
        <div className="flex justify-start gap-16">
          {/* titulo e descrição */}
          <div className="flex-1">

            {/* titulo do video */}
            <h1 className="text-2xl text-bold">
              {data.lesson.title}
            </h1>

            {/* descrição do video */}
            <p className="mt-4 text-gray-200 leading-relaxed">
              {data.lesson.description}
            </p>

            {/* professor */}
            {data.lesson.teacher && (
              <div className="flex items-center gap-6 mt-6">
                <img
                  className="h-16 w-16 rounded-full border-2 border-blue-500"
                  src={data.lesson.teacher.avatarURL}
                  alt=""
                />

                <div>
                  <strong className="font-bold text-2xl block">{data.lesson.teacher.name}</strong>
                  <span className="text-gray-200 text-sm block">{data.lesson.teacher.bio}</span>
                </div>
              </div>
            )}
          </div>

          {/* links */}
          <ComunidadeDiscordCard />

        </div>

        {/* complementar */}
        <CardWallpaperComplementar />

      </div>
    </div>
  )
}