import { DiscordLogo, Lightning } from "phosphor-react";

export function ComunidadeDiscordCard() {
  return (
    <div className="flex gap-4 flex-col">
      <a href="#" className="p-4 text-sm bg-green-300 rounded flex items-center gap-2 font-bold uppercase justify-center hover:bg-green-700 transition-colors">
        <DiscordLogo size={24} />
        comunidade no discord
      </a>

      <a href="#" className="p-4 text-sm border boder-blue-500 text-blue-500 rounded flex items-center gap-2 font-bold uppercase justify-center hover:bg-blue-500 hover:text-black transition-colors">
        <Lightning size={24} />
        acesse o desafio
      </a>

    </div>
  )
}