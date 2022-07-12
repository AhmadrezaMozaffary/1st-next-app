import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = ({ meetups: { id, image, title, address, description }}) => {
  return (
    <MeetupDetail
      id={id}
      image={image}
      title={title}
      address={address}
      description={description}
    />
  );
};

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1'
        }
      },
      {
        params: {
          meetupId: 'm2'
        }
      },
    ]
  }
}

export const getStaticProps = async (context) => {
  //Fetching data

  const { meetupId } = context.params; // Params to use in routing
  return {
    props: {
      meetups: {
        id: meetupId,
        image: "https://picsum.photos/1280/865",
        title: "First Meetup",
        address: "Address",
        description: "Desc",
      },
    },
  };
};

export default MeetupDetails;
