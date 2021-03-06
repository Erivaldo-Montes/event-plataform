import { useParams } from "react-router-dom";
import { Header } from "../components/event/header/Header";
import { Sidebar } from "../components/event/sidebar/Sidebar";
import { Video } from "../components/event/content/Video";
import { EventLoading } from "../components/loadingEventPage"
import { Footer } from "../components/footer/footer"

export function Event() {
  const { slug } = useParams<{ slug: string }>()
  return (
    <div className="flex flex-col max-h-screen md:overflow-y-scroll md:scrollbar-thin md:scrollbar-thumb-gray-500 md:scrollbar-track-transparent">
      <Header />
      <main className="flex flex-1 max-h-full">
        {slug ? <Video lessonSlug={slug} /> : <EventLoading />}
        <Sidebar />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}