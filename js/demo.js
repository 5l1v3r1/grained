$(document).ready(function () {
    $(".main").onepage_scroll({
        sectionContainer: "section",
        responsiveFallback: 600,
        loop: true
    });

    var element = '#page1';
    var options = {
        animate: true, //default true
        patternWidth: 100,
        patternHeight: 100,
        grainOpacity: 0.05,
        grainDensity: 1,
        grainWidth: 1,
        grainHeight: 1

    };
    var options3 = {
        animate: true, //default true
        patternWidth: 100,
        patternHeight: 100,
        grainOpacity: 0.05,
        grainDensity: 1,
        grainWidth: 1,
        grainHeight: 1

    };

    var custOption = {
        animate: true, //default true
        patternWidth: 100,
        patternHeight: 100,
        grainOpacity: 0.05,
        grainDensity: 1,
        grainWidth: 1,
        grainHeight: 1
    };

    grained(element, options);
    grained("#page3", options3);

    function addGrain() {


        grained("#customGraindent", custOption);

        Object.keys(custOption).forEach(function (key) {
            if (typeof custOption[key] === 'number') {
                custOption[key] = +custOption[key].toFixed(2);
            }
        });

        var text = 'var options = ' + JSON.stringify(custOption, null, 2);
        text += '\ngrained("#elemntId", options);\n\n/*\nbackground-color :' + $("#customGraindent").css('backgroundColor') + '\n*/';
        $('.getCode textarea').text(text);
    }
    addGrain();

    var gui = new dat.GUI({
        autoPlace: false
    });

    var customize = gui.addFolder('Generate');
    customize.add(custOption, 'animate').onChange(addGrain);
    customize.add(custOption, 'patternWidth', 10, 500).onChange(addGrain);
    customize.add(custOption, 'patternHeight', 10, 500).onChange(addGrain);
    customize.add(custOption, 'grainOpacity', 0.0, 1).onChange(addGrain);
    customize.add(custOption, 'grainDensity', 1, 10).onChange(addGrain);
    customize.add(custOption, 'grainWidth', 1, 10).onChange(addGrain);
    customize.add(custOption, 'grainHeight', 1, 10).onChange(addGrain);
    customize.open();
    $('.custom-gen')[0].appendChild(gui.domElement);

    var bodyStyle = $('#customGraindent')[0].style;
    $('#demo_apidemo').colorpicker({
        color: bodyStyle.backgroundColor,
        container: $('#customGraindent')
    }).on('changeColor', function (ev) {
        bodyStyle.backgroundColor = ev.color.toHex();
        addGrain();
    });

    demos();

});

function heightCorrect() {
    $('.sessionOne').height(window.innerHeight - 200);
}
if (window.exports) {
    window.exports.heightCorrect = heightCorrect;
} else {
    window.exports = {};
    window.exports.heightCorrect = heightCorrect;
}

function demos() {


    var options = {
        "animate": true,
        "patternWidth": 100,
        "patternHeight": 100,
        "grainOpacity": 0.61,
        "grainDensity": 1.99,
        "grainWidth": 2.39,
        "grainHeight": 2.49
    }
    grained("#tv", options);

    options = {
        "animate": true,
        "patternWidth": 100,
        "patternHeight": 100,
        "grainOpacity": 0.12,
        "grainDensity": 1.99,
        "grainWidth": 1.79,
        "grainHeight": 3.28
    }
    grained("#grass", options);
    options = {
        "animate": true,
        "patternWidth": 100,
        "patternHeight": 100,
        "grainOpacity": 0.18,
        "grainDensity": 2.49,
        "grainWidth": 2.69,
        "grainHeight": 2.19
    }
    grained("#wood", options);
    options = {
        "animate": true,
        "patternWidth": 100,
        "patternHeight": 100,
        "grainOpacity": 0.03,
        "grainDensity": 2.09,
        "grainWidth": 7.85,
        "grainHeight": 5.07
    }
    grained("#filim", options);


}