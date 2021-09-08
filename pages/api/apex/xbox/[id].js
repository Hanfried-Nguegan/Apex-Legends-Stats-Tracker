import axios from "axios";

export default async function handler(req, res) {
  const { id } = req.query;

  const apiUrl =
    "https://public-api.tracker.gg/v2/apex/standard/profile/xbl/" + id;

  try {
    const data = await axios.get(apiUrl, {
      headers: {
        "TRN-Api-Key": process.env.APEX_TRN_API_KEY,
        Accept: "application/json",
        "Accept-Encoding": "gzip",
      },
    });
    // console.log(data.data["data"])
    const userData = JSON.parse(JSON.stringify(data.data["data"]));
    res.status(200).json(userData);
  } catch (e) {
    console.log(e.message);
    res.status(400).end();
  }
}
