$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("NewEra_388.feature");
formatter.feature({
  "line": 1,
  "name": "My Account tiles",
  "description": "As a Sitecore user \r\nI want to be able to select different views of the your account page \r\nSo that different payment types/account states have different default datasources",
  "id": "my-account-tiles",
  "keyword": "Feature"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "user is on Testserver \"http://sm10372/legacylogin\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://sm10372/legacylogin",
      "offset": 23
    }
  ],
  "location": "CommonStepDefinitions.user_is_on_Testserver(String)"
});
formatter.result({
  "duration": 42328980607,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "OD unmonitored card payment logged on customer",
  "description": "",
  "id": "my-account-tiles;od-unmonitored-card-payment-logged-on-customer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "that I am a \"OD unmonitored card payment customer\"",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user is logged in as with these credentials, username: \"loooey-1\" and password \"password1\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "My account screen is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the page has loaded",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I am shown \"the OD version of\" the Your Account page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Tile 1 is \"bill\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Tile 2 is \"meter readings\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Tile 3 is \"Your payments\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Tile 4 is \"Check your tariff\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Tile 5 is \"Get a smart meter\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Tile 6 is \"Your Rewards\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Tile 7 is \"Your energy use\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "OD unmonitored card payment customer",
      "offset": 13
    }
  ],
  "location": "CommonStepDefinitions.that_I_am_a(String)"
});
formatter.result({
  "duration": 1640945,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loooey-1",
      "offset": 56
    },
    {
      "val": "password1",
      "offset": 80
    }
  ],
  "location": "CommonStepDefinitions.login(String,String)"
});
formatter.result({
  "duration": 7524332342,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.my_account_screen_is_displayed()"
});
formatter.result({
  "duration": 92861416,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_page_has_loaded()"
});
formatter.result({
  "duration": 9604272,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "the OD version of",
      "offset": 12
    }
  ],
  "location": "StepDefinitions.i_am_shown_the_Your_Account_page(String)"
});
formatter.result({
  "duration": 125626,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bill",
      "offset": 11
    }
  ],
  "location": "StepDefinitions.tile_1_is(String)"
});
formatter.result({
  "duration": 26222283,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "meter readings",
      "offset": 11
    }
  ],
  "location": "StepDefinitions.tile_2_is(String)"
});
formatter.result({
  "duration": 23822651,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your payments",
      "offset": 11
    }
  ],
  "location": "StepDefinitions.tile_3_is(String)"
});
formatter.result({
  "duration": 23817315,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Check your tariff",
      "offset": 11
    }
  ],
  "location": "StepDefinitions.tile_4_is(String)"
});
formatter.result({
  "duration": 25476323,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Get a smart meter",
      "offset": 11
    }
  ],
  "location": "StepDefinitions.tile_5_is(String)"
});
formatter.result({
  "duration": 23101735,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your Rewards",
      "offset": 11
    }
  ],
  "location": "StepDefinitions.tile_6_is(String)"
});
formatter.result({
  "duration": 23669929,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your energy use",
      "offset": 11
    }
  ],
  "location": "StepDefinitions.tile_7_is(String)"
});
formatter.result({
  "duration": 22970362,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.close_the_browser()"
});
formatter.result({
  "duration": 1876073932,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "user is on Testserver \"http://sm10372/legacylogin\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://sm10372/legacylogin",
      "offset": 23
    }
  ],
  "location": "CommonStepDefinitions.user_is_on_Testserver(String)"
});
formatter.result({
  "duration": 11218522032,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "PayPlus logged on customer",
  "description": "",
  "id": "my-account-tiles;payplus-logged-on-customer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "that I am a \" PayPlus logged on customer\"",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "user is logged in as with these credentials, username: \"jbailey3985-1\" and password \"password1\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "My account screen is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the page has loaded",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I am shown \"the OD version of\" the Your Account page",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Tile 1 is \"bill\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Tile 2 is \"meter readings\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Tile 3 is \"Your payments\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Tile 4 is \"Check your tariff\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Tile 5 is \"Get a smart meter\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Tile 6 is \"Your Rewards\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Tile 7 is \"Your energy use\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": " PayPlus logged on customer",
      "offset": 13
    }
  ],
  "location": "CommonStepDefinitions.that_I_am_a(String)"
});
formatter.result({
  "duration": 203630,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jbailey3985-1",
      "offset": 56
    },
    {
      "val": "password1",
      "offset": 85
    }
  ],
  "location": "CommonStepDefinitions.login(String,String)"
});
formatter.result({
  "duration": 5871515250,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.my_account_screen_is_displayed()"
});
formatter.result({
  "duration": 63633949,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_page_has_loaded()"
});
formatter.result({
  "duration": 11198005,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "the OD version of",
      "offset": 12
    }
  ],
  "location": "StepDefinitions.i_am_shown_the_Your_Account_page(String)"
});
formatter.result({
  "duration": 87856,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bill",
      "offset": 11
    }
  ],
  "location": "StepDefinitions.tile_1_is(String)"
});
formatter.result({
  "duration": 25925460,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "meter readings",
      "offset": 11
    }
  ],
  "location": "StepDefinitions.tile_2_is(String)"
});
formatter.result({
  "duration": 26095835,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your payments",
      "offset": 11
    }
  ],
  "location": "StepDefinitions.tile_3_is(String)"
});
formatter.result({
  "duration": 28069322,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Check your tariff",
      "offset": 11
    }
  ],
  "location": "StepDefinitions.tile_4_is(String)"
});
formatter.result({
  "duration": 25602361,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Get a smart meter",
      "offset": 11
    }
  ],
  "location": "StepDefinitions.tile_5_is(String)"
});
formatter.result({
  "duration": 20494780,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your Rewards",
      "offset": 11
    }
  ],
  "location": "StepDefinitions.tile_6_is(String)"
});
formatter.result({
  "duration": 24989419,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your energy use",
      "offset": 11
    }
  ],
  "location": "StepDefinitions.tile_7_is(String)"
});
formatter.result({
  "duration": 20877407,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.close_the_browser()"
});
formatter.result({
  "duration": 545952834,
  "status": "passed"
});
formatter.uri("NewEra_389.feature");
formatter.feature({
  "line": 1,
  "name": "My Account tiles",
  "description": "As a Sitecore user \r\nI want to be able to select different views of the Your Account page \r\nSo that different payment types/account states have different default datasources",
  "id": "my-account-tiles",
  "keyword": "Feature"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "user is on Testserver \"http://sm10372/legacylogin\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://sm10372/legacylogin",
      "offset": 23
    }
  ],
  "location": "CommonStepDefinitions.user_is_on_Testserver(String)"
});
formatter.result({
  "duration": 8673107832,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "OD unmonitored card payment logged on customer",
  "description": "",
  "id": "my-account-tiles;od-unmonitored-card-payment-logged-on-customer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "that I am a \"smart OD unmonitored card payment customer\"",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user is logged in as with these credentials, username: \"sarahsmithson94-3\" and password \"password1\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "My account screen is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the page has loaded",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I am shown \"the smart OD version of\" the Your Account page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Tile 1 is \"bill\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Tile 2 is \"Your payments\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Tile 3 is \"Check your tariff\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Tile 4 is \"Your energy use\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Tile 5 is \"Get a smart meter\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Tile 6 is \"Your Rewards\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Tile 7 is \"Manage your details\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "smart OD unmonitored card payment customer",
      "offset": 13
    }
  ],
  "location": "CommonStepDefinitions.that_I_am_a(String)"
});
formatter.result({
  "duration": 87856,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sarahsmithson94-3",
      "offset": 56
    },
    {
      "val": "password1",
      "offset": 89
    }
  ],
  "location": "CommonStepDefinitions.login(String,String)"
});
formatter.result({
  "duration": 8120193810,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.my_account_screen_is_displayed()"
});
formatter.result({
  "duration": 58879846,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_page_has_loaded()"
});
formatter.result({
  "duration": 11546557,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "the smart OD version of",
      "offset": 12
    }
  ],
  "location": "StepDefinitions.i_am_shown_the_Your_Account_page(String)"
});
formatter.result({
  "duration": 96067,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bill",
      "offset": 11
    }
  ],
  "location": "StepDefinitions.tile_1_is(String)"
});
formatter.result({
  "duration": 28040173,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your payments",
      "offset": 11
    }
  ],
  "location": "StepDefinitions.tile_2_is(String)"
});
formatter.result({
  "duration": 25886868,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Check your tariff",
      "offset": 11
    }
  ],
  "location": "StepDefinitions.tile_3_is(String)"
});
formatter.result({
  "duration": 32355403,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your energy use",
      "offset": 11
    }
  ],
  "location": "StepDefinitions.tile_4_is(String)"
});
formatter.result({
  "duration": 24033261,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Get a smart meter",
      "offset": 11
    }
  ],
  "location": "StepDefinitions.tile_5_is(String)"
});
formatter.result({
  "duration": 21670579,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your Rewards",
      "offset": 11
    }
  ],
  "location": "StepDefinitions.tile_6_is(String)"
});
formatter.result({
  "duration": 23340672,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manage your details",
      "offset": 11
    }
  ],
  "location": "StepDefinitions.tile_7_is(String)"
});
formatter.result({
  "duration": 22065111,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.close_the_browser()"
});
formatter.result({
  "duration": 568628015,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "user is on Testserver \"http://sm10372/legacylogin\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "http://sm10372/legacylogin",
      "offset": 23
    }
  ],
  "location": "CommonStepDefinitions.user_is_on_Testserver(String)"
});
formatter.result({
  "duration": 9648323686,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "smart PayPlus logged on customer",
  "description": "",
  "id": "my-account-tiles;smart-payplus-logged-on-customer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "that I am a \"smart PayPlus customer\"",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "user is logged in as with these credentials, username: \"divemandy-1\" and password \"password1\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "My account screen is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the page has loaded",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I am shown \"the smart OD version of\" the Your Account page",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Tile 1 is \"bill\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Tile 2 is \"Your payments\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Tile 3 is \"Check your tariff\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Tile 4 is \"Your energy use\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Tile 5 is \"Get a smart meter\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Tile 6 is \"Your Rewards\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Tile 7 is \"Manage your details\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "smart PayPlus customer",
      "offset": 13
    }
  ],
  "location": "CommonStepDefinitions.that_I_am_a(String)"
});
formatter.result({
  "duration": 95246,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "divemandy-1",
      "offset": 56
    },
    {
      "val": "password1",
      "offset": 83
    }
  ],
  "location": "CommonStepDefinitions.login(String,String)"
});
formatter.result({
  "duration": 5841075034,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.my_account_screen_is_displayed()"
});
formatter.result({
  "duration": 52403921,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_page_has_loaded()"
});
formatter.result({
  "duration": 11197595,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "the smart OD version of",
      "offset": 12
    }
  ],
  "location": "StepDefinitions.i_am_shown_the_Your_Account_page(String)"
});
formatter.result({
  "duration": 92373,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bill",
      "offset": 11
    }
  ],
  "location": "StepDefinitions.tile_1_is(String)"
});
formatter.result({
  "duration": 28708128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your payments",
      "offset": 11
    }
  ],
  "location": "StepDefinitions.tile_2_is(String)"
});
formatter.result({
  "duration": 25451281,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Check your tariff",
      "offset": 11
    }
  ],
  "location": "StepDefinitions.tile_3_is(String)"
});
formatter.result({
  "duration": 26853289,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your energy use",
      "offset": 11
    }
  ],
  "location": "StepDefinitions.tile_4_is(String)"
});
formatter.result({
  "duration": 22797112,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Get a smart meter",
      "offset": 11
    }
  ],
  "location": "StepDefinitions.tile_5_is(String)"
});
formatter.result({
  "duration": 20270212,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your Rewards",
      "offset": 11
    }
  ],
  "location": "StepDefinitions.tile_6_is(String)"
});
formatter.result({
  "duration": 28505729,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manage your details",
      "offset": 11
    }
  ],
  "location": "StepDefinitions.tile_7_is(String)"
});
formatter.result({
  "duration": 23764354,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.close_the_browser()"
});
formatter.result({
  "duration": 545387515,
  "status": "passed"
});
formatter.uri("NewEra_433.feature");
formatter.feature({
  "line": 1,
  "name": "URL change for Bill",
  "description": "As E.ON \r\nWe want the URL of the bill pages to follow the agreed structure\r\nSo that links from fulfilment and external communications work",
  "id": "url-change-for-bill",
  "keyword": "Feature"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "user is on Testserver \"http://sm10372/legacylogin\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user is logged in as with these credentials, username: \"kzaki1973\" and password \"password1\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "My account screen is displayed",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://sm10372/legacylogin",
      "offset": 23
    }
  ],
  "location": "CommonStepDefinitions.user_is_on_Testserver(String)"
});
formatter.result({
  "duration": 10092848689,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kzaki1973",
      "offset": 56
    },
    {
      "val": "password1",
      "offset": 81
    }
  ],
  "location": "CommonStepDefinitions.login(String,String)"
});
formatter.result({
  "duration": 3837287354,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.my_account_screen_is_displayed()"
});
formatter.result({
  "duration": 69952636,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "View Bill URL",
  "description": "",
  "id": "url-change-for-bill;view-bill-url",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "there is an agreed URL structure",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "a customer visits the view bill page",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the URL is eonenergy.com/\"bill\"- not eonenergy.com/ViewBill",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.given_there_is_an_agreed_URL_structure()"
});
formatter.result({
  "duration": 53371,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.a_customer_visits_the_view_bill_page()"
});
formatter.result({
  "duration": 585160221,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bill",
      "offset": 26
    }
  ],
  "location": "StepDefinitions.the_URL_is_eonenergy_com_not_eonenergy_com_ViewBill(String)"
});
formatter.result({
  "duration": 26232054392,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.close_the_browser()"
});
formatter.result({
  "duration": 569183070,
  "status": "passed"
});
formatter.uri("NewEra_477.feature");
formatter.feature({
  "line": 1,
  "name": "FDD next payment amount needs to always be �XX.XX",
  "description": "As a FDD customer \r\nI want to see my next direct debit payment amount including the pence \r\nSo I know exactly what I am paying",
  "id": "fdd-next-payment-amount-needs-to-always-be-�xx.xx",
  "keyword": "Feature"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "user is on Testserver \"http://sm10372/legacylogin\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user is logged in as with these credentials, username: \"kzaki1973\" and password \"password1\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "My account screen is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "a customer visits the view bill page",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "http://sm10372/legacylogin",
      "offset": 23
    }
  ],
  "location": "CommonStepDefinitions.user_is_on_Testserver(String)"
});
formatter.result({
  "duration": 8991929111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kzaki1973",
      "offset": 56
    },
    {
      "val": "password1",
      "offset": 81
    }
  ],
  "location": "CommonStepDefinitions.login(String,String)"
});
formatter.result({
  "duration": 3590491959,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.my_account_screen_is_displayed()"
});
formatter.result({
  "duration": 63383927,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.a_customer_visits_the_view_bill_page()"
});
formatter.result({
  "duration": 530006884,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "To verify that its correct till 2 decimal point",
  "description": "",
  "id": "fdd-next-payment-amount-needs-to-always-be-�xx.xx;to-verify-that-its-correct-till-2-decimal-point",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "As a fixed direct debit customer",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I view my next direct debit amount",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "show me the amount including pounds and pence",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.as_a_fixed_direct_debit_customer()"
});
formatter.result({
  "duration": 25453,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_view_my_next_direct_debit_amount()"
});
formatter.result({
  "duration": 20361136485,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.show_me_the_amount_including_pounds_and_pence_ie_XX_XX()"
});
formatter.result({
  "duration": 26469020,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.close_the_browser()"
});
formatter.result({
  "duration": 1027657135,
  "status": "passed"
});
});