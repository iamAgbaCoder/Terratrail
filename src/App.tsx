import { HomePage } from '@/pages/HomePage'
import { AboutPage } from '@/pages/AboutPage'
import { PrivacyPage } from '@/pages/PrivacyPage'
import { TermsPage } from '@/pages/TermsPage'
import { ContactPage } from '@/pages/ContactPage'
import { useRoute } from '@/router'

const routes: Record<string, () => JSX.Element> = {
  '/': HomePage,
  '/about': AboutPage,
  '/privacy': PrivacyPage,
  '/terms': TermsPage,
  '/contact': ContactPage,
}

function App() {
  const route = useRoute()
  const Page = routes[route] ?? HomePage
  return <Page />
}

export default App
