import { Component, OnInit } from '@angular/core';
// import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-realtime-update',
  templateUrl: './realtime-update.component.html',
  styleUrls: ['./realtime-update.component.css'],
  providers: []
})
export class RealtimeUpdateComponent implements OnInit {

	loggedData =[];

  constructor() {
		
	}


  ngOnInit() {

			// i tested with the websokcet services, but the problem in that was I was unable to json parse the incoming messages, all packets werestrings, parsing resulted in error, so i went to vanilla javascript
			var ws = new WebSocket('ws://localhost:8888/noble-markets-realtime-order-book');
        
			ws.onopen = function()
			{
			  console.log("Socket connected");
			};

			ws.onmessage = function (evt) 
			{ 
			  this.loggedData = JSON.parse(evt.data);
			  if(this.loggedData.length==1){
			  	for(var i = 0; i < this.loggedData.length; i++) {
				    var obj = this.loggedData[i];
				    try{
				        var table = document.getElementById("livedata");
					    var row = table.insertRow(1);
					    var cell1 = row.insertCell(0);
					    var cell2 = row.insertCell(1);
					    var cell3 = row.insertCell(2);
					    var cell4 = row.insertCell(3);
					    var cell5 = row.insertCell(4)
					    cell1.innerHTML = obj.transactionType;
					    cell2.innerHTML = obj.exchange;
					    cell3.innerHTML = obj.price;
					    cell4.innerHTML = obj.count;
					    cell5.innerHTML = obj.pairname;
					    table.deleteRow(100); //hack to prevent table from getting too long
				    }
				    catch(err){
				    	console.log("Benign error")
				    }
  

				}
			  }
			};

			ws.onclose = function()
			{ 

			  console.log("Socket disconnected");
			};

  }


}
