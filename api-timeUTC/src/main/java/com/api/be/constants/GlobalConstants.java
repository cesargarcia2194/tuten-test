package com.api.be.constants;

public interface GlobalConstants {
    String DESCRIPTION_RESOURCE = "<div class='alert alert-info'><h3><u><span class='label label-default'> Post resource</span></u></h3>"
            + "method that returns the time in utc format:"
            + "<ul class='list-group'> "
            + "<li class='list-group-item list-group-item-warning'><b><u>dato1:</u></b>Hour:minutes:seconds. </li>"
            + "<li class='list-group-item list-group-item-warning'><b><u>dato2:</u></b> UTC variation. </li>"
            + "</ul>"
            + "<u>Example:</u>"
            + "<span class=\"label label-danger\">data</span>"
            + "<pre>{<br />"
            +	"    \"<b>dato1</b>\" : <em>\"18:31:45\"</em>,<br/>"
            +	"    \"<b>dato2</b>\" : <em>-3</em><br />"
            + "}</pre>"
            + "In case of sending the parameters correctly, you should receive a json with the result of the process.";
    String RESPONSE_TAG = "response";
    String ERROR_TAG = "error";
    String INCORRECT_DATA_TAG = "Incorrect data";
    String TIME_TAG = "time";
    String TIME_ZONE_TAG = "timezone";

}
