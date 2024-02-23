import poll from "../../lib/db";

export  const login = async (req, res)=>{
  if (req.method === "POST") {
    const { username } = req.body;
    const result = await poll.query(
      "SELECT * FROM users WHERE user_name = $1",
      [username]
    );
    const user = result.rows[0];

    if (result.rows[0] === undefined) {
      await poll.query(
        "INSERT INTO users (user_name, first_name, last_name, email, password, status)  VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [username, username, username, `${username}@${username}`, username, 1]
      );
      const result = await poll.query(
        "SELECT * FROM users WHERE user_name = $1",
        [username]
      );
      const user = result.rows[0];

      res.status(200).json(user.user_name);
      console.log("result", user.user_name);
    } else {
      await poll.query("UPDATE users SET status = 1 WHERE user_name = $1", [
        username,
      ]);
      res.status(200).json(user.user_name);
      console.log("result", user.user_name);
    }
  } else {
    res.status(405).json({ message: "We only support POST" });
  }
};
