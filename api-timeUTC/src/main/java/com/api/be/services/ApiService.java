package com.api.be.services;

import com.api.be.models.RequestModel;
import org.springframework.stereotype.Service;
import static com.api.be.constants.GlobalConstants.*;
import java.util.*;

@Service
public class ApiService {


    public Map<String, Object> getUTC(RequestModel data){
        Map<String, Object> result = new HashMap<>();
        List<Integer> hourDes = decomposeTime(data.getDato1());
        Calendar cal = Calendar.getInstance();
        cal.set(Calendar.HOUR_OF_DAY, hourDes.get(0));
        cal.set(Calendar.MINUTE, hourDes.get(1));
        cal.set(Calendar.SECOND, hourDes.get(2));
        cal.add(Calendar.HOUR_OF_DAY, data.getDato2());

        String hourResult = cal.get(Calendar.HOUR_OF_DAY) + ":"
                + cal.get(Calendar.MINUTE) + ":"
                +cal.get(Calendar.SECOND);

        result.put(TIME_TAG, hourResult);
        result.put(TIME_ZONE_TAG, "utc");
        return result;
    }

    private List<Integer> decomposeTime(String hour){
        List<Integer> result = new ArrayList<>();
        String[] hourSplitted = hour.split(":");
        for (String e:hourSplitted) {
            result.add(Integer.valueOf(e));
        }
        return result;
    }
}
