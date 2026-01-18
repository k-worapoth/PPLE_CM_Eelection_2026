var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_tambon_CMMC_1 = new ol.format.GeoJSON();
var features_tambon_CMMC_1 = format_tambon_CMMC_1.readFeatures(json_tambon_CMMC_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tambon_CMMC_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tambon_CMMC_1.addFeatures(features_tambon_CMMC_1);
var lyr_tambon_CMMC_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tambon_CMMC_1, 
                style: style_tambon_CMMC_1,
                popuplayertitle: 'tambon_CMMC',
                interactive: true,
                title: '<img src="styles/legend/tambon_CMMC_1.png" /> tambon_CMMC'
            });
var format_moo_faham_2 = new ol.format.GeoJSON();
var features_moo_faham_2 = format_moo_faham_2.readFeatures(json_moo_faham_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_moo_faham_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_moo_faham_2.addFeatures(features_moo_faham_2);
var lyr_moo_faham_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_moo_faham_2, 
                style: style_moo_faham_2,
                popuplayertitle: 'moo_faham',
                interactive: true,
                title: '<img src="styles/legend/moo_faham_2.png" /> moo_faham'
            });
var format_moo_tambon_changpueak_3 = new ol.format.GeoJSON();
var features_moo_tambon_changpueak_3 = format_moo_tambon_changpueak_3.readFeatures(json_moo_tambon_changpueak_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_moo_tambon_changpueak_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_moo_tambon_changpueak_3.addFeatures(features_moo_tambon_changpueak_3);
var lyr_moo_tambon_changpueak_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_moo_tambon_changpueak_3, 
                style: style_moo_tambon_changpueak_3,
                popuplayertitle: 'moo_tambon_changpueak',
                interactive: true,
                title: '<img src="styles/legend/moo_tambon_changpueak_3.png" /> moo_tambon_changpueak'
            });
var format_moo_suthep_4 = new ol.format.GeoJSON();
var features_moo_suthep_4 = format_moo_suthep_4.readFeatures(json_moo_suthep_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_moo_suthep_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_moo_suthep_4.addFeatures(features_moo_suthep_4);
var lyr_moo_suthep_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_moo_suthep_4, 
                style: style_moo_suthep_4,
                popuplayertitle: 'moo_suthep',
                interactive: true,
                title: '<img src="styles/legend/moo_suthep_4.png" /> moo_suthep'
            });
var format_moo_sanpheseau_5 = new ol.format.GeoJSON();
var features_moo_sanpheseau_5 = format_moo_sanpheseau_5.readFeatures(json_moo_sanpheseau_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_moo_sanpheseau_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_moo_sanpheseau_5.addFeatures(features_moo_sanpheseau_5);
var lyr_moo_sanpheseau_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_moo_sanpheseau_5, 
                style: style_moo_sanpheseau_5,
                popuplayertitle: 'moo_sanpheseau',
                interactive: true,
                title: '<img src="styles/legend/moo_sanpheseau_5.png" /> moo_sanpheseau'
            });
var format_moo_padet_6 = new ol.format.GeoJSON();
var features_moo_padet_6 = format_moo_padet_6.readFeatures(json_moo_padet_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_moo_padet_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_moo_padet_6.addFeatures(features_moo_padet_6);
var lyr_moo_padet_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_moo_padet_6, 
                style: style_moo_padet_6,
                popuplayertitle: 'moo_padet',
                interactive: true,
                title: '<img src="styles/legend/moo_padet_6.png" /> moo_padet'
            });
var format_moo_maehia_7 = new ol.format.GeoJSON();
var features_moo_maehia_7 = format_moo_maehia_7.readFeatures(json_moo_maehia_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_moo_maehia_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_moo_maehia_7.addFeatures(features_moo_maehia_7);
var lyr_moo_maehia_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_moo_maehia_7, 
                style: style_moo_maehia_7,
                popuplayertitle: 'moo_maehia',
                interactive: true,
                title: '<img src="styles/legend/moo_maehia_7.png" /> moo_maehia'
            });
var format_postalfinal_8 = new ol.format.GeoJSON();
var features_postalfinal_8 = format_postalfinal_8.readFeatures(json_postalfinal_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_postalfinal_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_postalfinal_8.addFeatures(features_postalfinal_8);
var lyr_postalfinal_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_postalfinal_8, 
                style: style_postalfinal_8,
                popuplayertitle: 'postalfinal',
                interactive: true,
    title: 'postalfinal<br />\
    <img src="styles/legend/postalfinal_8_0.png" /> 10 - 35<br />\
    <img src="styles/legend/postalfinal_8_1.png" /> 35 - 70<br />\
    <img src="styles/legend/postalfinal_8_2.png" /> 70 - 98<br />\
    <img src="styles/legend/postalfinal_8_3.png" /> 98 - 132<br />\
    <img src="styles/legend/postalfinal_8_4.png" /> 132 - 156<br />\
    <img src="styles/legend/postalfinal_8_5.png" /> 156 - 190<br />\
    <img src="styles/legend/postalfinal_8_6.png" /> 190 - 251<br />\
    <img src="styles/legend/postalfinal_8_7.png" /> 251 - 300<br />\
    <img src="styles/legend/postalfinal_8_8.png" /> 300 - 1,100<br />\
    <img src="styles/legend/postalfinal_8_9.png" /> 1,100 - 1,631<br />' });
var format_Group_B_9 = new ol.format.GeoJSON();
var features_Group_B_9 = format_Group_B_9.readFeatures(json_Group_B_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Group_B_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Group_B_9.addFeatures(features_Group_B_9);
var lyr_Group_B_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Group_B_9, 
                style: style_Group_B_9,
                popuplayertitle: 'Group_B',
                interactive: true,
                title: '<img src="styles/legend/Group_B_9.png" /> Group_B'
            });
var format_Group_A_10 = new ol.format.GeoJSON();
var features_Group_A_10 = format_Group_A_10.readFeatures(json_Group_A_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Group_A_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Group_A_10.addFeatures(features_Group_A_10);
var lyr_Group_A_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Group_A_10, 
                style: style_Group_A_10,
                popuplayertitle: 'Group_A',
                interactive: true,
                title: '<img src="styles/legend/Group_A_10.png" /> Group_A'
            });
var group_EVENT = new ol.layer.Group({
                                layers: [lyr_postalfinal_8,lyr_Group_B_9,lyr_Group_A_10,],
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
                                layers: [lyr_tambon_CMMC_1,lyr_moo_faham_2,lyr_moo_tambon_changpueak_3,lyr_moo_suthep_4,lyr_moo_sanpheseau_5,lyr_moo_padet_6,lyr_moo_maehia_7,],
                                fold: 'open',
                                title: 'POLITICALMAP'});
var group_MP_CM1_2023 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MP_CM1_2023'});

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_tambon_CMMC_1.setVisible(true);lyr_moo_faham_2.setVisible(true);lyr_moo_tambon_changpueak_3.setVisible(true);lyr_moo_suthep_4.setVisible(true);lyr_moo_sanpheseau_5.setVisible(true);lyr_moo_padet_6.setVisible(true);lyr_moo_maehia_7.setVisible(true);lyr_postalfinal_8.setVisible(true);lyr_Group_B_9.setVisible(true);lyr_Group_A_10.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,group_POLITICALMAP,group_EVENT];
lyr_tambon_CMMC_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'population': 'population', 'tambon': 'tambon', 'area': 'area', });
lyr_moo_faham_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'moo': 'moo', 'population': 'population', 'tambon': 'tambon', 'area': 'area', });
lyr_moo_tambon_changpueak_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'moo': 'moo', 'population': 'population', 'tambon': 'tambon', 'area': 'area', });
lyr_moo_suthep_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'moo': 'moo', 'population': 'population', 'tambon': 'tambon', 'area': 'area', });
lyr_moo_sanpheseau_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'moo': 'moo', 'population': 'population', 'tambon': 'tambon', 'area': 'area', });
lyr_moo_padet_6.set('fieldAliases', {'id': 'id', 'name': 'name', 'moo': 'moo', 'population': 'population', 'tambon': 'tambon', 'area': 'area', });
lyr_moo_maehia_7.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'moo': 'moo', 'population': 'population', 'tambon': 'tambon', 'area': 'area', });
lyr_postalfinal_8.set('fieldAliases', {'name': 'name', 'tambon': 'tambon', 'house': 'house', });
lyr_Group_B_9.set('fieldAliases', {'id': 'id', 'name': 'name', 'date': 'date', 'note': 'note', });
lyr_Group_A_10.set('fieldAliases', {'id': 'id', 'name': 'name', 'date': 'date', 'note': 'note', });
lyr_tambon_CMMC_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'population': 'TextEdit', 'tambon': 'TextEdit', 'area': 'TextEdit', });
lyr_moo_faham_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'moo': 'TextEdit', 'population': 'TextEdit', 'tambon': 'TextEdit', 'area': 'TextEdit', });
lyr_moo_tambon_changpueak_3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'moo': 'TextEdit', 'population': 'TextEdit', 'tambon': 'TextEdit', 'area': 'TextEdit', });
lyr_moo_suthep_4.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'moo': 'TextEdit', 'population': 'TextEdit', 'tambon': 'TextEdit', 'area': 'TextEdit', });
lyr_moo_sanpheseau_5.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'moo': 'TextEdit', 'population': 'TextEdit', 'tambon': 'TextEdit', 'area': 'TextEdit', });
lyr_moo_padet_6.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'moo': 'TextEdit', 'population': 'TextEdit', 'tambon': 'TextEdit', 'area': 'TextEdit', });
lyr_moo_maehia_7.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'moo': 'TextEdit', 'population': 'TextEdit', 'tambon': 'TextEdit', 'area': 'TextEdit', });
lyr_postalfinal_8.set('fieldImages', {'name': 'TextEdit', 'tambon': 'TextEdit', 'house': 'TextEdit', });
lyr_Group_B_9.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'date': 'DateTime', 'note': 'DateTime', });
lyr_Group_A_10.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'date': 'DateTime', 'note': 'TextEdit', });
lyr_tambon_CMMC_1.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', 'population': 'hidden field', 'tambon': 'hidden field', 'area': 'hidden field', });
lyr_moo_faham_2.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', 'moo': 'inline label - always visible', 'population': 'hidden field', 'tambon': 'hidden field', 'area': 'hidden field', });
lyr_moo_tambon_changpueak_3.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', 'moo': 'inline label - always visible', 'population': 'hidden field', 'tambon': 'hidden field', 'area': 'hidden field', });
lyr_moo_suthep_4.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', 'moo': 'inline label - always visible', 'population': 'hidden field', 'tambon': 'hidden field', 'area': 'hidden field', });
lyr_moo_sanpheseau_5.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', 'moo': 'inline label - always visible', 'population': 'hidden field', 'tambon': 'hidden field', 'area': 'hidden field', });
lyr_moo_padet_6.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', 'moo': 'inline label - always visible', 'population': 'hidden field', 'tambon': 'hidden field', 'area': 'hidden field', });
lyr_moo_maehia_7.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', 'moo': 'inline label - always visible', 'population': 'hidden field', 'tambon': 'hidden field', 'area': 'hidden field', });
lyr_postalfinal_8.set('fieldLabels', {'name': 'no label', 'tambon': 'no label', 'house': 'no label', });
lyr_Group_B_9.set('fieldLabels', {'id': 'header label - visible with data', 'name': 'inline label - always visible', 'date': 'inline label - always visible', 'note': 'hidden field', });
lyr_Group_A_10.set('fieldLabels', {'id': 'hidden field', 'name': 'inline label - always visible', 'date': 'inline label - always visible', 'note': 'hidden field', });
lyr_Group_A_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});