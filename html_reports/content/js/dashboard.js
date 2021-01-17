/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 67.3076923076923, "KoPercent": 32.69230769230769};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.616, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.0, 500, 1500, "FTP Request"], "isController": false}, {"data": [0.95, 500, 1500, "GetPokemon1"], "isController": false}, {"data": [0.0, 500, 1500, "Parent Controller"], "isController": true}, {"data": [0.0, 500, 1500, "Bing Kittens"], "isController": false}, {"data": [0.95, 500, 1500, "GetPokemon4"], "isController": false}, {"data": [1.0, 500, 1500, "jp@gc - Dummy Sampler"], "isController": false}, {"data": [0.0, 500, 1500, "JDBC Request - SELECT"], "isController": false}, {"data": [0.0, 500, 1500, "JDBC Request - INSERT"], "isController": false}, {"data": [0.425, 500, 1500, "Transaction Controller"], "isController": true}, {"data": [0.9833333333333333, 500, 1500, "HTTP Request"], "isController": false}, {"data": [0.7692307692307693, 500, 1500, "GetPokemon7"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 104, 34, 32.69230769230769, 935.3461538461538, 0, 4284, 164.0, 4082.0, 4087.5, 4274.900000000001, 8.255278615653278, 1046.159748199119, 0.6623075091284331], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["FTP Request", 1, 1, 100.0, 315.0, 315, 315, 315.0, 315.0, 315.0, 315.0, 3.1746031746031744, 0.0, 0.0], "isController": false}, {"data": ["GetPokemon1", 10, 0, 0.0, 280.40000000000003, 152, 731, 212.5, 694.6000000000001, 731.0, 731.0, 2.2138587558113794, 434.05684428270973, 0.29402811600619877], "isController": false}, {"data": ["Parent Controller", 1, 1, 100.0, 884.0, 884, 884, 884.0, 884.0, 884.0, 884.0, 1.1312217194570138, 733.5917615243212, 0.4242081447963801], "isController": true}, {"data": ["Bing Kittens", 10, 10, 100.0, 0.0, 0, 0, 0.0, 0.0, 0.0, 0.0, 2.2993791676247413, 2.687848499655093, 0.0], "isController": false}, {"data": ["GetPokemon4", 10, 0, 0.0, 200.5, 105, 643, 142.5, 613.6000000000001, 643.0, 643.0, 2.536783358701167, 541.6389205986809, 0.33939386732623034], "isController": false}, {"data": ["jp@gc - Dummy Sampler", 10, 0, 0.0, 320.1, 110, 451, 304.0, 450.8, 451.0, 451.0, 2.4919013207077, 0.2774187017194119, 0.0], "isController": false}, {"data": ["JDBC Request - SELECT", 10, 10, 100.0, 4105.4, 4050, 4284, 4087.0, 4265.8, 4284.0, 4284.0, 1.169864295741694, 0.22734667466073935, 0.0], "isController": false}, {"data": ["JDBC Request - INSERT", 10, 10, 100.0, 4064.7999999999997, 4040, 4082, 4070.5, 4082.0, 4082.0, 4082.0, 1.2029351617947792, 0.2337735324191026, 0.0], "isController": false}, {"data": ["Transaction Controller", 20, 10, 50.0, 4341.2, 352, 8354, 4561.0, 8183.9, 8345.5, 8354.0, 1.5874275736169539, 496.9476124097151, 0.3162453369315025], "isController": true}, {"data": ["HTTP Request", 30, 0, 0.0, 170.73333333333332, 70, 672, 147.5, 310.60000000000014, 493.2499999999998, 672.0, 6.350550381033023, 1324.5462002540219, 0.8434324724809483], "isController": false}, {"data": ["GetPokemon7", 13, 3, 23.076923076923077, 163.61538461538458, 61, 677, 119.0, 475.79999999999984, 677.0, 677.0, 2.7156883225402133, 586.985463560163, 0.3537412523501149], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["000/java.io.FileNotFoundException: C:\\\\Program Files\\\\apache-jmeter-5.4\\\\FTP_Output.txt (Access is denied)", 1, 2.9411764705882355, 0.9615384615384616], "isController": false}, {"data": ["null 0/java.sql.SQLException: Cannot create PoolableConnectionFactory (Communications link failure\\n\\nThe last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.)", 20, 58.8235294117647, 19.23076923076923], "isController": false}, {"data": ["Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 40: http://bing.com/images/search?q=kittens&amp; =&amp; =", 10, 29.41176470588235, 9.615384615384615], "isController": false}, {"data": ["Assertion failed", 3, 8.823529411764707, 2.8846153846153846], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 104, 34, "null 0/java.sql.SQLException: Cannot create PoolableConnectionFactory (Communications link failure\\n\\nThe last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.)", 20, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 40: http://bing.com/images/search?q=kittens&amp; =&amp; =", 10, "Assertion failed", 3, "000/java.io.FileNotFoundException: C:\\\\Program Files\\\\apache-jmeter-5.4\\\\FTP_Output.txt (Access is denied)", 1, null, null], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["FTP Request", 1, 1, "000/java.io.FileNotFoundException: C:\\\\Program Files\\\\apache-jmeter-5.4\\\\FTP_Output.txt (Access is denied)", 1, null, null, null, null, null, null, null, null], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": ["Bing Kittens", 10, 10, "Non HTTP response code: java.net.URISyntaxException/Non HTTP response message: Illegal character in query at index 40: http://bing.com/images/search?q=kittens&amp; =&amp; =", 10, null, null, null, null, null, null, null, null], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": ["JDBC Request - SELECT", 10, 10, "null 0/java.sql.SQLException: Cannot create PoolableConnectionFactory (Communications link failure\\n\\nThe last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.)", 10, null, null, null, null, null, null, null, null], "isController": false}, {"data": ["JDBC Request - INSERT", 10, 10, "null 0/java.sql.SQLException: Cannot create PoolableConnectionFactory (Communications link failure\\n\\nThe last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.)", 10, null, null, null, null, null, null, null, null], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": ["GetPokemon7", 13, 3, "Assertion failed", 3, null, null, null, null, null, null, null, null], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
