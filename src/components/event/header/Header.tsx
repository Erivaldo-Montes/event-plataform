import { Logo } from "./Logo";
import { Menu } from "../menu/menu"

export function Header() {
  return (
    <header className="bg-gray-700 max-h-[10%] md:h-auto relative py-5 px-6 md:static flex items-center justify-between md:justify-center border-b border-gray-600">
      <Logo />
      <Menu />
    </header>

  )
}