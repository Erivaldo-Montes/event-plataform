import { useParams } from "react-router-dom";
import { Header } from "../components/event/header/Header";
import { Sidebar } from "../components/event/sidebar/Sidebar";
import { Video } from "../components/event/content/Video";
import { EventLoading } from "../components/loadingEventPage"
import { Footer } from "../components/footer/footer"

export function Event() {
  const { slug } = useParams<{ slug: string }>()
  return (
    <div className="flex flex-col max-h-screen md:overflow-y-auto overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent">
      <Header />
      <main className="flex flex-1 max-w-full">
        {slug ? <Video lessonSlug={slug} /> : <EventLoading />}
        <Sidebar />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}