import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://Ahmadreza:qI7zahvA5i7ZuXgi@cluster0.ydc15ye.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    client.close();

    //Sending back the respone to the Front-End
    res.status(201).json({ message: "Meetup Inserted!" });
  }
};

export default handler;
