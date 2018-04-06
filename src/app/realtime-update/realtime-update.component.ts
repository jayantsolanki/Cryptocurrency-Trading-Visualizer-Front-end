import { WebsocketService } from '../websocket.service';
import { WebsocketserveService } from '../websocketserve.service';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-realtime-update',
  templateUrl: './realtime-update.component.html',
  styleUrls: ['./realtime-update.component.css'],
  providers: [ WebsocketService, WebsocketserveService ]
})
export class RealtimeUpdateComponent implements OnInit {

	loggedData =[];
	 displayedColumns = ['transactionType', 'price', 'count', 'exchange', 'pairname'];
  // dataSource = new MatTableDataSource([{"transactionType": "ask", "price": 7.206e-05, "count": 1, "exchange": "Bitfinex", "pairname": "XRPBTC"}]);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor(private websocServe: WebsocketserveService) {
		
	}


  ngOnInit() {
  		
  	console.log(this.loggedData);
  	this.dataSource = new MatTableDataSource();
  	// this.myDataSource = new MatTableDataSource();
//   		this.websocServe.messages.subscribe(msg => {	
//   		// this.dataSource = new MatTableDataSource(msg[0])		
// 			// this.loggedData.push(msg[0]);
// // this.refresh()	
// 		// this.data = eval(msg)
//       // console.log("Response from websocket: " +msg);
// 		});

// 		// $(document).ready(function () {
			var ws = new WebSocket('ws://localhost:8888/noble-markets-realtime-order-book');
        
			ws.onopen = function()
			{
			  // Web Socket is connected, send data using send()
			 // ws.send("Message to send");
			  // alert("Message is sent...");
			};

			ws.onmessage = function (evt) 
			{ 
			  this.loggedData = JSON.parse(evt.data);
			  // console.log(received_msg[0]);
			  if(this.loggedData.length==1){
			  	for(var i = 0; i < this.loggedData.length; i++) {
				    var obj = this.loggedData[i];
				        var table = document.getElementById("livedata");
					    var row = table.insertRow(1);
					    var cell1 = row.insertCell(0);
					    var cell2 = row.insertCell(1);
					    var cell3 = row.insertCell(2);
					    var cell4 = row.insertCell(3);
					    var cell5 = row.insertCell(4)
					    cell1.innerHTML = obj.transactionType;
					    cell2.innerHTML = obj.price;
					    cell3.innerHTML = obj.count;
					    cell4.innerHTML = obj.exchange;
					    cell5.innerHTML = obj.pairname;
					   
				    // console.log(obj);
				}
			  	// console.log(JSON.stringify(received_msg))
			  }
			  // console.log(received_msg.length)
			  // 
			  // this.refresh()

			};

			ws.onclose = function()
			{ 
			  // websocket is closed.
			  // alert("Connection is closed..."); 
			};

			// window.onbeforeunload = function(event) {
			//   socket.close();
			// };
          // $('#demo').load(() => {
          //     // Your function Body
          //     console.log("working");
          //     var map = new AMap.Map("map", 
          //      { resizeEnable: true, 
          //         center: [latitude, longitude], 
          //         zoom: 8
          //       }); 
          // })
       // }
       setTimeout(function () {
					    var table = document.getElementById("livedata");
					    var rowCount = table.rows.length;

					    table.deleteRow(rowCount - 1000);    
						}, 1000)
  }
  refresh(data) {
  		// this.dataSource = new MatTableDataSource(this.loggedData);
  		console.log(data);

  }



}

// WebSocketTest() = function{
//                // Let us open a web socket
               
            
            
//          }