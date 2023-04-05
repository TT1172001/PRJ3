import axios from "axios";
export const getDataAPI = async (url, token) => {
  return axios({
    method: "get",
    url: url,
    baseURL: "/api/",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization: token,
    },
  });
};
export const postDataAPI = async (url, token, post) => {
  return axios({
    method: "post",
    url: url,
    baseURL: "/api/",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization: token,
    },
    data: post,
  });
};
export const putDataAPI = async (url, post, token) => {
  return axios({
    method: "put",
    url: url,
    baseURL: "/api/",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization: token,
    },
    data: post,
  });
};

export const patchDataAPI = async (url, post, token) => {
  return axios({
    method: "patch",
    url: url,
    baseURL: "/api/",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization: token,
    },
  });
};
export const deleteDataAPI = async (url, token) => {
  return axios({
    method: "delete",
    url: url,
    baseURL: "/api/",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization: token,
    },
  });
};
