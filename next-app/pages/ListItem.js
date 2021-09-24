import { Layout, Card, Button, ButtonGroup } from '@shopify/polaris';
import { useDispatch } from 'react-redux';
import {deleteEvent} from './redux/Action';

function ListItem({ event }) {
  const dispatch = useDispatch();

  return (
      <Layout.Section oneThird>
        <Card title={event.username}>
          <Card.Section>
              <span>
                <p>{event.city}</p>
                <strong>{event.country}</strong>
              </span>
          </Card.Section>
          <Card.Section>
          <ButtonGroup>
              <Button primary>Edit</Button>
              <Button destructive onClick={() => dispatch(deleteEvent(event.id))}>
                Delete
              </Button>
          </ButtonGroup>
          </Card.Section>
        </Card>
      </Layout.Section>
  )
}

export default ListItem;
