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
  "duration": 34320077133,
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
  "duration": 102429560,
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
  "duration": 6088419737,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.my_account_screen_is_displayed()"
});
formatter.result({
  "duration": 446165127,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_page_has_loaded()"
});
formatter.result({
  "duration": 34134702,
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
  "duration": 100173,
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
  "duration": 139174092,
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
  "duration": 18161246,
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
  "duration": 22313080,
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
  "duration": 17919436,
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
  "duration": 17765481,
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
  "duration": 34914326,
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
  "duration": 17595517,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.close_the_browser()"
});
formatter.result({
  "duration": 4196949574,
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
  "duration": 12169490732,
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
  "duration": 70203,
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
  "duration": 5533055997,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.my_account_screen_is_displayed()"
});
formatter.result({
  "duration": 45564664,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_page_has_loaded()"
});
formatter.result({
  "duration": 9602220,
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
  "duration": 72256,
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
  "duration": 20120774,
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
  "duration": 18996293,
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
  "duration": 22098776,
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
  "duration": 19654807,
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
  "duration": 17505607,
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
  "duration": 17847591,
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
  "duration": 16380305,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.close_the_browser()"
});
formatter.result({
  "duration": 494209889,
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
  "duration": 8065967483,
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
  "duration": 65276,
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
  "duration": 3748932482,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.my_account_screen_is_displayed()"
});
formatter.result({
  "duration": 31624634,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_page_has_loaded()"
});
formatter.result({
  "duration": 7537182,
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
  "duration": 76362,
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
  "duration": 18770083,
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
  "duration": 20018548,
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
  "duration": 43993512,
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
  "duration": 19232356,
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
  "duration": 19624837,
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
  "duration": 18426047,
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
  "duration": 53485706,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.close_the_browser()"
});
formatter.result({
  "duration": 489613846,
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
  "duration": 8198487884,
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
  "duration": 77182,
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
  "duration": 3458875987,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.my_account_screen_is_displayed()"
});
formatter.result({
  "duration": 73877028,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_page_has_loaded()"
});
formatter.result({
  "duration": 9316481,
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
  "duration": 97299,
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
  "duration": 21168893,
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
  "duration": 20405691,
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
  "duration": 67200758,
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
  "duration": 19556686,
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
  "duration": 16432034,
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
  "duration": 20218894,
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
  "duration": 76754122,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.close_the_browser()"
});
formatter.result({
  "duration": 385820869,
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
  "duration": 12323231345,
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
  "duration": 1754030210,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.my_account_screen_is_displayed()"
});
formatter.result({
  "duration": 4128534427,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "View Bill URL",
  "description": "",
  "id": "url-change-for-bill;view-bill-url",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "there is an agreed URL structure",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "a customer visits the view bill page",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the URL is eonenergy.com/\"bill\"- not eonenergy.com/ViewBill",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.given_there_is_an_agreed_URL_structure()"
});
formatter.result({
  "duration": 26685,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.a_customer_visits_the_view_bill_page()"
});
formatter.result({
  "duration": 733712375,
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
  "duration": 27261353704,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.close_the_browser()"
});
formatter.result({
  "duration": 858836410,
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
  "duration": 8718495552,
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
  "duration": 3812950701,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.my_account_screen_is_displayed()"
});
formatter.result({
  "duration": 40915251,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.a_customer_visits_the_view_bill_page()"
});
formatter.result({
  "duration": 446714435,
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
  "duration": 27096,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_view_my_next_direct_debit_amount()"
});
formatter.result({
  "duration": 20781693914,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.show_me_the_amount_including_pounds_and_pence_ie_XX_XX()"
});
formatter.result({
  "duration": 43948763,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.close_the_browser()"
});
formatter.result({
  "duration": 567956364,
  "status": "passed"
});
});