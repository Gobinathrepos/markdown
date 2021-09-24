import { Layout } from '@shopify/polaris';
import List from '../pages/List';
import Listform from './listForm';
import { useSelector } from 'react-redux';

function Home() {
  const {events} = useSelector(state => state.event);

  return (
      <Layout>
        <Layout.Section>
          <Listform  />
        </Layout.Section>

        <Layout.Section>
          <List events={events} />
        </Layout.Section>
      </Layout>

  )
}

export default Home;
