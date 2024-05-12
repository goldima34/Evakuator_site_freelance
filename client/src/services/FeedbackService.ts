import $api from "../services/index";

export const getAllFeedbacks = async () => {
    const { data } = await $api.get("/feedback/get");
    console.log(data)
    return data;
};
