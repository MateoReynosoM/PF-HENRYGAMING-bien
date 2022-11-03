import Chatbot, {
    createChatBotMessage,
    createCustomMessage,
} from "react-chatbot-kit";
import CustomMessage from "./CustomMessage";
import { Link } from "react-router-dom";
import "./styles/chatbot.css";
const botName = "HenryBot";

const config = {
    initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
    botName: botName,
    customStyles: {
        botMessageBox: {
            backgroundColor: "lightgrey",
        },
        chatButton: {
            backgroundColor: "#000000",
        },
    },
    initialMessages: [
        createChatBotMessage(`Hi I'm ${botName}, how can I help you?`),
        createChatBotMessage("Please, choose one of the following options:"),
        createChatBotMessage(
            <div>
                <ul className="list">
                    <li>
                        <Link className="link" to="/faqs">
                            {" "}
                            How to purchase
                        </Link>
                    </li>
                    <br />
                    <li>
                        <Link className="link" to="/contact">
                            {" "}
                            Contact Us{" "}
                        </Link>
                    </li>
                    <br />
                    <li>
                        <Link className="link" to="/register">
                            Sign Up{" "}
                        </Link>
                    </li>
                </ul>
            </div>
        ),
        // createCustomMessage('Test', 'custom'),
    ],
    state: {
        gist: "",
        infoBox: "",
    },
    customComponents: {},
    customMessages: {
        custom: (props) => <CustomMessage {...props} />,
    },
    widgets: [],
};

export default config;
