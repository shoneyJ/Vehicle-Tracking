import './style.css';
import { Map,View } from 'ol';
import TileLayer from TileLayer
import OSM from '../../node_modules/ol/source/OSM';

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});
