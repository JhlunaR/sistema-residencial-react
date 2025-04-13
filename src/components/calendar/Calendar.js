import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { es } from 'date-fns/locale';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'; // Estilos básicos para DnD

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales: { es }
});

export default function ResidentialCalendar() {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Junta de Vecinos',
      start: new Date(2024, 5, 15, 18, 0),
      end: new Date(2024, 5, 15, 19, 0),
    }
  ]);

  const handleEventDrop = ({ event, start, end }) => {
    setEvents(prev => 
      prev.map(evt => 
        evt.id === event.id 
          ? { ...evt, start, end } 
          : evt
      )
    );
  };

  return (
    <div>
      <h2>Calendario Residencial</h2>
      <Calendar
        localizer={localizer}
        events={events}
        onEventDrop={handleEventDrop}
        startAccessor="start"
        endAccessor="end"
        resizable
        style={{ height: '80vh' }}
        culture="es"
      />
    </div>
  );
}
