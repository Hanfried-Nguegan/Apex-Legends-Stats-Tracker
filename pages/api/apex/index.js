import axios from "axios"

export default async function handler(req, res) {
    // Get this data from frontend .. Checkout /components/Banner.js
    const { platform, platformUserIdentifier } = req.body

    const apiUrl =
        "https://public-api.tracker.gg/v2/apex/standard/profile/" +
        platform +
        "/" +
        platformUserIdentifier

    try {
        const data = await axios.get(apiUrl, {
            headers: { "TRN-Api-Key": process.env.APEX_TRN_API_KEY },
        });
        // Print first the data to see what to capture
        console.log(data.data["data"])
        // Capture the end data content ie .. Find the property to return as response
        // ex: data.data["profile"] if profile is found in the data log.
        const userData = JSON.parse(JSON.stringify(data.data["data"]))
        res.status(200).json(userData);
    } catch (e) {
        console.log(e.message)
        res.status(200).end()
    }
}
