import {CheckCircle, Lock} from "phosphor-react";
import {isPast, format} from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import {Link, useParams} from "react-router-dom";
import classnames from "classnames";

interface LessonsProps{
  title: string;
  slug: string;
  availableAT: Date;
  type: "live" | "class";
}

export function Lessons(props: LessonsProps) {
  const {slug} = useParams<{slug: string}>();

  const isLessonAvailable = isPast(props.availableAT);

  // formata a data para um formato
  const availableDateFormatted = format(props.availableAT, "EEEE' • 'd' de 'MMMM' • 'k'h'mm'",{
    locale: ptBR
  })

  const isLessonActive = props.slug === slug; 
  return (
   <div>
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">
        {availableDateFormatted}
      </span>

      <div className={classnames(`rounded mt-2 p-4 border border-gray-500 group-hover:border-green-500`, {
        'bg-green-500': isLessonActive
      })}>

        <header className="flex items-center justify-between">
          
          {
            // verifica se a lesson esta disponivel ou não
            isLessonAvailable ? (
              <span className={classnames('text-sm  font-medium flex items-center gap-2', {
                "text-white": isLessonActive,
                "text-blue-500": !isLessonActive
              })}>
              <CheckCircle size={20}/>
              conteúdo liberado
            </span>
            ) : (
              <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20}/>
              Em breve
            </span>
            )
          }

          <span className={classnames('text-xs rounded border  py-[0.125rem] px-2 text-white font-bold', {
            'boder-white': isLessonActive,
            'border-green-300': !isLessonActive
          })}>
            {props.type === "live" ? "AO VIVO" : "Aula pratica"}
          </span>
        </header>

        <strong className={classnames('mt-5 block', {
          "text-white": isLessonActive,
          "text-gray-200": !isLessonActive
        })}>
          {props.title}
        </strong>
      </div>
    </Link>
   </div>
  )
}