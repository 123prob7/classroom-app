import { rootUrl } from "../../util/config";

const initialState = { url: "/" };

export default function reducer(state = initialState, action) {
  const { type } = action;

  switch (type) {
    case "create_root_url":
      return {
        ...state,
        url: rootUrl,
      };
    default:
      return state;
  }
}
