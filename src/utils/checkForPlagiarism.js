import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = import.meta.env.VITE_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
});

const generationConfig = {
    temperature: 2,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
};

export default async function checkForPlagiarism(text) {
    const chatSession = model.startChat({
        generationConfig,
        // safetySettings: Adjust safety settings
        // See https://ai.google.dev/gemini-api/docs/safety-settings
        history: [
            {
                role: "user",
                parts: [
                    { text: "You are an AI-powered plagiarism detector. Analyze the following text for potential plagiarism. Your response must be in a structured JSON format with the following properties:\nplagiarismScore: A number between 0 and 100, representing the percentage of the text that is plagiarized.\nhighlightedText: An array of strings, where each string is a portion of the text that has been flagged as plagiarized.\nPlease ensure that the results are consistent so that if the same text is analyzed in the future, the plagiarism score and flagged sections remain identical. Moreover make sure that you send back data in plain form which means that you dont have to formate the data in any way, The response should be a valid JSON object.\nHere’s the text to analyze: {{Cristiano Ronaldo dos Santos Aveiro is a Portuguese professional footballer who plays as a forward for and captains both Saudi Pro League club Al Nassr and the Portugal national team. Widely regarded as one of the greatest players of all time, Ronaldo has won five Ballon d'Or awards, a record three UEFA Men's Player of the Year Awards, and four European Golden Shoes, the most by a European player.}}." },
                ],
            },
            {
                role: "model",
                parts: [
                    { text: "```json\n{\"plagiarismScore\": 95, \"highlightedText\": [\"Cristiano Ronaldo dos Santos Aveiro is a Portuguese professional footballer who plays as a forward for and captains both Saudi Pro League club Al Nassr and the Portugal national team.\", \"Widely regarded as one of the greatest players of all time, Ronaldo has won five Ballon d'Or awards, and four European Golden Shoes, the most by a European player.\"]}\n\n\n```" },
                ],
            },
        ]
    })


    const result = await chatSession.sendMessage(`You are an AI-powered plagiarism detector. Analyze the following text for potential plagiarism. Your response must be in a structured JSON format with the following properties:plagiarismScore: A number between 0 and 100, representing the percentage of the text that is plagiarized.highlightedText: An array of strings, where each string is a portion of the text that has been flagged as plagiarized.Please ensure that the results are consistent so that if the same text is analyzed in the future, the plagiarism score and flagged sections remain identical. Moreover make sure that you send back data in plain form which means that you dont have to formate the data in any way, The response should be a valid JSON object.Here’s the text to analyze:${text}`);
    const jsonResponse = JSON.parse(result.response.text());

    // Extract the plagiarism score and highlighted text
    const plagiarismScore = jsonResponse.plagiarismScore;
    const highlightedText = jsonResponse.highlightedText;

    console.log(result.response.text());
    return{
        plagiarismScore,
        highlightedText
    }
}


