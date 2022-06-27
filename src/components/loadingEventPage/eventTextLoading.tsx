import { ComunidadeDiscordCard } from "../linksCards/comunidadeDiscordCard"
import { TeacherLoading } from "./teacherLoading";

export function EventTextLoading() {
  return (
    <div className="mx-auto p-6 max-w-[1100px]">

      < div className="flex justify-start gap-16" >
        <div className="flex-1">
          <div className="h-16 w-full animate-waintingCharge rounded bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">
          </div>

          <div className="mt-10">
            <div className="h-5 w-full animate-waintingCharge rounded bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">
            </div>

            <div className="h-5 w-full mt-4  animate-waintingCharge rounded bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">
            </div>

            <div className="h-5 w-full mt-4  animate-waintingCharge rounded bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">
            </div>
          </div>
        </div >
        <ComunidadeDiscordCard />
      </div >
      <TeacherLoading />

    </div >

  )
}