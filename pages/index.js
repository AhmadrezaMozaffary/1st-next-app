import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First meetup",
    image: "https://picsum.photos/1280/865",
    address: "DUMMY ADDRESS FOR THIS MEETUP",
    description: "DESCRIPTION FOR THIS MEETUP",
  },
  {
    id: "m2",
    title: "Second meetup",
    image: "https://picsum.photos/1280/865",
    address: "DUMMY ADDRESS FOR THIS MEETUP",
    description: "DESCRIPTION FOR THIS MEETUP",
  },
  {
    id: "m3",
    title: "Third meetup",
    image: "https://picsum.photos/1280/865",
    address: "DUMMY ADDRESS FOR THIS MEETUP",
    description: "DESCRIPTION FOR THIS MEETUPs",
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
