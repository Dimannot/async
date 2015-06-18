var async = require('async');

var check = function(req, callback) {

  //во многих примерах описано работа с массивом функций, но в документации описан объект как ниже (Удобен он тем что бы отдавать нужный результат каких то определенных функций)
  async.series({
    //используем для условий
    funct1: function(callback) {
      //Если первое условие будет true, то выполнение series прервется будет выдан ответ в callback series
      if (req.mess.length > 100) {
        callback(true, {
          error: "max length"
        });
      } else
        callback();
    },
    funct2: function(callback) {
      /*callback(false, {
        data: "asd"
      });*/
    },
    funct3: function(callback) {
      callback(false, {
        data: "asd2"
      });
    }
  }, function(err, res) {
    callback(err, res);
  });
};




var data = {
  mess: "Тестовое сообщение"
};
check(data, function(err, res) {
  console.log("error", err);
  console.log("res", res);
});
