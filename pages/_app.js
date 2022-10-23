import AppContext from '../context/AppContext.jsx';
import Layout from '../components/Layout.jsx'
import '../styles/globals.scss';
import AppContextProvider from '../context/AppContext.jsx';

function MyComponent({Component, pageProps}){
    
    return (
        <AppContextProvider>
            <Layout>
                <Component {...pageProps}/>
            </Layout>
        </AppContextProvider>
    )
}

export default MyComponent;
