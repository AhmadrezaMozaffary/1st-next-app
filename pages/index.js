import Head from "next/head";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Next JS meetups</title>
        <meta
          name="description"
          content="Ahmadreza Mozaffary's first NextJS application"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

export const getStaticProps = async () => {
  //Fetching data with server side code
  const client = await MongoClient.connect(
    "mongodb+srv://Ahmadreza:qI7zahvA5i7ZuXgi@cluster0.ydc15ye.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => {
        return {
          title: meetup.title,
          image: meetup.image,
          address: meetup.address,
          id: meetup._id.toString(),
        };
      }),
    },
    revalidate: 1,
  };
};

export default HomePage;
