import React from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { es } from 'date-fns/locale';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales: { es }
});

const events = [
  {
    title: 'Junta de Vecinos',
    start: new Date(2024, 5, 15, 18, 0), // 15 junio 2024, 6:00 PM
    end: new Date(2024, 5, 15, 19, 30)
  }
];

export default function ResidentialCalendar() {
  return (
    <div style={{ height: '500px', marginTop: '20px' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        culture="es"
        messages={{
          today: 'Hoy',
          previous: 'Anterior',
          next: 'Siguiente'
        }}
      />
    </div>
  );
}

