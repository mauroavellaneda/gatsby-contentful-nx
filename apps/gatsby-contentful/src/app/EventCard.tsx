import { IEvent } from './app';

interface EventCardProps {
  event: IEvent;
}

const cardStyle: React.CSSProperties = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '16px',
  margin: '16px',
  maxWidth: '300px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  fontFamily: 'sans-serif',
};

const imageStyle: React.CSSProperties = {
  width: '100%',
  height: 'auto',
  borderRadius: '4px',
  marginBottom: '12px',
};

const titleStyle: React.CSSProperties = {
  fontSize: '1.25em',
  fontWeight: 'bold',
  margin: '0 0 8px 0',
};

const detailStyle: React.CSSProperties = {
  fontSize: '0.9em',
  color: '#555',
  margin: '4px 0',
};

export function EventCard({ event }: EventCardProps) {
  return (
    <div style={cardStyle}>
      {event.image?.asset?.url && (
        <img src={event.image.asset.url} alt={event.name} style={imageStyle} />
      )}
      <h3 style={titleStyle}>{event.name}</h3>
      {event.headline?.name && (
        <p style={detailStyle}>Headline: {event.headline.name}</p>
      )}
      <p style={detailStyle}>
        Date: {new Date(event.date).toLocaleDateString()}
      </p>
      <p style={detailStyle}>Type: {event.eventType}</p>
      {event.tickets && <p style={detailStyle}>Tickets: {event.tickets}</p>}
    </div>
  );
}

export default EventCard;
