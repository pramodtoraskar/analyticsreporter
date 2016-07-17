
var config = {
	    username:     "mo.integration:Red Hat",
	    secret:       "704564df748366c28baa0591cd4f5f96",
	    reportSuite:  "redhatglobal",
	    endpoint:     "api.omniture.com",
	    center:       "sanJose" 
	};

// Get all available metrics using the Client object
var Client = require('nomniture').Client,
    c = new Client(config.username, 
    		       config.secret,
    		       config.center),
    reportData = { "rsid_list": [config.reportSuite] }

c.request('ReportSuite.GetAvailableMetrics', reportData, function(err, response){
  if(err){ throw new Error(err.message); }
  console.log(response);
});

// Use the Report object to get a pageView Overtime report
var Report = require('nomniture').Report

var option = {
      waitTime: 10, // optionally set the wait time between polling API
      log: true // default is false
    }

var reportData = {
      reportDescription: {
      reportSuiteID: config.reportSuite,
      dateFrom: "2016-06-20",
      dateTo: "2016-06-20",
      metrics: [{ id: "pageviews" }],
      validate: "true"
    }
  };

var r = new Report(username, sharedSecret, 'sanJose', options) // lets set our poll time to 10 seconds

r.request("Report.QueueOvertime", reportData, function(err, response){
  if(err){ throw new Error(err.message); }
  console.log(response);
});