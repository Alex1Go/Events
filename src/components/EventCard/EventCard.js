import React from 'react';
import { Card, Title } from './EventCard.styled';

const EventCard = ({ event }) => {
  return (
    <Card>
      <Title>Title:{event.title}</Title>
      <p>{event.description}</p>
      <p>Date: {new Date(event.date).toLocaleDateString()}</p>
      <p>Organizer: {event.organizer}</p>
    </Card>
  );
};

export default EventCard;
