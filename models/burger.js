var orm = require ("../config/orm"); 

// CALL THE ORM FUNCTIONS USING BURGER SPECIFIC INPUTS FOR ORM 
var burgers = {
    allBurgers: function(cb) {
        orm.all("burgers", function (res){ 
            cb(res); 
        }); 
    }, 

    updateBurgers: function (objColVals, condition, cb) { 
        orm.update("burgers", objColVals, condition, function (res) { 
            cb(res); 
        })
    }, 

    addBurgers: function (cols, vals, cb) {
        orm.add("burgers", cols, vals, function (res) {
            cb(res); 
        })
    }
}

// EXPORT 
module.exports = burgers; 
