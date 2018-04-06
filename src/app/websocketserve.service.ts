import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { WebsocketService } from './websocket.service';

const CHAT_URL = 'ws://localhost:8888/noble-markets-realtime-order-book';

export interface Message {
	author: string,
	message: string
}

@Injectable()
export class WebsocketserveService {
	public messages: Subject<Message>;

	constructor(wsService: WebsocketService) {
		this.messages = <Subject<Message>>wsService
			.connect(CHAT_URL)
			.map((response: MessageEvent): Message => {
				let data = response.data;
				return data
			});
	}
}