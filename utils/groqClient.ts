import Groq from "groq-sdk";

const apiKey = process.env.GROQ_API_KEY;

const client = new Groq({
    apiKey: apiKey || ""
});

export default client;
