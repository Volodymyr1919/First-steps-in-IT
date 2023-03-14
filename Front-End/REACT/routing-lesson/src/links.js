import About from './pages/about/About';
import Home from './pages/home/Home';
import Offers from './pages/offers/Offers';
import Projects from './pages/projects/Projects';
import Requests from './pages/requests/Requests';
import Login from "./pages/partial/Login";
import Signup from "./pages/partial/Signup";

const links = [
    { id: Math.random(), href: '/', tag: <Home />, title: "Home" },
    { id: Math.random(), href: '/about', tag: <About />, title: "About" },
    { id: Math.random(), href: '/projects', tag: <Projects />, title: "Projects" },
    { id: Math.random(), href: '/offers', tag: <Offers />, title: "Offers" },
    { id: Math.random(), href: '/requests', tag: <Requests />, title: "Requests" },
    { id: Math.random(), href: '/projects/:id', tag: <Projects /> },
    { id: Math.random(), href: '/login', tag: <Login />, title: "Login" },
    { id: Math.random(), href: '/signup', tag: <Signup />, title: "Signup" }
];

export default links;