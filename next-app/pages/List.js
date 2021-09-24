import ListItem from './listItem';

function List({events}) {

  return (
    <>
      {events.map((event) => (
        <ListItem
          event={event}
          key={event.id}
        />
      ))}
    </>
  )
}

export default List;
