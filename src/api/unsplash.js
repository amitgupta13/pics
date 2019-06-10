import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID e7ccb549e8ab4acf981b3ca1a39368cbd63eaa9e5f7310cd121f37a6c9ba6350"
  }
});
