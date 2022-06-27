import { VideoLoading } from "./VideoLoading";
import { EventTextLoading } from "./eventTextLoading";
import { CardLoading } from "./cardLoading";



export function EventLoading() {
  return (
    <div className="flex-1">
      <VideoLoading />
      <EventTextLoading />
      <div className="min-w-[1100px] mx-auto gap-8 mt-20 grid grid-cols-2">
        <CardLoading />
        <CardLoading />
      </div>

    </div>
  )
}