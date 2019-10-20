$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/AddNewStations.feature");
formatter.feature({
  "line": 1,
  "name": "",
  "description": "Register new stations",
  "id": "",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Verify adding station one",
  "description": "",
  "id": ";verify-adding-station-one",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I perform post operation for station 1",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "test",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 37
    }
  ],
  "location": "AddNewStations.iPerformPostOperationForStation(int)"
});
formatter.result({
  "duration": 2196310143,
  "status": "passed"
});
formatter.match({
  "location": "AddNewStations.test()"
});
formatter.result({
  "duration": 14856,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Verify adding station two",
  "description": "",
  "id": ";verify-adding-station-two",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I perform post operation for statoion 2",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 38
    }
  ],
  "location": "AddNewStations.iPerformPostOperationForStatoion(int)"
});
formatter.result({
  "duration": 690039963,
  "status": "passed"
});
formatter.uri("src/test/java/features/Validation.feature");
formatter.feature({
  "line": 1,
  "name": "",
  "description": "Verify user validation",
  "id": "",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Verify user gets 401 when register without API key",
  "description": "",
  "id": ";verify-user-gets-401-when-register-without-api-key",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I register without API key",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I get a 401 response",
  "keyword": "Then "
});
formatter.match({
  "location": "Validation.iRegisterWithoutAPIKey()"
});
formatter.result({
  "duration": 1026786,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "401",
      "offset": 8
    }
  ],
  "location": "Validation.iGetAResponse(int)"
});
formatter.result({
  "duration": 587291918,
  "status": "passed"
});
formatter.uri("src/test/java/features/VerifyCreatedStationsSaved.feature");
formatter.feature({
  "line": 1,
  "name": "",
  "description": "Verify two stations created added to the database",
  "id": "",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Verify GET method returns stations created",
  "description": "",
  "id": ";verify-get-method-returns-stations-created",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I do a GET operation",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "values for new stations get returned",
  "keyword": "Then "
});
formatter.match({
  "location": "VerifyCreatedStationsSaved.iDoAGETOperation()"
});
formatter.result({
  "duration": 47715,
  "status": "passed"
});
formatter.match({
  "location": "VerifyCreatedStationsSaved.valuesForNewStationsGetReturned()"
});
formatter.result({
  "duration": 721835355,
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nJSON path external_id doesn\u0027t match.\nExpected: a string containing \"DEMO_TEST001\"\n  Actual: [SF_TEST001, SF_TEST001, DEMO_TEST001, DEMO_TEST001, DEMO_TEST001, DEMO_TEST001, DEMO_TEST002, DEMO_TEST001, DEMO_TEST002, DEMO_TEST001, DEMO_TEST002, DEMO_TEST001, DEMO_TEST002, DEMO_TEST001, DEMO_TEST002, DEMO_TEST001, DEMO_TEST002, DEMO_TEST001, DEMO_TEST002, DEMO_TEST001, DEMO_TEST002, DEMO_TEST001, DEMO_TEST002]\n\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:80)\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:74)\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:59)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:237)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:249)\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:493)\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:674)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:190)\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:58)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:168)\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:261)\n\tat io.restassured.specification.ResponseSpecification$body$1.callCurrent(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:51)\n\tat io.restassured.specification.ResponseSpecification$body$1.callCurrent(Unknown Source)\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:108)\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.body(ValidatableResponseOptionsImpl.java:244)\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$body(ValidatableResponseImpl.groovy)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:101)\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1217)\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\n\tat io.restassured.internal.ValidatableResponseImpl.body(ValidatableResponseImpl.groovy:298)\n\tat io.restassured.internal.ValidatableResponseImpl.body(ValidatableResponseImpl.groovy)\n\tat steps.testmethods.CheckStationOne(testmethods.java:82)\n\tat steps.VerifyCreatedStationsSaved.valuesForNewStationsGetReturned(VerifyCreatedStationsSaved.java:16)\n\tat ✽.Then values for new stations get returned(src/test/java/features/VerifyCreatedStationsSaved.feature:6)\n",
  "status": "failed"
});
});