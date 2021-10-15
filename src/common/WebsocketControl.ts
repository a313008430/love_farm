export class WebsocketControl {
    ws: WebSocket;

    constructor(url: string) {
        let ws = new WebSocket(url);
        ws.onopen = this.onOpen.bind(this);
        ws.onmessage = this.onMessage.bind(this);
        ws.onclose = this.onClose.bind(this);
        ws.onerror = this.onError.bind(this);
    }

    private onOpen() {}
    private onMessage() {}
    private onClose() {}
    private onError() {}
}
