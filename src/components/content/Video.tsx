import { DiscordLogo, FileArrowDown, Lightning, CaretRight } from "phosphor-react";
import { useGetLessonBylugQuery } from "../../graphql/generated";
import { EventLoading } from "../loadingEventPage"
import { ComunidadeDiscordCard } from "../linksCards/comunidadeDiscordCard"
import { PlayerEvent } from "./player"


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
        <div className="gap-8 mt-20 grid grid-cols-2">
          {/* material complentar */}
          <a
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
            href="">
            <div className="bg-green-700 flex items-center h-full p-6">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Material compementar</strong>
              <p className="text-sm text-gray-200 mt-2">
                acesse o material complementar para acelerar o seu desenvolvimento
              </p>
            </div>

            <div className="h-full flex items-center p-6">
              <CaretRight size={24} />
            </div>

          </a>

          {/* wallpaper */}
          <a
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
            href="">
            <div className="bg-green-700 flex items-center h-full p-6">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Wallpaper exclusicos</strong>
              <p className="text-sm text-gray-200 mt-2">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina              </p>
            </div>

            <div className="h-full flex items-center p-6">
              <CaretRight size={24} />
            </div>

          </a>

        </div>

      </div>
    </div>
  )
}