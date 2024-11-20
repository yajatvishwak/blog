import { error } from "@sveltejs/kit";
import axios from "axios";

async function getMarkdownFiles(blogLink) {
    const { data : blogText } = await axios.get(blogLink).catch(() => {
        error(404, { message: "not found" });
    });
    return blogText
}

export {getMarkdownFiles};