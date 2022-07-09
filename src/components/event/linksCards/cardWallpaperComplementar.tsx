  import { FileArrowDown, CaretRight, FileImage } from "phosphor-react";


export function CardWallpaperComplementar() {
  return (
    <div className="gap-8 mt-20 grid grid-cols-1 md:grid-cols-2">
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
          <FileImage size={40} />
        </div>
        <div className="py-6 leading-relaxed">
          <strong className="text-2xl">Wallpaper exclusivos</strong>
          <p className="text-sm text-gray-200 mt-2">
            Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina              </p>
        </div>

        <div className="h-full flex items-center p-6">
          <CaretRight size={24} />
        </div>

      </a>

    </div>
  )
}