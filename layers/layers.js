ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32644").setExtent([252456.593029, 1937855.587211, 431281.869256, 2054600.869170]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Paddy_Suitability_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Paddy_Suitability",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Paddy_Suitability_1.png",
    attributions: ' ',
                                projection: 'EPSG:32644',
                                alwaysInRange: true,
                                imageExtent: [312390.000000, 1967110.000000, 375210.000000, 2021590.000000]
                            })
                        });

lyr_OSMStandard_0.setVisible(true);lyr_Paddy_Suitability_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Paddy_Suitability_1];
