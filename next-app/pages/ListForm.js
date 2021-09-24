import { Layout, Stack, Button, FormLayout, Card, Form } from '@shopify/polaris';
import cuid from 'cuid';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createEvent, updateEvent } from './redux/Reducer';

function Listform({ match, history }) {
  const dispatch = useDispatch();
  const selectedEvent = useSelector((state) =>
    state.event.events.find(e => e.id === match.params.id)
  );

  console.log(params);

  const initialValues = {
    username: '',
    city: '',
    country: ''
  }
  const [values, setValues] = useState(initialValues);

  function handleFormSubmit() {
    selectedEvent
    ? dispatch(updateEvent({ ...selectedEvent, ...values }))
      : dispatch(
          createEvent({
            ...values,
            id: cuid(),
          })
        );
    history.push('/');
  }

  function handleInputChange(e) {
    const {name, value} = e.target;
    setValues({...values, [name]: value});
  }

  return (
    <Layout>
      <Layout.AnnotatedSection
        title="Create a new User Profile"
        description="In this formfield you can create a new user .">
          <Card sectioned>
            <Form onSubmit={handleFormSubmit}>
              <FormLayout>
                <label>Username</label>
                <input
                    placeholder="Username"
                    type="text"
                    value={values.username}
                    onChange={(e) => handleInputChange(e)}
                  />

                <label>City</label>
                <input
                  placeholder="City"
                  type="text"
                  value={values.city}
                  onChange={(e) => handleInputChange(e)}
                />

                <label>Country</label>
                <input
                  placeholder="Country"
                  type="text"
                  value={values.country}
                  onChange={(e) => handleInputChange(e)}
                />
              <Stack>
                  <Button>Cancel</Button>
                <Button primary type='submit'>Submit</Button>
              </Stack>
              </FormLayout>
            </Form>
          </Card>

        </Layout.AnnotatedSection>
    </Layout>
  )
}

export default Listform;
