import { rootUrl } from "../../util/config";

const initialState = { url: null };

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "create_root_url":
      return {
        ...state,
        url: rootUrl + payload,
      };
    default:
      return state;
  }
}
