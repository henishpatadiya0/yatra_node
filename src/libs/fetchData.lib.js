const axios = require("axios");

let result = {};

exports.getStrapiMenu = () => {
  return new Promise(async (resolve) => {
    try {
      const response = await axios
        .get(
          `${process.env.BASE_URL}/api/menus?populate=*&pagination[limit]=100`
        )
        .catch(function (error) {
          return res.json(error.response.data.error);
        });
      result["menus"] = response.data.data;
      // console.log(result["menus"]);
      resolve({ status: true, data: result["menus"] });
    } catch (error) {
      resolve({
        status: false,
        data: typeof error === "string" ? error : error.message,
      });
    }
  });
};

exports.getStrapiVisaCard = () => {
  return new Promise(async (resolve) => {
    try {
      const response = await axios
        .get(
          `${process.env.BASE_URL}/api/visas?populate=*&pagination[limit]=100`
        )
        .catch(function (error) {
          return res.json(error.response.data.error);
        });
      result["visaCard"] = response.data.data;
      // console.log(result["visaCard"]);
      resolve({ status: true, data: result["visaCard"] });
    } catch (error) {
      resolve({
        status: false,
        data: typeof error === "string" ? error : error.message,
      });
    }
  });
};

exports.getStrapiImages = () => {
  return new Promise(async (resolve) => {
    try {
      const response = await axios
        .get(
          `${process.env.BASE_URL}/api/images?populate=*&pagination[limit]=100`
        )
        .catch(function (error) {
          return res.json(error.response.data.error);
        });
      result["images"] = response.data.data;
      // console.log(result["images"]);
      resolve({ status: true, data: result["images"] });
    } catch (error) {
      resolve({
        status: false,
        data: typeof error === "string" ? error : error.message,
      });
    }
  });
};

exports.getStrapiArticles = () => {
  return new Promise(async (resolve) => {
    try {
      const response = await axios
        .get(
          `${process.env.BASE_URL}/api/articles?populate=*&pagination[limit]=100`
        )
        .catch(function (error) {
          return res.json(error.response.data.error);
        });
      result["articles"] = response.data.data;
      // console.log(result["articles"]);
      resolve({ status: true, data: result["articles"] });
    } catch (error) {
      resolve({
        status: false,
        data: typeof error === "string" ? error : error.message,
      });
    }
  });
};

exports.getstrapiLinks = () => {
  return new Promise(async (resolve) => {
    try {
      const response = await axios
        .get(
          `${process.env.BASE_URL}/api/links?populate=*&pagination[limit]=100`
        )
        .catch(function (error) {
          return res.json(error.response.data.error);
        });
      result["links"] = response.data.data;
      // console.log(result["links"]);
      resolve({ status: true, data: result["links"] });
    } catch (error) {
      resolve({
        status: false,
        data: typeof error === "string" ? error : error.message,
      });
    }
  });
};

exports.getstrapiForms = () => {
  return new Promise(async (resolve) => {
    try {
      const response = await axios
        .get(
          `${process.env.BASE_URL}/api/forms?populate=*&pagination[limit]=100`
        )
        .catch(function (error) {
          return res.json(error.response.data.error);
        });
      result["forms"] = response.data.data;
      // console.log(result["forms"]);
      resolve({ status: true, data: result["forms"] });
    } catch (error) {
      resolve({
        status: false,
        data: typeof error === "string" ? error : error.message,
      });
    }
  });
};

exports.getAllStrapiData = () => {
  return new Promise(async (resolve) => {
    try {
      await this.getStrapiMenu();
      await this.getStrapiVisaCard();
      await this.getStrapiImages();
      await this.getStrapiArticles();
      await this.getstrapiLinks();
      await this.getstrapiForms();
      resolve({ status: true, data: result });
    } catch (error) {
      resolve({
        status: false,
        data: typeof error === "string" ? error : error.message,
      });
    }
  });
};
