import '@/styles/globals.css'
import Sidebar from "../components/Sidebar.jsx"

export default function App({ Component, pageProps }) {
  return (
    <Sidebar>
      <Component {...pageProps} />
    </Sidebar>
  )
}
