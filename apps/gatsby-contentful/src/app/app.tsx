import { useEffect, useState } from 'react';
import { sanityClient } from '../sanity';
import EventCard from './EventCard';

export interface IEvent {
  name: string;
  slug: string;
  eventType: string;
  date: string;
  doorsOpen: number;
  headline: {
    name: string;
  };
  image: {
    asset: {
      id: string;
      url: string;
    };
  };
  details: string[];
  tickets: string;
}

export function App() {
  const [events, setEvents] = useState<IEvent[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchEventsFromSanity() {
      try {
        const data = await sanityClient.fetch(`*[_type == "event"]{
          name,
          slug,
          eventType,
          date,
          doorsOpen,
          headline->{
            name
          },
          image{
            asset->{
              id,
              url
            }
          },
        }`);
        setEvents(data);
      } catch (err) {
        setError(`Failed to fetch events: ${err}`);
      }
    }

    fetchEventsFromSanity();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {events && events.length > 0 ? (
        events.map((event) => (
          <EventCard
            key={event.slug || event.date || event.name}
            event={event}
          />
        ))
      ) : (
        <p>No events found.</p>
      )}
    </div>
  );
}

export default App;
