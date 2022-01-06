import React, { useEffect, useState } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ReactGA from 'react-ga'
import { Helmet } from 'react-helmet'

import ScrollToTop from '../ScrollToTop'

import HomePage from '../pages/HomePage'
import SoinsNaturels from '../pages/SoinsNaturelsPage'
import SoinsEnergetiques from '../pages/SoinsEnergetiquesPage'
import Kinesiologie from '../pages/KinesiologiePage'
import ArretTabac from '../pages/ArretTabacPage'
import Ventouses from '../pages/VentousesPage'
import Moxibustion from '../pages/MoxibustionPage'
import Guasha from '../pages/GuashaPage'
import AuriculoTherapie from '../pages/AuriculoTherapiePage'
import Consultations from '../pages/ConsultationsPage'
import Contact from '../pages/ContactPage'
import QuiSuisJe from '../pages/QuiSuisJePage'
import MentionsLegales from '../pages/MentionsLegalesPage'
import NotFound from '../pages/NotFoundPage'

import '../../styles/index.scss'
import './app.scss'

ReactGA.initialize('UA-178029621-1')
ReactGA.pageview(window.location.pathname + window.location.search)

function App() {
	const [mobile, setMobile] = useState(window.innerWidth <= 1150)
	const updateSize = () => {
		setMobile(window.innerWidth <= 1150)
	}
	useEffect(() => {
		window.addEventListener('resize', updateSize)
		return () => window.removeEventListener('resize', updateSize)
	}, [])

	return (
		<Router>
			<ScrollToTop />
			<div className='App'>
				<Helmet>
					<title>Pauline Gorlier - Praticienne Bien-être à Lille</title>
					<meta
						name='title'
						content='Pauline Gorlier - Praticienne Bien-être'
					/>
					<meta
						name='description'
						content="Pauline Gorlier, Praticienne Bien-être à Lille. Prenez soin de votre corps et votre esprit pour retrouver l'équilibre dans votre vie."
					/>
					<meta property='og:type' content='website' />
					<meta property='og:url' content='https://pauline-gorlier.com/' />
					<meta
						property='og:title'
						content='Pauline Gorlier - Soins naturels et énergétiques à Lille'
					/>
					<meta
						property='og:description'
						content="Pauline Gorlier, Praticienne Bien-être à Lille. Prenez soin de votre corps et votre esprit pour retrouver l'équilibre dans votre vie."
					/>
					<meta
						property='og:image'
						content='https://pauline-gorlier.com/img/praticienne-soins-naturels-2.jpg'
					/>
					<meta property='twitter:card' content='summary_large_image' />
					<meta property='twitter:url' content='https://pauline-gorlier.com/' />
					<meta
						property='twitter:title'
						content='Pauline Gorlier - Praticienne Bien-être à Lille'
					/>
					<meta
						property='twitter:description'
						content="Pauline Gorlier, Praticienne Bien-être à Lille. Prenez soin de votre corps et votre esprit pour retrouver l'équilibre dans votre vie."
					/>
					<meta
						property='twitter:image'
						content='https://pauline-gorlier.com/img/praticienne-soins-naturels-2.jpg'
					/>
				</Helmet>
				<Header mobile={mobile} />
				<Switch>
					<Route path='/' exact>
						<HomePage mobile={mobile} />
					</Route>
					{/* <Route path="/soins-naturels" exact>
            <SoinsNaturels mobile={mobile} />
          </Route>
          <Route path="/kinesiologie" exact>
            <Kinesiologie mobile={mobile} />
          </Route>
          <Route path="/arret-tabac" exact>
            <ArretTabac mobile={mobile} />
          </Route>
          <Route path="/soins-energetiques" exact>
            <SoinsEnergetiques mobile={mobile} />
          </Route>
          <Route path="/moxibustion" exact>
            <Moxibustion mobile={mobile} />
          </Route>
          <Route path="/guasha" exact>
            <Guasha mobile={mobile} />
          </Route>
          <Route path="/reflexologie-auriculaire" exact>
            <AuriculoTherapie mobile={mobile} />
          </Route>
          <Route path="/ventouses" exact>
            <Ventouses mobile={mobile} />
          </Route> */}
					<Route path='/consultations' exact>
						<Consultations mobile={mobile} />
					</Route>
					<Route path='/contact' exact>
						<Contact mobile={mobile} />
					</Route>
					<Route path='/qui-suis-je' exact>
						<QuiSuisJe mobile={mobile} />
					</Route>
					<Route path='/mentions-legales' exact>
						<MentionsLegales mobile={mobile} />
					</Route>
					<Route path='*'>
						<NotFound mobile={mobile} />
					</Route>
				</Switch>
				<Footer mobile={mobile} />
			</div>
		</Router>
	)
}

export default App
