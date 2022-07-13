import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = ({
  meetups: { id, image, title, address, description },
}) => {
  return (
    <>
    <Head>
      <title>{title}</title>
    </Head>
      <MeetupDetail
        id={id}
        image={image}
        title={title}
        address={address}
        description={description}
      />
    </>
  );
};

export const getStaticPaths = async () => {
  //Fetching data with server side code
  const client = await MongoClient.connect(
    "mongodb+srv://Ahmadreza:qI7zahvA5i7ZuXgi@cluster0.ydc15ye.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
};

export const getStaticProps = async (context) => {
  const { meetupId } = context.params; // Params to use in routing

  //Fetching data with server side code
  const client = await MongoClient.connect(
    "mongodb+srv://Ahmadreza:qI7zahvA5i7ZuXgi@cluster0.ydc15ye.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });
  client.close();

  return {
    props: {
      meetups: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
};

export default MeetupDetails;
