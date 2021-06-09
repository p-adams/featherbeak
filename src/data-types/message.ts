export interface Sender {
  id: string;
  username: string;
}
interface Receiver {
  id: string;
  username;
}
export interface Message {
  id: string;
  timestamp?: Date;
  text: string;
  sender?: Sender;
  receiver?: Receiver;
  reactions?: Array<string | number>;
  read?: boolean;
}
