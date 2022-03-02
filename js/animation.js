$(".playbtn").hover(
    function () {
    $(".p4_pump_no2").addClass("L_rotate");
    $(".p4_pump_no5").addClass("R_rotate");
    $(".p4_pump_center").addClass("center_light");
    },
    function () {
    $(".p4_pump_no2").removeClass("L_rotate");
    $(".p4_pump_no5").removeClass("R_rotate");
    $(".p4_pump_center").removeClass("center_light");
    }
);
$(".go").click(function () {
    $(".p4_pump_no2").addClass("L_animate");
    $(".p4_pump_no4").addClass("L_animate");
    $(".p4_pump_no3").addClass("R_animate");
    $(".p4_pump_no5").addClass("R_animate");
    $(".p4_pump_no6").addClass("no6_cover");
    $(".p4_pump_no7").addClass("no7_cover");
    $(".p4_pump_no8").addClass("no8_cover");
    $(".p4_pump_center").addClass("center");
    });
$(".award_checkbtn").click(function () {
    $(".p4_pump_no2").removeClass("L_animate");
    $(".p4_pump_no4").removeClass("L_animate");
    $(".p4_pump_no3").removeClass("R_animate");
    $(".p4_pump_no5").removeClass("R_animate");
    $(".p4_pump_no6").removeClass("no6_cover");
    $(".p4_pump_no7").removeClass("no7_cover");
    $(".p4_pump_no8").removeClass("no8_cover");
    $(".p4_pump_center").removeClass("center");
    });