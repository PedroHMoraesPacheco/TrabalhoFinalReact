import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Company from './components/Company'
import NewProject from './components/NewProject'
import Projects from './components/Projects'

import Container from './components/Container'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App(){
    return (
        <Router>
            <NavBar />
           <Switch>
                <Container customClass="min-height">
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/projects">
                        <Projects />
                    </Route>
                    <Route exact path="/company">
                        <Company />
                    </Route>
                    <Route exact path="/contact">
                        <Contact />
                    </Route>
                    <Route exact path="/newproject">
                        <NewProject />
                    </Route>
                </Container>
           </Switch>
           <Footer />
        </Router>
    )
}

export default App;