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
  "duration": 23424031964,
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
  "duration": 1012406,
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
  "duration": 8341439563,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.my_account_screen_is_displayed()"
});
formatter.result({
  "duration": 59271339,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_page_has_loaded()"
});
formatter.result({
  "duration": 8061070,
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
  "duration": 98121,
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
  "duration": 21321703,
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
  "duration": 18400258,
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
  "duration": 20032178,
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
  "duration": 17125103,
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
  "duration": 17311080,
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
  "duration": 17362809,
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
  "duration": 16600014,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.close_the_browser()"
});
formatter.result({
  "duration": 1921941669,
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
  "duration": 7791539962,
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
  "duration": 80877,
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
  "duration": 4599747679,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.my_account_screen_is_displayed()"
});
formatter.result({
  "duration": 38507567,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_page_has_loaded()"
});
formatter.result({
  "duration": 7957201,
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
  "duration": 82520,
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
  "duration": 18969276,
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
  "duration": 18194575,
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
  "duration": 21379180,
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
  "duration": 17814410,
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
  "duration": 16712915,
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
  "duration": 17395653,
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
  "duration": 16090116,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.close_the_browser()"
});
formatter.result({
  "duration": 381199705,
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
  "duration": 9066912830,
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
  "duration": 103869,
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
  "duration": 3149604172,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.my_account_screen_is_displayed()"
});
formatter.result({
  "duration": 41303385,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_page_has_loaded()"
});
formatter.result({
  "duration": 19564566,
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
  "duration": 81288,
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
  "duration": 20374984,
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
  "duration": 20234167,
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
  "duration": 20887756,
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
  "duration": 18486884,
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
  "duration": 17308616,
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
  "duration": 18761539,
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
  "duration": 17584093,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.close_the_browser()"
});
formatter.result({
  "duration": 391016680,
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
  "duration": 9443848605,
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
  "duration": 73488,
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
  "duration": 3566341145,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.my_account_screen_is_displayed()"
});
formatter.result({
  "duration": 43094186,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_page_has_loaded()"
});
formatter.result({
  "duration": 8133326,
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
  "duration": 77594,
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
  "duration": 19470552,
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
  "duration": 18558729,
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
  "duration": 20372521,
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
  "duration": 17781976,
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
  "duration": 17499932,
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
  "duration": 17738458,
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
  "duration": 21702691,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.close_the_browser()"
});
formatter.result({
  "duration": 378499545,
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
  "duration": 7127502021,
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
  "duration": 3737218165,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.my_account_screen_is_displayed()"
});
formatter.result({
  "duration": 37383902,
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
  "duration": 29149,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.a_customer_visits_the_view_bill_page()"
});
formatter.result({
  "duration": 675232297,
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
  "duration": 43197258702,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.close_the_browser()"
});
formatter.result({
  "duration": 534037748,
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
  "duration": 8846799856,
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
  "duration": 3445572898,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.my_account_screen_is_displayed()"
});
formatter.result({
  "duration": 52074878,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.a_customer_visits_the_view_bill_page()"
});
formatter.result({
  "duration": 988732978,
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
  "duration": 24633,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_view_my_next_direct_debit_amount()"
});
formatter.result({
  "duration": 20839306982,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.show_me_the_amount_including_pounds_and_pence_ie_XX_XX()"
});
formatter.result({
  "duration": 35850924,
  "status": "passed"
});
formatter.match({
  "location": "CommonStepDefinitions.close_the_browser()"
});
formatter.result({
  "duration": 600460386,
  "status": "passed"
});
});