import axios from "axios";
import { BACKEND_API } from "$env/static/private";

import { joinUrls } from "../../../lib/utils/joinUrl.js";
import { error } from "@sveltejs/kit";
export const load = async ({ params }) => {
  console.log(BACKEND_API)
  const { data, status } = await axios
    .get(joinUrls(BACKEND_API, `/get-type-blog/experiences`))
    .catch((_) => {
      error(404, {
        message: "not found",
      });
    });
  if (status === 200) {
    let { blogs } = data;
    return blogs;
  }
};  
