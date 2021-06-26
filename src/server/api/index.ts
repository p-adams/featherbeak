import type { Message, Sender } from "../../data-types/message";
export let currentUser: Sender = {
  id: "0001",
  username: "F404",
};

let currentUser2: Sender = {
  id: "0002",
  username: "QWERTY43",
};

export let messages: Array<Message> = [
  {
    id: "ca58c682-c5d3-11eb-8cb9-000000000000",
    text: "Hello",
    sender: currentUser,
  },
  {
    id: "d897a1e4-c5d3-11eb-84a6-9078413a1e98",
    text: "Hey, how's it going?",
    sender: currentUser2,
  },
  {
    id: "e8f468f6-c5d3-11eb-84a6-9078413a1e98",
    text: "Oh, pretty good. How about you?",
    sender: currentUser,
  },
];

function getMessagesFromApi(): Promise<Message[]> {
  return new Promise((resolve) => {
    setTimeout(resolve, 200, messages);
  });
}

export function getMessageById(id: string): Promise<Message> {
  return new Promise((resolve) => {
    setTimeout(
      resolve,
      200,
      messages.find((message) => message.id === id)
    );
  });
}

export function newMessage(message: Message) {
  messages.push(message);
}

export async function loadChat() {
  const messages = await getMessagesFromApi();
  return messages;
}
