var BM = BM || {};

(function(BM){

  var _bench = function(){
      this.suites = [];
      this.result = 0;
  };
  
  _bench.prototype = {
    
    start : function(){
      for (var i=0; i < this.suites.length; i++) {
        var result = 0;
        for (var j=0; j < this.suites[i].time; j++) {
          result += this.measure(this.suites[i].block);
        }
        this.suites[i].result = result;
        this.suites[i].measured = true;
        this.result += result; 
      }
      return this;
    },

    add : function(times, block){
      this.suites.push(this.createSuite(times,block));
      return this;
    },

    match : function(value, cond){
      var valueMatch = this.convertValueToMilleseconds(value);
      var totalResult = 0;
      for (var i=0; i < this.suites.length; i++) {
        totalResult += this.suites[i].result;
      }
      return eval(totalResult + ' ' + (cond ? cond : '==') + ' ' + valueMatch);
    },

    convertValueToMilleseconds : function(value){
      // '00:00:22'
      // '00:00:00:200'
      // '1500'
      var arrTime = [], result = 0;

      //o valor já pode vim em millesegundos
      if(value.indexOf(':') >= 0 ){
        arrTime = value.split(':');
        result = 0;

        //caso não tenha sido enviado millesegundos eu coloco 0
        if(arrTime.length < 4){
          arrTime.push(0);
        }

        result += Number(arrTime[0] * 60 * 60 * 1000);
        result += Number(arrTime[1] * 60 * 1000);
        result += Number(arrTime[2] * 1000);
        result += Number(arrTime[3]);

      } else {
        result = value;
      }
      return result;
    },

    measure : function(block){
      var start, end;
      start = (new Date()).getTime();
      block();
      end = (new Date()).getTime();
      return end - start;
    },

    createSuite : function(times, block){
      var newSuite = {
        time: times || 1,
        block: block || null,
        result: 0,
        measured: false
      };
      return newSuite;
    },

    clean : function(){
      this.suites = [];
      return this;
    }
    
  };
  
  BM.Bench = function(){
    return new _bench();
  }; 
  
}(BM));