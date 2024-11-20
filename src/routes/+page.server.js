import { BACKEND_API } from "$env/static/private";
import axios from "axios";
import { getMarkdownFiles } from "../lib/utils/getMarkdownfiles.js";

export const load = async ({ params }) => {
    console.log(BACKEND_API)
    const purpose = await getMarkdownFiles("https://files.yajatvishwakarma.com/purpose.md")
    const whatsnew = await getMarkdownFiles("https://files.yajatvishwakarma.com/whatsnew.md")
    return {
        purpose,
        whatsnew
    }
  };