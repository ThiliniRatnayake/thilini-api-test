package steps;

import io.restassured.http.ContentType;

import java.util.HashMap;
import java.util.Map;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.containsString;
import static org.hamcrest.Matchers.equalTo;

/**
 * Created by LakinduMac on 17/10/19.
 */
public class testmethods {

    public static void RegisterFirstStation(){

        Map<String,String> firststation = new HashMap<String, String>();
        firststation.put("external_id","DEMO_TEST001");
        firststation.put("name","Team Demo Test Station 001");
        firststation.put("latitude", "33.33");
        firststation.put("longitude", "-122.43");
        firststation.put("altitude", "222");

        given()
                .contentType(ContentType.JSON).
        with()
                .header("Content-Type","application/json")
                .body("{\n" +
                        "\"external_id\": \"DEMO_TEST001\",\n" +
                        "\"name\": \"Team Demo Test Station 001\",\n" +
                        "\"latitude\": 33.33,\n" +
                        "\"longitude\": -122.43,\n" +
                        "\"altitude\": 222\n" +
                        "}").
        when()
                .post("http://api.openweathermap.org/data/3.0/stations?APPID=5bf51887ec38a82fb8267d3d628709fa").
        then()
                .statusCode(201);


    }

    public static void RegisterSecondStation(){

        Map<String,String> secondstation = new HashMap<String, String>();
        secondstation.put("external_id","DEMO_TEST002");
        secondstation.put("name","Team Demo Test Station 002");
        secondstation.put("latitude", "44.44");
        secondstation.put("longitude", "-122.44");
        secondstation.put("altitude", "111");

        given()
                .contentType(ContentType.JSON).
                with()
                .header("Content-Type","application/json")
                .body("{\n" +
                        "\"external_id\": \"DEMO_TEST002\",\n" +
                        "\"name\": \"Team Demo Test Station 002\",\n" +
                        "\"latitude\": 44.44,\n" +
                        "\"longitude\": -122.44,\n" +
                        "\"altitude\": 111\n" +
                        "}").
                when()
                .post("http://api.openweathermap.org/data/3.0/stations?APPID=5bf51887ec38a82fb8267d3d628709fa").
                then()
                .statusCode(201);

    }

    public static void CheckStationOne()
    {
        given()
                .contentType(ContentType.JSON).
        with()
                .pathParam("APPID", "5bf51887ec38a82fb8267d3d628709fa")
                .header("Content-Type","application/json").
        when()
                .get("http://api.openweathermap.org/data/3.0/stations?APPID={APPID}").
        then()
                .body("external_id", containsString("DEMO_TEST001"))
                .body("name", containsString("Team Demo Test Station 001"))
                .body("latitude", containsString("33.33"))
                .body("longitude", containsString("-122.43"))
                .body("altitude", containsString("222"));

    }

    public static void RegisterWithoutAPIKey()
    {
        given()
                .contentType(ContentType.JSON).
        with()
                .header("Content-Type","application/json").
        when()
                .get("http://api.openweathermap.org/data/3.0/stations").
        then()
                .body("message", equalTo("Invalid API key. Please see http://openweathermap.org/faq#error401 for more info.")).statusCode(401);

    }
}
