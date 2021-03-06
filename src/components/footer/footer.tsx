import { LogoFooter } from "./logoFooter";

export function Footer() {
  return (
    <footer className="flex text-sm w-full gap-2 bg-gray-900 flex-col border-t border-gray-600 justify-center md:justify-between items-center p-6 md:gap-0 md:flex-row">
      <div className="gap-2 md:gap-6 flex-col justify-center items-center text-gray-300 inline-flex md:flex-row">
        <LogoFooter />
        Rocketseat - Todos os direitos reservados
      </div>
      <div>
        <a href="#"
          className=" text-gray-300"
        >
          politica de privacidade
        </a>
      </div>
    </footer>
  )
}