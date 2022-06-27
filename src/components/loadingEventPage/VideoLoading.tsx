import classnames from "classnames"



export function VideoLoading() {
  return (

    <div className="flex  justify-center bg-gray-900">
      <div className={classnames(`aspect-video  w-full h-full max-w-[1100px] max-h-[100vh] animate-waintingCharge rounded bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900`)}>
      </div>
    </div>

  )
}