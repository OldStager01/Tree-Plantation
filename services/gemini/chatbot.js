import chatbotModel from "../../model/gemini/chatbotModel.js";

const startChatInstance = () => {
  return chatbotModel.startChat({ history: [] });
};

const sendMessage = async (chatInstance, prompt) => {
  const response = await chatInstance.sendMessage(prompt);
  return response.response.text();
};

export { startChatInstance, sendMessage };
