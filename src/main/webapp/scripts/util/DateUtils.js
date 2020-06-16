

function DateUtil(){
}


DateUtil.monthMacth = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
DateUtil.monthEngMacth = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

DateUtil.dataDateToDataBase =  function dataDateToDataBase(date){
    if(date !== null && date !== ""){
       return date.getTime();
    }else{
        return null
    }
};
DateUtil.getDateWithRemoveTime=function(date){
    return date.setHours(0,0,0,0);
};

DateUtil.autoSlash=function(arrayComponent){
    $.each(arrayComponent,function(){
        $(this).attr("maxlength", "10");
        $(this).keypress(function (e){
            if( e.which!=8 && e.which!=0 && (e.which<48 || e.which>57)){
                return false;
            }
        });

        $(this).keyup(function(e){
            if (e.keyCode != 8){
                if ($(this).val().length == 2){
                    $(this).val($(this).val() + "/");
                } else if ($(this).val().length == 5){
                    $(this).val($(this).val() + "/");
                }else if($(this).val().length > 10){
                    var value=$(this).val();
                    $(this).val(value.substring(0,10));
                }
            } else {
                var temp = $(this).val();
                if ($(this).val().length == 5){
                    $(this).val(temp.substring(0,4));
                } else if ($(this).val().length == 2){
                    $(this).val(temp.substring(0,1));
                }
            }
        });
    });
}

DateUtil.coverStringToDate=function(dateString,lang){
    var dateResult="";
    if(dateString==""||dateString==null){
        return null;
    }
    var dateArray = dateString.split("/");
    dateResult = new Date(dateArray[2], (dateArray[1] - 1), dateArray[0], 0, 0, 0, 0);
    if(lang=='TH'){
         dateResult = new Date(dateArray[2]-543, (dateArray[1] - 1), dateArray[0], 0, 0, 0, 0);
     }
    return dateResult.getTime();
}

DateUtil.getCurrentDateWLang=function(dateString,lang){
    var dateResult = new Date();
    if(dateString==""||dateString==null){
        return null;
    }
    if(lang === "TH" || lang === "th"){
        var day = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear()+543;
        dateResult = new Date(month+"/"+day+"/"+year);
    }
    return dateResult;
}

DateUtil.dtToStrWDay=function (date) {
    //Just 31/12/2563
    return DateUtil.coverDateToStringMaster(date).split(" ")[0];
}

DateUtil.dtToStrWTime=function (date) {
    //Just 31/12/2563 23:59:59
    return DateUtil.coverDateToStringMaster(date);
}

DateUtil.dtToStrDatabase=function (date) {
    //Just 2020-12-31
    if(date === null){
        return "";
    }else{
        return date.format('yyyy-mm-dd hh:mm:ss').toString();
    }
}


DateUtil.coverDateToString=function(date){
    return DateUtil.coverDateToStringMaster(date);
}

DateUtil.coverDateToStringMaster=function(date){
    if (typeof date == "string") {
        date = DateUtil.toDate(date);
    }
    var stateDate = date == null || date == "" ? false : true;
    var dateResult = "";
    // var monthMacth = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
    // var monthEngMacth = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    var mapMonth = {};
    $.each(DateUtil.monthEngMacth, function (index, value) {
        mapMonth[value] = index;
    });

    if (stateDate) {
        var dataDate = null;
        if (typeof date == 'string') {
            dataDate = DateUtil.toDate(date.split("-")[2], date.split("-")[1], date.split("-")[0]);
        } else {
            dataDate = DateUtil.toDate(date);
            // console.log(dataDate);
        }
        dateResult = dataDate.format('dd mm yyyy HH:MM:ss');

        // console.log(dateResult);
        var splitDate = dateResult.split(" ");
        var day = splitDate[0];

        // var month = DateUtil.monthMacth[parseInt(splitDate[1]) - 1];
        var month = splitDate[1];

        var year = (parseInt(splitDate[2]) + 543).toString()

        dateResult = day + "/" + month + "/" + year;
        dateResult+=" "+splitDate[3];

    }
    return dateResult;
}

Date.prototype.format = function (mask, utc) {
    return dateFormat(this, mask, utc);
};

var dateFormat = function () {
    var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
        timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
        timezoneClip = /[^-+\dA-Z]/g,
        pad = function (val, len) {
            val = String(val);
            len = len || 2;
            while (val.length < len) val = "0" + val;
            return val;
        };

    // Regexes and supporting functions are cached through closure
    return function (date, mask, utc) {
        var dF = dateFormat;

        // You can't provide utc if you skip other args (use the "UTC:" mask
        // prefix)
        if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
            mask = date;
            date = undefined;
        }

        // Passing date through Date applies Date.parse, if necessary
        date = date ? new Date(date) : new Date;
        if (isNaN(date)) throw SyntaxError("invalid date");

        mask = String(dF.masks[mask] || mask || dF.masks["default"]);

        // Allow setting the utc argument via the mask
        if (mask.slice(0, 4) == "UTC:") {
            mask = mask.slice(4);
            utc = true;
        }

        var _ = utc ? "getUTC" : "get",
            d = date[_ + "Date"](),
            D = date[_ + "Day"](),
            m = date[_ + "Month"](),
            y = date[_ + "FullYear"](),
            H = date[_ + "Hours"](),
            M = date[_ + "Minutes"](),
            s = date[_ + "Seconds"](),
            L = date[_ + "Milliseconds"](),
            o = utc ? 0 : date.getTimezoneOffset(),
            flags = {
                d:    d,
                dd:   pad(d),
                ddd:  dF.i18n.dayNames[D],
                dddd: dF.i18n.dayNames[D + 7],
                m:    m + 1,
                mm:   pad(m + 1),
                mmm:  dF.i18n.monthNames[m],
                mmmm: dF.i18n.monthNames[m + 12],
                yy:   String(y).slice(2),
                yyyy: y,
                h:    H % 12 || 12,
                hh:   pad(H % 12 || 12),
                H:    H,
                HH:   pad(H),
                M:    M,
                MM:   pad(M),
                s:    s,
                ss:   pad(s),
                l:    pad(L, 3),
                L:    pad(L > 99 ? Math.round(L / 10) : L),
                t:    H < 12 ? "a"  : "p",
                tt:   H < 12 ? "am" : "pm",
                T:    H < 12 ? "A"  : "P",
                TT:   H < 12 ? "AM" : "PM",
                Z:    utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
                o:    (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
                S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
            };

        return mask.replace(token, function ($0) {
            return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
        });
    };
}();

// Some common format strings
dateFormat.masks = {
    "default":      "ddd mmm dd yyyy HH:MM:ss",
    shortDate:      "m/d/yy",
    mediumDate:     "mmm d, yyyy",
    longDate:       "mmmm d, yyyy",
    fullDate:       "dddd, mmmm d, yyyy",
    shortTime:      "h:MM TT",
    mediumTime:     "h:MM:ss TT",
    longTime:       "h:MM:ss TT Z",
    isoDate:        "yyyy-mm-dd",
    isoTime:        "HH:MM:ss",
    isoDateTime:    "yyyy-mm-dd'T'HH:MM:ss",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};

// Internationalization strings
dateFormat.i18n = {
    dayNames: [
        "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ],
    monthNames: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ]
};


DateUtil.addDays = function(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

/******************************************
 * offSet
 *******************************************/
DateUtil.toDate = function (date) {
    if (typeof date == "string") {
        return moment(date, 'YYYY-MM-DD HH:mm:ss').toDate();
    }else {
        return moment(date).toDate();
    }
};

DateUtil.dpToDateTime=function (ele) {
    //get date from datepicker
    if($(ele).val()==""){
        return null;
    }
    if($(ele).datepicker('getDate')){
        return $(ele).datepicker('getDate').getTime();
    }else{
        return null;
    }
};
