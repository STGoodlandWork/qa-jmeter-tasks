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
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 285.0, "minX": 0.0, "maxY": 16057.0, "series": [{"data": [[0.0, 285.0], [0.1, 289.0], [0.2, 290.0], [0.3, 292.0], [0.4, 293.0], [0.5, 298.0], [0.6, 299.0], [0.7, 303.0], [0.8, 304.0], [0.9, 304.0], [1.0, 304.0], [1.1, 305.0], [1.2, 306.0], [1.3, 306.0], [1.4, 307.0], [1.5, 308.0], [1.6, 309.0], [1.7, 309.0], [1.8, 309.0], [1.9, 310.0], [2.0, 311.0], [2.1, 312.0], [2.2, 313.0], [2.3, 314.0], [2.4, 314.0], [2.5, 314.0], [2.6, 315.0], [2.7, 315.0], [2.8, 316.0], [2.9, 317.0], [3.0, 318.0], [3.1, 319.0], [3.2, 319.0], [3.3, 319.0], [3.4, 320.0], [3.5, 320.0], [3.6, 320.0], [3.7, 320.0], [3.8, 321.0], [3.9, 321.0], [4.0, 322.0], [4.1, 323.0], [4.2, 323.0], [4.3, 324.0], [4.4, 325.0], [4.5, 325.0], [4.6, 326.0], [4.7, 327.0], [4.8, 327.0], [4.9, 327.0], [5.0, 328.0], [5.1, 329.0], [5.2, 329.0], [5.3, 329.0], [5.4, 330.0], [5.5, 330.0], [5.6, 330.0], [5.7, 330.0], [5.8, 331.0], [5.9, 331.0], [6.0, 332.0], [6.1, 332.0], [6.2, 332.0], [6.3, 333.0], [6.4, 333.0], [6.5, 334.0], [6.6, 334.0], [6.7, 334.0], [6.8, 335.0], [6.9, 335.0], [7.0, 335.0], [7.1, 335.0], [7.2, 336.0], [7.3, 336.0], [7.4, 337.0], [7.5, 337.0], [7.6, 337.0], [7.7, 339.0], [7.8, 339.0], [7.9, 339.0], [8.0, 339.0], [8.1, 340.0], [8.2, 340.0], [8.3, 340.0], [8.4, 340.0], [8.5, 340.0], [8.6, 341.0], [8.7, 341.0], [8.8, 342.0], [8.9, 342.0], [9.0, 342.0], [9.1, 342.0], [9.2, 343.0], [9.3, 343.0], [9.4, 344.0], [9.5, 344.0], [9.6, 344.0], [9.7, 344.0], [9.8, 344.0], [9.9, 345.0], [10.0, 345.0], [10.1, 345.0], [10.2, 345.0], [10.3, 346.0], [10.4, 346.0], [10.5, 346.0], [10.6, 347.0], [10.7, 347.0], [10.8, 348.0], [10.9, 348.0], [11.0, 348.0], [11.1, 349.0], [11.2, 349.0], [11.3, 349.0], [11.4, 349.0], [11.5, 350.0], [11.6, 350.0], [11.7, 351.0], [11.8, 351.0], [11.9, 351.0], [12.0, 351.0], [12.1, 352.0], [12.2, 352.0], [12.3, 352.0], [12.4, 353.0], [12.5, 353.0], [12.6, 353.0], [12.7, 353.0], [12.8, 354.0], [12.9, 354.0], [13.0, 354.0], [13.1, 355.0], [13.2, 355.0], [13.3, 355.0], [13.4, 355.0], [13.5, 356.0], [13.6, 356.0], [13.7, 356.0], [13.8, 357.0], [13.9, 357.0], [14.0, 358.0], [14.1, 358.0], [14.2, 358.0], [14.3, 359.0], [14.4, 359.0], [14.5, 359.0], [14.6, 359.0], [14.7, 359.0], [14.8, 360.0], [14.9, 360.0], [15.0, 360.0], [15.1, 360.0], [15.2, 360.0], [15.3, 361.0], [15.4, 361.0], [15.5, 361.0], [15.6, 361.0], [15.7, 362.0], [15.8, 362.0], [15.9, 362.0], [16.0, 362.0], [16.1, 362.0], [16.2, 363.0], [16.3, 363.0], [16.4, 363.0], [16.5, 364.0], [16.6, 364.0], [16.7, 364.0], [16.8, 364.0], [16.9, 365.0], [17.0, 365.0], [17.1, 365.0], [17.2, 365.0], [17.3, 366.0], [17.4, 366.0], [17.5, 366.0], [17.6, 366.0], [17.7, 366.0], [17.8, 366.0], [17.9, 367.0], [18.0, 367.0], [18.1, 368.0], [18.2, 368.0], [18.3, 368.0], [18.4, 368.0], [18.5, 369.0], [18.6, 369.0], [18.7, 369.0], [18.8, 370.0], [18.9, 370.0], [19.0, 370.0], [19.1, 370.0], [19.2, 370.0], [19.3, 371.0], [19.4, 371.0], [19.5, 372.0], [19.6, 372.0], [19.7, 372.0], [19.8, 372.0], [19.9, 372.0], [20.0, 373.0], [20.1, 373.0], [20.2, 373.0], [20.3, 373.0], [20.4, 373.0], [20.5, 373.0], [20.6, 374.0], [20.7, 374.0], [20.8, 374.0], [20.9, 375.0], [21.0, 375.0], [21.1, 375.0], [21.2, 375.0], [21.3, 376.0], [21.4, 376.0], [21.5, 376.0], [21.6, 377.0], [21.7, 377.0], [21.8, 377.0], [21.9, 377.0], [22.0, 378.0], [22.1, 378.0], [22.2, 378.0], [22.3, 378.0], [22.4, 379.0], [22.5, 379.0], [22.6, 379.0], [22.7, 379.0], [22.8, 380.0], [22.9, 380.0], [23.0, 380.0], [23.1, 381.0], [23.2, 381.0], [23.3, 382.0], [23.4, 382.0], [23.5, 382.0], [23.6, 383.0], [23.7, 383.0], [23.8, 383.0], [23.9, 383.0], [24.0, 384.0], [24.1, 384.0], [24.2, 384.0], [24.3, 385.0], [24.4, 385.0], [24.5, 385.0], [24.6, 386.0], [24.7, 386.0], [24.8, 386.0], [24.9, 387.0], [25.0, 387.0], [25.1, 387.0], [25.2, 387.0], [25.3, 387.0], [25.4, 388.0], [25.5, 388.0], [25.6, 389.0], [25.7, 389.0], [25.8, 389.0], [25.9, 389.0], [26.0, 390.0], [26.1, 390.0], [26.2, 390.0], [26.3, 390.0], [26.4, 390.0], [26.5, 390.0], [26.6, 390.0], [26.7, 391.0], [26.8, 391.0], [26.9, 391.0], [27.0, 391.0], [27.1, 391.0], [27.2, 391.0], [27.3, 391.0], [27.4, 392.0], [27.5, 392.0], [27.6, 392.0], [27.7, 392.0], [27.8, 393.0], [27.9, 393.0], [28.0, 393.0], [28.1, 393.0], [28.2, 393.0], [28.3, 394.0], [28.4, 394.0], [28.5, 395.0], [28.6, 395.0], [28.7, 395.0], [28.8, 395.0], [28.9, 395.0], [29.0, 396.0], [29.1, 396.0], [29.2, 396.0], [29.3, 396.0], [29.4, 397.0], [29.5, 397.0], [29.6, 398.0], [29.7, 398.0], [29.8, 398.0], [29.9, 399.0], [30.0, 399.0], [30.1, 399.0], [30.2, 400.0], [30.3, 400.0], [30.4, 401.0], [30.5, 401.0], [30.6, 401.0], [30.7, 401.0], [30.8, 401.0], [30.9, 402.0], [31.0, 402.0], [31.1, 402.0], [31.2, 403.0], [31.3, 403.0], [31.4, 404.0], [31.5, 405.0], [31.6, 405.0], [31.7, 405.0], [31.8, 406.0], [31.9, 406.0], [32.0, 406.0], [32.1, 406.0], [32.2, 406.0], [32.3, 407.0], [32.4, 407.0], [32.5, 408.0], [32.6, 408.0], [32.7, 408.0], [32.8, 409.0], [32.9, 409.0], [33.0, 410.0], [33.1, 410.0], [33.2, 410.0], [33.3, 410.0], [33.4, 411.0], [33.5, 411.0], [33.6, 411.0], [33.7, 411.0], [33.8, 412.0], [33.9, 412.0], [34.0, 412.0], [34.1, 413.0], [34.2, 413.0], [34.3, 413.0], [34.4, 413.0], [34.5, 414.0], [34.6, 414.0], [34.7, 415.0], [34.8, 415.0], [34.9, 416.0], [35.0, 416.0], [35.1, 416.0], [35.2, 416.0], [35.3, 417.0], [35.4, 417.0], [35.5, 417.0], [35.6, 418.0], [35.7, 418.0], [35.8, 419.0], [35.9, 419.0], [36.0, 419.0], [36.1, 419.0], [36.2, 420.0], [36.3, 420.0], [36.4, 420.0], [36.5, 421.0], [36.6, 421.0], [36.7, 421.0], [36.8, 422.0], [36.9, 422.0], [37.0, 423.0], [37.1, 423.0], [37.2, 423.0], [37.3, 423.0], [37.4, 424.0], [37.5, 424.0], [37.6, 424.0], [37.7, 424.0], [37.8, 424.0], [37.9, 425.0], [38.0, 425.0], [38.1, 425.0], [38.2, 425.0], [38.3, 426.0], [38.4, 426.0], [38.5, 426.0], [38.6, 427.0], [38.7, 427.0], [38.8, 428.0], [38.9, 428.0], [39.0, 429.0], [39.1, 429.0], [39.2, 429.0], [39.3, 429.0], [39.4, 430.0], [39.5, 430.0], [39.6, 431.0], [39.7, 431.0], [39.8, 431.0], [39.9, 431.0], [40.0, 431.0], [40.1, 432.0], [40.2, 432.0], [40.3, 432.0], [40.4, 433.0], [40.5, 433.0], [40.6, 434.0], [40.7, 434.0], [40.8, 434.0], [40.9, 434.0], [41.0, 434.0], [41.1, 435.0], [41.2, 435.0], [41.3, 435.0], [41.4, 435.0], [41.5, 436.0], [41.6, 436.0], [41.7, 436.0], [41.8, 436.0], [41.9, 437.0], [42.0, 437.0], [42.1, 438.0], [42.2, 438.0], [42.3, 439.0], [42.4, 439.0], [42.5, 439.0], [42.6, 440.0], [42.7, 440.0], [42.8, 441.0], [42.9, 441.0], [43.0, 441.0], [43.1, 442.0], [43.2, 442.0], [43.3, 442.0], [43.4, 443.0], [43.5, 443.0], [43.6, 444.0], [43.7, 444.0], [43.8, 444.0], [43.9, 445.0], [44.0, 445.0], [44.1, 445.0], [44.2, 446.0], [44.3, 446.0], [44.4, 447.0], [44.5, 447.0], [44.6, 448.0], [44.7, 448.0], [44.8, 448.0], [44.9, 448.0], [45.0, 449.0], [45.1, 449.0], [45.2, 451.0], [45.3, 451.0], [45.4, 452.0], [45.5, 452.0], [45.6, 452.0], [45.7, 452.0], [45.8, 453.0], [45.9, 453.0], [46.0, 453.0], [46.1, 454.0], [46.2, 454.0], [46.3, 455.0], [46.4, 455.0], [46.5, 456.0], [46.6, 456.0], [46.7, 457.0], [46.8, 457.0], [46.9, 457.0], [47.0, 458.0], [47.1, 458.0], [47.2, 458.0], [47.3, 458.0], [47.4, 459.0], [47.5, 459.0], [47.6, 459.0], [47.7, 460.0], [47.8, 461.0], [47.9, 461.0], [48.0, 461.0], [48.1, 461.0], [48.2, 462.0], [48.3, 462.0], [48.4, 463.0], [48.5, 464.0], [48.6, 464.0], [48.7, 465.0], [48.8, 465.0], [48.9, 465.0], [49.0, 466.0], [49.1, 466.0], [49.2, 466.0], [49.3, 467.0], [49.4, 468.0], [49.5, 468.0], [49.6, 468.0], [49.7, 469.0], [49.8, 470.0], [49.9, 471.0], [50.0, 471.0], [50.1, 472.0], [50.2, 472.0], [50.3, 473.0], [50.4, 473.0], [50.5, 473.0], [50.6, 474.0], [50.7, 474.0], [50.8, 474.0], [50.9, 474.0], [51.0, 475.0], [51.1, 475.0], [51.2, 475.0], [51.3, 476.0], [51.4, 476.0], [51.5, 477.0], [51.6, 477.0], [51.7, 477.0], [51.8, 478.0], [51.9, 479.0], [52.0, 480.0], [52.1, 480.0], [52.2, 481.0], [52.3, 481.0], [52.4, 482.0], [52.5, 482.0], [52.6, 483.0], [52.7, 483.0], [52.8, 484.0], [52.9, 485.0], [53.0, 485.0], [53.1, 486.0], [53.2, 486.0], [53.3, 486.0], [53.4, 487.0], [53.5, 487.0], [53.6, 487.0], [53.7, 488.0], [53.8, 489.0], [53.9, 490.0], [54.0, 490.0], [54.1, 491.0], [54.2, 492.0], [54.3, 492.0], [54.4, 493.0], [54.5, 493.0], [54.6, 493.0], [54.7, 493.0], [54.8, 494.0], [54.9, 495.0], [55.0, 495.0], [55.1, 496.0], [55.2, 496.0], [55.3, 496.0], [55.4, 497.0], [55.5, 498.0], [55.6, 499.0], [55.7, 500.0], [55.8, 500.0], [55.9, 500.0], [56.0, 501.0], [56.1, 501.0], [56.2, 502.0], [56.3, 502.0], [56.4, 502.0], [56.5, 503.0], [56.6, 504.0], [56.7, 504.0], [56.8, 504.0], [56.9, 504.0], [57.0, 505.0], [57.1, 506.0], [57.2, 508.0], [57.3, 508.0], [57.4, 509.0], [57.5, 510.0], [57.6, 510.0], [57.7, 511.0], [57.8, 511.0], [57.9, 511.0], [58.0, 512.0], [58.1, 512.0], [58.2, 513.0], [58.3, 513.0], [58.4, 514.0], [58.5, 514.0], [58.6, 515.0], [58.7, 515.0], [58.8, 517.0], [58.9, 518.0], [59.0, 518.0], [59.1, 519.0], [59.2, 519.0], [59.3, 520.0], [59.4, 521.0], [59.5, 521.0], [59.6, 522.0], [59.7, 523.0], [59.8, 525.0], [59.9, 525.0], [60.0, 526.0], [60.1, 526.0], [60.2, 527.0], [60.3, 528.0], [60.4, 528.0], [60.5, 529.0], [60.6, 529.0], [60.7, 529.0], [60.8, 530.0], [60.9, 530.0], [61.0, 531.0], [61.1, 531.0], [61.2, 531.0], [61.3, 532.0], [61.4, 532.0], [61.5, 533.0], [61.6, 534.0], [61.7, 535.0], [61.8, 536.0], [61.9, 536.0], [62.0, 537.0], [62.1, 538.0], [62.2, 539.0], [62.3, 540.0], [62.4, 541.0], [62.5, 543.0], [62.6, 544.0], [62.7, 545.0], [62.8, 545.0], [62.9, 545.0], [63.0, 546.0], [63.1, 547.0], [63.2, 547.0], [63.3, 548.0], [63.4, 549.0], [63.5, 549.0], [63.6, 550.0], [63.7, 550.0], [63.8, 551.0], [63.9, 551.0], [64.0, 552.0], [64.1, 552.0], [64.2, 554.0], [64.3, 555.0], [64.4, 555.0], [64.5, 557.0], [64.6, 558.0], [64.7, 558.0], [64.8, 559.0], [64.9, 560.0], [65.0, 560.0], [65.1, 560.0], [65.2, 561.0], [65.3, 561.0], [65.4, 562.0], [65.5, 562.0], [65.6, 563.0], [65.7, 563.0], [65.8, 564.0], [65.9, 565.0], [66.0, 565.0], [66.1, 567.0], [66.2, 568.0], [66.3, 569.0], [66.4, 571.0], [66.5, 573.0], [66.6, 573.0], [66.7, 575.0], [66.8, 576.0], [66.9, 578.0], [67.0, 579.0], [67.1, 579.0], [67.2, 580.0], [67.3, 582.0], [67.4, 583.0], [67.5, 583.0], [67.6, 585.0], [67.7, 586.0], [67.8, 588.0], [67.9, 589.0], [68.0, 589.0], [68.1, 590.0], [68.2, 591.0], [68.3, 593.0], [68.4, 593.0], [68.5, 594.0], [68.6, 595.0], [68.7, 596.0], [68.8, 597.0], [68.9, 598.0], [69.0, 599.0], [69.1, 599.0], [69.2, 601.0], [69.3, 602.0], [69.4, 603.0], [69.5, 604.0], [69.6, 605.0], [69.7, 606.0], [69.8, 606.0], [69.9, 607.0], [70.0, 607.0], [70.1, 607.0], [70.2, 608.0], [70.3, 610.0], [70.4, 611.0], [70.5, 612.0], [70.6, 612.0], [70.7, 614.0], [70.8, 615.0], [70.9, 615.0], [71.0, 617.0], [71.1, 617.0], [71.2, 618.0], [71.3, 619.0], [71.4, 620.0], [71.5, 621.0], [71.6, 623.0], [71.7, 624.0], [71.8, 624.0], [71.9, 625.0], [72.0, 626.0], [72.1, 628.0], [72.2, 628.0], [72.3, 631.0], [72.4, 632.0], [72.5, 634.0], [72.6, 635.0], [72.7, 636.0], [72.8, 637.0], [72.9, 638.0], [73.0, 640.0], [73.1, 640.0], [73.2, 641.0], [73.3, 642.0], [73.4, 646.0], [73.5, 646.0], [73.6, 647.0], [73.7, 649.0], [73.8, 650.0], [73.9, 652.0], [74.0, 653.0], [74.1, 653.0], [74.2, 654.0], [74.3, 655.0], [74.4, 656.0], [74.5, 657.0], [74.6, 657.0], [74.7, 658.0], [74.8, 661.0], [74.9, 661.0], [75.0, 664.0], [75.1, 665.0], [75.2, 668.0], [75.3, 668.0], [75.4, 670.0], [75.5, 672.0], [75.6, 674.0], [75.7, 677.0], [75.8, 678.0], [75.9, 678.0], [76.0, 679.0], [76.1, 679.0], [76.2, 681.0], [76.3, 682.0], [76.4, 683.0], [76.5, 684.0], [76.6, 685.0], [76.7, 686.0], [76.8, 688.0], [76.9, 692.0], [77.0, 693.0], [77.1, 694.0], [77.2, 696.0], [77.3, 700.0], [77.4, 701.0], [77.5, 702.0], [77.6, 705.0], [77.7, 707.0], [77.8, 709.0], [77.9, 710.0], [78.0, 710.0], [78.1, 712.0], [78.2, 713.0], [78.3, 715.0], [78.4, 723.0], [78.5, 723.0], [78.6, 727.0], [78.7, 727.0], [78.8, 732.0], [78.9, 733.0], [79.0, 736.0], [79.1, 738.0], [79.2, 740.0], [79.3, 744.0], [79.4, 746.0], [79.5, 749.0], [79.6, 752.0], [79.7, 755.0], [79.8, 756.0], [79.9, 758.0], [80.0, 762.0], [80.1, 769.0], [80.2, 771.0], [80.3, 771.0], [80.4, 773.0], [80.5, 775.0], [80.6, 777.0], [80.7, 778.0], [80.8, 787.0], [80.9, 790.0], [81.0, 804.0], [81.1, 808.0], [81.2, 810.0], [81.3, 813.0], [81.4, 816.0], [81.5, 819.0], [81.6, 821.0], [81.7, 821.0], [81.8, 826.0], [81.9, 833.0], [82.0, 835.0], [82.1, 839.0], [82.2, 845.0], [82.3, 847.0], [82.4, 852.0], [82.5, 858.0], [82.6, 862.0], [82.7, 867.0], [82.8, 870.0], [82.9, 872.0], [83.0, 881.0], [83.1, 884.0], [83.2, 889.0], [83.3, 895.0], [83.4, 899.0], [83.5, 906.0], [83.6, 909.0], [83.7, 914.0], [83.8, 916.0], [83.9, 928.0], [84.0, 942.0], [84.1, 950.0], [84.2, 956.0], [84.3, 966.0], [84.4, 980.0], [84.5, 993.0], [84.6, 1014.0], [84.7, 1025.0], [84.8, 1034.0], [84.9, 1043.0], [85.0, 1058.0], [85.1, 1078.0], [85.2, 1093.0], [85.3, 1105.0], [85.4, 1110.0], [85.5, 1192.0], [85.6, 1194.0], [85.7, 1244.0], [85.8, 1253.0], [85.9, 1272.0], [86.0, 1302.0], [86.1, 1310.0], [86.2, 1324.0], [86.3, 1331.0], [86.4, 1345.0], [86.5, 1359.0], [86.6, 1386.0], [86.7, 1404.0], [86.8, 1461.0], [86.9, 1468.0], [87.0, 1484.0], [87.1, 1501.0], [87.2, 1507.0], [87.3, 1536.0], [87.4, 1557.0], [87.5, 1596.0], [87.6, 1604.0], [87.7, 1627.0], [87.8, 1647.0], [87.9, 1677.0], [88.0, 1706.0], [88.1, 1722.0], [88.2, 1757.0], [88.3, 1789.0], [88.4, 1810.0], [88.5, 1817.0], [88.6, 1860.0], [88.7, 1875.0], [88.8, 1887.0], [88.9, 1896.0], [89.0, 1928.0], [89.1, 1972.0], [89.2, 2001.0], [89.3, 2049.0], [89.4, 2068.0], [89.5, 2082.0], [89.6, 2091.0], [89.7, 2096.0], [89.8, 2116.0], [89.9, 2133.0], [90.0, 2176.0], [90.1, 2190.0], [90.2, 2213.0], [90.3, 2218.0], [90.4, 2265.0], [90.5, 2275.0], [90.6, 2300.0], [90.7, 2323.0], [90.8, 2351.0], [90.9, 2365.0], [91.0, 2398.0], [91.1, 2410.0], [91.2, 2527.0], [91.3, 2543.0], [91.4, 2586.0], [91.5, 2598.0], [91.6, 2674.0], [91.7, 2704.0], [91.8, 2738.0], [91.9, 2763.0], [92.0, 2835.0], [92.1, 2838.0], [92.2, 2893.0], [92.3, 2983.0], [92.4, 2999.0], [92.5, 3076.0], [92.6, 3103.0], [92.7, 3151.0], [92.8, 3187.0], [92.9, 3244.0], [93.0, 3271.0], [93.1, 3339.0], [93.2, 3380.0], [93.3, 3473.0], [93.4, 3507.0], [93.5, 3561.0], [93.6, 3569.0], [93.7, 3620.0], [93.8, 3663.0], [93.9, 3685.0], [94.0, 3769.0], [94.1, 3785.0], [94.2, 3823.0], [94.3, 3837.0], [94.4, 3843.0], [94.5, 3864.0], [94.6, 3891.0], [94.7, 3915.0], [94.8, 3927.0], [94.9, 3992.0], [95.0, 4025.0], [95.1, 4102.0], [95.2, 4114.0], [95.3, 4125.0], [95.4, 4142.0], [95.5, 4202.0], [95.6, 4251.0], [95.7, 4295.0], [95.8, 4386.0], [95.9, 4455.0], [96.0, 4533.0], [96.1, 4567.0], [96.2, 4688.0], [96.3, 4715.0], [96.4, 4752.0], [96.5, 4786.0], [96.6, 4828.0], [96.7, 4943.0], [96.8, 4985.0], [96.9, 5092.0], [97.0, 5142.0], [97.1, 5432.0], [97.2, 5479.0], [97.3, 5521.0], [97.4, 5677.0], [97.5, 5863.0], [97.6, 6068.0], [97.7, 6155.0], [97.8, 6352.0], [97.9, 6598.0], [98.0, 6679.0], [98.1, 6752.0], [98.2, 6844.0], [98.3, 6971.0], [98.4, 7182.0], [98.5, 7317.0], [98.6, 7340.0], [98.7, 7440.0], [98.8, 7550.0], [98.9, 7622.0], [99.0, 7845.0], [99.1, 7921.0], [99.2, 8137.0], [99.3, 8187.0], [99.4, 8949.0], [99.5, 9494.0], [99.6, 9976.0], [99.7, 12687.0], [99.8, 13845.0], [99.9, 15347.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 200.0, "maxY": 723.0, "series": [{"data": [[600.0, 199.0], [700.0, 91.0], [800.0, 59.0], [900.0, 29.0], [1000.0, 16.0], [1100.0, 9.0], [1200.0, 9.0], [1300.0, 17.0], [1400.0, 10.0], [1500.0, 11.0], [1600.0, 11.0], [1700.0, 10.0], [1800.0, 13.0], [1900.0, 6.0], [2000.0, 13.0], [2100.0, 10.0], [2300.0, 11.0], [2200.0, 11.0], [2400.0, 4.0], [2500.0, 9.0], [2600.0, 3.0], [2800.0, 7.0], [2700.0, 7.0], [2900.0, 5.0], [3000.0, 3.0], [3100.0, 6.0], [3300.0, 5.0], [3200.0, 5.0], [3400.0, 4.0], [3500.0, 6.0], [3700.0, 4.0], [3600.0, 8.0], [3800.0, 13.0], [3900.0, 7.0], [4000.0, 4.0], [4100.0, 9.0], [4300.0, 4.0], [4200.0, 6.0], [4500.0, 5.0], [4400.0, 2.0], [4600.0, 2.0], [4700.0, 7.0], [4800.0, 3.0], [5000.0, 3.0], [4900.0, 4.0], [5100.0, 3.0], [5500.0, 2.0], [5400.0, 5.0], [5600.0, 2.0], [5800.0, 1.0], [5700.0, 1.0], [6100.0, 1.0], [6000.0, 2.0], [5900.0, 2.0], [6300.0, 2.0], [6200.0, 1.0], [6600.0, 3.0], [6500.0, 2.0], [6900.0, 3.0], [6700.0, 2.0], [6800.0, 3.0], [7100.0, 1.0], [7300.0, 3.0], [7400.0, 3.0], [7200.0, 2.0], [7500.0, 4.0], [7600.0, 1.0], [7900.0, 2.0], [7800.0, 2.0], [8100.0, 4.0], [8000.0, 1.0], [8400.0, 2.0], [8900.0, 1.0], [9200.0, 1.0], [9500.0, 1.0], [9400.0, 1.0], [9900.0, 1.0], [9800.0, 1.0], [10400.0, 1.0], [12600.0, 1.0], [13200.0, 1.0], [13700.0, 1.0], [13800.0, 1.0], [14200.0, 1.0], [15300.0, 1.0], [15900.0, 1.0], [16000.0, 1.0], [200.0, 15.0], [300.0, 723.0], [400.0, 624.0], [500.0, 330.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 16000.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 316.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1368.0, "series": [{"data": [[0.0, 1368.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 763.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 316.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.61055408E12, "maxY": 44.23999999999998, "series": [{"data": [[1.61055408E12, 24.337349397590355]], "isOverall": false, "label": "Load Test", "isController": false}, {"data": [[1.61055414E12, 1.0], [1.61055408E12, 22.392592592592607]], "isOverall": false, "label": "Spike Test", "isController": false}, {"data": [[1.61055414E12, 44.23999999999998], [1.61055408E12, 33.629288702928896]], "isOverall": false, "label": "Stress Test", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61055414E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 357.6666666666667, "minX": 1.0, "maxY": 8175.0, "series": [{"data": [[2.0, 1612.0], [3.0, 1787.0], [4.0, 2582.0], [5.0, 2259.0], [6.0, 2984.0], [7.0, 2352.0], [8.0, 5499.0], [9.0, 3122.5], [10.0, 1272.0], [11.0, 2704.0], [12.0, 1557.0], [13.0, 6598.0], [14.0, 2403.0], [15.0, 4533.0], [16.0, 4386.0], [17.0, 704.0], [18.0, 1484.0], [19.0, 645.8571428571429], [20.0, 726.3333333333334], [21.0, 415.5], [22.0, 414.25], [23.0, 688.8571428571429], [24.0, 641.3333333333334], [25.0, 640.0], [26.0, 398.8], [27.0, 793.75], [28.0, 875.7777777777778], [29.0, 508.0666666666666], [30.0, 496.99999999999994], [31.0, 519.5892857142857], [32.0, 452.1694915254237], [33.0, 892.2151898734176], [34.0, 1060.3358778625952], [35.0, 924.3092783505153], [36.0, 1292.6829268292684], [37.0, 770.1037735849056], [38.0, 713.9473684210524], [39.0, 731.126213592233], [40.0, 704.9238095238098], [41.0, 762.8273381294965], [42.0, 775.2013888888887], [43.0, 927.3103448275862], [44.0, 839.7638888888891], [45.0, 771.0307692307692], [47.0, 825.7794117647059], [46.0, 761.0563380281687], [49.0, 795.6210526315793], [48.0, 801.7948717948719], [51.0, 779.6410256410255], [50.0, 613.7402597402598], [53.0, 3287.333333333333], [52.0, 3446.0], [54.0, 3115.75], [55.0, 8175.0], [56.0, 5191.5], [57.0, 357.6666666666667], [58.0, 3150.0], [59.0, 4084.5], [61.0, 7622.0], [60.0, 4218.0], [62.0, 3431.8], [63.0, 925.1666666666666], [64.0, 3096.0], [65.0, 2662.3333333333335], [66.0, 2066.333333333333], [67.0, 2369.8125], [69.0, 1812.4], [70.0, 4945.2], [71.0, 3220.0], [68.0, 3108.1666666666665], [72.0, 1118.2], [73.0, 1835.8333333333335], [75.0, 4327.666666666667], [74.0, 2564.5], [76.0, 3051.3333333333335], [77.0, 1580.3333333333333], [78.0, 2692.4285714285716], [79.0, 5094.0], [80.0, 3006.5], [83.0, 2370.3333333333335], [82.0, 1504.3333333333333], [81.0, 2473.363636363636], [86.0, 1041.1724137931035], [87.0, 1822.777777777778], [85.0, 3412.25], [84.0, 3555.411764705882], [1.0, 605.1511627906975]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[41.79158152840215, 971.7127094401311]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 87.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 709.1666666666666, "minX": 1.61055408E12, "maxY": 111742.73333333334, "series": [{"data": [[1.61055414E12, 19906.0], [1.61055408E12, 111742.73333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.61055414E12, 709.1666666666666], [1.61055408E12, 3980.9166666666665]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61055414E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 760.3162162162159, "minX": 1.61055408E12, "maxY": 1009.3712084737607, "series": [{"data": [[1.61055414E12, 760.3162162162159], [1.61055408E12, 1009.3712084737607]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61055414E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 759.1081081081082, "minX": 1.61055408E12, "maxY": 1008.2099181511802, "series": [{"data": [[1.61055414E12, 759.1081081081082], [1.61055408E12, 1008.2099181511802]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61055414E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 74.01621621621628, "minX": 1.61055408E12, "maxY": 77.09966297544506, "series": [{"data": [[1.61055414E12, 74.01621621621628], [1.61055408E12, 77.09966297544506]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61055414E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 285.0, "minX": 1.61055408E12, "maxY": 16057.0, "series": [{"data": [[1.61055414E12, 7550.0], [1.61055408E12, 16057.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.61055414E12, 905.4000000000002], [1.61055408E12, 2284.800000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.61055414E12, 6531.970000000002], [1.61055408E12, 8133.0999999999985]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.61055414E12, 2847.049999999997], [1.61055408E12, 4114.5]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.61055414E12, 303.0], [1.61055408E12, 285.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.61055414E12, 450.5], [1.61055408E12, 475.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61055414E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 351.0, "minX": 1.0, "maxY": 6679.0, "series": [{"data": [[32.0, 396.0], [33.0, 658.0], [2.0, 469.0], [36.0, 569.0], [40.0, 590.5], [42.0, 442.0], [46.0, 470.5], [47.0, 561.0], [48.0, 633.0], [49.0, 492.0], [3.0, 351.0], [50.0, 520.5], [52.0, 458.5], [53.0, 423.0], [54.0, 496.0], [55.0, 544.0], [56.0, 471.5], [60.0, 430.0], [61.0, 466.5], [62.0, 420.0], [64.0, 441.5], [66.0, 473.0], [69.0, 440.0], [68.0, 463.5], [78.0, 432.5], [83.0, 398.0], [10.0, 527.5], [11.0, 2275.0], [15.0, 3920.0], [16.0, 1692.0], [1.0, 769.0], [17.0, 2403.0], [21.0, 6679.0], [22.0, 574.5], [24.0, 796.5], [26.0, 1654.5], [29.0, 3089.5], [31.0, 610.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 83.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 350.0, "minX": 1.0, "maxY": 6677.0, "series": [{"data": [[32.0, 395.5], [33.0, 658.0], [2.0, 463.5], [36.0, 568.5], [40.0, 590.0], [42.0, 442.0], [46.0, 469.5], [47.0, 560.0], [48.0, 632.0], [49.0, 490.0], [3.0, 350.0], [50.0, 520.0], [52.0, 458.0], [53.0, 423.0], [54.0, 495.5], [55.0, 544.0], [56.0, 470.5], [60.0, 429.5], [61.0, 466.5], [62.0, 420.0], [64.0, 441.5], [66.0, 473.0], [69.0, 437.0], [68.0, 463.0], [78.0, 432.5], [83.0, 398.0], [10.0, 524.5], [11.0, 2275.0], [15.0, 3914.0], [16.0, 1692.0], [1.0, 768.0], [17.0, 2402.0], [21.0, 6677.0], [22.0, 574.0], [24.0, 796.0], [26.0, 1654.5], [29.0, 3088.0], [31.0, 609.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 83.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 5.35, "minX": 1.61055408E12, "maxY": 35.43333333333333, "series": [{"data": [[1.61055414E12, 5.35], [1.61055408E12, 35.43333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61055414E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 6.166666666666667, "minX": 1.61055408E12, "maxY": 34.61666666666667, "series": [{"data": [[1.61055414E12, 6.166666666666667], [1.61055408E12, 34.61666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.61055414E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 6.166666666666667, "minX": 1.61055408E12, "maxY": 34.61666666666667, "series": [{"data": [[1.61055414E12, 6.166666666666667], [1.61055408E12, 34.61666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61055414E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 6.166666666666667, "minX": 1.61055408E12, "maxY": 34.61666666666667, "series": [{"data": [[1.61055414E12, 6.166666666666667], [1.61055408E12, 34.61666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.61055414E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

