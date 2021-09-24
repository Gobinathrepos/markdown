import { Button, Heading, Stack } from '@shopify/polaris';

function Navbar() {

  return (
    <div style={{height: '90px'}}>
      <Stack>
        <Stack.Item fill>
            <Heading>Nextjs App</Heading>
        </Stack.Item>

        <Stack.Item>
          <Button>Create a New List</Button>
        </Stack.Item>
      </Stack>
    </div>
  );
}

export default Navbar;
