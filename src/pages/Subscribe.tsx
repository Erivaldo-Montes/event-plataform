import { Logo } from "../components/event/header/Logo";
import { useState, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateSubscribesMutation } from "../graphql/generated";
import mockupImage from "../assets/code_mockup.png"
import { ButtonLoading } from "../components/loadingEventPage/buttonLoading";
import classNames from "classnames";
import { TrendUp } from "phosphor-react";
import { Footer } from "../components/footer/footer"


export function Subscribe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emptyForm, setEmptyForm] = useState(false)
  const [isEmptyForm, setIsEmptyForm] = useState(false)
  const [isSubscriber, setIsSubscriber] = useState(false)
  const setCookie = () => localStorage.setItem("subscriber", "true")
  const navigate = useNavigate();

  const [createSubscribes, { loading, error, data }] = useCreateSubscribesMutation();
  useEffect(() => {
    if (error) {
      alert(error)
    }
    if (localStorage.getItem("subscriber") === "true") {
      setIsSubscriber(true)
    }
  })

  // retorna um array [função, {}]

  async function handleSubscriber(event: FormEvent) {
    event.preventDefault();

    if (name === "" || email === "") {
      setIsEmptyForm(true)
      setEmptyForm(true);
      setTimeout(() => {
        setEmptyForm(false);
      }, 500);

      return
    }

    await createSubscribes({
      variables: {
        name,
        email
      }
    }).then(() => setCookie())

    navigate(`event/`)
  }

  return (
    // tela de login
    <div className="min-h-screen max-h-screen overflow-y-scroll md:overflow-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      {/* sessão do login e descrição */}
      <div className="w-full max-w-[1100px] flex flex-col items-center gap-8 justify-between mt-10 mx-auto md:mt-20 md:flex-row md:gap-0">
        {/* apresentação */}
        <div className="text-center flex p-4 items-center flex-col md:text-justify md:p-0 md:max-w-[640px] md:block">
          <Logo />

          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React JS</strong>
          </h1>

          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>

        </div>

        {/* area de login */}
        <div className={classNames("p-8 bg-gray-700 border border-gray-500 rounded w-full md:w-auto", {
          "animate-alert": emptyForm
        })}>
          <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

          {/* formulário */}
          <form onSubmit={handleSubscriber} action="" className="flex relative flex-col w-full gap-2">
            {
              isEmptyForm ? (
                <div className="text-red-600 text-sm absolute -top-6">
                  preencha todos os campos
                </div>) : (
                null
              )
            }
            {!isSubscriber ? (
              <>
                {/* nome */}
                <input
                  className="bg-gray-900 rounded px-6 h-14"
                  type="text"
                  placeholder="seu nome completo"
                  onChange={event => setName(event.target.value)}
                />

                {/* email */}
                <input
                  className="bg-gray-900 rounded px-6 h-14"
                  type="email"
                  placeholder="Digite seu email"
                  onChange={event => setEmail(event.target.value)}
                />
              </>
            ) : (
              <div className="text-2xl my-4 text-gray-300 text-center">
                Já Inscrito
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className={classNames("mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50",
              )}>
              {
                !loading ? (
                  isSubscriber ? (
                    <div onClick={() => {
                      navigate("/event")
                      return <ButtonLoading />
                    }}>Ir para evento</div>
                  ) : (
                    <div>Garantir vaga</div>
                  )
                ) : (
                  <ButtonLoading />
                )
              }
            </button>

          </form>
        </div>
      </div>

      {/* sempre importar da pasta raiz */}
      <img src={mockupImage} className="mt-10" alt="" />
      <Footer />
    </div>
  )
}