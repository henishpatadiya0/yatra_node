const axios = require("axios");

exports.menuGet = async (req, res) => {
  try {
    const response = await axios
      .get(`${process.env.BASE_URL}/api/menus?populate=*`)
      .catch(function (error) {
        return res.json(error.response.data.error);
      });

    return res.status(200).json({ data: response.data });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Server error !" });
  }
};

exports.menuAdd = async (req, res) => {
  try {
    if (!req.body.name || !req.body.link) {
      return res
        .status(404)
        .json({ message: "You must fill all required details !" });
    }
    const response = await axios
      .post(
        `${process.env.BASE_URL}/api/menus`,
        {
          data: req.body,
        },
        {
          headers: { Authorization: `Bearer ${process.env.API_TOKEN}` },
        }
      )
      .catch(function (error) {
        return res.json(error.response.data.error);
      });
    return res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
    return res.json({ message: "Server error !" });
  }
};

exports.menuDelete = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios
      .delete(`${process.env.BASE_URL}/api/menus/${id}`, {
        headers: { Authorization: `Bearer ${process.env.API_TOKEN}` },
      })
      .catch(function (error) {
        return res.json(error.response.data.error);
      });
    return res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
    return res.json({ message: "Server error !" });
  }
};

exports.menuEdit = async (req, res) => {
  try {
    if (!req.body.name || !req.body.link) {
      return res
        .status(404)
        .json({ message: "You must fill all required details !" });
    }
    const { id } = req.params;
    const response = await axios
      .put(
        `${process.env.BASE_URL}/api/menus/${id}`,
        {
          data: req.body,
        },
        {
          headers: { Authorization: `Bearer ${process.env.API_TOKEN}` },
        }
      )
      .catch(function (error) {
        return res.json(error.response.data.error);
      });
    return res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
    return res.json({ message: "Server error !" });
  }
};
