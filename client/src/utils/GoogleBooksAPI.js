import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=search+terms";
const APIKEY = "AIzaSyBlGFX-s2RcnODfNYpv9hE-bAAPsexNTpU";

export default {
    search: function(query) {
        let q = (query).split(" ").join("+");
        return axios.get(BASEURL + q + APIKEY)
    }
};