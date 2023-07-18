// Use next.js page for the mobile app
// export { default } from './pages'
import Router from "./src/router/Router";
import MainProvider from "./src/providers/MainProvider";

const App = () => {
    return (
        <MainProvider>
            <Router/>
        </MainProvider>
    )
}

export default App