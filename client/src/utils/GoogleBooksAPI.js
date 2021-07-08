import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=search+terms";


export default {
    search: function(query) {
        let q = (query).split(" ").join("+");
        const res = axios.get(BASEURL + q + '&filter=partial&callback=handleResults&maxResults=1');
        return res;
    }
};