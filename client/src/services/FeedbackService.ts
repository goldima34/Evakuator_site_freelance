import $api from "../services/index";

export const getAllFeedbacks = async () => {
    const { data } = await $api.get("/feedback/get");
    return data;
};
