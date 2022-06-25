import { DiscordLogo, FileArrowDown, Lightning, CaretRight } from "phosphor-react";
import {DefaultUi, Player, Youtube } from "@vime/react";
import "@vime/core/themes/default.css";
import { gql, useQuery } from "@apollo/client";
import { useGetLessonBylugQuery } from "../graphql/generated";



interface VideoProps{
  lessonSlug: string
}

export function Video(props:VideoProps) {

  // busca a nova lesson 
  const {data} =useGetLessonBylugQuery({
    variables:{
      slug: props.lessonSlug
    },
    fetchPolicy: "no-cache"
  });

  if(!data || !data.lesson){
    return (
      <div className="flex-1">carregando...</div>
    )
  }
   
  return (
    <div className="flex-1">
      {/* tela preta ao redor do video */}
      <div className="bg-black flex justify-center">
        {/* player de video */}
        <div className="w-full h-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId}/>
            <DefaultUi/>
          </Player>

        </div>
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
          <div className="flex gap-4 flex-col">
            <a href="#" className="p-4 text-sm bg-green-300 rounded flex items-center gap-2 font-bold uppercase justify-center hover:bg-green-700 transition-colors">
              <DiscordLogo size={24}/>
              comunidade no discord
            </a>

            <a href="#" className="p-4 text-sm border boder-blue-500 text-blue-500 rounded flex items-center gap-2 font-bold uppercase justify-center hover:bg-blue-500 hover:text-black transition-colors">
              <Lightning size={24}/>
              acesse o desafio
            </a>

          </div>
        </div>

        {/* complementar */}
        <div className="gap-8 mt-20 grid grid-cols-2">
          {/* material complentar */}
          <a 
          className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
          href="">
            <div className="bg-green-700 flex items-center h-full p-6">
              <FileArrowDown size={40}/>
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
              <FileArrowDown size={40}/>
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