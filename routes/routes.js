const deviceReport = require('../app/controllers/deviceReport');
module.exports = function(app) {
	app.get("/", (req, res) => {
		res.json({message: "Welcome to device health report!"});
	});

	// device report apis
	app.route("/devices-reports")
	    .get(deviceReport.getDeviceReports)
	    .post(deviceReport.getDeviceReports);
};
	