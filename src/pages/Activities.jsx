import React from "react";
import events from "../eventData.json";

function Activities() {
  const listItems = events.map((event) => (
    <tr key={event.id}>
      <td>{event.name}</td>
      <td>{event.times}</td>
      <td>{event.dates}</td>
      <td>{event.description}</td>
    </tr>
  ));

  return (
    <>
      <header>
        <h1> Club Activities</h1>
      </header>
      <main>
        <table id="EventList" className="myEvents">
          <thead>
            <tr>
              <th>Name</th>
              <th>Date(s)</th>
              <th>Time(s)</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>{listItems}</tbody>
        </table>
      </main>
    </>
  );
}

export default Activities;
