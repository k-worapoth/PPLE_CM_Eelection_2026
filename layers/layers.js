var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_postalfinal_1 = new ol.format.GeoJSON();
var features_postalfinal_1 = format_postalfinal_1.readFeatures(json_postalfinal_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_postalfinal_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_postalfinal_1.addFeatures(features_postalfinal_1);
var lyr_postalfinal_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_postalfinal_1, 
                style: style_postalfinal_1,
                popuplayertitle: 'postalfinal',
                interactive: true,
    title: 'postalfinal<br />\
    <img src="styles/legend/postalfinal_1_0.png" /> 10 - 35<br />\
    <img src="styles/legend/postalfinal_1_1.png" /> 35 - 70<br />\
    <img src="styles/legend/postalfinal_1_2.png" /> 70 - 98<br />\
    <img src="styles/legend/postalfinal_1_3.png" /> 98 - 132<br />\
    <img src="styles/legend/postalfinal_1_4.png" /> 132 - 156<br />\
    <img src="styles/legend/postalfinal_1_5.png" /> 156 - 190<br />\
    <img src="styles/legend/postalfinal_1_6.png" /> 190 - 251<br />\
    <img src="styles/legend/postalfinal_1_7.png" /> 251 - 300<br />\
    <img src="styles/legend/postalfinal_1_8.png" /> 300 - 1,100<br />\
    <img src="styles/legend/postalfinal_1_9.png" /> 1,100 - 1,631<br />' });
var format_Group_B_2 = new ol.format.GeoJSON();
var features_Group_B_2 = format_Group_B_2.readFeatures(json_Group_B_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Group_B_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Group_B_2.addFeatures(features_Group_B_2);
var lyr_Group_B_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Group_B_2, 
                style: style_Group_B_2,
                popuplayertitle: 'Group_B',
                interactive: true,
                title: '<img src="styles/legend/Group_B_2.png" /> Group_B'
            });
var format_Group_A_3 = new ol.format.GeoJSON();
var features_Group_A_3 = format_Group_A_3.readFeatures(json_Group_A_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Group_A_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Group_A_3.addFeatures(features_Group_A_3);
var lyr_Group_A_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Group_A_3, 
                style: style_Group_A_3,
                popuplayertitle: 'Group_A',
                interactive: true,
                title: '<img src="styles/legend/Group_A_3.png" /> Group_A'
            });
var group_mao = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'mao'});
var group_EVENT = new ol.layer.Group({
                                layers: [lyr_postalfinal_1,lyr_Group_B_2,lyr_Group_A_3,],
                                fold: 'open',
                                title: 'EVENT'});
var group_ELECTIONRESULT = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'ELECTIONRESULT'});
var group_CMMC2025 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'CMMC2025'});
var group_banner2025 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'banner2025'});
var group_banner2026 = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'banner2026'});
var group_POLITICALMAP = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'POLITICALMAP'});
var group_MP_CM1_2023 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MP_CM1_2023'});

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_postalfinal_1.setVisible(true);lyr_Group_B_2.setVisible(true);lyr_Group_A_3.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,group_EVENT];
lyr_postalfinal_1.set('fieldAliases', {'name': 'name', 'tambon': 'tambon', 'house': 'house', });
lyr_Group_B_2.set('fieldAliases', {'id': 'id', 'name': 'name', 'date': 'date', 'note': 'note', });
lyr_Group_A_3.set('fieldAliases', {'id': 'id', 'name': 'name', 'date': 'date', 'note': 'note', });
lyr_postalfinal_1.set('fieldImages', {'name': 'TextEdit', 'tambon': 'TextEdit', 'house': 'TextEdit', });
lyr_Group_B_2.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'date': 'DateTime', 'note': 'DateTime', });
lyr_Group_A_3.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'date': 'DateTime', 'note': 'TextEdit', });
lyr_postalfinal_1.set('fieldLabels', {'name': 'no label', 'tambon': 'no label', 'house': 'no label', });
lyr_Group_B_2.set('fieldLabels', {'id': 'header label - visible with data', 'name': 'inline label - always visible', 'date': 'inline label - always visible', 'note': 'hidden field', });
lyr_Group_A_3.set('fieldLabels', {'id': 'hidden field', 'name': 'inline label - always visible', 'date': 'inline label - always visible', 'note': 'hidden field', });
lyr_Group_A_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});