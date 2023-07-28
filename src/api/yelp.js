import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer stjQ8V0fkrQVIq6Z60SoY3yD5ZYMJ_gw3_7ryDeKnUNxpW2mHCLA84WQDbivbGlOYKD7PhTfRxjnbRxQ-LtZhyPgoJDuPRgZNJ0dXIserDK1wpqQFmTUKe_5Er-_ZHYx'
    }
})


// 