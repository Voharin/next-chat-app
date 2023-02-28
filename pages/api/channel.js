import io from "socket.io";
import poll from "../../lib/db";
import { useContext } from "react";
import { Server } from "socket.io";

export default async (req, res) => {
  //get channels from database with socket.io and send to client
  //   io.on("channels", async (data) => {
  //     const result = await poll.query("SELECT * FROM channels");
  //     const channels = result.rows;
  //     io.emit("channels", channels);
  //   });



  if (req.method === "POST") {
    const { channel } = req.body;
    const getChannelNames = await poll.query(
      "SELECT channel_name FROM channel"
    );

    const channelNames = getChannelNames.rows.map((channel) => {
      return channel.channel_name;
    });

    // console.log("channelNames", channelNames);

    const getUsersInChannel = await poll.query(
      "SELECT * FROM users WHERE id IN (SELECT UNNEST(channel_members) FROM channel WHERE channel_name=$1) ",
      [channel]
    );
    const usersInChannel = getUsersInChannel.rows;



    res.status(200).json({ usersInChannel, channelNames });
  }

  // const result = await poll.query("SELECT * FROM channel ");
  // const channels = result.rows;

  // res.status(200).json(channels);
};
