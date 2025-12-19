var wms_layers = [];


        var lyr_EsriTopographic_0 = new ol.layer.Tile({
            'title': 'Esri Topographic',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_electionmap_templateV1_1 = new ol.format.GeoJSON();
var features_electionmap_templateV1_1 = format_electionmap_templateV1_1.readFeatures(json_electionmap_templateV1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_electionmap_templateV1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_electionmap_templateV1_1.addFeatures(features_electionmap_templateV1_1);
var lyr_electionmap_templateV1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_electionmap_templateV1_1, 
                style: style_electionmap_templateV1_1,
                popuplayertitle: 'electionmap_templateV1',
                interactive: false,
    title: 'electionmap_templateV1<br />\
    <img src="styles/legend/electionmap_templateV1_1_0.png" /> 1<br />\
    <img src="styles/legend/electionmap_templateV1_1_1.png" /> 2<br />\
    <img src="styles/legend/electionmap_templateV1_1_2.png" /> 3<br />\
    <img src="styles/legend/electionmap_templateV1_1_3.png" /> 4<br />' });
var format_POA2025_CM1_MODIFIED_2 = new ol.format.GeoJSON();
var features_POA2025_CM1_MODIFIED_2 = format_POA2025_CM1_MODIFIED_2.readFeatures(json_POA2025_CM1_MODIFIED_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POA2025_CM1_MODIFIED_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POA2025_CM1_MODIFIED_2.addFeatures(features_POA2025_CM1_MODIFIED_2);
var lyr_POA2025_CM1_MODIFIED_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POA2025_CM1_MODIFIED_2, 
                style: style_POA2025_CM1_MODIFIED_2,
                popuplayertitle: 'POA2025_CM1_MODIFIED',
                interactive: true,
    title: 'POA2025_CM1_MODIFIED<br />\
    <img src="styles/legend/POA2025_CM1_MODIFIED_2_0.png" /> 1<br />\
    <img src="styles/legend/POA2025_CM1_MODIFIED_2_1.png" /> 2<br />\
    <img src="styles/legend/POA2025_CM1_MODIFIED_2_2.png" /> 3<br />\
    <img src="styles/legend/POA2025_CM1_MODIFIED_2_3.png" /> 4<br />\
    <img src="styles/legend/POA2025_CM1_MODIFIED_2_4.png" /> <br />' });
var group_ELECTIONRESULT = new ol.layer.Group({
                                layers: [lyr_electionmap_templateV1_1,],
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
                                fold: 'open',
                                title: 'MP_CM1_2023'});

lyr_EsriTopographic_0.setVisible(true);lyr_electionmap_templateV1_1.setVisible(true);lyr_POA2025_CM1_MODIFIED_2.setVisible(true);
var layersList = [lyr_EsriTopographic_0,group_ELECTIONRESULT,lyr_POA2025_CM1_MODIFIED_2];
lyr_electionmap_templateV1_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'moo': 'moo', 'population': 'population', 'tambon': 'tambon', 'area': 'area', 'layer': 'layer', 'path': 'path', 'tier': 'tier', });
lyr_POA2025_CM1_MODIFIED_2.set('fieldAliases', {'ID': 'ID', 'TAMBON': 'TAMBON', 'KHWANG': 'KHWANG', 'EPLACE': 'EPLACE', 'EPOP': 'EPOP', 'POPE': 'POPE', 'MFP': 'MFP', 'PT': 'PT', 'NO3': 'NO3', 'FALSECARD': 'FALSECARD', 'VOTENO': 'VOTENO', 'COLOR': 'COLOR', 'ELE_SECTOR': 'ELE_SECTOR', 'CAT': 'CAT', 'HALFORANGE': 'HALFORANGE', 'HALFRED': 'HALFRED', 'TIER': 'TIER', });
lyr_electionmap_templateV1_1.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'moo': 'TextEdit', 'population': 'TextEdit', 'tambon': 'TextEdit', 'area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'tier': 'Range', });
lyr_POA2025_CM1_MODIFIED_2.set('fieldImages', {'ID': 'TextEdit', 'TAMBON': 'TextEdit', 'KHWANG': 'TextEdit', 'EPLACE': 'TextEdit', 'EPOP': 'TextEdit', 'POPE': 'TextEdit', 'MFP': 'TextEdit', 'PT': 'TextEdit', 'NO3': 'TextEdit', 'FALSECARD': 'TextEdit', 'VOTENO': 'TextEdit', 'COLOR': 'TextEdit', 'ELE_SECTOR': 'Range', 'CAT': 'TextEdit', 'HALFORANGE': 'Range', 'HALFRED': 'Range', 'TIER': 'Range', });
lyr_electionmap_templateV1_1.set('fieldLabels', {'id': 'no label', 'Name': 'hidden field', 'moo': 'no label', 'population': 'no label', 'tambon': 'no label', 'area': 'no label', 'layer': 'no label', 'path': 'no label', 'tier': 'no label', });
lyr_POA2025_CM1_MODIFIED_2.set('fieldLabels', {'ID': 'no label', 'TAMBON': 'inline label - always visible', 'KHWANG': 'hidden field', 'EPLACE': 'inline label - always visible', 'EPOP': 'inline label - always visible', 'POPE': 'inline label - always visible', 'MFP': 'inline label - always visible', 'PT': 'inline label - always visible', 'NO3': 'hidden field', 'FALSECARD': 'hidden field', 'VOTENO': 'hidden field', 'COLOR': 'hidden field', 'ELE_SECTOR': 'hidden field', 'CAT': 'hidden field', 'HALFORANGE': 'inline label - always visible', 'HALFRED': 'hidden field', 'TIER': 'inline label - always visible', });
lyr_POA2025_CM1_MODIFIED_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});