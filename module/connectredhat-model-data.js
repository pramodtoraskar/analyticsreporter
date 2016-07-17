module.exports = {

		   "top_downloads_30_days": {

		      "name": "top_downloads_30_days",

		      "totals": {},

		      "meta": {

		         "name": "Top Downloads Yesterday",

		         "description": "Top downloads yesterday"

		      },

		      "taken_at": "2016-04-18T08:10:16.228Z",

		      "query": {

		         "metrics": [

		            "ga:totalEvents"

		         ],

		         "sort": [

		            "-ga:totalEvents"

		         ],

		         "samplingLevel": "HIGHER_PRECISION",

		         "max-results": 100,

		         "dimensions": "ga:pageTitle,ga:eventLabel,ga:pagePath",

		         "filters": "ga:eventCategory=~ownload;ga:pagePath!~(usps.com).*/(?i)(zip|doc).*",

		         "start-date": "yesterday",

		         "start-index": 1,

		         "end-date": "yesterday"

		      },

		      "data": [

		         {

		            "event_title": "about/faq/what-are-benefits-red-hat-enterprise-linux-smart-virtualization",

		            "page_title": "pnt/p-408535/RHEL_on_RHEV_Datasheet.pdf",

		            "total_events": "36",

		            "event_label": "connect.redhat.com/about/faq/what-are-benefits-red-hat-enterprise-linux-smart-virtualization",

		            "page": "https://engineering.redhat.com/pnt/p-408535/RHEL_on_RHEV_Datasheet.pdf"

		         },

		         {

		            "event_title": "resources/red-hat-enterprise-linux-openstack-architecture-cisco-ucs-platform",

		            "page_title": "system/files/ucs_rhos.pdf",

		            "total_events": "11",

		            "event_label": "connect.redhat.com/resources/red-hat-enterprise-linux-openstack-architecture-cisco-ucs-platform",

		            "page": "https://connect.redhat.com/system/files/ucs_rhos.pdf"

		         },

		         {

		            "event_title": "site_agreement/3533991/1457/sign",

		            "page_title": "s3fs-public/PA_Technology_Partner_Program_20150501_0.pdf",

		            "total_events": "5",

		            "event_label": "connect.redhat.com/site_agreement/3533991/1457/sign",

		            "page": "https://rhc4tp-cms-prod-vpc-76857813.s3.amazonaws.com/s3fs-public/PA_Technology_Partner_Program_20150501_0.pdf"

		         },

		         {

		            "event_title": "resources/red-hat-enterprise-linux-openstack-platform-8-partner-integration",

		            "page_title": "s3fs-public/Red_Hat_Enterprise_Linux_OpenStack_Platform-8-Partner_Integration-en-US.pdf",

		            "total_events": "9",

		            "event_label": "connect.redhat.com/resources/red-hat-enterprise-linux-openstack-platform-8-partner-integration",

		            "page": "https://rhc4tp-cms-prod-vpc-76857813.s3.amazonaws.com/s3fs-public/Red_Hat_Enterprise_Linux_OpenStack_Platform-8-Partner_Integration-en-US.pdf"

		         },

		         {

		            "event_title": "resources/why-containerize-your-app",

		            "page_title": "s3fs-public/rh-containerize-your-apps-brochure-v1-INC0298248-201508kvm-en.pdf",

		            "total_events": "7",

		            "event_label": "connect.redhat.com/resources/why-containerize-your-app",

		            "page": "https://rhc4tp-cms-prod-vpc-76857813.s3.amazonaws.com/s3fs-public/rh-containerize-your-apps-brochure-v1-INC0298248-201508kvm-en.pdf"

		         },

		         {

		            "event_title": "resources/red-hat-and-dell-cloud-solutions-reference-architecture-guide",

		            "page_title": "system/files/red-hat-cloud-solution-ref-arch.pdf",

		            "total_events": "6",

		            "event_label": "connect.redhat.com/resources/red-hat-and-dell-cloud-solutions-reference-architecture-guide",

		            "page": "https://connect.redhat.com/system/files/red-hat-cloud-solution-ref-arch.pdf"

		         },

		         {

		            "event_title": "resources/red-hat-software-collections-may-2014-webinar",

		            "page_title": "system/files/RHSCL_Public_Webinar_May_2014.pdf",

		            "total_events": "5",

		            "event_label": "connect.redhat.com/resources/red-hat-software-collections-may-2014-webinar",

		            "page": "https://connect.redhat.com/system/files/RHSCL_Public_Webinar_May_2014.pdf"

		         },

		         {

		            "event_title": "resources/technology-partners-brand-standards",

		            "page_title": "system/files/RHC4TP_BrandStandards_Jan_2015_Final.PDF",

		            "total_events": "2",

		            "event_label": "connect.redhat.com/resources/technology-partners-brand-standards",

		            "page": "https://connect.redhat.com/system/files/RHC4TP_BrandStandards_Jan_2015_Final.PDF"

		         },

		         {

		            "event_title": "resources/logo-usage-guidelines",

		            "page_title": "system/files/RH_TechnologyPartnerStandards_Jan_2015_Final.PDF",

		            "total_events": "2",

		            "event_label": "connect.redhat.com/resources/logo-usage-guidelines",

		            "page": "https://connect.redhat.com/system/files/RH_TechnologyPartnerStandards_Jan_2015_Final.PDF"

		         },

		         {

		            "event_title": "resources/openstack-partner-faq-nda",

		            "page_title": "system/files/OpenStack%20FAQ%20Partner%202013-Aug-21.pdf",

		            "total_events": "1",

		            "event_label": "connect.redhat.com/resources/openstack-partner-faq-nda",

		            "page": "https://connect.redhat.com/system/files/OpenStack%20FAQ%20Partner%202013-Aug-21.pdf"

		         },

		         {

		            "event_title": "resources/red-hat-container-certification-policy",

		            "page_title": "system/files/Red_Hat_Container_Certification-2.0-Policy_Guide-en-US.pdf",

		            "total_events": "1",

		            "event_label": "connect.redhat.com/resources/red-hat-container-certification-policy",

		            "page": "https://connect.redhat.com/system/files/Red_Hat_Container_Certification-2.0-Policy_Guide-en-US.pdf"

		         },

		         {

		            "event_title": "resources/brocade-and-red-hat-enabling-benefits-cloud-computing-openstack",

		            "page_title": "system/files/brocade-redhat-openstack-sb.pdf",

		            "total_events": "1",

		            "event_label": "connect.redhat.com/resources/brocade-and-red-hat-enabling-benefits-cloud-computing-openstack",

		            "page": "https://connect.redhat.com/system/files/brocade-redhat-openstack-sb.pdf"

		         },

		         {

		            "event_title": "content/red-hat-connect-technology-partners",

		            "page_title": "s3fs-public/PA_Technology_Partner_Program_20150501.pdf",

		            "total_events": "1",

		            "event_label": "connect.redhat.com/content/red-hat-connect-technology-partners",

		            "page": "https://rhc4tp-cms-prod-vpc-76857813.s3.amazonaws.com/s3fs-public/PA_Technology_Partner_Program_20150501.pdf"

		         },

		         {

		            "event_title": "resources/cio-quickpulse-openstack-hype-vs-reality",

		            "page_title": "system/files/CIO_RedHatOpenStackQP_071513_Final%281%29.pdf",

		            "total_events": "1",

		            "event_label": "connect.redhat.com/resources/cio-quickpulse-openstack-hype-vs-reality",

		            "page": "https://connect.redhat.com/system/files/CIO_RedHatOpenStackQP_071513_Final%281%29.pdf"

		         },

		         {

		            "event_title": "resources/openstack-red-hat-and-cloud-system-software-opportunity",

		            "page_title": "system/files/IDC%20OpenStack%20WhitePaper%20Executive%20Summary.pdf",

		            "total_events": "1",

		            "event_label": "connect.redhat.com/resources/openstack-red-hat-and-cloud-system-software-opportunity",

		            "page": "https://connect.redhat.com/system/files/IDC%20OpenStack%20WhitePaper%20Executive%20Summary.pdf"

		         },

		         {

		            "event_title": "resources/plumgrid-openstack-solution",

		            "page_title": "system/files/RedHatAAG_20141102_v2.0.1.pdf",

		            "total_events": "1",

		            "event_label": "connect.redhat.com/resources/plumgrid-openstack-solution",

		            "page": "https://connect.redhat.com/system/files/RedHatAAG_20141102_v2.0.1.pdf"

		         },

		         {

		            "event_title": "resources/red-hat-technology-partner-logo",

		            "page_title": "s3fs-public/RH_technology%20partner_logos_2014-12.zip",

		            "total_events": "1",

		            "event_label": "connect.redhat.com/resources/red-hat-technology-partner-logo",

		            "page": "https://rhc4tp-cms-prod-vpc-76857813.s3.amazonaws.com/s3fs-public/RH_technology%20partner_logos_2014-12.zip"

		         }

		      ]

		   },

		   "browsers_30_days": {

		      "query": {

		         "metrics": [

		            "ga:sessions"

		         ],

		         "sort": [

		            "ga:date",

		            "-ga:sessions"

		         ],

		         "samplingLevel": "HIGHER_PRECISION",

		         "max-results": 10000,

		         "dimensions": "ga:date,ga:browser",

		         "filters": "ga:sessions>1000",

		         "start-date": "90daysAgo",

		         "start-index": 1,

		         "end-date": "yesterday"

		      },

		      "meta": {

		         "name": "Browsers",

		         "description": "90 days of visits broken down by browser for all sites."

		      },

		      "taken_at": "2016-04-27T08:10:07.332Z",

		      "name": "browsers_30_days",

		      "totals": {

		         "end_date": "2016-04-17",

		         "start_date": "2016-01-19",

		         "visits": 1974241511,

		         "browser": {
		               "Chrome": 1802,
		               "Firefox": 1428,
		               "Internet Explorer": 278,
		               "Safari": 229,
		               "Other": 10,
		               "Yandex": 3,
		               "UC Web": 2,
		               "Opera": 2,
		               "BlackBerry": 1
		            }
		      }

		   },

		   "browsers_yesterday": {

		      "query": {

		         "metrics": [

		            "ga:sessions"

		         ],

		         "sort": [

		            "ga:date",

		            "-ga:sessions"

		         ],

		         "samplingLevel": "HIGHER_PRECISION",

		         "max-results": 10000,

		         "dimensions": "ga:date,ga:browser",

		         "filters": "ga:sessions>1000",

		         "start-date": "90daysAgo",

		         "start-index": 1,

		         "end-date": "yesterday"

		      },

		      "meta": {

		         "name": "Browsers",

		         "description": "90 days of visits broken down by browser for all sites."

		      },

		      "taken_at": "2016-04-27T08:10:07.332Z",

		      "name": "browsers_yesterday",

		      "totals": {

		         "end_date": "2016-04-17",

		         "start_date": "2016-01-19",

		         "visits": 1974241511,

		         "browser": {
		               "Chrome": 71,
		               "Firefox": 23,
		               "Internet Explorer": 10,
		               "Safari": 6,
		               "Other": 1
		            }
		      }

		   },

		   "os_yesterday": {

		      "query": {

		         "metrics": [

		            "ga:sessions"

		         ],

		         "sort": [

		            "ga:date"

		         ],

		         "samplingLevel": "HIGHER_PRECISION",

		         "max-results": 10000,

		         "dimensions": "ga:date,ga:operatingSystem",

		         "filters": "ga:sessions>1000",

		         "start-date": "90daysAgo",

		         "start-index": 1,

		         "end-date": "yesterday"

		      },

		      "meta": {

		         "name": "Operating Systems",

		         "description": "90 days of visits, broken down by operating system and date, for all sites."

		      },

		      "taken_at": "2016-04-27T08:10:04.392Z",

		      "name": "os_yesterday",

		      "totals": {

		         "end_date": "2016-04-17",

		         "os": {
		               "Microsoft Windows": 62,
		               "Apple Macintosh": 23,
		               "GNU/Linux": 20,
		               "Google Android": 3,
		               "Chrome OS": 2,
		               "Apple iOS": 1
		            },
		         "start_date": "2016-01-19",
		         "visits": 1974502576

		      }

		   },

		   "visits_7days_hourly": {

		      "name": "visits_7days_hourly",

		      "totals": {

		         "end_date": "2016-04-17",

		         "start_date": "2016-01-19",

		         "visits": 0

		      },

		      "meta": {

		         "name": "visits_7days_hourly",

		         "description": "7days's visits for all sites."

		      },

		      "taken_at": "2016-04-27T12:27:11.075Z",

		      "query": {

		         "max-results": 10000,

		         "dimensions": "ga:date,ga:hour",

		         "start-date": "visits_7days_hourly",

		         "start-index": 1,

		         "metrics": [

		            "ga:sessions"

		         ],

		         "samplingLevel": "HIGHER_PRECISION",

		         "end-date": "visits_7days_hourly"

		      },

		      "data": [

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "76.0",

		            "hour": "00",

		            "visits": "19.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "78.0",

		            "hour": "01",

		            "visits": "19.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "78.0",

		            "hour": "02",

		            "visits": "27.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "25.0",

		            "hour": "03",

		            "visits": "23.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "52.0",

		            "hour": "04",

		            "visits": "21.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "77.0",

		            "hour": "05",

		            "visits": "27.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "85.0",

		            "hour": "06",

		            "visits": "19.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "88.0",

		            "hour": "07",

		            "visits": "24.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "94.0",

		            "hour": "08",

		            "visits": "27.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "57.0",

		            "hour": "09",

		            "visits": "29.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "70.0",

		            "hour": "10",

		            "visits": "32.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "43.0",

		            "hour": "11",

		            "visits": "48.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "69.0",

		            "hour": "12",

		            "visits": "34.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "70.0",

		            "hour": "13",

		            "visits": "30.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "52.0",

		            "hour": "14",

		            "visits": "37.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "88.0",

		            "hour": "15",

		            "visits": "34.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "63.0",

		            "hour": "16",

		            "visits": "32.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "42.0",

		            "hour": "17",

		            "visits": "21.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "35.0",

		            "hour": "18",

		            "visits": "18.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "29.0",

		            "hour": "19",

		            "visits": "12.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "25.0",

		            "hour": "20",

		            "visits": "18.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "24.0",

		            "hour": "21",

		            "visits": "12.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "22.0",

		            "hour": "22",

		            "visits": "13.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "17.0",

		            "hour": "23",

		            "visits": "12.0"

		         }

		      ]

		   },

		   "top_referrer_30_days": {

		      "name": "top_referrer_30_days",

		      "totals": {},

		      "meta": {

		         "name": "Top Referrer ",

		         "description": "Top referrers for active onsite users."

		      },

		      "taken_at": "2016-04-27T12:48:04.813Z",

		      "query": {

		         "metrics": [

		            "rt:activeUsers"

		         ],

		         "sort": [

		            "-rt:activeUsers"

		         ],

		         "max-results": 10000,

		         "dimensions": "rt:referrer"

		      },

		      "data": [

		         {

		            "referrer": "Typed/Bookmarked",

		            "instances": 1293

		         },

		         {

		            "referrer": "Other Web Sites",

		            "instances": 848

		         },

		         {

		            "referrer": "Search Engines",

		            "instances": 298

		         },

		         {

		            "referrer": "Social Networks",

		            "instances": 15

		         }

		      ]

		   },

		   "ie_30_days": {

		      "query": {

		         "metrics": [

		            "ga:sessions"

		         ],

		         "sort": [

		            "ga:date",

		            "-ga:sessions"

		         ],

		         "samplingLevel": "HIGHER_PRECISION",

		         "max-results": 10000,

		         "dimensions": "ga:date,ga:browserVersion",

		         "filters": "ga:browser==Internet Explorer;ga:sessions>1000",

		         "start-date": "90daysAgo",

		         "start-index": 1,

		         "end-date": "yesterday"

		      },

		      "meta": {

		         "name": "Internet Explorer",

		         "description": "90 days of visits from Internet Explorer users broken down by version for all sites."

		      },

		      "taken_at": "2016-04-27T08:10:07.866Z",

		      "name": "ie_30_days",

		      "totals": {

		         "ie_version": {
		               "Microsoft Internet Explorer 11": 218,
		               "Microsoft Edge 13": 29,
		               "Microsoft Internet Explorer 10": 9,
		               "Microsoft Internet Explorer 9": 8,
		               "Microsoft Internet Explorer 8": 8,
		               "Microsoft Edge 12": 4,
		               "Internet Explorer Mobile 11.0": 2
		            },

		         "end_date": "2016-04-17",

		         "start_date": "2016-01-19",

		         "visits": 0

		      }

		   },

		   "top_cities_30_days": {

		      "name": "top_cities_30_days",

		      "totals": {},

		      "meta": {

		         "name": "Top Cities (Live)",

		         "description": "Top cities for active onsite users."

		      },

		      "taken_at": "2016-04-27T12:48:04.813Z",

		      "query": {

		         "metrics": [

		            "rt:activeUsers"

		         ],

		         "sort": [

		            "-rt:activeUsers"

		         ],

		         "max-results": 10000,

		         "dimensions": "rt:city"

		      },

		      "data": [

		         {

		            "city": "Atlanta [United States]",

		            "active_visitors": "771.0"

		         },

		         {

		            "city": "Bangalore [India]",

		            "active_visitors": "40.0"

		         },

		         {

		            "city": "Raleigh [United States]",

		            "active_visitors": "39.0"

		         },

		         {

		            "city": "San Jose [United States]",

		            "active_visitors": "38.0"

		         },

		         {

		            "city": "Singapore [Singapore]",

		            "active_visitors": "28.0"

		         },

		         {

		            "city": "San Francisco [United States]",

		            "active_visitors": "26.0"

		         },

		         {

		            "city": "Tokyo [Japan]",

		            "active_visitors": "25.0"

		         },

		         {

		            "city": "Paris [France]",

		            "active_visitors": "24.0"

		         },

		         {

		            "city": "Charlotte [United States]",

		            "active_visitors": "22.0"

		         },

		         {

		            "city": "Moscow [Russian Federation]",

		            "active_visitors": "22.0"

		         },

		         {

		            "city": "London [United Kingdom]",

		            "active_visitors": "22.0"

		         },

		         {

		            "city": "Cairo [Egypt]",

		            "active_visitors": "21.0"

		         },

		         {

		            "city": "Mumbai [India]",

		            "active_visitors": "20.0"

		         },

		         {

		            "city": "Hong Kong [Hong Kong]",

		            "active_visitors": "19.0"

		         },

		         {

		            "city": "New York [United States]",

		            "active_visitors": "18.0"

		         },

		         {

		            "city": "Madrid [Spain]",

		            "active_visitors": "18.0"

		         },

		         {

		            "city": "Johannesburg [South Africa]",

		            "active_visitors": "18.0"

		         },

		         {

		            "city": "Norcross [United States]",

		            "active_visitors": "18.0"

		         },

		         {

		            "city": "Pune [India]",

		            "active_visitors": "17.0"

		         },

		         {

		            "city": "Stockholm [Sweden]",

		            "active_visitors": "16.0"

		         }

		      ]

		   },

		   "top_downloads_7_days": {

		      "name": "top_downloads_7_days",

		      "totals": {},

		      "meta": {

		         "name": "Top Downloads Yesterday",

		         "description": "Top downloads yesterday"

		      },

		      "taken_at": "2016-04-18T08:10:16.228Z",

		      "query": {

		         "metrics": [

		            "ga:totalEvents"

		         ],

		         "sort": [

		            "-ga:totalEvents"

		         ],

		         "samplingLevel": "HIGHER_PRECISION",

		         "max-results": 100,

		         "dimensions": "ga:pageTitle,ga:eventLabel,ga:pagePath",

		         "filters": "ga:eventCategory=~ownload;ga:pagePath!~(usps.com).*/(?i)(zip|doc).*",

		         "start-date": "yesterday",

		         "start-index": 1,

		         "end-date": "yesterday"

		      },

		      "data": [

		         {

		            "event_title": "about/faq/what-are-benefits-red-hat-enterprise-linux-smart-virtualization",

		            "page_title": "pnt/p-408535/RHEL_on_RHEV_Datasheet.pdf",

		            "total_events": "14",

		            "event_label": "connect.redhat.com/about/faq/what-are-benefits-red-hat-enterprise-linux-smart-virtualization",

		            "page": "https://engineering.redhat.com/pnt/p-408535/RHEL_on_RHEV_Datasheet.pdf"

		         },

		         {

		            "event_title": "resources/red-hat-enterprise-linux-openstack-platform-8-partner-integration",

		            "page_title": "s3fs-public/Red_Hat_Enterprise_Linux_OpenStack_Platform-8-Partner_Integration-en-US.pdf",

		            "total_events": "3",

		            "event_label": "connect.redhat.com/resources/red-hat-enterprise-linux-openstack-platform-8-partner-integration",

		            "page": "https://rhc4tp-cms-prod-vpc-76857813.s3.amazonaws.com/s3fs-public/Red_Hat_Enterprise_Linux_OpenStack_Platform-8-Partner_Integration-en-US.pdf"

		         },

		         {

		            "event_title": "resources/why-containerize-your-app",

		            "page_title": "s3fs-public/rh-containerize-your-apps-brochure-v1-INC0298248-201508kvm-en.pdf",

		            "total_events": "1",

		            "event_label": "connect.redhat.com/resources/why-containerize-your-app",

		            "page": "https://rhc4tp-cms-prod-vpc-76857813.s3.amazonaws.com/s3fs-public/rh-containerize-your-apps-brochure-v1-INC0298248-201508kvm-en.pdf"

		         },

		         {

		            "event_title": "resources/openstack-red-hat-and-cloud-system-software-opportunity",

		            "page_title": "system/files/IDC%20OpenStack%20WhitePaper%20Executive%20Summary.pdf",

		            "total_events": "1",

		            "event_label": "connect.redhat.com/resources/openstack-red-hat-and-cloud-system-software-opportunity",

		            "page": "https://connect.redhat.com/system/files/IDC%20OpenStack%20WhitePaper%20Executive%20Summary.pdf"

		         },

		         {

		            "event_title": "resources/red-hat-enterprise-linux-openstack-architecture-cisco-ucs-platform",

		            "page_title": "system/files/ucs_rhos.pdf",

		            "total_events": "1",

		            "event_label": "connect.redhat.com/resources/red-hat-enterprise-linux-openstack-architecture-cisco-ucs-platform",

		            "page": "https://connect.redhat.com/system/files/ucs_rhos.pdf"

		         }

		      ]

		   },

		   "top_referrer_yesterday": {

		      "name": "top_referrer_yesterday",

		      "totals": {},

		      "meta": {

		         "name": "Top Referrer ",

		         "description": "Top referrers for active onsite users."

		      },

		      "taken_at": "2016-04-27T12:48:04.813Z",

		      "query": {

		         "metrics": [

		            "rt:activeUsers"

		         ],

		         "sort": [

		            "-rt:activeUsers"

		         ],

		         "max-results": 10000,

		         "dimensions": "rt:referrer"

		      },

		      "data": [

		         {

		            "referrer": "Other Web Sites",

		            "instances": 36

		         },

		         {

		            "referrer": "Typed/Bookmarked",

		            "instances": 18

		         },

		         {

		            "referrer": "Search Engines",

		            "instances": 10

		         }

		      ]

		   },

		   "devices_7_days": {

		      "query": {

		         "metrics": [

		            "ga:sessions"

		         ],

		         "sort": [

		            "ga:date"

		         ],

		         "samplingLevel": "HIGHER_PRECISION",

		         "max-results": 10000,

		         "dimensions": "ga:date,ga:deviceCategory",

		         "start-date": "90daysAgo",

		         "start-index": 1,

		         "end-date": "yesterday"

		      },

		      "meta": {

		         "name": "Devices",

		         "description": "90 days of desktop/mobile/tablet visits for all sites."

		      },

		      "taken_at": "2016-04-27T08:10:03.924Z",

		      "name": "devices_7_days",

		      "totals": {

		         "end_date": "2016-04-17",

		         "devices": {

		            "Desktop": "533",
		            "Mobile": "18",
		            "Tablet": "6"

		         },

		         "visits": 2601389,

		         "start_date": "2016-01-19"

		      }

		   },

		   "top_countries_yesterday": {

		      "name": "top_countries_yesterday",

		      "totals": {},

		      "meta": {

		         "name": "Top Cities",

		         "description": "Top countries for active onsite users."

		      },

		      "taken_at": "2016-04-27T15:50:05.953Z",

		      "query": {

		         "metrics": [

		            "rt:activeUsers"

		         ],

		         "sort": [

		            "-rt:activeUsers"

		         ],

		         "max-results": 10000,

		         "dimensions": "rt:country"

		      },

		      "data": [

		         {

		            "country": "United States",

		            "active_visitors": "48.0"

		         },

		         {

		            "country": "India",

		            "active_visitors": "6.0"

		         },

		         {

		            "country": "Australia",

		            "active_visitors": "3.0"

		         },

		         {

		            "country": "New Zealand",

		            "active_visitors": "2.0"

		         },

		         {

		            "country": "Singapore",

		            "active_visitors": "2.0"

		         },

		         {

		            "country": "Hong Kong",

		            "active_visitors": "2.0"

		         },

		         {

		            "country": "United Kingdom",

		            "active_visitors": "2.0"

		         },

		         {

		            "country": "Canada",

		            "active_visitors": "2.0"

		         },

		         {

		            "country": "Finland",

		            "active_visitors": "2.0"

		         },

		         {

		            "country": "Poland",

		            "active_visitors": "2.0"

		         },

		         {

		            "country": "Colombia",

		            "active_visitors": "1.0"

		         },

		         {

		            "country": "Italy",

		            "active_visitors": "1.0"

		         },

		         {

		            "country": "Serbia",

		            "active_visitors": "1.0"

		         },

		         {

		            "country": "Taiwan",

		            "active_visitors": "1.0"

		         },

		         {

		            "country": "Portugal",

		            "active_visitors": "1.0"

		         },

		         {

		            "country": "Korea - South",

		            "active_visitors": "1.0"

		         },

		         {

		            "country": "Indonesia",

		            "active_visitors": "1.0"

		         },

		         {

		            "country": "Georgia",

		            "active_visitors": "1.0"

		         },

		         {

		            "country": "Switzerland",

		            "active_visitors": "1.0"

		         },

		         {

		            "country": "South Africa",

		            "active_visitors": "1.0"

		         }

		      ]

		   },

		   "visits_30_days": {

		      "query": {

		         "metrics": [

		            "rt:activeUsers"

		         ],

		         "max-results": 10000

		      },

		      "meta": {

		         "name": "Active Users Right Now",

		         "description": "Number of users currently visiting all sites."

		      },

		      "data": [

		         {

		            "active_visitors": "2887.0"

		         }

		      ],

		      "name": "visits_30_days",

		      "totals": {}

		   },

		   "top_cities_7_days": {

		      "name": "top_cities_7_days",

		      "totals": {},

		      "meta": {

		         "name": "Top Cities (Live)",

		         "description": "Top cities for active onsite users."

		      },

		      "taken_at": "2016-04-27T12:48:04.813Z",

		      "query": {

		         "metrics": [

		            "rt:activeUsers"

		         ],

		         "sort": [

		            "-rt:activeUsers"

		         ],

		         "max-results": 10000,

		         "dimensions": "rt:city"

		      },

		      "data": [

		         {

		            "city": "Bangalore [India]",

		            "active_visitors": "11.0"

		         },

		         {

		            "city": "Singapore [Singapore]",

		            "active_visitors": "8.0"

		         },

		         {

		            "city": "Prague [Czech Republic]",

		            "active_visitors": "8.0"

		         },

		         {

		            "city": "Raleigh [United States]",

		            "active_visitors": "6.0"

		         },

		         {

		            "city": "Jakarta [Indonesia]",

		            "active_visitors": "6.0"

		         },

		         {

		            "city": "Atlanta [United States]",

		            "active_visitors": "6.0"

		         },

		         {

		            "city": "Tokyo [Japan]",

		            "active_visitors": "6.0"

		         },

		         {

		            "city": "Charlotte [United States]",

		            "active_visitors": "6.0"

		         },

		         {

		            "city": "San Jose [United States]",

		            "active_visitors": "5.0"

		         },

		         {

		            "city": "Stockholm [Sweden]",

		            "active_visitors": "5.0"

		         },

		         {

		            "city": "Moscow [Russian Federation]",

		            "active_visitors": "5.0"

		         },

		         {

		            "city": "San Francisco [United States]",

		            "active_visitors": "5.0"

		         },

		         {

		            "city": "Seoul [Korea - South]",

		            "active_visitors": "5.0"

		         },

		         {

		            "city": "Hong Kong [Hong Kong]",

		            "active_visitors": "5.0"

		         },

		         {

		            "city": "Montreal [Canada]",

		            "active_visitors": "4.0"

		         },

		         {

		            "city": "Paris [France]",

		            "active_visitors": "4.0"

		         },

		         {

		            "city": "Helsinki [Finland]",

		            "active_visitors": "4.0"

		         },

		         {

		            "city": "Pune [India]",

		            "active_visitors": "4.0"

		         },

		         {

		            "city": "New Delhi [India]",

		            "active_visitors": "4.0"

		         },

		         {

		            "city": "Reston [United States]",

		            "active_visitors": "4.0"

		         }

		      ]

		   },

		   "top_domains_7_days": {

		      "name": "top-pages-realtime",

		      "totals": {},

		      "meta": {

		         "name": "Top Pages (Live)",

		         "description": "The top 20 pages, measured by active onsite users, for all sites."

		      },

		      "taken_at": "2016-04-27T11:08:04.211Z",

		      "query": {

		         "metrics": [

		            "rt:activeUsers"

		         ],

		         "sort": [

		            "-rt:activeUsers"

		         ],

		         "max-results": 20,

		         "dimensions": "rt:pagePath,rt:pageTitle"

		      },

		      "data": [

		         {

		            "active_visitors": "229",

		            "page_title": "connect.redhat.com/",

		            "page": "connect.redhat.com/"

		         },

		         {

		            "active_visitors": "65",

		            "page_title": "user/dashboard",

		            "page": "connect.redhat.com/user/dashboard"

		         },

		         {

		            "active_visitors": "58",

		            "page_title": "user/register/lookup",

		            "page": "connect.redhat.com/user/register/lookup"

		         },

		         {

		            "active_visitors": "55",

		            "page_title": "zones/containers",

		            "page": "connect.redhat.com/zones/containers"

		         },

		         {

		            "active_visitors": "41",

		            "page_title": "resources",

		            "page": "connect.redhat.com/resources"

		         },

		         {

		            "active_visitors": "29",

		            "page_title": "zones/red-hat-enterprise-linux",

		            "page": "connect.redhat.com/zones/red-hat-enterprise-linux"

		         },

		         {

		            "active_visitors": "27",

		            "page_title": "user/register/lookup/company",

		            "page": "connect.redhat.com/user/register/lookup/company"

		         },

		         {

		            "active_visitors": "21",

		            "page_title": "activities/certification",

		            "page": "connect.redhat.com/activities/certification"

		         },

		         {

		            "active_visitors": "20",

		            "page_title": "zones/openstack",

		            "page": "connect.redhat.com/zones/openstack"

		         },

		         {

		            "active_visitors": "18",

		            "page_title": "zones",

		            "page": "connect.redhat.com/zones"

		         },

		         {

		            "active_visitors": "17",

		            "page_title": "about/faq/what-are-benefits-red-hat-enterprise-linux-smart-virtualization",

		            "page": "connect.redhat.com/about/faq/what-are-benefits-red-hat-enterprise-linux-smart-virtualization"

		         },

		         {

		            "active_visitors": "14",

		            "page_title": "user/autologout",

		            "page": "connect.redhat.com/user/autologout"

		         },

		         {

		            "active_visitors": "13",

		            "page_title": "partners",

		            "page": "connect.redhat.com/partners"

		         },

		         {

		            "active_visitors": "13",

		            "page_title": "zones/containers/why-certify-containers",

		            "page": "connect.redhat.com/zones/containers/why-certify-containers"

		         },

		         {

		            "active_visitors": "13",

		            "page_title": "about/faq/what-red-hat-enterprise-linux-smart-virtualization",

		            "page": "connect.redhat.com/about/faq/what-red-hat-enterprise-linux-smart-virtualization"

		         },

		         {

		            "active_visitors": "11",

		            "page_title": "about/program-overview/red-hat-product-portfolio",

		            "page": "connect.redhat.com/about/program-overview/red-hat-product-portfolio"

		         },

		         {

		            "active_visitors": "11",

		            "page_title": "zones/nfv/nfv-certification",

		            "page": "connect.redhat.com/zones/nfv/nfv-certification"

		         },

		         {

		            "active_visitors": "10",

		            "page_title": "zones/jboss-middleware",

		            "page": "connect.redhat.com/zones/jboss-middleware"

		         },

		         {

		            "active_visitors": "10",

		            "page_title": "activities/early-access",

		            "page": "connect.redhat.com/activities/early-access"

		         },

		         {

		            "active_visitors": "10",

		            "page_title": "about/program-overview/how-use-site",

		            "page": "connect.redhat.com/about/program-overview/how-use-site"

		         }

		      ]

		   },

		   "top_downloads_yesterday": {

		      "name": "top_downloads_yesterday",

		      "totals": {},

		      "meta": {

		         "name": "Top Downloads Yesterday",

		         "description": "Top downloads yesterday"

		      },

		      "taken_at": "2016-04-18T08:10:16.228Z",

		      "query": {

		         "metrics": [

		            "ga:totalEvents"

		         ],

		         "sort": [

		            "-ga:totalEvents"

		         ],

		         "samplingLevel": "HIGHER_PRECISION",

		         "max-results": 100,

		         "dimensions": "ga:pageTitle,ga:eventLabel,ga:pagePath",

		         "filters": "ga:eventCategory=~ownload;ga:pagePath!~(usps.com).*/(?i)(zip|doc).*",

		         "start-date": "yesterday",

		         "start-index": 1,

		         "end-date": "yesterday"

		      },

		      "data": [
		               {
		                   "event_title":"about/faq/what-are-benefits-red-hat-enterprise-linux-smart-virtualization",
		                   "page_title":"pnt/p-408535/RHEL_on_RHEV_Datasheet.pdf",
		                   "total_events":"5",
		                   "event_label":"connect.redhat.com/about/faq/what-are-benefits-red-hat-enterprise-linux-smart-virtualization",
		                   "page":"https://engineering.redhat.com/pnt/p-408535/RHEL_on_RHEV_Datasheet.pdf"
		                },
		                {
		                   "event_title":"resources/why-containerize-your-app",
		                   "page_title":"s3fs-public/rh-containerize-your-apps-brochure-v1-INC0298248-201508kvm-en.pdf",
		                   "total_events":"1",
		                   "event_label":"connect.redhat.com/resources/why-containerize-your-app",
		                   "page":"https://rhc4tp-cms-prod-vpc-76857813.s3.amazonaws.com/s3fs-public/rh-containerize-your-apps-brochure-v1-INC0298248-201508kvm-en.pdf"
		                },
		                {
		                   "event_title":"resources/red-hat-enterprise-linux-openstack-architecture-cisco-ucs-platform",
		                   "page_title":"system/files/ucs_rhos.pdf",
		                   "total_events":"1",
		                   "event_label":"connect.redhat.com/resources/red-hat-enterprise-linux-openstack-architecture-cisco-ucs-platform",
		                   "page":"https://connect.redhat.com/system/files/ucs_rhos.pdf"
		                }
		             ]

		   },

		   "os_7_days": {

		      "query": {

		         "metrics": [

		            "ga:sessions"

		         ],

		         "sort": [

		            "ga:date"

		         ],

		         "samplingLevel": "HIGHER_PRECISION",

		         "max-results": 10000,

		         "dimensions": "ga:date,ga:operatingSystem",

		         "filters": "ga:sessions>1000",

		         "start-date": "90daysAgo",

		         "start-index": 1,

		         "end-date": "yesterday"

		      },

		      "meta": {

		         "name": "Operating Systems",

		         "description": "90 days of visits, broken down by operating system and date, for all sites."

		      },

		      "taken_at": "2016-04-27T08:10:04.392Z",

		      "name": "os_7_days",

		      "totals": {

		         "end_date": "2016-04-17",

		         "os": {

		               "Microsoft Windows": 312,
		               "Apple Macintosh": 136,
		               "GNU/Linux": 75,
		               "Apple iOS": 13,
		               "Chrome OS": 10,
		               "Google Android": 10,
		               "Microsoft Windows Phone/Mobile": 1

		            },

		         "start_date": "2016-01-19",

		         "visits": 1974502576

		      }

		   },

		   "os_30_days": {

		      "query": {

		         "metrics": [

		            "ga:sessions"

		         ],

		         "sort": [

		            "ga:date"

		         ],

		         "samplingLevel": "HIGHER_PRECISION",

		         "max-results": 10000,

		         "dimensions": "ga:date,ga:operatingSystem",

		         "filters": "ga:sessions>1000",

		         "start-date": "90daysAgo",

		         "start-index": 1,

		         "end-date": "yesterday"

		      },

		      "meta": {

		         "name": "Operating Systems",

		         "description": "90 days of visits, broken down by operating system and date, for all sites."

		      },

		      "taken_at": "2016-04-27T08:10:04.392Z",

		      "name": "os_30_days",

		      "totals": {

		         "end_date": "2016-04-17",

		         "os": {
		               "Microsoft Windows": 1684,
		               "GNU/Linux": 1204,
		               "Apple Macintosh": 672,
		               "Apple iOS": 95,
		               "Google Android": 80,
		               "Chrome OS": 15,
		               "Microsoft Windows Phone/Mobile": 3,
		               "Blackberry": 1,
		               "Unspecified": 1
		            },
		         "start_date": "2016-01-19",

		         "visits": 1974502576

		      }

		   },

		   "top_referrer_7_days": {

		      "name": "top_referrer_7_days",

		      "totals": {},

		      "meta": {

		         "name": "Top Referrer ",

		         "description": "Top referrers for active onsite users."

		      },

		      "taken_at": "2016-04-27T12:48:04.813Z",

		      "query": {

		         "metrics": [

		            "rt:activeUsers"

		         ],

		         "sort": [

		            "-rt:activeUsers"

		         ],

		         "max-results": 10000,

		         "dimensions": "rt:referrer"

		      },

		      "data": [

		         {

		            "referrer": "Other Web Sites",

		            "instances": 182

		         },

		         {

		            "referrer": "Typed/Bookmarked",

		            "instances": 107

		         },

		         {

		            "referrer": "Search Engines",

		            "instances": 52

		         }

		      ]

		   },

		   "top_pages_realtime": {

		      "name": "top-pages-realtime",

		      "totals": {},

		      "meta": {

		         "name": "Top Pages (Live)",

		         "description": "The top 20 pages, measured by active onsite users, for all sites."

		      },

		      "taken_at": "2016-04-27T11:08:04.211Z",

		      "query": {

		         "metrics": [

		            "rt:activeUsers"

		         ],

		         "sort": [

		            "-rt:activeUsers"

		         ],

		         "max-results": 20,

		         "dimensions": "rt:pagePath,rt:pageTitle"

		      },

		      "data": [

		         {

		            "active_visitors": "51",

		            "page_title": "connect.redhat.com/",

		            "page": "connect.redhat.com/"

		         },

		         {

		            "active_visitors": "13",

		            "page_title": "zones/containers",

		            "page": "connect.redhat.com/zones/containers"

		         },

		         {

		            "active_visitors": "12",

		            "page_title": "user/dashboard",

		            "page": "connect.redhat.com/user/dashboard"

		         },

		         {

		            "active_visitors": "11",

		            "page_title": "user/register/lookup",

		            "page": "connect.redhat.com/user/register/lookup"

		         },

		         {

		            "active_visitors": "8",

		            "page_title": "user/register/lookup/company",

		            "page": "connect.redhat.com/user/register/lookup/company"

		         },

		         {

		            "active_visitors": "6",

		            "page_title": "about/faq/what-are-benefits-red-hat-enterprise-linux-smart-virtualization",

		            "page": "connect.redhat.com/about/faq/what-are-benefits-red-hat-enterprise-linux-smart-virtualization"

		         },

		         {

		            "active_visitors": "6",

		            "page_title": "zones/containers/why-certify-containers",

		            "page": "connect.redhat.com/zones/containers/why-certify-containers"

		         },

		         {

		            "active_visitors": "6",

		            "page_title": "zones/red-hat-enterprise-linux",

		            "page": "connect.redhat.com/zones/red-hat-enterprise-linux"

		         },

		         {

		            "active_visitors": "6",

		            "page_title": "activities/certification",

		            "page": "connect.redhat.com/activities/certification"

		         },

		         {

		            "active_visitors": "5",

		            "page_title": "zones/openstack",

		            "page": "connect.redhat.com/zones/openstack"

		         },

		         {

		            "active_visitors": "5",

		            "page_title": "about/faq/what-red-hat-enterprise-linux-smart-virtualization",

		            "page": "connect.redhat.com/about/faq/what-red-hat-enterprise-linux-smart-virtualization"

		         },

		         {

		            "active_visitors": "4",

		            "page_title": "activities/early-access",

		            "page": "connect.redhat.com/activities/early-access"

		         },

		         {

		            "active_visitors": "4",

		            "page_title": "about/program-overview",

		            "page": "connect.redhat.com/about/program-overview"

		         },

		         {

		            "active_visitors": "4",

		            "page_title": "resources",

		            "page": "connect.redhat.com/resources"

		         },

		         {

		            "active_visitors": "4",

		            "page_title": "zones",

		            "page": "connect.redhat.com/zones"

		         },

		         {

		            "active_visitors": "3",

		            "page_title": "about/program-overview/red-hat-product-portfolio",

		            "page": "connect.redhat.com/about/program-overview/red-hat-product-portfolio"

		         },

		         {

		            "active_visitors": "3",

		            "page_title": "zones/jboss-middleware",

		            "page": "connect.redhat.com/zones/jboss-middleware"

		         },

		         {

		            "active_visitors": "3",

		            "page_title": "zones/303/faq/201",

		            "page": "connect.redhat.com/zones/303/faq/201"

		         },

		         {

		            "active_visitors": "3",

		            "page_title": "zones/containers/adopt-containers",

		            "page": "connect.redhat.com/zones/containers/adopt-containers"

		         },

		         {

		            "active_visitors": "3",

		            "page_title": "blog/api-gateways-and-api-program-management-3scale-and-red-hat",

		            "page": "connect.redhat.com/blog/api-gateways-and-api-program-management-3scale-and-red-hat"

		         }

		      ]

		   },

		   "top_domains_30_days": {

		      "name": "top-pages-realtime",

		      "totals": {},

		      "meta": {

		         "name": "Top Pages (Live)",

		         "description": "The top 20 pages, measured by active onsite users, for all sites."

		      },

		      "taken_at": "2016-04-27T11:08:04.211Z",

		      "query": {

		         "metrics": [

		            "rt:activeUsers"

		         ],

		         "sort": [

		            "-rt:activeUsers"

		         ],

		         "max-results": 20,

		         "dimensions": "rt:pagePath,rt:pageTitle"

		      },

		      "data": [

		         {

		            "active_visitors": "1235",

		            "page_title": "connect.redhat.com/",

		            "page": "connect.redhat.com/"

		         },

		         {

		            "active_visitors": "554",

		            "page_title": "stage-connect.redhat.com/",

		            "page": "stage-connect.redhat.com/"

		         },

		         {

		            "active_visitors": "326",

		            "page_title": "user/register/lookup",

		            "page": "connect.redhat.com/user/register/lookup"

		         },

		         {

		            "active_visitors": "303",

		            "page_title": "user/dashboard",

		            "page": "connect.redhat.com/user/dashboard"

		         },

		         {

		            "active_visitors": "261",

		            "page_title": "zones/containers",

		            "page": "connect.redhat.com/zones/containers"

		         },

		         {

		            "active_visitors": "236",

		            "page_title": "user/register/lookup/company",

		            "page": "connect.redhat.com/user/register/lookup/company"

		         },

		         {

		            "active_visitors": "189",

		            "page_title": "resources",

		            "page": "connect.redhat.com/resources"

		         },

		         {

		            "active_visitors": "117",

		            "page_title": "zones/red-hat-enterprise-linux",

		            "page": "connect.redhat.com/zones/red-hat-enterprise-linux"

		         },

		         {

		            "active_visitors": "112",

		            "page_title": "fte-connect.redhat.com/",

		            "page": "fte-connect.redhat.com/"

		         },

		         {

		            "active_visitors": "89",

		            "page_title": "zones/openstack",

		            "page": "connect.redhat.com/zones/openstack"

		         },

		         {

		            "active_visitors": "81",

		            "page_title": "zones",

		            "page": "connect.redhat.com/zones"

		         },

		         {

		            "active_visitors": "79",

		            "page_title": "activities/certification",

		            "page": "connect.redhat.com/activities/certification"

		         },

		         {

		            "active_visitors": "77",

		            "page_title": "user/autologout",

		            "page": "connect.redhat.com/user/autologout"

		         },

		         {

		            "active_visitors": "67",

		            "page_title": "partner",

		            "page": "connect.redhat.com/partner"

		         },

		         {

		            "active_visitors": "66",

		            "page_title": "zones/nfv",

		            "page": "connect.redhat.com/zones/nfv"

		         },

		         {

		            "active_visitors": "60",

		            "page_title": "about/program-overview/red-hat-product-portfolio",

		            "page": "connect.redhat.com/about/program-overview/red-hat-product-portfolio"

		         },

		         {

		            "active_visitors": "59",

		            "page_title": "join",

		            "page": "connect.redhat.com/join"

		         },

		         {

		            "active_visitors": "53",

		            "page_title": "forms/user-application",

		            "page": "connect.redhat.com/forms/user-application"

		         },

		         {

		            "active_visitors": "52",

		            "page_title": "activities/early-access",

		            "page": "connect.redhat.com/activities/early-access"

		         },

		         {

		            "active_visitors": "52",

		            "page_title": "blog/api-gateways-and-api-program-management-3scale-and-red-hat",

		            "page": "connect.redhat.com/blog/api-gateways-and-api-program-management-3scale-and-red-hat"

		         }

		      ]

		   },

		   "top_cities_yesterday": {

		      "name": "top_cities_yesterday",

		      "totals": {},

		      "meta": {

		         "name": "Top Cities (Live)",

		         "description": "Top cities for active onsite users."

		      },

		      "taken_at": "2016-04-27T12:48:04.813Z",

		      "query": {

		         "metrics": [

		            "rt:activeUsers"

		         ],

		         "sort": [

		            "-rt:activeUsers"

		         ],

		         "max-results": 10000,

		         "dimensions": "rt:city"

		      },

		      "data": [

		         {

		            "city": "Islamabad [Pakistan]",

		            "active_visitors": "6.0"

		         },

		         {

		            "city": "London [United Kingdom]",

		            "active_visitors": "3.0"

		         },

		         {

		            "city": "Shanghai [China]",

		            "active_visitors": "2.0"

		         },

		         {

		            "city": "Fremont [United States]",

		            "active_visitors": "2.0"

		         },

		         {

		            "city": "Poznan [Poland]",

		            "active_visitors": "2.0"

		         },

		         {

		            "city": "Exeter [United Kingdom]",

		            "active_visitors": "1.0"

		         },

		         {

		            "city": "Reutov [Russian Federation]",

		            "active_visitors": "1.0"

		         },

		         {

		            "city": "Paris [France]",

		            "active_visitors": "1.0"

		         },

		         {

		            "city": "Chantilly [United States]",

		            "active_visitors": "1.0"

		         },

		         {

		            "city": "Osaka [Japan]",

		            "active_visitors": "1.0"

		         },

		         {

		            "city": "Zywiec [Poland]",

		            "active_visitors": "1.0"

		         },

		         {

		            "city": "Pleasanton [United States]",

		            "active_visitors": "1.0"

		         },

		         {

		            "city": "Belgrade [Serbia]",

		            "active_visitors": "1.0"

		         },

		         {

		            "city": "Gunzenhausen [Germany]",

		            "active_visitors": "1.0"

		         },

		         {

		            "city": "Aroneanu [Romania]",

		            "active_visitors": "1.0"

		         },

		         {

		            "city": "Hanau [Germany]",

		            "active_visitors": "1.0"

		         },

		         {

		            "city": "Pune [India]",

		            "active_visitors": "1.0"

		         },

		         {

		            "city": "Aldershot [United Kingdom]",

		            "active_visitors": "1.0"

		         },

		         {

		            "city": "Dallas [United States]",

		            "active_visitors": "1.0"

		         },

		         {

		            "city": "Karachi [Pakistan]",

		            "active_visitors": "1.0"

		         }

		      ]

		   },

		   "ie_7_days": {

		      "query": {

		         "metrics": [

		            "ga:sessions"

		         ],

		         "sort": [

		            "ga:date",

		            "-ga:sessions"

		         ],

		         "samplingLevel": "HIGHER_PRECISION",

		         "max-results": 10000,

		         "dimensions": "ga:date,ga:browserVersion",

		         "filters": "ga:browser==Internet Explorer;ga:sessions>1000",

		         "start-date": "90daysAgo",

		         "start-index": 1,

		         "end-date": "yesterday"

		      },

		      "meta": {

		         "name": "Internet Explorer",

		         "description": "90 days of visits from Internet Explorer users broken down by version for all sites."

		      },

		      "taken_at": "2016-04-27T08:10:07.866Z",

		      "name": "ie_7_days",

		      "totals": {

		         "ie_version": {

		               "Microsoft Internet Explorer 11": 45,
		               "Microsoft Edge 13": 3,
		               "Microsoft Internet Explorer 10": 2,
		               "Internet Explorer Mobile 11.0": 1
		            },
		         "end_date": "2016-04-17",

		         "start_date": "2016-01-19",

		         "visits": 0

		      }

		   },

		   "visits_yesterday_hourly": {

		      "name": "visits_yesterday_hourly",

		      "totals": {

		         "end_date": "2016-04-17",

		         "start_date": "2016-01-19",

		         "visits": 0

		      },

		      "meta": {

		         "name": "visits_yesterday_hourly",

		         "description": "yesterday's visits for all sites."

		      },

		      "taken_at": "2016-04-27T12:27:11.075Z",

		      "query": {

		         "max-results": 10000,

		         "dimensions": "ga:date,ga:hour",

		         "start-date": "visits_yesterday_hourly",

		         "start-index": 1,

		         "metrics": [

		            "ga:sessions"

		         ],

		         "samplingLevel": "HIGHER_PRECISION",

		         "end-date": "visits_yesterday_hourly"

		      },

		      "data": [

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "2.0",

		            "hour": "00",

		            "visits": "3.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "1.0",

		            "hour": "01",

		            "visits": "6.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "8.0",

		            "hour": "02",

		            "visits": "4.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "5.0",

		            "hour": "03",

		            "visits": "3.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "5.0",

		            "hour": "04",

		            "visits": "2.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "8.0",

		            "hour": "05",

		            "visits": "3.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "4.0",

		            "hour": "06",

		            "visits": "1.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "5.0",

		            "hour": "07",

		            "visits": "4.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "6.0",

		            "hour": "08",

		            "visits": "8.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "7.0",

		            "hour": "09",

		            "visits": "8.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "6.0",

		            "hour": "10",

		            "visits": "5.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "13.0",

		            "hour": "11",

		            "visits": "9.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "6.0",

		            "hour": "12",

		            "visits": "8.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "7.0",

		            "hour": "13",

		            "visits": "3.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "10.0",

		            "hour": "14",

		            "visits": "8.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "5.0",

		            "hour": "15",

		            "visits": "11.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "7.0",

		            "hour": "16",

		            "visits": "9.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "3.0",

		            "hour": "17",

		            "visits": "5.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "4.0",

		            "hour": "18",

		            "visits": "2.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "1.0",

		            "hour": "19",

		            "visits": "4.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "2.0",

		            "hour": "20",

		            "visits": "7.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "2.0",

		            "hour": "21",

		            "visits": "3.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "3.0",

		            "hour": "22",

		            "visits": "1.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "0.0",

		            "hour": "23",

		            "visits": "1.0"

		         }

		      ]

		   },

		   "visits_7_days": {

		      "query": {

		         "metrics": [

		            "rt:activeUsers"

		         ],

		         "max-results": 10000

		      },

		      "meta": {

		         "name": "Active Users Right Now",

		         "description": "Number of users currently visiting all sites."

		      },

		      "data": [

		         {

		            "active_visitors": "440.0"

		         }

		      ],

		      "name": "visits_7_days",

		      "totals": {}

		   },

		   "browsers_7_days": {

		      "query": {

		         "metrics": [

		            "ga:sessions"

		         ],

		         "sort": [

		            "ga:date",

		            "-ga:sessions"

		         ],

		         "samplingLevel": "HIGHER_PRECISION",

		         "max-results": 10000,

		         "dimensions": "ga:date,ga:browser",

		         "filters": "ga:sessions>1000",

		         "start-date": "90daysAgo",

		         "start-index": 1,

		         "end-date": "yesterday"

		      },

		      "meta": {

		         "name": "Browsers",

		         "description": "90 days of visits broken down by browser for all sites."

		      },

		      "taken_at": "2016-04-27T08:10:07.332Z",

		      "name": "browsers_7_days",

		      "totals": {

		         "end_date": "2016-04-17",

		         "start_date": "2016-01-19",

		         "visits": 1974241511,

		         "browser": {
		               "Chrome": 335,
		               "Firefox": 128,
		               "Internet Explorer": 51,
		               "Safari": 40,
		               "Other": 2,
		               "Yandex": 1
		            }
		      }

		   },

		   "visits_30days_hourly": {

		      "name": "visits_30days_hourly",

		      "totals": {

		         "end_date": "2016-04-17",

		         "start_date": "2016-01-19",

		         "visits": 0

		      },

		      "meta": {

		         "name": "visits_30days_hourly",

		         "description": "30days's visits for all sites."

		      },

		      "taken_at": "2016-04-27T12:27:11.075Z",

		      "query": {

		         "max-results": 10000,

		         "dimensions": "ga:date,ga:hour",

		         "start-date": "visits_30days_hourly",

		         "start-index": 1,

		         "metrics": [

		            "ga:sessions"

		         ],

		         "samplingLevel": "HIGHER_PRECISION",

		         "end-date": "visits_30days_hourly"

		      },

		      "data": [

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "94.0",

		            "hour": "00",

		            "visits": "158.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "103.0",

		            "hour": "01",

		            "visits": "147.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "120.0",

		            "hour": "02",

		            "visits": "159.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "153.0",

		            "hour": "03",

		            "visits": "122.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "156.0",

		            "hour": "04",

		            "visits": "141.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "136.0",

		            "hour": "05",

		            "visits": "192.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "109.0",

		            "hour": "06",

		            "visits": "160.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "145.0",

		            "hour": "07",

		            "visits": "178.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "169.0",

		            "hour": "08",

		            "visits": "206.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "236.0",

		            "hour": "09",

		            "visits": "216.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "251.0",

		            "hour": "10",

		            "visits": "236.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "234.0",

		            "hour": "11",

		            "visits": "201.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "175.0",

		            "hour": "12",

		            "visits": "205.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "233.0",

		            "hour": "13",

		            "visits": "262.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "302.0",

		            "hour": "14",

		            "visits": "234.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "271.0",

		            "hour": "15",

		            "visits": "213.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "193.0",

		            "hour": "16",

		            "visits": "195.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "124.0",

		            "hour": "17",

		            "visits": "149.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "131.0",

		            "hour": "18",

		            "visits": "110.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "123.0",

		            "hour": "19",

		            "visits": "102.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "101.0",

		            "hour": "20",

		            "visits": "99.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "104.0",

		            "hour": "21",

		            "visits": "71.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "123.0",

		            "hour": "22",

		            "visits": "96.0"

		         },

		         {

		            "date": "2016-05-19",

		            "visits_dbp": "139.0",

		            "hour": "23",

		            "visits": "98.0"

		         }

		      ]

		   },

		   "devices_yesterday": {

		      "query": {

		         "metrics": [

		            "ga:sessions"

		         ],

		         "sort": [

		            "ga:date"

		         ],

		         "samplingLevel": "HIGHER_PRECISION",

		         "max-results": 10000,

		         "dimensions": "ga:date,ga:deviceCategory",

		         "start-date": "90daysAgo",

		         "start-index": 1,

		         "end-date": "yesterday"

		      },

		      "meta": {

		         "name": "Devices",

		         "description": "90 days of desktop/mobile/tablet visits for all sites."

		      },

		      "taken_at": "2016-04-27T08:10:03.924Z",

		      "name": "devices_yesterday",

		      "totals": {

		         "end_date": "2016-04-17",

		         "devices": {

		            "Desktop": "107",
		            "Mobile": "4",
		            "Tablet": "0",

		         },

		         "visits": 2601389,

		         "start_date": "2016-01-19"

		      }

		   },

		   "ie_yesterday": {

		      "query": {

		         "metrics": [

		            "ga:sessions"

		         ],

		         "sort": [

		            "ga:date",

		            "-ga:sessions"

		         ],

		         "samplingLevel": "HIGHER_PRECISION",

		         "max-results": 10000,

		         "dimensions": "ga:date,ga:browserVersion",

		         "filters": "ga:browser==Internet Explorer;ga:sessions>1000",

		         "start-date": "90daysAgo",

		         "start-index": 1,

		         "end-date": "yesterday"

		      },

		      "meta": {

		         "name": "Internet Explorer",

		         "description": "90 days of visits from Internet Explorer users broken down by version for all sites."

		      },

		      "taken_at": "2016-04-27T08:10:07.866Z",

		      "name": "ie_yesterday",

		      "totals": {

		         "ie_version": {
		               "Microsoft Internet Explorer 11": 10

		            },
		         "end_date": "2016-04-17",
		         "start_date": "2016-01-19",
		         "visits": 0
		      }

		   },

		   "devices_30_days": {

		      "query": {

		         "metrics": [

		            "ga:sessions"

		         ],

		         "sort": [

		            "ga:date"

		         ],

		         "samplingLevel": "HIGHER_PRECISION",

		         "max-results": 10000,

		         "dimensions": "ga:date,ga:deviceCategory",

		         "start-date": "90daysAgo",

		         "start-index": 1,

		         "end-date": "yesterday"

		      },

		      "meta": {

		         "name": "Devices",

		         "description": "90 days of desktop/mobile/tablet visits for all sites."

		      },

		      "taken_at": "2016-04-27T08:10:03.924Z",

		      "name": "devices_30_days",

		      "totals": {

		         "end_date": "2016-04-17",

		         "devices": {
		            "Desktop": "3575",
		            
		            "Mobile": "148",

		            "Tablet": "32",

		         },

		         "visits": 2601389,

		         "start_date": "2016-01-19"

		      }

		   },

		   "top_countries_30_days": {

		      "name": "top_countries_30_days",

		      "totals": {},

		      "meta": {

		         "name": "Top Cities",

		         "description": "Top countries for active onsite users."

		      },

		      "taken_at": "2016-04-27T15:50:05.953Z",

		      "query": {

		         "metrics": [

		            "rt:activeUsers"

		         ],

		         "sort": [

		            "-rt:activeUsers"

		         ],

		         "max-results": 10000,

		         "dimensions": "rt:country"

		      },

		      "data": [

		         {

		            "country": "United States",

		            "active_visitors": "1603.0"

		         },

		         {

		            "country": "India",

		            "active_visitors": "146.0"

		         },

		         {

		            "country": "United Kingdom",

		            "active_visitors": "90.0"

		         },

		         {

		            "country": "Canada",

		            "active_visitors": "75.0"

		         },

		         {

		            "country": "Japan",

		            "active_visitors": "74.0"

		         },

		         {

		            "country": "Germany",

		            "active_visitors": "60.0"

		         },

		         {

		            "country": "France",

		            "active_visitors": "54.0"

		         },

		         {

		            "country": "Brazil",

		            "active_visitors": "46.0"

		         },

		         {

		            "country": "Spain",

		            "active_visitors": "40.0"

		         },

		         {

		            "country": "Italy",

		            "active_visitors": "37.0"

		         },

		         {

		            "country": "Australia",

		            "active_visitors": "36.0"

		         },

		         {

		            "country": "Russian Federation",

		            "active_visitors": "32.0"

		         },

		         {

		            "country": "Singapore",

		            "active_visitors": "28.0"

		         },

		         {

		            "country": "Netherlands",

		            "active_visitors": "28.0"

		         },

		         {

		            "country": "China",

		            "active_visitors": "25.0"

		         },

		         {

		            "country": "Egypt",

		            "active_visitors": "23.0"

		         },

		         {

		            "country": "South Africa",

		            "active_visitors": "22.0"

		         },

		         {

		            "country": "Sweden",

		            "active_visitors": "21.0"

		         },

		         {

		            "country": "Poland",

		            "active_visitors": "21.0"

		         },

		         {

		            "country": "Hong Kong",

		            "active_visitors": "20.0"

		         }

		      ]

		   },

		   "visits_yesterday": {

		      "query": {

		         "metrics": [

		            "rt:activeUsers"

		         ],

		         "max-results": 10000

		      },

		      "meta": {

		         "name": "Active Users Right Now",

		         "description": "Number of users currently visiting all sites."

		      },

		      "data": [

		         {

		            "active_visitors": "93.0"

		         }

		      ],

		      "name": "visits_yesterday",

		      "totals": {}

		   },

		   "top_countries_7_days": {

		      "name": "top_countries_7_days",

		      "totals": {},

		      "meta": {

		         "name": "Top Cities",

		         "description": "Top countries for active onsite users."

		      },

		      "taken_at": "2016-04-27T15:50:05.953Z",

		      "query": {

		         "metrics": [

		            "rt:activeUsers"

		         ],

		         "sort": [

		            "-rt:activeUsers"

		         ],

		         "max-results": 10000,

		         "dimensions": "rt:country"

		      },

		      "data": [

		         {

		            "country": "United States",

		            "active_visitors": "178.0"

		         },

		         {

		            "country": "India",

		            "active_visitors": "35.0"

		         },

		         {

		            "country": "Canada",

		            "active_visitors": "16.0"

		         },

		         {

		            "country": "Japan",

		            "active_visitors": "13.0"

		         },

		         {

		            "country": "France",

		            "active_visitors": "12.0"

		         },

		         {

		            "country": "United Kingdom",

		            "active_visitors": "11.0"

		         },

		         {

		            "country": "Germany",

		            "active_visitors": "9.0"

		         },

		         {

		            "country": "Czech Republic",

		            "active_visitors": "9.0"

		         },

		         {

		            "country": "Singapore",

		            "active_visitors": "8.0"

		         },

		         {

		            "country": "Italy",

		            "active_visitors": "8.0"

		         },

		         {

		            "country": "Australia",

		            "active_visitors": "8.0"

		         },

		         {

		            "country": "Brazil",

		            "active_visitors": "8.0"

		         },

		         {

		            "country": "Hong Kong",

		            "active_visitors": "6.0"

		         },

		         {

		            "country": "Taiwan",

		            "active_visitors": "6.0"

		         },

		         {

		            "country": "Korea - South",

		            "active_visitors": "6.0"

		         },

		         {

		            "country": "Indonesia",

		            "active_visitors": "6.0"

		         },

		         {

		            "country": "Finland",

		            "active_visitors": "6.0"

		         },

		         {

		            "country": "Sweden",

		            "active_visitors": "6.0"

		         },

		         {

		            "country": "Russian Federation",

		            "active_visitors": "6.0"

		         },

		         {

		            "country": "Egypt",

		            "active_visitors": "5.0"

		         }

		      ]

		   }

		};