import { Logo } from "../components/Logo";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateSubscribesMutation } from "../graphql/generated";
import mockupImage from "../assets/code_mockup.png"


export function Subscribe(){
  const [name, setName] = useState("");
  const [email, setEmail] =useState("");
  const navigate = useNavigate();

  // retorna um array [função, {}]
  const [createSubscribes,{loading}] = useCreateSubscribesMutation();

  async function handleSubscriber(event: FormEvent){
    event.preventDefault();
    console.log(name, email)
    
    await createSubscribes({
      variables:{
        name,
        email
      }
    });


    navigate("/event")
  }

  return(
    // tela de login
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      {/* sessão do login e descrição */}
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        {/* apresentação */}
        <div className="max-w-[640px]">
          <Logo />

          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React JS</strong>
          </h1>

          <p className="mt-4 text-gray-200 leading-relaxed">
          Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>

        </div>

        {/* area de login */}
        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

          {/* formulário */}
          <form onSubmit={handleSubscriber} action="" className="flex flex-col w-full gap-2">
            
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

            <button 
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50">
              Garantir a inscrição
            </button>

          </form>
        </div>
      </div>

      {/* sempre importar da pasta raiz */}
      <img src={mockupImage} className="mt-10" alt="" />
    </div>
  )
}