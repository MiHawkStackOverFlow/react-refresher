import React from 'react'
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F06%2Fdemon-slayer-season-4-confirmed-official-teaser-hashira-training-arc-info-tw.jpg?w=960&cbr=1&q=90&fit=max",
    address: "Meetupstreet 5, 12345 Meetup City",
    description: "This is a first meetup with the Demon Slayers",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://i0.wp.com/dmtalkies.com/wp-content/uploads/2023/01/Chainsaw-Man-Ending-Explained-Denji-Makima-Aki-Himeno-Kobeni-and-others.jpg",
    address: "Meetupstreet 6, 12346 Meetup City",
    description:
      "This is a chainsaw meetup, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

export default function AllMeetupsPage() {
  return <div>
    <h1>All Meetups</h1>
    <MeetupList meetups={DUMMY_DATA}/>
  </div>;
}
