"use strict";

var _typeof =
  typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
    ? function(obj) {
        return typeof obj;
      }
    : function(obj) {
        return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
          ? "symbol"
          : typeof obj;
      };

var scrumlib = (function(h, l) {
  var c = {
    version: "2.1.0",
    jsonUrl: l,
    flexidata: [],
    init: function init(a) {
      console.log(c.speak());
      if (!1 === c.dependencyChecks())
        throw Error("Fout: een startvoorwaarde is niet voldaan");
      null != localStorage.getItem("flexidata")
        ? ((c.flexidata = JSON.parse(localStorage.getItem("flexidata"))),
          console.log("data geladen uit localStorage"))
        : c.laadStartData();
    },
    speak: function speak() {
      return "Scrumlib v" + c.version;
    },
    laadStartData: function laadStartData() {
      c
        .startData()
        .done(function(a) {
          c.flexidata = a;
          console.log("data geladen uit startbestand");
        })
        .done(function(a) {
          c.saveDataLS();
        })
        .fail(function(a) {
          console.log("probleem met laden startProfielen");
        });
    },
    reset: function reset() {
      c.flexidata = [];
      localStorage.removeItem("flexidata");
      c.laadStartData();
      console.log("data werden gereset");
    },
    save: function save() {
      c.saveDataLS();
    },
    dependencyChecks: function dependencyChecks() {
      var a = !0;
      "undefined" == typeof h && (console.log("jQuery not defined"), (a = !1));
      window.localStorage ||
        (console.log("localStorage not supported"), (a = !1));
      return a;
    },
    startData: function startData() {
      return h.getJSON(c.jsonUrl).then(function(a) {
        return a;
      });
    },
    saveDataLS: function saveDataLS() {
      localStorage.setItem("flexidata", JSON.stringify(c.flexidata));
      console.log("data opgeslagen in LS");
    },
    addProperty: function addProperty(a, b, d) {
      if (c.flexidata[0].hasOwnProperty(a))
        console.log("property '" + a + "' bestaat reeds: niets toegevoegd.");
      else {
        var e = b.toLowerCase();
        if ("string" == e || "number" == e || "boolean" == e) {
          if ((typeof d === "undefined" ? "undefined" : _typeof(d)) !== e)
            throw Error(
              "defaultValue " + d + " komt niet overeen met datatype " + b
            );
          for (b = 0; b < c.flexidata.length; b++) {
            c.flexidata[b][a] = d;
          }
        } else
          console.log(
            "datatype '" +
              b +
              "' van property '" +
              a +
              "' kan enkel String, Number of Boolean zijn"
          );
      }
    },
    compareDates: function compareDates(a, b) {
      var c = new Date(a),
        e = new Date(b);
      c.getTime();
      e.getTime();
      c.getTime();
      e.getTime();
    },
    getAllDatasets: function getAllDatasets() {
      return c.flexidata;
    },
    getDatasetByIndex: function getDatasetByIndex(a) {
      var b = [];
      if ("undefined" !== typeof a && 0 <= a && a < c.flexidata.length)
        b.push(c.flexidata[a]);
      else throw Error("index " + a + " buiten bereik");
      return b;
    },
    getIdByEmailPassword: function getIdByEmailPassword(a, b) {
      for (var d = !1, e = 0; e < c.flexidata.length; e++) {
        var f = c.flexidata[e];
        if (f.email == a && f.wachtwoord == b) {
          d = f._id;
          break;
        }
      }
      return d;
    },
    getDatasetsByProperty: function getDatasetsByProperty(a, b, d, e) {
      if ("undefined" === typeof e || null === e) e = "=";
      var f = [];
      if ("" == d) return console.log("lege waarde, return leeg array"), f;
      if (
        c.isArray(a) &&
        3 <= arguments.length &&
        "undefined" !== typeof b &&
        "" !== b
      )
        c.isNumber(d) && (d = parseFloat(d)),
          h.each(a, function(a, k) {
            if (k.hasOwnProperty(b)) {
              var g = k[b];
              if ("geboortedatum" == b) {
                var h = new Date(d),
                  g = new Date(g).getTime(),
                  h = h.getTime();
                ("=" != e && "~" != e) || g != h || f.push(k);
                "<" == e && g < h && f.push(k);
                "<=" == e && g <= h && f.push(k);
                ">" == e && g > h && f.push(k);
                ">=" == e && g >= h && f.push(k);
              } else
                c.isNumber(g) && (g = parseFloat(g)),
                  "=" == e && g == d && f.push(k),
                  "<" == e && g < d && f.push(k),
                  "<=" == e && g <= d && f.push(k),
                  ">" == e && g > d && f.push(k),
                  ">=" == e && g >= d && f.push(k),
                  "~" == e && -1 != g.search(new RegExp(d, "i")) && f.push(k);
            } else console.log("property '" + b + "' niet gevonden in object");
          });
      else
        throw Error(
          "argumenten prop en val zijn verplicht en mogen niet leeg zijn"
        );
      return f;
    },
    getDatasetsByPropertyRegex: function getDatasetsByPropertyRegex(a, b, d) {
      if ("string" !== typeof d)
        throw Error("deze method accepteert enkel String waarden");
      var e = [];
      if ("" == d) return e;
      if (
        c.isArray(a) &&
        3 == arguments.length &&
        "undefined" !== typeof b &&
        "" !== b
      ) {
        var f = new RegExp(d);
        h.each(a, function(a, c) {
          c[b]
            ? -1 != c[b].search(f) && e.push(c)
            : console.log("property '" + b + "' niet gevonden in object");
        });
      } else
        throw Error(
          "argumenten prop en val zijn verplicht en mogen niet leeg zijn"
        );
      return e;
    },
    getDatasetsByConditions: function getDatasetsByConditions(a) {
      var b = c.flexidata;
      if (c.isObject(a)) {
        for (var d in a) {
          b = c.getDatasetsByProperty(b, d, a[d].waarde, a[d].match);
        }
        return b;
      }
      return [];
    },
    getDatasetsByConditionsFuzzy: function getDatasetsByConditionsFuzzy(a) {
      var b = c.flexidata;
      if (c.isObject(a)) {
        for (var d in a) {
          b = c.getDatasetsByProperty(b, d, a[d]);
        }
        return b;
      }
      return [];
    },
    login: function login(a, b) {
      return c.getIdByEmailPassword(a, b);
    },
    getDatasetById: function getDatasetById(a) {
      return c.getDatasetsByProperty(c.flexidata, "_id", a, "=");
    },
    createDataset: function createDataset(a) {
      if (c.isObject(a)) {
        var b = {},
          d = c.genKey();
        b._id = d;
        c.mergeDatasets(a, b);
        c.flexidata.push(b);
        return c.getDatasetById(d);
      }
      return !1;
    },
    updateDataset: function updateDataset(a, b) {
      var d = c.getDatasetById(a);
      if (0 != d.length)
        return (
          c.mergeDatasets(b, d[0]),
          console.log("Dataset '" + a + "' geupdate;"),
          c.getDatasetById(a)
        );
      console.log("_id '" + a + "' niet gevonden;");
      return !1;
    },
    deleteDataset: function deleteDataset(a) {
      for (var b = !1, d = null, e = 0; e < c.flexidata.length; e++) {
        if (c.flexidata[e]._id == a) {
          d = e;
          b = !0;
          break;
        }
      }
      0 == b
        ? console.log("dataset met _id '" + a + "' niet gevonden")
        : (c.flexidata.splice(d, 1),
          console.log("dataset met _id '" + a + "' werd verwijderd"));
      return b;
    },
    genKey: function genKey() {
      return c.generateHexString(24);
    },
    generateHexString: function generateHexString(a) {
      for (var b = ""; b.length < a; ) {
        b += Math.floor(16777215 * Math.random()).toString(16);
      }
      return b.substring(0, a);
    },
    isObject: function isObject(a) {
      return (
        a && "object" === (typeof a === "undefined" ? "undefined" : _typeof(a))
      );
    },
    isArray: function isArray(a) {
      return (
        a &&
        "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) &&
        a.constructor === Array
      );
    },
    isNumber: function isNumber(a) {
      return "number" === typeof a && isFinite(a);
    },
    mergeDatasets: function mergeDatasets(a, b) {
      if (a && b && c.isObject(a))
        for (var d in a) {
          "_id" != d && (b[d] = a[d]);
        }
      else throw Error("mergeDataset: argumenten tekort");
    },
    enumerate: function enumerate(a) {
      var b = "";
      if (c.isObject(a))
        for (var d in a) {
          a.hasOwnProperty(d) &&
            (b = c.isObject(a[d])
              ? b + (d + " : " + c.enumerate(a[d]))
              : b + (" " + d + " : " + a[d] + ","));
        }
      else throw Error("geen object");
      return b;
    },
    makeList: function makeList(a, b) {
      var d = c.isArray(b) ? b : [],
        e = h("<ul>");
      h.each(d, function(a, b) {
        e.append("<li>" + c.enumerate(b) + "</li>");
      });
      h(a).append(e);
    }
  };
  c.init();
  return c;
})(window.jQuery, "js/profielenPrettified.json");
