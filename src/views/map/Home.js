import React, { useRef, useEffect, useState } from "react";
import goongjs from "@goongmaps/goong-js";
import mapboxgl from "mapbox-gl";
import GoongGeocoder from "@goongmaps/goong-geocoder";
import polyline from "@mapbox/polyline";
import axios from "axios";

import logo from "../../assets/img/pin.png";
import HeaderTop from "../../components/ui/HeaderTop";
import HeaderLeft from "../../components/ui/HeaderLeft";
import ThongBaoOnMap from "../../components/ui/ThongBaoOnMap";
import Evaluate from "../../components/Evaluate/Evaluate";
import styled from "styled-components";
import { MdOutlineMyLocation } from "react-icons/md";
import "../../contans/styles/goong-geocoder.scss";

import GoiYDacSan from "../../components/ui/GoiYDacSan";
import {
  REACT_APP_GOONG_API_KEY,
  REACT_APP_GOONG_MAP_KEY,
} from "../../store/api";
import ItineraryTips from "./ItineraryTips";
// import getUserLocation from "../../components/mandates/geolocation";

function Home() {
  const [itineraryTipsVisible, setItineraryTipsVisible] = useState(true);
  const goongClient = require("@goongmaps/goong-sdk");
  const goongDirections = require("@goongmaps/goong-sdk/services/directions");
  const baseClient = goongClient({ accessToken: REACT_APP_GOONG_API_KEY });
  const directionService = goongDirections(baseClient);
  const [center, setCenter] = useState([105.80278, 20.99245]);
  const [userLocation, setUserLocation] = useState(null);
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [origin, setOrigin] = useState({});
  const [destination, setDestination] = useState({});
  const directionsUrl = "https://rsapi.goong.io/geocode?address";
  const mapContainer = useRef(null);
  const initializedMap = useRef(null);
  const [map, setMap] = useState(null);

  const [LocationSchedules, setLocationSchedules] = useState([
    {
      name: "my location",
      address: "my location",
      lat: lat,
      lng: lng,
    },
    { name: "Đồng Nai", address: "Đồng Nai", lat: 10.946552, lng: 106.824379 },
    {
      name: "Hồ Chí Minh",
      address: "Hồ Chí Minh",
      lat: 10.776889,
      lng: 106.700897,
    },
    {
      name: "Thủ Dầu Một",
      address: "Thủ Dầu Một",
      lat: 11.0253562,
      lng: 106.6569448,
    },
  ]);

  const [LocationSchedule, setLocationSchedule] = useState([]);
  // const updateLocationSchedule = (newData) => {
  //   setLocationSchedule([newData]);
  // };

  const [locations, setLocations] = useState([
    // {
    //   key: "1",
    //   coord: [106.8002841, 10.9531363],
    // },
    // {
    //   key: "2",
    //   coord: [106.8102841, 10.9531363],
    // },
  ]);
  const [location, setLocation] = useState([]);

  const [coordinates, setCoordinates] = useState(null);

  const [selectLocation, setSelectLocation] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(LocationSchedule[0]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://rsapi.goong.io/geocode?address=${selectedLocation.address}&api_key=${process.env.REACT_APP_GOONG_MAP_KEY}`
      );
      const points = response.data;
      setOrigin(points.results[0].geometry.location);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    goongjs.accessToken = REACT_APP_GOONG_MAP_KEY;
    mapboxgl.accessToken = REACT_APP_GOONG_API_KEY;
    initializedMap.current = new goongjs.Map({
      container: mapContainer.current,
      style: "https://tiles.goong.io/assets/goong_map_web.json",
      center: [lng, lat],
      zoom: 16,
      hash: true,
      transformRequest: (url, resourceType) => {
        if (resourceType === "Source" && url.startsWith("http://myHost")) {
          return {
            url: url.replace("http", "https"),
            headers: { "my-custom-header": true },
            credentials: "include", // Include cookies for cross-origin requests
          };
        }
      },
    });


  //   const popup2 = new mapboxgl.Popup().setHTML(
  //     '<h3>Lăng Chủ tịch Hồ Chí Minh</h3><p>Thông tin về Lăng Chủ tịch Hồ Chí Minh ở Hà Nội, Việt Nam.</p>'
  //   );

  //   const marker = new mapboxgl.Marker()
  //     .setLngLat([105.8342, 21.0285]) // Lăng Chủ tịch Hồ Chí Minh coordinates
  //     .setPopup(popup2)
  //     .addTo(map);
  // }, []);

  
    // Lưu trữ dữ liệu cần thiết từ đối tượng initializedMap
    const mapData = {
      center: initializedMap.current.getCenter(),
      zoom: initializedMap.current.getZoom(),
    };

    // Lưu trữ dữ liệu vào Local Storage
    localStorage.setItem("map", JSON.stringify(mapData));

    const marker = new goongjs.Marker()
      .setLngLat([105.79449389547807, 21.023262952893536])
      .addTo(initializedMap.current);
 
    initializedMap.current.on("load", () => {
      setMap(initializedMap.current);
      initializedMap.current // Add a circle layer with a vector source.
        .addLayer({
          id: "points-of-interest",
          source: {
            type: "vector",
            url: "mapbox://mapbox.mapbox-streets-v8",
          },
          "source-layer": "poi_label",
          type: "circle",
          paint: {
            // Mapbox Style Specification paint properties
          },
          layout: {
            // Mapbox Style Specification layout properties
          },
        });
      initializedMap.current.addControl(
        new GoongGeocoder({
          accessToken: REACT_APP_GOONG_API_KEY,
          mapboxgl: mapboxgl,
          zoom: 9,
        })
      );
      initializedMap.current.on("result", (e) => {
        setCoordinates(e.result.geometry.coordinates);
      });
    });

    let currentMarker = null;
    let longitude = 0;
    let latitude = 0;

    initializedMap.current.on("click", (e) => {
      if (currentMarker) {
        currentMarker.remove();
        setItineraryTipsVisible(false);
      }
      const clickedLocation = e.lngLat;
      longitude = clickedLocation.lng;
      latitude = clickedLocation.lat;
      setLocation(`${latitude}, ${longitude}`);

      currentMarker = new goongjs.Marker()
        .setLngLat(e.lngLat)
        .addTo(initializedMap.current);
    });

    locations.map((location) => {
      return new goongjs.Marker()
        .setLngLat(location.coord)
        .addTo(initializedMap.current);
    });
    locations.map((location) => {
      return new goongjs.Marker()
        .setLngLat(location.coord)
        .addTo(initializedMap.current);
    });

    return () => {
      initializedMap.current.remove();
    };
  }, [locations, LocationSchedule]);
 const dh = {lat: 105.8346667,
            lng: 21.0368973}


            const [showDanhGia, setShowDanhGia] = useState(false); 
            function OnClickDanhGia() {
              console.log("aloalo");
              setShowDanhGia(!showDanhGia);
              console.log("showDanhGia:", showDanhGia);
            }
         
  useEffect(() => {
    initializedMap.current.on("load", function () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function (position) {
            var userLocation = {
              address: "Vị trí của tôi",
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };

            
            initializedMap.current.flyTo({
              center: [userLocation.lng, userLocation.lat],
              essential: true,
            });


            var popup = new goongjs.Popup({ offset: 25 }).setText(
              'The President Ho Chi Minh Mausoleum is a mausoleum which serves as the resting place of Vietnamese Revolutionary leader & President Ho Chi Minh in Hanoi, Vietnam'
          );
          
         
          // create DOM element for the marker
          var el = document.createElement('div');
          el.id = 'male';
      
          // create the marker
          new goongjs.Marker(el)
              .setLngLat([dh.lat, dh.lng])
              .setPopup(popup) // sets a popup on this marker
              .addTo(initializedMap.current);
    










            var layers = initializedMap.current.getStyle().layers;

            var firstSymbolId;
            for (var i = 0; i < layers.length; i++) {
              if (layers[i].type === "symbol") {
                firstSymbolId = layers[i].id;
                break;
              }
            }
            if (LocationSchedule) {
              for (let i = 0; i < LocationSchedule.length - 1; i++) {
                const startPoint = i === 0 ? userLocation : LocationSchedule[i];
                const endPoint = LocationSchedule[i + 1];

                if (startPoint) {
                  var el = document.createElement("div");
                  el.style.backgroundColor = "red";
                  el.style.width = "20px";
                  el.style.height = "20px";
                  el.style.borderRadius = "50%";

                  // Điều chỉnh vị trí của đánh dấu
                  // var marker = new goongjs.Marker()
                  //   .setLngLat([startPoint.lng, startPoint.lat])
                  //   .addTo(initializedMap.current);
                  new goongjs.Popup()
                    .setLngLat([startPoint.lng, startPoint.lat])
                    .setHTML(
                      `<p> ${startPoint.address} </p>
                    <div style="display: flex; align-items: center; flex-direction: column"">
                    <img style="width: 20px; height: 20px;" src="https://banner2.cleanpng.com/20180520/tg/kisspng-weather-forecasting-logo-5b01bab1b84f10.0513596515268399857549.jpg" alt="Trời nắng">
                    <p>Trời nắng</p>
                    <button id="danhGiaButton">Đánh giá</button>
                    </div>
                    `
                    )
                    .setOffset(39)
                    .addTo(initializedMap.current);
                    document.getElementById("danhGiaButton").addEventListener("click", OnClickDanhGia);
                }
                if (endPoint) {
                  var marker = new goongjs.Marker()
                    .setLngLat([endPoint.lng, endPoint.lat])
                    .addTo(initializedMap.current);
                  new goongjs.Popup()
                    .setLngLat([endPoint.lng, endPoint.lat])
                    .setHTML(
                      `<p> ${endPoint.address} </p>
                    
                      <div style="display: flex; align-items: center; flex-direction: column"">
                      <img style="width: 20px; height: 20px;" src="https://banner2.cleanpng.com/20180520/tg/kisspng-weather-forecasting-logo-5b01bab1b84f10.0513596515268399857549.jpg" alt="Trời nắng">
                      <p>Trời nắng</p>
                      <button id="danhGiaButton">Đánh giá</button>
                      </div>
                    `
                    )

                    .setOffset(39)
                    .addTo(initializedMap.current);
                    document.getElementById("danhGiaButton").addEventListener("click", OnClickDanhGia);
                }

                // Use startPoint.lat, startPoint.lng as the origin in the directions service
                directionService
                  .getDirections({
                    origin: `${startPoint.lat},${startPoint.lng}`,
                    destination: `${endPoint.lat},${endPoint.lng}`,
                    vehicle: "car",
                  })
                  .send()
                  .then(function (response) {
                    var directions = response.body;
                    var route = directions.routes[0];

                    var geometry_string = route.overview_polyline.points;
                    var geoJSON = polyline.toGeoJSON(geometry_string);
                    initializedMap.current.addSource(`route${i}`, {
                      type: "geojson",
                      data: geoJSON,
                    });
                    initializedMap.current.addLayer(
                      {
                        id: `route${i}`,
                        type: "line",
                        source: `route${i}`,
                        layout: {
                          "line-join": "round",
                          "line-cap": "round",
                        },
                        paint: {
                          "line-color": "rgb(0, 153, 255)",
                          "line-width": 8,
                        },
                      },
                      firstSymbolId
                    );
                  });
              }
            }
          },
          function (error) {
            // Handle geolocation error
            console.error("Error getting user's location:", error.message);
          }
        );
      } else {
        // Geolocation is not supported
        console.error("Geolocation is not supported by this browser.");
      }
    });
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          var userLocation = {
            address: "Vị trí của tôi",
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          initializedMap.current.flyTo({
            center: [userLocation.lng, userLocation.lat],
            essential: true,
          });

          var el = document.createElement("div");
          el.style.backgroundColor = "red";
          el.style.width = "20px";
          el.style.height = "20px";
          el.style.borderRadius = "50%";

          
          new goongjs.Popup()
            .setLngLat([userLocation.lng, userLocation.lat])
            .setHTML(
              `<p> ${userLocation.address} </p>
              <div style="display: flex; align-items: center; flex-direction: column">
              <img style="width: 20px; height: 20px;" src="https://banner2.cleanpng.com/20180520/tg/kisspng-weather-forecasting-logo-5b01bab1b84f10.0513596515268399857549.jpg  " alt="Trời nắng">
              <p>Trời nắng</p>
             
              <button id="danhGiaButton">Đánh giá</button>
              
              </div>
            `
            
            )
            
            .setOffset(39)
            .addTo(initializedMap.current);
            document.getElementById("danhGiaButton").addEventListener("click", OnClickDanhGia);
        },
        function (error) {
          // Handle geolocation error
          console.error("Error getting user's location:", error.message);
        }
      );
    } else {
      // Geolocation is not supported
      console.error("Geolocation is not supported by this browser.");
    }
    
  }, [selectedLocation, LocationSchedule]);

  const [hide, setHide] = useState(true);
  return (
      <TrangHome>
    <div>
      <div ref={mapContainer} style={{ height: "100vh" }} />
      <HeaderTop
        map={map}
        location={location}
        locations={locations}
        setLocation={setLocation}
        // handleAddMarker={handleAddMarker}
        // handleEditMarker={handleEdit}
        // handleDeleteMarker={handleDelete}
        // selectedLocation={selectedLocation}
      />
      {/* //màn hình đánh giá */}
      {/* <div style={{
        position: "absolute",
        top: "1vh",
        zIndex: "999999999"
        }}>
        <Evaluate />
      </div> */}
      
     
      <HeaderLeft
        mapRef={map}
        locations={LocationSchedule}
        startPoint="Your Start Point"
        endPoint="Your End Point"
        LocationSchedule={LocationSchedule}
        setHide={setHide}
        setLocationSchedule={setLocationSchedule}
      />

      < ThongBaoOnMap hide={hide} setHide={setHide}/>

    {showDanhGia && <Evaluate setShowDanhGia={setShowDanhGia} showDanhGia={showDanhGia}/>}
      {/* {itineraryTipsVisible && (
        <ItineraryTips
          receivedDat={receivedData}
          setReceivedData={setReceivedData}
        />
      )} */}
      {/* <ItineraryTips onScheduleUpdate={updateLocationSchedule} /> */}
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "white",
          position: "absolute",
          right: "20px",
          bottom: "100px",
          borderRadius: 50,
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button onClick={handleSearch}>
          <MdOutlineMyLocation
            size={30}
            style={{
              alignItems: "center",
              lineHeight: 50,
            }}
          />
        </button>
      </div>
      <div>
  
    
    </div>
    </div>

    </TrangHome>
  );
}

export default Home;
const TrangHome = styled.div`

{

    #male {
        background-image: url('https://i.ytimg.com/vi/e75CcUphFRs/maxresdefault.jpg');
        background-size: cover;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
    }

    .goongjs-popup {
        max-width: 200px;
    }

}
`