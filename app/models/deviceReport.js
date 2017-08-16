const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//bucket schema definition
let DeviceReportSchema = new Schema(
	{
		_id: { type: String, required: true },
		id: { type: String },
		type: { type: String },
		status: { type: String },
		timestamp: { type: Date },
		createdAt: { type: Date, default: Date.now },
		updatedAt: { type: Date, default: Date.now }
	}, 
	{ 
		versionKey: false
	}
);

// Sets the createdAt parameter equal to the current time
DeviceReportSchema.pre('save', next => {
	let now = new Date();
	if(!this.createdAt) {
		this.createdAt = now;
	}
	if(!this.updatedAt) {
		this.updatedAt = now;
	}
	next();
});

module.exports = mongoose.model('deviceHealth', DeviceReportSchema);