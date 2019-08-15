import unsplash from "../apis/unsplash";

export const fetchImages = term => async dispatch => {
  const response = await unsplash.get("/search/photos", {
    params: term
  });
  dispatch({
    type: "FETCH_IMAGES",
    payload: response.data.results
  });
};
