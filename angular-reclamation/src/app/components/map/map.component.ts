import { Component} from '@angular/core';
import { icon, Marker } from 'leaflet';
import { Inject, Input, OnInit } from '@angular/core';
import { LeafletService } from 'src/app/_services/leaflet/leaflet.service';
export const DEFAULT_LAT = 36.80278;
export const DEFAULT_LON =  10.17972;
export const TITULO = 'Proyecto';
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private map:any;
  @Input() lat: number = DEFAULT_LAT;
  @Input() lon: number = DEFAULT_LON;
  @Input() titulo: string = TITULO ;


  constructor(private mapService: LeafletService) {}
  ngOnInit(): void {
    if (this.mapService.L) {
        this.initMap();
    }
  }
 
 
 
  private initMap(): void {
    var iconDefault = this.mapService.L.icon({
      iconRetinaUrl,
      iconUrl,
      shadowUrl,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    });
      this.mapService.L.Marker.prototype.options.icon = iconDefault;
 
      this.map =  this.mapService.L.map('map', {
        center: [this.lat, this.lon],
        attributionControl: false,
        zoom: 14
      });
 
      const tiles = this.mapService.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://1938.com.es">Web Inteligencia Artificial</a>'
      });
      //const marker = L.marker([this.lat, this.lon]);
      //marker.addTo(this.map);
 
      const lon = this.lon + 0.009;
      const lat = this.lat + 0.009;
      const marker = this.mapService.L.marker([lat + 0.005, lon + 0.005]).bindPopup(this.titulo);
      marker.addTo(this.map);
 
      const mark = this.mapService.L.circleMarker([this.lat, this.lon]).addTo(this.map);
      mark.bindPopup(this.titulo);
      mark.addTo(this.map);
 
     const mark2 = this.mapService.L.circleMarker([lat, lon]).addTo(this.map);
      mark2.addTo(this.map);
 
 
 
    this.mapService.L.Routing.control({
      router: this.mapService.L.Routing.osrmv1({
        serviceUrl: `https://router.project-osrm.org/route/v1/`
      }),
      showAlternatives: true,
      fitSelectedRoutes: false,
      show: false,
      routeWhileDragging: true,
      waypoints: [
        this.mapService.L.latLng(this.lat, this.lon),
        this.mapService.L.latLng(lat, lon)
      ]
    }).addTo(this.map);
 
      tiles.addTo(this.map);
 
    }
    
    show(e:any){
      console.log(e.lat)
    }
}
