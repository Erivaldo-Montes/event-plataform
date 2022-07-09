import "@vime/core/themes/default.css";
import { DefaultUi, Player, Youtube } from "@vime/react";
import { useGetvideoIdQuery } from "../../../graphql/generated";
import { VideoLoading } from "../../loadingEventPage/VideoLoading";


interface PlayerProps {
  slug: string
}

// faz uma requisição apenas para o video id pois estava com problemas no carregamento.
export function PlayerEvent(props: PlayerProps) {

  // desabilita o cache
  const { data } = useGetvideoIdQuery({
    variables: {
      slug: props.slug
    },
    fetchPolicy: "no-cache"
  })

  if (!data || !data.lesson) {
    return <VideoLoading />
  }
  return (
    <div className="bg-black flex justify-center">
      {/* player de video */}
      <div id="playerMain" className="w-full h-full max-w-[1100px] max-h-[100vh] aspect-video">
        <Player>
          <Youtube videoId={data.lesson.videoId} />
          <DefaultUi />
        </Player>
      </div>

    </div>
  )
}