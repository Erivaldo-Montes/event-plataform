import { VideoLoading } from "./VideoLoading";
import { EventTextLoading } from "./eventTextLoading";

export function EventLoading() {
  return (
    <div className="flex-1">
      <VideoLoading />
      <EventTextLoading />
    </div>
  )
}