import "./App.css";
import "simpledotcss/simple.min.css";

interface Event {
  date: Date;
  /** Duration in days */
  duration: number;
  title: string;
  imageUrl: string;
  imagePosition?: string;
  href: string;
  showTitle?: boolean;
}

const events: Event[] = [
  {
    date: new Date("2023-10-01"),
    duration: 1,
    title: "Monkey Safari",
    imageUrl: "img/events/monkey-safari.jpg",
    href: "https://www.facebook.com/events/1909436822783527/",
  },
  {
    date: new Date("2021-11-06"),
    duration: 1,
    title: "AE",
    imageUrl: "img/events/ae.jpg",
    href: "https://www.facebook.com/events/638191437192315/",
  },
  {
    date: new Date("2017-04-25"),
    duration: 1,
    title: "Bunker 1",
    imageUrl: "img/events/bunker-1.jpg",
    imagePosition: "0 5%",
    href: "https://www.facebook.com/events/164132054097563/",
  },
  {
    date: new Date("2017-06-11"),
    duration: 1,
    title: "Olivier Giacomotto",
    imageUrl: "img/events/olivier-giacomotto.jpg",
    href: "https://www.facebook.com/events/659696310882548/",
  },
  {
    date: new Date("2017-08-05"),
    duration: 1,
    title: "Bunker 2",
    imageUrl: "img/events/bunker-2.jpg",
    imagePosition: "0 17%",
    href: "https://www.facebook.com/events/653835214826178/",
  },
  {
    date: new Date("2017-09-01"),
    duration: 1,
    title: "Psybrats",
    imageUrl: "img/events/psybrats.jpg",
    href: "https://www.facebook.com/events/831117957044203/",
  },
  {
    date: new Date("2017-10-25"),
    duration: 1,
    title: "Bunker 3 - Anya",
    imageUrl: "img/events/bunker-3-anya.jpg",
    imagePosition: "0 10%",
    href: "https://www.facebook.com/events/339010106511072/",
  },
  {
    date: new Date("2017-11-18"),
    duration: 1,
    title: "In the Kissing Room",
    imageUrl: "img/events/kissing-room.jpg",
    imagePosition: "0 20%",
    href: "https://www.facebook.com/events/192905361254192/",
  },
  {
    date: new Date("2018-03-03"),
    duration: 1,
    title: "Bunker 4",
    imageUrl: "img/events/bunker-4.jpg",
    imagePosition: "0 63%",
    href: "https://www.facebook.com/events/206960583378110/",
  },
  {
    date: new Date("2018-04-28"),
    duration: 1,
    title: "Tiger Stripes",
    imageUrl: "img/events/tiger-stripes.jpg",
    href: "https://www.facebook.com/events/137463267090869/",
  },
  {
    date: new Date("2022-03-19"),
    duration: 1,
    title: "Technobrats In The Park",
    imageUrl: "img/events/park-1.jpg",
    href: "https://www.facebook.com/events/465420635260559/",
    showTitle: true,
  },
  {
    date: new Date("2022-11-12"),
    duration: 1,
    title: "Technobrats In The Park 2",
    imageUrl: "img/events/park-2.jpg",
    href: "https://www.facebook.com/events/1326569201487921/",
    showTitle: true,
  },
  {
    date: new Date("2023-04-15"),
    duration: 1,
    title: "Divergence",
    imageUrl: "img/events/divergence-1.jpg",
    href: "https://www.facebook.com/events/1725072524667579/",
  },
  {
    date: new Date("2023-06-15"),
    duration: 1,
    title: "Divergence 2",
    imageUrl: "img/events/divergence-2.jpg",
    href: "https://www.facebook.com/events/256782880276279/",
  },
  {
    date: new Date("2020-12-4"),
    duration: 3,
    title: "Multiverse 2020",
    imageUrl: "img/events/multiverse-2020.jpg",
    href: "https://www.facebook.com/events/366908864625820/",
  },
  {
    date: new Date("2022-02-04"),
    duration: 3,
    title: "Multiverse 2022",
    imageUrl: "img/events/multiverse-2022.jpg",
    href: "https://www.facebook.com/events/1109654456456554/",
  },
  {
    date: new Date("2023-01-26"),
    duration: 4,
    title: "Multiverse 2023",
    imageUrl: "img/events/multiverse-2023.jpg",
    href: "https://www.facebook.com/events/1636495220100607/",
  },
];

console.log(events);

function EventCard({ event }: { event: Event }) {
  return (
    <div className="event-card">
      <a href={event.href} title={event.title}>
        {event.showTitle ? (
          <div className="event-title">{event.title}</div>
        ) : null}
        <img
          src={event.imageUrl}
          className="event-img"
          style={{ objectPosition: event.imagePosition }}
        />
        <img
          src={event.imageUrl}
          className="event-img-blur"
          style={{ objectPosition: event.imagePosition }}
        />
      </a>
    </div>
  );
}

function App() {
  const sortedEvents = events.sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );
  const futureEvents = sortedEvents.filter(
    (event) =>
      event.date.getTime() + (event.duration + 1) * 1000 * 60 * 60 * 24 >=
      new Date().getTime()
  );
  const pastEvents = sortedEvents.filter(
    (event) =>
      event.date.getTime() + (event.duration + 1) * 1000 * 60 * 60 * 24 <
      new Date().getTime()
  );

  return (
    <>
      <div className="logo">
        <img src="img/logo.png" className="logo-img" />
      </div>

      <div className="events-container">
        <div className="events-buffer"></div>
        <div className="event-cards-container">
          {futureEvents.map((event) => (
            <EventCard event={event} />
          ))}
          <h1>Past Events</h1>
          {pastEvents.map((event) => (
            <EventCard event={event} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
