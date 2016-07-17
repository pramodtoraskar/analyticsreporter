#!/bin/env node
//  OpenShift sample Node application

var express 	= require('express');
var fs      	= require('fs');
var _       	= require('lodash');
var csv 		= require('csv');

var anayticsdata = require('./module/default-model-data');
var redhat_anaytics_data = require('./module/redhat-model-data');
var custportal_anaytics_data = require('./module/custportal-model-data');
var opensource_anaytics_data = require('./module/opensource-model-data');
var enterprisersproject_anaytics_data = require('./module/enterprisersproject-model-data');
var developersredhat_anaytics_data = require('./module/developersredhat-model-data');
var partnersredhat_anaytics_data = require('./module/partnersredhat-model-data');


var connectredhat_anaytics_data = require('./module/connectredhat-model-data');
var jboss_anaytics_data = require('./module/jboss-model-data');
var openshift_anaytics_data = require('./module/openshift-model-data');
var trainingredhat_anaytics_data = require('./module/trainingredhat-model-data');

/**
 *  Define the sample application.
 */
var AnalyticsApp = function() {

    //  Scope.
    var self = this;


    /*  ================================================================  */
    /*  Helper functions.                                                 */
    /*  ================================================================  */

    /**
     *  Set up server IP address and port # using env variables/defaults.
     */
    self.setupVariables = function() {
        //  Set the environment variables we need.
        self.ipaddress = process.env.OPENSHIFT_NODEJS_IP;
        self.port      = process.env.OPENSHIFT_NODEJS_PORT || 8081;

        if (typeof self.ipaddress === "undefined") {
            //  Log errors on OpenShift but continue w/ 127.0.0.1 - this
            //  allows us to run/test the app locally.
            console.warn('No OPENSHIFT_NODEJS_IP var, using 127.0.0.1');
            self.ipaddress = "127.0.0.1";
        };
    };


    /**
     *  Populate the cache.
     */
    self.populateCache = function() {
        if (typeof self.zcache === "undefined") {
            self.zcache = { 'index.html': '' };
        }

        //  Local cache for static content.
        self.zcache['index.html'] = fs.readFileSync('./index.html');
    };


    /**
     *  Retrieve entry (content) from cache.
     *  @param {string} key  Key identifying content to retrieve from cache.
     */
    self.cache_get = function(key) { return self.zcache[key]; };


    /**
     *  terminator === the termination handler
     *  Terminate server on receipt of the specified signal.
     *  @param {string} sig  Signal to terminate on.
     */
    self.terminator = function(sig){
        if (typeof sig === "string") {
           console.log('%s: Received %s - terminating sample app ...',
                       Date(Date.now()), sig);
           process.exit(1);
        }
        console.log('%s: Node server stopped.', Date(Date.now()) );
    };


    /**
     *  Setup termination handlers (for exit and a list of signals).
     */
    self.setupTerminationHandlers = function(){
        //  Process on exit and signals.
        process.on('exit', function() { self.terminator(); });

        // Removed 'SIGPIPE' from the list - bugz 852598.
        ['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT',
         'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'
        ].forEach(function(element, index, array) {
            process.on(element, function() { self.terminator(element); });
        });
    };


    /*  ================================================================  */
    /*  App server functions (main app logic here).                       */
    /*  ================================================================  */

    /**
     *  Create the routing table entries + handlers for the application.
     */
    self.createRoutes = function() {
        self.routes = { };

        self.routes['/asciimo'] = function(req, res) {
        	
        	
        	// Get all available metrics using the Client object
        	var Client = require('nomniture').Client,
        	    c = new Client('mo.integration:Red Hat', 
        	    		       '704564df748366c28baa0591cd4f5f96',
        	    		       'sanJose'),
        	    reportData = { "rsid_list": ['redhatglobal'] }

        	c.request('ReportSuite.GetAvailableMetrics', reportData, function(err, response){
        	  if(err){ throw new Error(err.message); }
        	  console.log(response);
        	});
        	
            /*var link = "http://i.imgur.com/kmbjB.png";
            res.send("<html><body><img src='" + link + "'></body></html>");*/

            var Report = require('nomniture').Report,
                option = {
            	waitTime: 10, // optionally set the wait time between polling API
            	log: true // default is false
            	},
            	reportData = {
            	reportDescription: {
            		reportSuiteID: 'redhatglobal',
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
            
            
        };

        /* All participating domains */
        self.routes['/all/data/live/:dage/:name'] = function(req, res) {
        	// Disable caching for content files
            res.header("Cache-Control", "no-cache, no-store, must-revalidate");
            res.header("Pragma", "no-cache");
            res.header("Expires", 0);
            res.header("Content-Type", "application/json; charset=utf-8");
            
            var modelNameMapping = {
            		
            		'realtime': anayticsdata.visits_yesterday,
            		'realtime_7':anayticsdata.visits_7_days,
            		'realtime_30':anayticsdata.visits_30_days,
            		
            		'yesterday': anayticsdata.visits_yesterday_hourly,
            		'yesterday_7': anayticsdata.visits_7days_hourly,
            		'yesterday_30': anayticsdata.visits_30days_hourly,
            		
            		'devices': anayticsdata.devices_yesterday,
            		'devices_7': anayticsdata.devices_7_days,
            		'devices_30': anayticsdata.devices_30_days,
            		
            		'browsers': anayticsdata.browsers_yesterday,
            		'browsers_7': anayticsdata.browsers_7_days,
            		'browsers_30': anayticsdata.browsers_30_days,
            		
            		'ie': anayticsdata.ie_yesterday,
            		'ie_7': anayticsdata.ie_7_days,
            		'ie_30': anayticsdata.ie_30_days,
            		
            		'os': anayticsdata.os_yesterday,
            		'os_7': anayticsdata.os_7_days,
            		'os_30': anayticsdata.os_30_days,
            		
            		'windows': anayticsdata.windows,
            		
            		'top-pages-realtime': anayticsdata.top_pages_realtime,
            		'top-domains-7-days': anayticsdata.top_domains_7_days,
            		'top-domains-30-days': anayticsdata.top_domains_30_days,
            		
            		'top-downloads-yesterday': anayticsdata.top_downloads_yesterday,
            		'top-downloads_7': anayticsdata.top_downloads_7_days,
            		'top-downloads_30': anayticsdata.top_downloads_30_days,
            		
            		'top-countries-realtime': anayticsdata.top_countries_yesterday,
            		'top-countries-realtime_7': anayticsdata.top_countries_7_days,
            		'top-countries-realtime_30': anayticsdata.top_countries_30_days,
            		
            		'top-cities-realtime': anayticsdata.top_cities_yesterday,
            		'top-cities-realtime_7': anayticsdata.top_cities_7_days,
            		'top-cities-realtime_30': anayticsdata.top_cities_30_days,
            		
            		'top-referrer-realtime': anayticsdata.top_referrer_yesterday,
            		'top-referrer-realtime_7': anayticsdata.top_referrer_7_days,
            		'top-referrer-realtime_30': anayticsdata.top_referrer_30_days
            	}
            
        	var name = req.params.name;
            var dataage = req.params.dage;
            
            if (_.endsWith(name, ".json")) {
              name = name.substring(0, name.length-5);
            }
            
            var modelName = '';
            
            if (dataage == 0 ){
            	modelName = name;
            }else{
            	modelName = name+'_'+dataage;
            }
            
            if (modelName in modelNameMapping){
            	var result_data = modelNameMapping[modelName];
                res.end(JSON.stringify(result_data));
            }else{
            	res.end(JSON.stringify({'error':'Error in process!'}));            	
            }
        };
        
        /* Redhat.com domains */
        self.routes['/rd/data/live/:dage/:name'] = function(req, res) {
        	// Disable caching for content files
            res.header("Cache-Control", "no-cache, no-store, must-revalidate");
            res.header("Pragma", "no-cache");
            res.header("Expires", 0);
            res.header("Content-Type", "application/json; charset=utf-8");            
            
            var modelNameMapping = {
            		
            		'realtime': redhat_anaytics_data.visits_yesterday,
            		'realtime_7':redhat_anaytics_data.visits_7_days,
            		'realtime_30':redhat_anaytics_data.visits_30_days,
            		
            		'yesterday': redhat_anaytics_data.visits_yesterday_hourly,
            		'yesterday_7': redhat_anaytics_data.visits_7days_hourly,
            		'yesterday_30': redhat_anaytics_data.visits_30days_hourly,
            		
            		'devices': redhat_anaytics_data.devices_yesterday,
            		'devices_7': redhat_anaytics_data.devices_7_days,
            		'devices_30': redhat_anaytics_data.devices_30_days,
            		
            		'browsers': redhat_anaytics_data.browsers_yesterday,
            		'browsers_7': redhat_anaytics_data.browsers_7_days,
            		'browsers_30': redhat_anaytics_data.browsers_30_days,
            		
            		'ie': redhat_anaytics_data.ie_yesterday,
            		'ie_7': redhat_anaytics_data.ie_7_days,
            		'ie_30': redhat_anaytics_data.ie_30_days,
            		
            		'os': redhat_anaytics_data.os_yesterday,
            		'os_7': redhat_anaytics_data.os_7_days,
            		'os_30': redhat_anaytics_data.os_30_days,
            		
            		'windows': redhat_anaytics_data.windows,
            		
            		'top-pages-realtime': redhat_anaytics_data.top_pages_realtime,
            		'top-domains-7-days': redhat_anaytics_data.top_domains_7_days,
            		'top-domains-30-days': redhat_anaytics_data.top_domains_30_days,
            		
            		'top-downloads-yesterday': redhat_anaytics_data.top_downloads_yesterday,
            		'top-downloads_7': redhat_anaytics_data.top_downloads_7_days,
            		'top-downloads_30': redhat_anaytics_data.top_downloads_30_days,
            		
            		'top-countries-realtime': redhat_anaytics_data.top_countries_yesterday,
            		'top-countries-realtime_7': redhat_anaytics_data.top_countries_7_days,
            		'top-countries-realtime_30': redhat_anaytics_data.top_countries_30_days,
            		
            		'top-cities-realtime': redhat_anaytics_data.top_cities_yesterday,
            		'top-cities-realtime_7': redhat_anaytics_data.top_cities_7_days,
            		'top-cities-realtime_30': redhat_anaytics_data.top_cities_30_days,
            		
            		'top-referrer-realtime': redhat_anaytics_data.top_referrer_yesterday,
            		'top-referrer-realtime_7': redhat_anaytics_data.top_referrer_7_days,
            		'top-referrer-realtime_30': redhat_anaytics_data.top_referrer_30_days
            	}
            
            
            var name = req.params.name;
            var dataage = req.params.dage;
            
            if (_.endsWith(name, ".json")) {
              name = name.substring(0, name.length-5);
            }
            
            var modelName = '';
            
            if (dataage == 0 ){
            	modelName = name;
            }else{
            	modelName = name+'_'+dataage;
            }
            
            if (modelName in modelNameMapping){
            	var result_data = modelNameMapping[modelName];
                res.end(JSON.stringify(result_data));
            }else{
            	res.end(JSON.stringify({'error':'Error in process!'}));            	
            }
        };
        
        /* access.redhat.com domains */
        self.routes['/cp/data/live/:dage/:name'] = function(req, res) {
        	// Disable caching for content files
            res.header("Cache-Control", "no-cache, no-store, must-revalidate");
            res.header("Pragma", "no-cache");
            res.header("Expires", 0);
            res.header("Content-Type", "application/json; charset=utf-8");            

            var modelNameMapping = {
            		
            		'realtime': custportal_anaytics_data.visits_yesterday,
            		'realtime_7':custportal_anaytics_data.visits_7_days,
            		'realtime_30':custportal_anaytics_data.visits_30_days,
            		
            		'yesterday': custportal_anaytics_data.visits_yesterday_hourly,
            		'yesterday_7': custportal_anaytics_data.visits_7days_hourly,
            		'yesterday_30': custportal_anaytics_data.visits_30days_hourly,
            		
            		'devices': custportal_anaytics_data.devices_yesterday,
            		'devices_7': custportal_anaytics_data.devices_7_days,
            		'devices_30': custportal_anaytics_data.devices_30_days,
            		
            		'browsers': custportal_anaytics_data.browsers_yesterday,
            		'browsers_7': custportal_anaytics_data.browsers_7_days,
            		'browsers_30': custportal_anaytics_data.browsers_30_days,
            		
            		'ie': custportal_anaytics_data.ie_yesterday,
            		'ie_7': custportal_anaytics_data.ie_7_days,
            		'ie_30': custportal_anaytics_data.ie_30_days,
            		
            		'os': custportal_anaytics_data.os_yesterday,
            		'os_7': custportal_anaytics_data.os_7_days,
            		'os_30': custportal_anaytics_data.os_30_days,
            		
            		'windows': custportal_anaytics_data.windows,
            		
            		'top-pages-realtime': custportal_anaytics_data.top_pages_realtime,
            		'top-domains-7-days': custportal_anaytics_data.top_domains_7_days,
            		'top-domains-30-days': custportal_anaytics_data.top_domains_30_days,
            		
            		'top-downloads-yesterday': custportal_anaytics_data.top_downloads_yesterday,
            		'top-downloads_7': custportal_anaytics_data.top_downloads_7_days,
            		'top-downloads_30': custportal_anaytics_data.top_downloads_30_days,
            		
            		'top-countries-realtime': custportal_anaytics_data.top_countries_yesterday,
            		'top-countries-realtime_7': custportal_anaytics_data.top_countries_7_days,
            		'top-countries-realtime_30': custportal_anaytics_data.top_countries_30_days,
            		
            		'top-cities-realtime': custportal_anaytics_data.top_cities_yesterday,
            		'top-cities-realtime_7': custportal_anaytics_data.top_cities_7_days,
            		'top-cities-realtime_30': custportal_anaytics_data.top_cities_30_days,
            		
            		'top-referrer-realtime': custportal_anaytics_data.top_referrer_yesterday,
            		'top-referrer-realtime_7': custportal_anaytics_data.top_referrer_7_days,
            		'top-referrer-realtime_30': custportal_anaytics_data.top_referrer_30_days
            	}
            var name = req.params.name;
            var dataage = req.params.dage;
            
            if (_.endsWith(name, ".json")) {
              name = name.substring(0, name.length-5);
            }
            
            var modelName = '';
            
            if (dataage == 0 ){
            	modelName = name;
            }else{
            	modelName = name+'_'+dataage;
            }
            
            if (modelName in modelNameMapping){
            	var result_data = modelNameMapping[modelName];
                res.end(JSON.stringify(result_data));
            }else{
            	res.end(JSON.stringify({'error':'Error in process!'}));            	
            }
        };

        /* opensource.com domains */
        self.routes['/os/data/live/:dage/:name'] = function(req, res) {
        	// Disable caching for content files
            res.header("Cache-Control", "no-cache, no-store, must-revalidate");
            res.header("Pragma", "no-cache");
            res.header("Expires", 0);
            res.header("Content-Type", "application/json; charset=utf-8");            
            
            var modelNameMapping = {
            		
            		'realtime': opensource_anaytics_data.visits_yesterday,
            		'realtime_7':opensource_anaytics_data.visits_7_days,
            		'realtime_30':opensource_anaytics_data.visits_30_days,
            		
            		'yesterday': opensource_anaytics_data.visits_yesterday_hourly,
            		'yesterday_7': opensource_anaytics_data.visits_7days_hourly,
            		'yesterday_30': opensource_anaytics_data.visits_30days_hourly,
            		
            		'devices': opensource_anaytics_data.devices_yesterday,
            		'devices_7': opensource_anaytics_data.devices_7_days,
            		'devices_30': opensource_anaytics_data.devices_30_days,
            		
            		'browsers': opensource_anaytics_data.browsers_yesterday,
            		'browsers_7': opensource_anaytics_data.browsers_7_days,
            		'browsers_30': opensource_anaytics_data.browsers_30_days,
            		
            		'ie': opensource_anaytics_data.ie_yesterday,
            		'ie_7': opensource_anaytics_data.ie_7_days,
            		'ie_30': opensource_anaytics_data.ie_30_days,
            		
            		'os': opensource_anaytics_data.os_yesterday,
            		'os_7': opensource_anaytics_data.os_7_days,
            		'os_30': opensource_anaytics_data.os_30_days,
            		
            		'windows': opensource_anaytics_data.windows,
            		
            		'top-pages-realtime': opensource_anaytics_data.top_pages_realtime,
            		'top-domains-7-days': opensource_anaytics_data.top_domains_7_days,
            		'top-domains-30-days': opensource_anaytics_data.top_domains_30_days,
            		
            		'top-downloads-yesterday': opensource_anaytics_data.top_downloads_yesterday,
            		'top-downloads_7': opensource_anaytics_data.top_downloads_7_days,
            		'top-downloads_30': opensource_anaytics_data.top_downloads_30_days,
            		
            		'top-countries-realtime': opensource_anaytics_data.top_countries_yesterday,
            		'top-countries-realtime_7': opensource_anaytics_data.top_countries_7_days,
            		'top-countries-realtime_30': opensource_anaytics_data.top_countries_30_days,
            		
            		'top-cities-realtime': opensource_anaytics_data.top_cities_yesterday,
            		'top-cities-realtime_7': opensource_anaytics_data.top_cities_7_days,
            		'top-cities-realtime_30': opensource_anaytics_data.top_cities_30_days,
            		
            		'top-referrer-realtime': opensource_anaytics_data.top_referrer_yesterday,
            		'top-referrer-realtime_7': opensource_anaytics_data.top_referrer_7_days,
            		'top-referrer-realtime_30': opensource_anaytics_data.top_referrer_30_days
            	}
            var name = req.params.name;
            var dataage = req.params.dage;
            
            if (_.endsWith(name, ".json")) {
              name = name.substring(0, name.length-5);
            }
            
            var modelName = '';
            
            if (dataage == 0 ){
            	modelName = name;
            }else{
            	modelName = name+'_'+dataage;
            }
            
            if (modelName in modelNameMapping){
            	var result_data = modelNameMapping[modelName];
                res.end(JSON.stringify(result_data));
            }else{
            	res.end(JSON.stringify({'error':'Error in process!'}));            	
            }
        };
        
        /* enterprisersproject.com domains */
        self.routes['/ep/data/live/:dage/:name'] = function(req, res) {
        	// Disable caching for content files
            res.header("Cache-Control", "no-cache, no-store, must-revalidate");
            res.header("Pragma", "no-cache");
            res.header("Expires", 0);
            res.header("Content-Type", "application/json; charset=utf-8");            

            var modelNameMapping = {
            		
            		'realtime': enterprisersproject_anaytics_data.visits_yesterday,
            		'realtime_7':enterprisersproject_anaytics_data.visits_7_days,
            		'realtime_30':enterprisersproject_anaytics_data.visits_30_days,
            		
            		'yesterday': enterprisersproject_anaytics_data.visits_yesterday_hourly,
            		'yesterday_7': enterprisersproject_anaytics_data.visits_7days_hourly,
            		'yesterday_30': enterprisersproject_anaytics_data.visits_30days_hourly,
            		
            		'devices': enterprisersproject_anaytics_data.devices_yesterday,
            		'devices_7': enterprisersproject_anaytics_data.devices_7_days,
            		'devices_30': enterprisersproject_anaytics_data.devices_30_days,
            		
            		'browsers': enterprisersproject_anaytics_data.browsers_yesterday,
            		'browsers_7': enterprisersproject_anaytics_data.browsers_7_days,
            		'browsers_30': enterprisersproject_anaytics_data.browsers_30_days,
            		
            		'ie': enterprisersproject_anaytics_data.ie_yesterday,
            		'ie_7': enterprisersproject_anaytics_data.ie_7_days,
            		'ie_30': enterprisersproject_anaytics_data.ie_30_days,
            		
            		'os': enterprisersproject_anaytics_data.os_yesterday,
            		'os_7': enterprisersproject_anaytics_data.os_7_days,
            		'os_30': enterprisersproject_anaytics_data.os_30_days,
            		
            		'windows': enterprisersproject_anaytics_data.windows,
            		
            		'top-pages-realtime': enterprisersproject_anaytics_data.top_pages_realtime,
            		'top-domains-7-days': enterprisersproject_anaytics_data.top_domains_7_days,
            		'top-domains-30-days': enterprisersproject_anaytics_data.top_domains_30_days,
            		
            		'top-downloads-yesterday': enterprisersproject_anaytics_data.top_downloads_yesterday,
            		'top-downloads_7': enterprisersproject_anaytics_data.top_downloads_7_days,
            		'top-downloads_30': enterprisersproject_anaytics_data.top_downloads_30_days,
            		
            		'top-countries-realtime': enterprisersproject_anaytics_data.top_countries_yesterday,
            		'top-countries-realtime_7': enterprisersproject_anaytics_data.top_countries_7_days,
            		'top-countries-realtime_30': enterprisersproject_anaytics_data.top_countries_30_days,
            		
            		'top-cities-realtime': enterprisersproject_anaytics_data.top_cities_yesterday,
            		'top-cities-realtime_7': enterprisersproject_anaytics_data.top_cities_7_days,
            		'top-cities-realtime_30': enterprisersproject_anaytics_data.top_cities_30_days,
            		
            		'top-referrer-realtime': enterprisersproject_anaytics_data.top_referrer_yesterday,
            		'top-referrer-realtime_7': enterprisersproject_anaytics_data.top_referrer_7_days,
            		'top-referrer-realtime_30': enterprisersproject_anaytics_data.top_referrer_30_days
            	}
            var name = req.params.name;
            var dataage = req.params.dage;
            
            if (_.endsWith(name, ".json")) {
              name = name.substring(0, name.length-5);
            }
            
            var modelName = '';
            
            if (dataage == 0 ){
            	modelName = name;
            }else{
            	modelName = name+'_'+dataage;
            }
            
            if (modelName in modelNameMapping){
            	var result_data = modelNameMapping[modelName];
                res.end(JSON.stringify(result_data));
            }else{
            	res.end(JSON.stringify({'error':'Error in process!'}));            	
            }
        };
        
        
        /* developers.redhat.com domains */
        self.routes['/de/data/live/:dage/:name'] = function(req, res) {
        	// Disable caching for content files
            res.header("Cache-Control", "no-cache, no-store, must-revalidate");
            res.header("Pragma", "no-cache");
            res.header("Expires", 0);
            res.header("Content-Type", "application/json; charset=utf-8");            

            var modelNameMapping = {
            		
            		'realtime': developersredhat_anaytics_data.visits_yesterday,
            		'realtime_7':developersredhat_anaytics_data.visits_7_days,
            		'realtime_30':developersredhat_anaytics_data.visits_30_days,
            		
            		'yesterday': developersredhat_anaytics_data.visits_yesterday_hourly,
            		'yesterday_7': developersredhat_anaytics_data.visits_7days_hourly,
            		'yesterday_30': developersredhat_anaytics_data.visits_30days_hourly,
            		
            		'devices': developersredhat_anaytics_data.devices_yesterday,
            		'devices_7': developersredhat_anaytics_data.devices_7_days,
            		'devices_30': developersredhat_anaytics_data.devices_30_days,
            		
            		'browsers': developersredhat_anaytics_data.browsers_yesterday,
            		'browsers_7': developersredhat_anaytics_data.browsers_7_days,
            		'browsers_30': developersredhat_anaytics_data.browsers_30_days,
            		
            		'ie': developersredhat_anaytics_data.ie_yesterday,
            		'ie_7': developersredhat_anaytics_data.ie_7_days,
            		'ie_30': developersredhat_anaytics_data.ie_30_days,
            		
            		'os': developersredhat_anaytics_data.os_yesterday,
            		'os_7': developersredhat_anaytics_data.os_7_days,
            		'os_30': developersredhat_anaytics_data.os_30_days,
            		
            		'windows': developersredhat_anaytics_data.windows,
            		
            		'top-pages-realtime': developersredhat_anaytics_data.top_pages_realtime,
            		'top-domains-7-days': developersredhat_anaytics_data.top_domains_7_days,
            		'top-domains-30-days': developersredhat_anaytics_data.top_domains_30_days,
            		
            		'top-downloads-yesterday': developersredhat_anaytics_data.top_downloads_yesterday,
            		'top-downloads_7': developersredhat_anaytics_data.top_downloads_7_days,
            		'top-downloads_30': developersredhat_anaytics_data.top_downloads_30_days,
            		
            		'top-countries-realtime': developersredhat_anaytics_data.top_countries_yesterday,
            		'top-countries-realtime_7': developersredhat_anaytics_data.top_countries_7_days,
            		'top-countries-realtime_30': developersredhat_anaytics_data.top_countries_30_days,
            		
            		'top-cities-realtime': developersredhat_anaytics_data.top_cities_yesterday,
            		'top-cities-realtime_7': developersredhat_anaytics_data.top_cities_7_days,
            		'top-cities-realtime_30': developersredhat_anaytics_data.top_cities_30_days,
            		
            		'top-referrer-realtime': developersredhat_anaytics_data.top_referrer_yesterday,
            		'top-referrer-realtime_7': developersredhat_anaytics_data.top_referrer_7_days,
            		'top-referrer-realtime_30': developersredhat_anaytics_data.top_referrer_30_days
            	}           
            var name = req.params.name;
            var dataage = req.params.dage;
            
            if (_.endsWith(name, ".json")) {
              name = name.substring(0, name.length-5);
            }
            
            var modelName = '';
            
            if (dataage == 0 ){
            	modelName = name;
            }else{
            	modelName = name+'_'+dataage;
            }
            
            if (modelName in modelNameMapping){
            	var result_data = modelNameMapping[modelName];
                res.end(JSON.stringify(result_data));
            }else{
            	res.end(JSON.stringify({'error':'Error in process!'}));            	
            }
        };
        
        /* partner.redhat.com domains */
        self.routes['/pr/data/live/:dage/:name'] = function(req, res) {
        	// Disable caching for content files
            res.header("Cache-Control", "no-cache, no-store, must-revalidate");
            res.header("Pragma", "no-cache");
            res.header("Expires", 0);
            res.header("Content-Type", "application/json; charset=utf-8");            

            var modelNameMapping = {
            		
            		'realtime': partnersredhat_anaytics_data.visits_yesterday,
            		'realtime_7':partnersredhat_anaytics_data.visits_7_days,
            		'realtime_30':partnersredhat_anaytics_data.visits_30_days,
            		
            		'yesterday': partnersredhat_anaytics_data.visits_yesterday_hourly,
            		'yesterday_7': partnersredhat_anaytics_data.visits_7days_hourly,
            		'yesterday_30': partnersredhat_anaytics_data.visits_30days_hourly,
            		
            		'devices': partnersredhat_anaytics_data.devices_yesterday,
            		'devices_7': partnersredhat_anaytics_data.devices_7_days,
            		'devices_30': partnersredhat_anaytics_data.devices_30_days,
            		
            		'browsers': partnersredhat_anaytics_data.browsers_yesterday,
            		'browsers_7': partnersredhat_anaytics_data.browsers_7_days,
            		'browsers_30': partnersredhat_anaytics_data.browsers_30_days,
            		
            		'ie': partnersredhat_anaytics_data.ie_yesterday,
            		'ie_7': partnersredhat_anaytics_data.ie_7_days,
            		'ie_30': partnersredhat_anaytics_data.ie_30_days,
            		
            		'os': partnersredhat_anaytics_data.os_yesterday,
            		'os_7': partnersredhat_anaytics_data.os_7_days,
            		'os_30': partnersredhat_anaytics_data.os_30_days,
            		
            		'windows': partnersredhat_anaytics_data.windows,
            		
            		'top-pages-realtime': partnersredhat_anaytics_data.top_pages_realtime,
            		'top-domains-7-days': partnersredhat_anaytics_data.top_domains_7_days,
            		'top-domains-30-days': partnersredhat_anaytics_data.top_domains_30_days,
            		
            		'top-downloads-yesterday': partnersredhat_anaytics_data.top_downloads_yesterday,
            		'top-downloads_7': partnersredhat_anaytics_data.top_downloads_7_days,
            		'top-downloads_30': partnersredhat_anaytics_data.top_downloads_30_days,
            		
            		'top-countries-realtime': partnersredhat_anaytics_data.top_countries_yesterday,
            		'top-countries-realtime_7': partnersredhat_anaytics_data.top_countries_7_days,
            		'top-countries-realtime_30': partnersredhat_anaytics_data.top_countries_30_days,
            		
            		'top-cities-realtime': partnersredhat_anaytics_data.top_cities_yesterday,
            		'top-cities-realtime_7': partnersredhat_anaytics_data.top_cities_7_days,
            		'top-cities-realtime_30': partnersredhat_anaytics_data.top_cities_30_days,
            		
            		'top-referrer-realtime': partnersredhat_anaytics_data.top_referrer_yesterday,
            		'top-referrer-realtime_7': partnersredhat_anaytics_data.top_referrer_7_days,
            		'top-referrer-realtime_30': partnersredhat_anaytics_data.top_referrer_30_days
            	}             
            var name = req.params.name;
            var dataage = req.params.dage;
            
            if (_.endsWith(name, ".json")) {
              name = name.substring(0, name.length-5);
            }
            
            var modelName = '';
            
            if (dataage == 0 ){
            	modelName = name;
            }else{
            	modelName = name+'_'+dataage;
            }
            
            if (modelName in modelNameMapping){
            	var result_data = modelNameMapping[modelName];
                res.end(JSON.stringify(result_data));
            }else{
            	res.end(JSON.stringify({'error':'Error in process!'}));            	
            }
        };
        
        /* jboss.com domains */
        self.routes['/jb/data/live/:dage/:name'] = function(req, res) {
        	// Disable caching for content files
            res.header("Cache-Control", "no-cache, no-store, must-revalidate");
            res.header("Pragma", "no-cache");
            res.header("Expires", 0);
            res.header("Content-Type", "application/json; charset=utf-8");            
            
            var modelNameMapping = {
            		
            		'realtime': jboss_anaytics_data.visits_yesterday,
            		'realtime_7':jboss_anaytics_data.visits_7_days,
            		'realtime_30':jboss_anaytics_data.visits_30_days,
            		
            		'yesterday': jboss_anaytics_data.visits_yesterday_hourly,
            		'yesterday_7': jboss_anaytics_data.visits_7days_hourly,
            		'yesterday_30': jboss_anaytics_data.visits_30days_hourly,
            		
            		'devices': jboss_anaytics_data.devices_yesterday,
            		'devices_7': jboss_anaytics_data.devices_7_days,
            		'devices_30': jboss_anaytics_data.devices_30_days,
            		
            		'browsers': jboss_anaytics_data.browsers_yesterday,
            		'browsers_7': jboss_anaytics_data.browsers_7_days,
            		'browsers_30': jboss_anaytics_data.browsers_30_days,
            		
            		'ie': jboss_anaytics_data.ie_yesterday,
            		'ie_7': jboss_anaytics_data.ie_7_days,
            		'ie_30': jboss_anaytics_data.ie_30_days,
            		
            		'os': jboss_anaytics_data.os_yesterday,
            		'os_7': jboss_anaytics_data.os_7_days,
            		'os_30': jboss_anaytics_data.os_30_days,
            		
            		'windows': jboss_anaytics_data.windows,
            		
            		'top-pages-realtime': jboss_anaytics_data.top_pages_realtime,
            		'top-domains-7-days': jboss_anaytics_data.top_domains_7_days,
            		'top-domains-30-days': jboss_anaytics_data.top_domains_30_days,
            		
            		'top-downloads-yesterday': jboss_anaytics_data.top_downloads_yesterday,
            		'top-downloads_7': jboss_anaytics_data.top_downloads_7_days,
            		'top-downloads_30': jboss_anaytics_data.top_downloads_30_days,
            		
            		'top-countries-realtime': jboss_anaytics_data.top_countries_yesterday,
            		'top-countries-realtime_7': jboss_anaytics_data.top_countries_7_days,
            		'top-countries-realtime_30': jboss_anaytics_data.top_countries_30_days,
            		
            		'top-cities-realtime': jboss_anaytics_data.top_cities_yesterday,
            		'top-cities-realtime_7': jboss_anaytics_data.top_cities_7_days,
            		'top-cities-realtime_30': jboss_anaytics_data.top_cities_30_days,
            		
            		'top-referrer-realtime': jboss_anaytics_data.top_referrer_yesterday,
            		'top-referrer-realtime_7': jboss_anaytics_data.top_referrer_7_days,
            		'top-referrer-realtime_30': jboss_anaytics_data.top_referrer_30_days
            	}             
            var name = req.params.name;
            var dataage = req.params.dage;
            
            if (_.endsWith(name, ".json")) {
              name = name.substring(0, name.length-5);
            }
            
            var modelName = '';
            
            if (dataage == 0 ){
            	modelName = name;
            }else{
            	modelName = name+'_'+dataage;
            }
            
            if (modelName in modelNameMapping){
            	var result_data = modelNameMapping[modelName];
                res.end(JSON.stringify(result_data));
            }else{
            	res.end(JSON.stringify({'error':'Error in process!'}));            	
            }
        };
        
        /* openshift.com domains */
        self.routes['/oh/data/live/:dage/:name'] = function(req, res) {
        	// Disable caching for content files
            res.header("Cache-Control", "no-cache, no-store, must-revalidate");
            res.header("Pragma", "no-cache");
            res.header("Expires", 0);
            res.header("Content-Type", "application/json; charset=utf-8");            
            

            var modelNameMapping = {
            		
            		'realtime': openshift_anaytics_data.visits_yesterday,
            		'realtime_7':openshift_anaytics_data.visits_7_days,
            		'realtime_30':openshift_anaytics_data.visits_30_days,
            		
            		'yesterday': openshift_anaytics_data.visits_yesterday_hourly,
            		'yesterday_7': openshift_anaytics_data.visits_7days_hourly,
            		'yesterday_30': openshift_anaytics_data.visits_30days_hourly,
            		
            		'devices': openshift_anaytics_data.devices_yesterday,
            		'devices_7': openshift_anaytics_data.devices_7_days,
            		'devices_30': openshift_anaytics_data.devices_30_days,
            		
            		'browsers': openshift_anaytics_data.browsers_yesterday,
            		'browsers_7': openshift_anaytics_data.browsers_7_days,
            		'browsers_30': openshift_anaytics_data.browsers_30_days,
            		
            		'ie': openshift_anaytics_data.ie_yesterday,
            		'ie_7': openshift_anaytics_data.ie_7_days,
            		'ie_30': openshift_anaytics_data.ie_30_days,
            		
            		'os': openshift_anaytics_data.os_yesterday,
            		'os_7': openshift_anaytics_data.os_7_days,
            		'os_30': openshift_anaytics_data.os_30_days,
            		
            		'windows': openshift_anaytics_data.windows,
            		
            		'top-pages-realtime': openshift_anaytics_data.top_pages_realtime,
            		'top-domains-7-days': openshift_anaytics_data.top_domains_7_days,
            		'top-domains-30-days': openshift_anaytics_data.top_domains_30_days,
            		
            		'top-downloads-yesterday': openshift_anaytics_data.top_downloads_yesterday,
            		'top-downloads_7': openshift_anaytics_data.top_downloads_7_days,
            		'top-downloads_30': openshift_anaytics_data.top_downloads_30_days,
            		
            		'top-countries-realtime': openshift_anaytics_data.top_countries_yesterday,
            		'top-countries-realtime_7': openshift_anaytics_data.top_countries_7_days,
            		'top-countries-realtime_30': openshift_anaytics_data.top_countries_30_days,
            		
            		'top-cities-realtime': openshift_anaytics_data.top_cities_yesterday,
            		'top-cities-realtime_7': openshift_anaytics_data.top_cities_7_days,
            		'top-cities-realtime_30': openshift_anaytics_data.top_cities_30_days,
            		
            		'top-referrer-realtime': openshift_anaytics_data.top_referrer_yesterday,
            		'top-referrer-realtime_7': openshift_anaytics_data.top_referrer_7_days,
            		'top-referrer-realtime_30': openshift_anaytics_data.top_referrer_30_days
            	}
            var name = req.params.name;
            var dataage = req.params.dage;
            
            if (_.endsWith(name, ".json")) {
              name = name.substring(0, name.length-5);
            }
            
            var modelName = '';
            
            if (dataage == 0 ){
            	modelName = name;
            }else{
            	modelName = name+'_'+dataage;
            }
            
            if (modelName in modelNameMapping){
            	var result_data = modelNameMapping[modelName];
                res.end(JSON.stringify(result_data));
            }else{
            	res.end(JSON.stringify({'error':'Error in process!'}));            	
            }
        };
        
        /* connectredhat.com domains */
        self.routes['/cr/data/live/:dage/:name'] = function(req, res) {
        	// Disable caching for content files
            res.header("Cache-Control", "no-cache, no-store, must-revalidate");
            res.header("Pragma", "no-cache");
            res.header("Expires", 0);
            res.header("Content-Type", "application/json; charset=utf-8");            
            
            var modelNameMapping = {
            		
            		'realtime': connectredhat_anaytics_data.visits_yesterday,
            		'realtime_7':connectredhat_anaytics_data.visits_7_days,
            		'realtime_30':connectredhat_anaytics_data.visits_30_days,
            		
            		'yesterday': connectredhat_anaytics_data.visits_yesterday_hourly,
            		'yesterday_7': connectredhat_anaytics_data.visits_7days_hourly,
            		'yesterday_30': connectredhat_anaytics_data.visits_30days_hourly,
            		
            		'devices': connectredhat_anaytics_data.devices_yesterday,
            		'devices_7': connectredhat_anaytics_data.devices_7_days,
            		'devices_30': connectredhat_anaytics_data.devices_30_days,
            		
            		'browsers': connectredhat_anaytics_data.browsers_yesterday,
            		'browsers_7': connectredhat_anaytics_data.browsers_7_days,
            		'browsers_30': connectredhat_anaytics_data.browsers_30_days,
            		
            		'ie': connectredhat_anaytics_data.ie_yesterday,
            		'ie_7': connectredhat_anaytics_data.ie_7_days,
            		'ie_30': connectredhat_anaytics_data.ie_30_days,
            		
            		'os': connectredhat_anaytics_data.os_yesterday,
            		'os_7': connectredhat_anaytics_data.os_7_days,
            		'os_30': connectredhat_anaytics_data.os_30_days,
            		
            		'windows': connectredhat_anaytics_data.windows,
            		
            		'top-pages-realtime': connectredhat_anaytics_data.top_pages_realtime,
            		'top-domains-7-days': connectredhat_anaytics_data.top_domains_7_days,
            		'top-domains-30-days': connectredhat_anaytics_data.top_domains_30_days,
            		
            		'top-downloads-yesterday': connectredhat_anaytics_data.top_downloads_yesterday,
            		'top-downloads_7': connectredhat_anaytics_data.top_downloads_7_days,
            		'top-downloads_30': connectredhat_anaytics_data.top_downloads_30_days,
            		
            		'top-countries-realtime': connectredhat_anaytics_data.top_countries_yesterday,
            		'top-countries-realtime_7': connectredhat_anaytics_data.top_countries_7_days,
            		'top-countries-realtime_30': connectredhat_anaytics_data.top_countries_30_days,
            		
            		'top-cities-realtime': connectredhat_anaytics_data.top_cities_yesterday,
            		'top-cities-realtime_7': connectredhat_anaytics_data.top_cities_7_days,
            		'top-cities-realtime_30': connectredhat_anaytics_data.top_cities_30_days,
            		
            		'top-referrer-realtime': connectredhat_anaytics_data.top_referrer_yesterday,
            		'top-referrer-realtime_7': connectredhat_anaytics_data.top_referrer_7_days,
            		'top-referrer-realtime_30': connectredhat_anaytics_data.top_referrer_30_days
            	}
            
            var name = req.params.name;
            var dataage = req.params.dage;
            
            if (_.endsWith(name, ".json")) {
              name = name.substring(0, name.length-5);
            }
            
            var modelName = '';
            
            if (dataage == 0 ){
            	modelName = name;
            }else{
            	modelName = name+'_'+dataage;
            }
            
            if (modelName in modelNameMapping){
            	var result_data = modelNameMapping[modelName];
                res.end(JSON.stringify(result_data));
            }else{
            	res.end(JSON.stringify({'error':'Error in process!'}));            	
            }
        };        
        
        /* training.redhat.com domains */
        self.routes['/tr/data/live/:dage/:name'] = function(req, res) {
        	// Disable caching for content files
            res.header("Cache-Control", "no-cache, no-store, must-revalidate");
            res.header("Pragma", "no-cache");
            res.header("Expires", 0);
            res.header("Content-Type", "application/json; charset=utf-8");            

            var modelNameMapping = {
            		
            		'realtime': trainingredhat_anaytics_data.visits_yesterday,
            		'realtime_7':trainingredhat_anaytics_data.visits_7_days,
            		'realtime_30':trainingredhat_anaytics_data.visits_30_days,
            		
            		'yesterday': trainingredhat_anaytics_data.visits_yesterday_hourly,
            		'yesterday_7': trainingredhat_anaytics_data.visits_7days_hourly,
            		'yesterday_30': trainingredhat_anaytics_data.visits_30days_hourly,
            		
            		'devices': trainingredhat_anaytics_data.devices_yesterday,
            		'devices_7': trainingredhat_anaytics_data.devices_7_days,
            		'devices_30': trainingredhat_anaytics_data.devices_30_days,
            		
            		'browsers': trainingredhat_anaytics_data.browsers_yesterday,
            		'browsers_7': trainingredhat_anaytics_data.browsers_7_days,
            		'browsers_30': trainingredhat_anaytics_data.browsers_30_days,
            		
            		'ie': trainingredhat_anaytics_data.ie_yesterday,
            		'ie_7': trainingredhat_anaytics_data.ie_7_days,
            		'ie_30': trainingredhat_anaytics_data.ie_30_days,
            		
            		'os': trainingredhat_anaytics_data.os_yesterday,
            		'os_7': trainingredhat_anaytics_data.os_7_days,
            		'os_30': trainingredhat_anaytics_data.os_30_days,
            		
            		'windows': trainingredhat_anaytics_data.windows,
            		
            		'top-pages-realtime': trainingredhat_anaytics_data.top_pages_realtime,
            		'top-domains-7-days': trainingredhat_anaytics_data.top_domains_7_days,
            		'top-domains-30-days': trainingredhat_anaytics_data.top_domains_30_days,
            		
            		'top-downloads-yesterday': trainingredhat_anaytics_data.top_downloads_yesterday,
            		'top-downloads_7': trainingredhat_anaytics_data.top_downloads_7_days,
            		'top-downloads_30': trainingredhat_anaytics_data.top_downloads_30_days,
            		
            		'top-countries-realtime': trainingredhat_anaytics_data.top_countries_yesterday,
            		'top-countries-realtime_7': trainingredhat_anaytics_data.top_countries_7_days,
            		'top-countries-realtime_30': trainingredhat_anaytics_data.top_countries_30_days,
            		
            		'top-cities-realtime': trainingredhat_anaytics_data.top_cities_yesterday,
            		'top-cities-realtime_7': trainingredhat_anaytics_data.top_cities_7_days,
            		'top-cities-realtime_30': trainingredhat_anaytics_data.top_cities_30_days,
            		
            		'top-referrer-realtime': trainingredhat_anaytics_data.top_referrer_yesterday,
            		'top-referrer-realtime_7': trainingredhat_anaytics_data.top_referrer_7_days,
            		'top-referrer-realtime_30': trainingredhat_anaytics_data.top_referrer_30_days
            	}            
            var name = req.params.name;
            var dataage = req.params.dage;
            
            if (_.endsWith(name, ".json")) {
              name = name.substring(0, name.length-5);
            }
            
            var modelName = '';
            
            if (dataage == 0 ){
            	modelName = name;
            }else{
            	modelName = name+'_'+dataage;
            }
            
            if (modelName in modelNameMapping){
            	var result_data = modelNameMapping[modelName];
                res.end(JSON.stringify(result_data));
            }else{
            	res.end(JSON.stringify({'error':'Error in process!'}));            	
            }
        };
        
        /* Download data */
        self.routes['/data/download/:site/:name'] = function(req, res) {
        	var site = req.params.site;
        	var name = req.params.name;
            var site_map = {
            		'cp'	:'access.redhat.com',
            		'ep'	:'enterprisersproject',
            		'glob'	:'global',
            		'os'	:'opensource.com',
            		'rd'	:'redhat.com',
            		'de'	:'developers.redhat.com',
            		'pr'	:'partners.redhat.com',
            		'jb'	:'jboss.org',
            		'oh'	:'openshift.com',
            		'cr'	:'connectredhat',
            		'tr'	:'trainingredhat'            			
            }
        	var file = __dirname + '/downloaddata/'+site_map[site]+'/'+name;
        	
        	res.attachment(file);
        	res.download(file); // Set disposition and send it.
        };
        
        /* root */
        self.routes['/'] = function(req, res) {
            res.setHeader('Content-Type', 'text/html');
            res.send(self.cache_get('index.html') );
        };
    };


    /**
     *  Initialize the server (express) and create the routes and register
     *  the handlers.
     */
    self.initializeServer = function() {
        self.createRoutes();
        self.app = express();
        
        self.app.use(function(req, res, next) {
        	res.header("Access-Control-Allow-Origin", "*");
        	  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        	  next();
       	});
        
        //  Add handlers for the app (from the routes).
        for (var r in self.routes) {
            self.app.get(r, self.routes[r]);
        }
    };

    /**
     *  Initializes the sample application.
     */
    self.initialize = function() {
        self.setupVariables();
        self.populateCache();
        self.setupTerminationHandlers();

        // Create the express server and routes.
        self.initializeServer();
    };


    /**
     *  Start the server (starts up the sample application).
     */
    self.start = function() {
        //  Start the app on the specific interface (and port).
        self.app.listen(self.port, self.ipaddress, function() {
            console.log('%s: Node server started on %s:%d ...',
                        Date(Date.now() ), self.ipaddress, self.port);
        });
    };

};   /*  Analytics Application.  */



/**
 *  main():  Main code.
 */
var zapp = new AnalyticsApp();
zapp.initialize();
zapp.start();

