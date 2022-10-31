import ChatBot from 'react-simple-chatbot';

<ChatBot
  steps={[
    {
      id: 'hello-world',
      message: 'Hello, Welcome to Henry Gaming!',
      end: true,
    },
    {
        id: '1',
        message: 'What is your name?',
        trigger: '2',
      },
      {
        id: '2',
        user: true,
        trigger: '3',
      },
      {
        id: '3',
        message: 'Hi {previousValue}, nice to meet you!',
        end: true,
      },
      {
        id: '1',
        message: 'how can I help you',
        trigger: '1,2,3',
      },
      {
        id: '2',
        options: [
          { value: 1, label: 'Number 1', trigger: '4' },
          { value: 2, label: 'Number 2', trigger: '3' },
          { value: 3, label: 'Number 3', trigger: '3' },
        ],
      },
      {
        id: '4',
        message: 'Wrong answer, try again.',
        trigger: '2',
      },
      {
        id: '4',
        message: 'Thank you very much for your inquiry!',
        end: true,
      },

]}


/>

export default ChatBot; 