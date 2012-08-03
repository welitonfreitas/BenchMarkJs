## BenchMarkjs

Lib para metrificar tempo em código js.

TODO:
 - testes
 - profiller
 - eventos
 - result frame 

## Installation

`<script src="/benchMarkjs.js" type="text/javascript" charset="utf-8"></script>`

## Usage

```javascript
var bm = BM.Bench();
bm.add(1, function(){
	for(var i=0;i<=1000;i++){
		console.log(i + 'times')
	}
})
.start()
.result

bm.clear()

/*-----------------------------*/
bm.add(1, function(){
	for(var i=0;i<=1000;i++){
		console.log(i + 'times')
	}
})
.add(2, function(){
	//do something
})
.add(2, function(){
	// do something
})
.start()
.result

bm.clear()

/*-----------------------------*/
bm.add(1, function(){
	for(var i=0;i<=1000;i++){
		console.log(i + 'times')
	}
})
.add(2, function(){
	//do something
})
.add(2, function(){
	// do something
})
.start()
.math('00:00:05', '<=')


```
