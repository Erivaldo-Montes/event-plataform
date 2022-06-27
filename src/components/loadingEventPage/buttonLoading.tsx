import { CircleNotch } from "phosphor-react";

export function ButtonLoading() {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <CircleNotch
        size={40}
        className="h-5 w-5 animate-spin"
      />
    </div>
  )
}