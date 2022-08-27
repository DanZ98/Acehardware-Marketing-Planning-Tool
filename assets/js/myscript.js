// Slide toggle Profile Menu
$('.profile-dropdown').hide(); //this hides the list initially

$('.profile-dropdown-menu').click(function(){
    $(this).next(".profile-dropdown").slideToggle();
});

// Hamburger Menu Links Level 1
$('.menu-link-level1').click(function(){
    $(this).next().slideToggle();

    if($('.hamburger-submenu-level2:visible').length > 1) {
        $('.hamburger-submenu-level2:visible').hide();
        $(this).next().show();
    }
});

// Hamburger Menu Links Level 2
$('.submenu-level-2').click(function(){
    $(this).next(".hamburger-submenu-level3").slideToggle();
});

// Slide Toggle Sub Table
$('.chevron-toggle').click(function(){
    $(this).parent().parent().next('tr').children('td').children('.table-container__inner-table-container').slideToggle();
    $(this).parent().parent().next('tr').children('td').children('.table-container__inner-table-container').css('overflow', 'auto');

    // Toggling arrow rotate 90deg individually
    $(this).toggleClass('arrow-right-rotate');
});

$('.nav-link').click(function(){
    $(this).next().slideToggle();

    if($('.mega-menu:visible').length > 1) {
        $('.mega-menu:visible').hide();
        $(this).next().show();
    }
});


// Pie Chart
am5.ready(function() {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("chartdiv");
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
        am5themes_Animated.new(root)
    ]);
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
    var chart = root.container.children.push(am5percent.PieChart.new(root, {
        radius: am5.percent(90),
        innerRadius: am5.percent(50),
        layout: root.horizontalLayout
    }));
    
    // Create series
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
    var series = chart.series.push(am5percent.PieSeries.new(root, {
        name: "Series",
        valueField: "sales",
        categoryField: "country"
    }));
    
    // Set data
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
    series.data.setAll([{
        country: "Ace Rewards",
        sales: 501.9
    }, {
        country: "Ace Local Lift",
        sales: 301.9
    }, {
        country: "Social Media Advertising",
        sales: 201.1
    }, {
        country: "National Circulars",
        sales: 165.8
    }, {
        country: "Famous For 4, Sign Kits",
        sales: 139.9
    }, {
        country: "Other Local Marketing",
        sales: 128.3
    }, {
        country: "New Store Marketing",
        sales: 128.3
    }]);
    
    // Disabling labels and ticks
    series.labels.template.set("visible", false);
    series.ticks.template.set("visible", false);
    
    // Adding gradients
    series.slices.template.set("strokeOpacity", 0);
    series.slices.template.set("fillGradient", am5.RadialGradient.new(root, {
    stops: [{
    brighten: -0.8
    }, {
    brighten: -0.8
    }, {
    brighten: -0.5
    }, {
    brighten: 0
    }, {
    brighten: -0.5
    }]
    }));
    
    // Create legend
    // https://www.amcharts.com/docs/v5/charts/percent-charts/legend-percent-series/
    var legend = chart.children.push(am5.Legend.new(root, {
        centerY: am5.percent(50),
        y: am5.percent(50),
        layout: root.verticalLayout
    }));
    // set value labels align to right
    legend.valueLabels.template.setAll({ textAlign: "right" })
    // set width and max width of labels
    legend.labels.template.setAll({ 
        maxWidth: 140,
        width: 140,
        oversizedBehavior: "wrap"
    });
    
    legend.data.setAll(series.dataItems);
    
    
    // Play initial series animation
    // https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
    series.appear(1000, 100);
    
    }); // end am5.ready()