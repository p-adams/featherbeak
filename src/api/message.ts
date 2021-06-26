import type { Message, Sender } from "../data-types/message";
export let currentUser: Sender = {
  id: "0001",
  username: "F404",
};

let currentUser2: Sender = {
  id: "0002",
  username: "QWERTY43",
};

export async function receive(id: string | number): Promise<Message> {
  const message = await fetch(`/api/receive/${id}`)
    .then((res) => res.json())
    .catch((err) => console.error(err));
  return message;
}

export async function dispatch(
  message: Partial<Message>
): Promise<string | number> {
  const { id } = await fetch("/api/dispatch", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(message),
  })
    .then((res) => res.json())
    .catch((err) => console.error(err.message));
  return id;
}

export async function loadChat(): Promise<Message[]> {
  const messages = await fetch("/api")
    .then((res) => res.json())
    .catch((err) => console.error(err.message));
  return messages;
}
