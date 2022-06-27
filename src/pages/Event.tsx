import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/content/Video";
import { EventLoading } from "../components/loadingEventPage"
export function Event() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div className="flex flex-col min-h-screen scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-500">
      <Header />
      <main className="flex flex-1">
        {slug ? <Video lessonSlug={slug} /> : <EventLoading />}
        <Sidebar />
      </main>
    </div>
  )
}