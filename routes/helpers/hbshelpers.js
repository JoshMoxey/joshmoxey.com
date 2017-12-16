const CryptoJS = require("crypto-js");

exports.decrypted = function (context, options) {
  if (context !== undefined) {
    var contextDecrypted = CryptoJS.AES.decrypt(context, 'abceasyas123');
    var context2 = JSON.parse(contextDecrypted.toString(CryptoJS.enc.Utf8));

    var ret = "";

    for (var i = 0, j = context2.length; i < j; i++) {
      ret = ret + options.fn(context2[i]);
    }

    return ret;
  }
};

exports.decrypt = function (data) {
  if (data !== undefined) {
    var dataDecrypted = CryptoJS.AES.decrypt(data, 'abceasyas123');
    return JSON.parse(dataDecrypted.toString(CryptoJS.enc.Utf8));
  }
};

exports.decrypt2 = function (data) {
  if (data !== undefined) {
    var dataDecrypted = CryptoJS.AES.decrypt(data, 'abceasyas123');
    var str = JSON.parse(dataDecrypted.toString(CryptoJS.enc.Utf8));

    if (str.replace(/\s/g, '').length !== 0) {
      return '<div class="description">' + str + '</div>';
    }
  }
};

exports.decryptEach = function (context, options) {
  if (context !== undefined) {
    var contextDecrypted = CryptoJS.AES.decrypt(context, 'abceasyas123');
    var context2 = JSON.parse(contextDecrypted.toString(CryptoJS.enc.Utf8));

    var ret = "";

    for (var i = 0, j = context2.length; i < j; i++) {
      ret = ret + options.fn(context2[i]);
    }

    return ret;
  }
};
exports.divide = function (data1, data2, options) {
  var divided = data1 / data2 * 100
  //return options.fn(this);
  return divided.toFixed(1) + "%";
}
exports.compare = function (lvalue, rvalue, options) {

  if (arguments.length < 3)
    throw new Error("Handlerbars Helper 'compare' needs 2 parameters");

  var operator = options.hash.operator || "==";

  var operators = {
    '==': function (l, r) {
      return l == r;
    },
    '===': function (l, r) {
      return l === r;
    },
    '!=': function (l, r) {
      return l != r;
    },
    '<': function (l, r) {
      return l < r;
    },
    '>': function (l, r) {
      return l > r;
    },
    '<=': function (l, r) {
      return l <= r;
    },
    '>=': function (l, r) {
      return l >= r;
    },
    'typeof': function (l, r) {
      return typeof l == r;
    }
  }

  if (!operators[operator])
    throw new Error("Handlerbars Helper 'compare' doesn't know the operator " + operator);

  var result = operators[operator](lvalue, rvalue);

  if (result) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }

};
exports.length = function (object, options) {
  var ret = 0;

  for (var i = 0, j = object.length; i < j; i++) {
    ret = ret + 1;
  }
  return ret;
};

exports.filterLength = function (object, property, value, options) {
  var ret = 0;

  for (var i = 0, j = object.length; i < j; i++) {
    if (object[i][property] === value) {
      ret = ret + 1;
    }
  }
  return ret;
};

exports.doubleFilterLength = function (object, property1, property2, value, options) {
  var ret = 0;

  for (var a = 0, b = object.length; a < b; a++) {
    if (object[a][property1][property2] === value)
      ret = ret + 1;
  }
  return ret
};

exports.filterLengthLT = function (object, property, value, op, options) {
  var ret = 0;

  for (var i = 0, j = object.length; i < j; i++) {
    if (object[i][property] < value) {
      ret = ret + 1;
    }
  }
  return ret;
};

exports.filterLengthEGT = function (object, property, value, op, options) {
  var ret = 0;

  for (var i = 0, j = object.length; i < j; i++) {
    if (object[i][property] > value) {
      ret = ret + 1;
    }
  }
  return ret;
};

exports.filterAndAverageTime = function (object, property, value, avgProperty, options) {
  var ret = 0;
  var length = 0;

  for (var i = 0, j = object.length; i < j; i++) {
    if (object[i][property] === value) {
      ret = ret + (object[i][avgProperty]);
      length = length + 1
    }
  }

  var retAvg = Math.round(ret / length)

  var hours = Math.floor(retAvg / 3600);
  var minutes = Math.floor((retAvg - (hours * 3600)) / 60);
  var seconds = retAvg - (hours * 3600) - (minutes * 60);

  if (hours < 10) {
    hours = "0" + hours
  }
  if (minutes < 10) {
    minutes = "0" + minutes
  }
  if (seconds < 10) {
    seconds = "0" + seconds
  }

  //var time = hours + ":" + minutes + ":" + seconds;
  var time = +minutes + ":" + seconds;

  return (time);
};

exports.filterAndAverageNumber = function (object, property, value, avgProperty, options) {
  var ret = 0;
  var length = 0;

  for (var i = 0, j = object.length; i < j; i++) {
    if (object[i][property] === value) {
      ret = ret + (object[i][avgProperty]);
      length = length + 1
    }
  }

  var retAvg = (ret / length).toFixed(2)

  return (retAvg);
};

exports.filterAndTotalTime = function (object, property, value, avgProperty, options) {
  var ret = 0;
  var length = 0;

  for (var i = 0, j = object.length; i < j; i++) {
    if (object[i][property] === value) {
      ret = ret + (object[i][avgProperty]);
      length = length + 1
    }
  }

  var hours = Math.floor(ret / 3600);
  var minutes = Math.floor((ret - (hours * 3600)) / 60);
  var seconds = ret - (hours * 3600) - (minutes * 60);

  if (hours < 10) {
    hours = "0" + hours
  }
  if (minutes < 10) {
    minutes = "0" + minutes
  }
  if (seconds < 10) {
    seconds = "0" + seconds
  }

  var time = hours + ":" + minutes + ":" + seconds;
  //var time = + minutes + ":" + seconds;

  return (time);
};

exports.filterAndTotalNumber = function (object, property, value, avgProperty, options) {
  var ret = 0;
  var length = 0;

  for (var i = 0, j = object.length; i < j; i++) {
    if (object[i][property] === value) {
      ret = ret + (object[i][avgProperty]);
      length = length + 1
    }
  }

  return (ret);
};

exports.eachUpTo = function (ary, max, options) {
  if (!ary || ary.length == 0)
    return options.inverse(this);

  var result = [];
  for (var i = 0; i < max && i < ary.length; ++i)
    result.push(options.fn(ary[i]));
  return result.join('');

};


exports.averageNumber = function (first, second, options) {


  return divide.toFixed(2)
};

exports.getLengthAndAverageNumber = function (object1, object2, options) {
  var length1 = 0;
  var length2 = 0;


  for (var i = 0, j = object1.length; i < j; i++) {
    length1 = length1 + 1
  }

  for (var a = 0, b = object2.length; a < b; a++) {
    //ret = ret + (object1[a]);
    length2 = length2 + 1
  }

  return (length1 / length2).toFixed(2)
};

exports.isNotBlank = function (str, options) {
  if (str.replace(/\s/g, '').length !== 0) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
};

exports.cleanDate = function (date, options) {
  //var date = new Date("1 25 2013 12:24:41 GMT-0400 (Eastern Daylight Time)");
  //var date = new Date("12 25 2016 12:24:41 GMT-0400 (Eastern Daylight Time)");
  //var date = new Date("6 30 2017 0:00:00 GMT-0400 (Eastern Daylight Time)");
  var present = new Date();
  var past = date

  var minutes = past.getMinutes()
  var hours = past.getHours()
  var dayOfWeek = past.getDay()
  var dayOfMonth = past.getDate()
  var month = past.getMonth()
  var year = past.getFullYear()

  var daysBetween = Math.abs(present.getDate() - past.getDate())
  //var daysBetween = past.getDate() - present.getDate()
  var monthsBetween = Math.abs(past.getMonth() - present.getMonth())
  var yearsBetween = Math.abs(past.getYear() - present.getYear())

  if (hours < 12) {
    ampm = "am"
    if (hours === 0) {
      hours = 12
    }
  } else {
    ampm = "pm"
    if (hours > 12) {
      hours = hours % 12
    }
  }

  if (minutes < 10) {
    minutes = "0" + minutes
  }

  var date = ""

  if (yearsBetween === 0) {
    if (monthsBetween === 0) {
      if (daysBetween === 1) {
        date = "Yesterday, "
      } else if (daysBetween > 1 && daysBetween < 7) {
        switch (dayOfWeek) {
          case 0:
            date = "Sunday, ";
            break;
          case 1:
            date = "Monday, ";
            break;
          case 2:
            date = "Tuesday, ";
            break;
          case 3:
            date = "Wednesday, ";
            break;
          case 4:
            date = "Thursday, ";
            break;
          case 5:
            date = "Friday, ";
            break;
          case 6:
            date = "Saturday, ";
        }
      }
    } else {
      switch (month) {
        case 0:
          date = "January " + dayOfMonth + ", ";
          break;
        case 1:
          date = "February " + dayOfMonth + ", ";
          break;
        case 2:
          date = "March " + dayOfMonth + ", ";
          break;
        case 3:
          date = "April " + dayOfMonth + ", ";
          break;
        case 4:
          date = "May " + dayOfMonth + ", ";
          break;
        case 5:
          date = "June " + dayOfMonth + ", ";
          break;
        case 6:
          date = "July " + dayOfMonth + ", ";
          break;
        case 7:
          date = "August " + dayOfMonth + ", ";
          break;
        case 8:
          date = "September " + dayOfMonth + ", ";
          break;
        case 9:
          date = "October " + dayOfMonth + ", ";
          break;
        case 10:
          date = "November " + dayOfMonth + ", ";
          break;
        case 11:
          date = "December " + dayOfMonth + ", ";
          break;
      }
    }
  } else { //different year
    date = date + year + ", "
  }
  return date + hours + ":" + minutes + ampm
}
// exports.last = function (arr, options) {
//   var array = arr[arr.length-1];
//   console.log(array)
//   console.log(array.length)
//   var ret = ""
//   for(var i=0, j=array.length; i<j; i++) {
//     ret = ret + options.fn(array[i]);
//   }
//   console.log(ret)
//   return ret
// }
// exports.last = function (arr, options) {
//   var array = []
//   array = arr[arr.length-1];
//   var ret = ""
//   for(var i=0, j=array.length; i<j; i++) {
//     ret = ret + options.fn(array[i]);
//   }
//   console.log(ret)
//   return ret
// }
// exports.last2 = function (array, options) {
//   // console.log(array)
//   var ret = ""
//   ret = ret + array[array.length-1];
//   // var ret = "" + options.fn(array[array.length-1]);
//   return JSON.stringify(ret)
// }
// exports.shuffleEach = function (array, options) {
//   var ret = "";
//   var i = array.length;
//   var j = 0;
//
//   for(var i=0, j=array.length; i<j; i++) {
//     ret = ret + options.fn(array[i]);
//   }
//
//   return ret;
// };

// exports.last = function(value, n) {
//   n = n-1 || 0
//   if (!Array.isArray(value) && typeof value !== 'string') {
//     return '';
//   }
//   return value.slice(-Math.abs(n));
// };
exports.last = function(arr, options) {
  // console.log(arr)
  var ret = ""
  for(var i = arr.length-1,j=arr.length; i<j; i++) {
    ret = ret + options.fn(arr[i]);
  }
  // console.log(ret)
  return ret
};
exports.simpledate = function(date, options) {
  //
}