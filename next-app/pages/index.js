import { AppProvider, Page } from '@shopify/polaris';
import '@shopify/polaris/dist/styles.css';
import { Provider } from 'react-redux';
import Navbar from '../component/Navbar';
import Home from './Home';
import { configureStore } from '../store/configStore';


const store = configureStore();
console.log(store.getState());

function Index() {

  return (
    <Provider store={store}>
    <AppProvider>
      <Page>
        <Navbar />
        {/* <Home /> */}
      </Page>
   </AppProvider>
   </Provider>
  )
}

export default Index;
