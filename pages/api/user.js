import poll from "../../lib/db";

export default async (req, res) => {
  //   try {
  //     //select users table data from chatDB database
  //     const result = await poll.query(" SELECT * FROM users");
  //     const users = result.rows;

  //     res.status(200).json(users);
  //   } catch (err) {
  //     console.error(err.message);
  //     res.status(500).json({ message: err.message });
  //   }

  if (req.method === "POST") {
    const { username, lastname, email, password } = req.body;
    // console.log("req.body", req.body);
    const result = await poll.query(
      "INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING *",
      [username, lastname, email, password]
    );
    res
      .status(200)
      .json(result.rows[0]);

     console.log("result", result.rows[0]);
  } 
  
  
};
