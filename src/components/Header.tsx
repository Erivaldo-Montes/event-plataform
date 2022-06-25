import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="bg-gray-700 w-full py-5 flex items-center justify-center border-b border-gray-600">
      <Logo/>
    </header>
  )
}