package com.api.be.controllers;

import com.api.be.models.RequestModel;

import com.api.be.services.ApiService;
import org.jsondoc.core.annotation.Api;
import org.jsondoc.core.annotation.ApiBodyObject;
import org.jsondoc.core.annotation.ApiMethod;
import org.jsondoc.core.annotation.ApiResponseObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

import static com.api.be.constants.GlobalConstants.*;

@RestController
@Api(name = "api", description = "Provides date UTC")
@RequestMapping("/api")
public class ApiController {
    @Autowired
    private ApiService apiService;

    @ApiMethod(consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE,
            description = DESCRIPTION_RESOURCE)
    @RequestMapping(method = RequestMethod.POST, value = "/")
    @ApiResponseObject
    @ResponseBody
    public Object index(@RequestBody RequestModel data){
        Map<String, Object> result = new HashMap<>();

        if(data != null && data.getDato1() != null && data.getDato2() != null){
            Map<String, Object> res = apiService.getUTC(data);

            result.put(RESPONSE_TAG, res);
        }else{
            result.put(RESPONSE_TAG, null);
            result.put(ERROR_TAG, INCORRECT_DATA_TAG);
        }
        return result;
    }
}
