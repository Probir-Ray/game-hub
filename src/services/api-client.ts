import axios from "axios";

export default axios.create({
    baseURL: `https://api.rawg.io/api`,
    params: {
        key: '543af4e7aecc4bb6ac3c282793fd8fdf'
    }
})