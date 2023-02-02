const fetchDataLib = require("../libs/fetchData.lib");

exports.getAllData = async (req, res) => {
  try {
    const result = await fetchDataLib.getAllStrapiData();

    // return res.status(200).json(result);
    return res.render("index", { data: result.data });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Server error !" });
  }
};
