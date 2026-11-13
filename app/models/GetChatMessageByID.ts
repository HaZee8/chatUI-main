export interface GetChatMessageById {
    chatid: string,
    ListMessage: ChatMessage[],
}

export interface ChatMessage {
    role: 'user' | 'assistant'
    content: string
}