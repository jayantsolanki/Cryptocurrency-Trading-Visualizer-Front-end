import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { RequestOptions } from '@angular/http';

@Component({
  selector: 'app-snapshot',
  templateUrl: './snapshot.component.html',
  styleUrls: ['./snapshot.component.css']
})
export class SnapshotComponent implements OnInit {
	submitted = true;
	snapshot;
	exchange;
	filter;
	pairname;
	// gdPair;
	numRows = 100

	exchanges = ['Bitfinex', 'Gdax'];
	price;
	BitFPairs = ["BTCUSD","LTCUSD","LTCBTC","ETHUSD","ETHBTC","ETCBTC","ETCUSD","RRTUSD","RRTBTC","ZECUSD","ZECBTC","XMRUSD","XMRBTC","DSHUSD","DSHBTC","BTCEUR","BTCJPY","XRPUSD","XRPBTC","IOTUSD","IOTBTC","IOTETH","EOSUSD","EOSBTC","EOSETH","SANUSD","SANBTC","SANETH","OMGUSD","OMGBTC","OMGETH","BCHUSD","BCHBTC","BCHETH","NEOUSD","NEOBTC","NEOETH","ETPUSD","ETPBTC","ETPETH","QTMUSD","QTMBTC","QTMETH","AVTUSD","AVTBTC","AVTETH","EDOUSD","EDOBTC","EDOETH","BTGUSD","BTGBTC","DATUSD","DATBTC","DATETH","QSHUSD","QSHBTC","QSHETH","YYWUSD","YYWBTC","YYWETH","GNTUSD","GNTBTC","GNTETH","SNTUSD","SNTBTC","SNTETH","IOTEUR","BATUSD","BATBTC","BATETH","MNAUSD","MNABTC","MNAETH","FUNUSD","FUNBTC","FUNETH","ZRXUSD","ZRXBTC","ZRXETH","TNBUSD","TNBBTC","TNBETH","SPKUSD","SPKBTC","SPKETH","TRXUSD","TRXBTC","TRXETH","RCNUSD","RCNBTC","RCNETH","RLCUSD","RLCBTC","RLCETH","AIDUSD","AIDBTC","AIDETH","SNGUSD","SNGBTC","SNGETH","REPUSD","REPBTC","REPETH","ELFUSD","ELFBTC","ELFETH","BTCGBP","ETHEUR","ETHJPY","ETHGBP","NEOEUR","NEOJPY","NEOGBP","EOSEUR","EOSJPY","EOSGBP","IOTJPY","IOTGBP"];
	GdPairs = ["BCHBTC", "BCHUSD", "BTCEUR","BTCGBP", "BTCUSD", "ETHBTC", "ETHEUR", "ETHUSD", "LTCBTC", "LTCEUR", "LTCUSD", "BCHEUR"];
	Filters = ['Price', 'Exchange', 'Pair-Name'];
  constructor(private http: Http){
  }
  
  ngOnInit() {
    this.http.get('http://localhost:8888/noble-markets-order-book-snapshot').map(
         (response) => response.json()
      ).
      subscribe(
         (data) => {this.displaySnapshot(data);}
      )
  }
  onSubmit() { 
  	this.submitted = true; 
  	if(this.filter!=undefined)
	  	{
		  	if(this.exchange!=false && this.exchange!='' && this.exchange!=undefined){// for selecting the exchange
			  	this.http.get('http://localhost:8888/noble-markets-order-book-snapshot?numRows='+this.numRows+'&exchange='+this.exchange).map(
			         (response) => response.json()
			      ).
			      subscribe(
			         (data) => {this.displaySnapshot(data);}
			      )
		  	}
		  	else if(this.price!=false && this.price!='' && this.price!=undefined){//query for price
		  		if(!isNaN(parseFloat(this.price)) && isFinite(this.price))//checking for price validation, should be number
				  	this.http.get('http://localhost:8888/noble-markets-order-book-snapshot?numRows='+this.numRows+'&price_greater_than='+this.price).map(
				         (response) => response.json()
				      ).
				      subscribe(
				         (data) => {this.displaySnapshot(data);}
				      )
				else{
			      	alert("Please enter proper number for the price")
			      	this.submitted = false; 
				}
		  	}
		  	else if(this.pairname!=false && this.pairname!='' && this.pairname!=undefined){//for selcting the pair
			  	this.http.get('http://localhost:8888/noble-markets-order-book-snapshot?numRows='+this.numRows+'&pair='+this.pairname).map(
			         (response) => response.json()
			      ).
			      subscribe(
			         (data) => {this.displaySnapshot(data);}
			      )
		  	}
		  	else
		  	{
		  		alert("Filed should not be empty")
		      	this.submitted = false; 
		  	}

	  }
	  else
	  	{
	  		alert("Please choose the filter")
	  		this.submitted = false; 
	  	}
  	
  }
  changeVal(val) {// this function is for resting unselected filter
  	if (val == 'Exchange'){
  		this.pairname = false
  		this.price =  false
  	}
  	if (val == 'Price'){
		this.exchange = false
  		this.pairname =  false
  		this.price =  undefined
  	}
  	if (val == 'Pair-Name'){
		this.exchange = false
  		this.price =  false
  	}
  }
  displaySnapshot(data) {this.snapshot =  data; console.log(this.snapshot[0]);}
  // console.log(snapshot);
}