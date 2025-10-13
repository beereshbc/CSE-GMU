import { useState, useRef, useEffect } from "react";
import { GoogleGenAI } from "@google/genai";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Loader2, Bot, User } from "lucide-react";
import { assets } from "../assets/assets";

const FalconAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm FalconAI. How can I help you today?",
      sender: "bot",
      formatted: true,
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const apiKey = "AIzaSyDGpGxX5k80tfPXzGvvXXV0gaOqRi0Htpw";
  const ai = new GoogleGenAI({ apiKey });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const formatResponse = (response) => {
    // Format bold text
    const responseArray = response.split("**");
    let newResponse = "";

    for (let i = 0; i < responseArray.length; i++) {
      newResponse +=
        i === 0 || i % 2 !== 1
          ? responseArray[i]
          : `<strong>${responseArray[i]}</strong>`;
    }

    // Replace * with line breaks and handle lists
    const newResponse2 = newResponse
      .split("\n")
      .map((line) => {
        if (line.trim().startsWith("*")) {
          return `• ${line.trim().substring(1)}`;
        }
        return line;
      })
      .join("<br>");

    return newResponse2;
  };

  const typeMessage = async (text, messageId) => {
    const words = text.split(" ");
    let currentText = "";

    for (let i = 0; i < words.length; i++) {
      currentText += words[i] + " ";
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === messageId
            ? { ...msg, text: currentText, formatted: true }
            : msg
        )
      );
      await new Promise((resolve) => setTimeout(resolve, 30));
    }
  };

  const getAIResponse = async (userInput) => {
    try {
      setIsLoading(true);
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `${userInput} and  your system instruction is You are an AI representative for the Department of Computer Science and Engineering 
at an institution affiliated with G M University, Davanagere.

Your role is to give detailed, accurate, and friendly information about the department 
to students, faculty, and visitors. Always sound knowledgeable and professional.

About the Department:
- Established in 2023 under G M University, Davanagere.
- Offers a 4-year B.Tech program in Computer Science and Engineering with an intake of 120 students.
- Focuses on developing skills in hardware, software, and soft skills for professional success.
- Equipped with advanced labs: Computing, Networking, Microprocessor, and more.
- Has a CSE Forum named "Falcon" that conducts technical and non-technical events.
- Actively promotes research, workshops, and collaboration with industries.

Vision:
"To build excellent Technocrats in Computer Science and Engineering by striving for excellence in the IT industry to meet the challenges of society."

Mission:
1. Train students using effective teaching-learning methods.
2. Collaborate with industry and professional bodies.
3. Develop ethical engineers with a creative research mindset.

Program Educational Objectives (PEOs), PSOs, and POs are all designed to ensure 
students excel in academics, career, and personal development.

When users ask about the department, respond with structured, informative, and friendly answers.`,
      });
      return response.text;
    } catch (error) {
      console.error("Error calling AI:", error);
      return "Sorry, I encountered an error. Please try again.";
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = async () => {
    if (inputValue.trim() === "") return;

    // Add user message
    const newUserMessage = {
      id: Date.now(),
      text: inputValue,
      sender: "user",
      formatted: false,
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue("");

    // Get AI response
    const aiResponse = await getAIResponse(inputValue);
    const formattedResponse = formatResponse(aiResponse);

    const botResponse = {
      id: Date.now() + 1,
      text: "", // Start with empty text for typing effect
      formattedText: formattedResponse,
      sender: "bot",
      formatted: true,
    };

    setMessages((prev) => [...prev, botResponse]);

    // Start typing effect
    typeMessage(formattedResponse, botResponse.id);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const renderMessage = (message) => {
    if (message.formatted && message.sender === "bot") {
      return (
        <div
          className="text-sm prose prose-sm max-w-none"
          dangerouslySetInnerHTML={{
            __html: message.text || message.formattedText,
          }}
        />
      );
    }

    return <p className="text-sm">{message.text}</p>;
  };

  return (
    <>
      {/* Backdrop Blur Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-md z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Chat Bot Container - Left Side */}
      <div className="fixed bottom-6 left-6 z-50">
        <AnimatePresence>
          {/* Main Chat Box */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl shadow-2xl w-96 h-[600px] mb-4 border border-gray-200/80 flex flex-col backdrop-blur-lg bg-white/95"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 p-6 rounded-t-3xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg"
                    >
                      <Bot className="w-6 h-6 text-blue-600" />
                    </motion.div>
                    <div>
                      <h3 className="text-white font-bold text-lg">FalconAI</h3>
                      <p className="text-blue-100 text-sm">Powered by Gemini</p>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:text-gray-200 transition-colors p-2 rounded-full hover:bg-white/10"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              {/* Messages Container */}
              <div className="flex-1 p-6 overflow-y-auto bg-gradient-to-b from-gray-50 to-blue-50/30">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${
                        message.sender === "user"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div className="flex items-end space-x-2 max-w-[85%]">
                        {message.sender === "bot" && (
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mb-1">
                            <Bot className="w-4 h-4 text-white" />
                          </div>
                        )}
                        <div
                          className={`px-4 py-3 rounded-2xl ${
                            message.sender === "user"
                              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-br-none shadow-lg"
                              : "bg-white text-gray-800 rounded-bl-none shadow-md border border-gray-100"
                          }`}
                        >
                          {renderMessage(message)}
                        </div>
                        {message.sender === "user" && (
                          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mb-1">
                            <User className="w-4 h-4 text-white" />
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}

                  {/* Loading Indicator */}
                  {isLoading && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="flex items-end space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-white text-gray-800 rounded-2xl rounded-bl-none px-4 py-3 shadow-md border border-gray-100">
                          <div className="flex space-x-2">
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ repeat: Infinity, duration: 0.6 }}
                              className="w-2 h-2 bg-blue-500 rounded-full"
                            />
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{
                                repeat: Infinity,
                                duration: 0.6,
                                delay: 0.2,
                              }}
                              className="w-2 h-2 bg-purple-500 rounded-full"
                            />
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{
                                repeat: Infinity,
                                duration: 0.6,
                                delay: 0.4,
                              }}
                              className="w-2 h-2 bg-indigo-500 rounded-full"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>
              </div>

              {/* Input Area */}
              <div className="p-6 border-t border-gray-200/50 bg-white/80 backdrop-blur-sm rounded-b-3xl">
                <div className="flex space-x-3">
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything..."
                    disabled={isLoading}
                    className="flex-1 border border-gray-300/80 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent bg-white/50 backdrop-blur-sm disabled:opacity-50 transition-all duration-200"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSend}
                    disabled={!inputValue.trim() || isLoading}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl w-12 h-12 flex items-center justify-center hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                  >
                    {isLoading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <Send className="w-5 h-5" />
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Chat Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16  rounded-2xl shadow-2xl flex items-center justify-center hover:shadow-3xl transition-all duration-300 relative group"
        >
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? (
              <X className="w-7 h-7 text-white" />
            ) : (
              <img
                src={assets.falcon_logo}
                alt=""
                className="rounded-full"
                srcset=""
              />
            )}
          </motion.div>

          {/* Pulse Animation */}
          {!isOpen && (
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-blue-400/50"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
        </motion.button>
      </div>
    </>
  );
};

export default FalconAI;
