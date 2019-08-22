let orm = require("../config/orm.js");


let burger = {
	selectAll: function(cb) {
		orm.selectAll("burgers", function(res) {
			cb(res);
		});
	},
	insertOne: function(burgerName, cb) {
		orm.insertOne("burgers", "burger_name", burgerName, function(res) {
			cb(res);
		});
	},
	updateOne: function(burgerId, cb) {
		orm.updateOne("burgers", "consumed", 1, "id", burgerId, function(res) {
			cb(res);
		});
	}
};

// Export
module.exports = burger;