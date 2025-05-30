'use client';
import L from "leaflet";
// import React from "react";

export const originIcon = new L.DivIcon({
  html: `<svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 438.436"><path fill="#395970" fill-rule="nonzero" d="M272.484 347.987h165.908c6.974 0 13.311 2.852 17.902 7.443 4.592 4.592 7.444 10.934 7.444 17.903v59.273a5.831 5.831 0 01-5.83 5.83H264.786l-.19-.004H5.827A5.827 5.827 0 010 432.606v-298.52a5.827 5.827 0 018.289-5.282l260.48 101.671a5.818 5.818 0 013.7 5.416h.01v112.096h.005z"/><path fill="#6CA7B7" d="M266.653 432.606h-74.955v-66.24c0-3.09-2.534-5.633-5.633-5.633H86.414c-3.098 0-5.632 2.534-5.632 5.633v66.24H5.827v-298.52l260.826 101.805v196.715zm-43.11-174.402l-66.127-22.561v62.699h66.127v-40.138zm-108.479-37.012L48.937 198.63v99.712h66.127v-77.15zM272.484 353.818h165.908c10.734 0 19.516 8.796 19.516 19.515v59.273H272.484v-78.788z"/><path fill="#395970" fill-rule="nonzero" d="M305.369 347.532l22.078-281.378a5.828 5.828 0 015.822-5.601h53.292v.018a5.81 5.81 0 015.781 5.24l28.115 281.136a5.826 5.826 0 01-5.734 6.866h-103.55l-.456-.022a5.822 5.822 0 01-5.348-6.259z"/><path fill="#F2B826" d="M317.495 279.999l-3.445 44.461h97.006l-4.391-44.461zM325.382 178.212l-3.445 44.461h79.067l-4.391-44.461zM333.269 68.651l-3.444 52.235h61.127l-4.391-52.235z"/><path fill="#395970" d="M356.83 61.095C401.118-6.639 479.822 101.519 512 0c-16.594 11.395-28.622 18.481-43.884 22.184-38.94 9.448-106.679-26.724-111.286 38.911zM319.038 388.215h27.553c2.748 0 4.996 2.248 4.996 4.997a5.01 5.01 0 01-4.996 4.996h-27.553a5.01 5.01 0 01-4.996-4.996 5.01 5.01 0 014.996-4.997zm64.763 0h27.553a5.01 5.01 0 014.996 4.997 5.01 5.01 0 01-4.996 4.996h-27.553a5.01 5.01 0 01-4.996-4.996c0-2.749 2.248-4.997 4.996-4.997z"/></svg>`,
  iconSize: [16, 16],
  iconAnchor: [16, 16],
});
export const destIcon = new L.DivIcon({
  html: "🎯",
  iconSize: [16, 16],
  iconAnchor: [16, 16],
});

export function truckIcon(status: string, useLogo: boolean) {
  if (useLogo)
    return new L.DivIcon({
      html: `<img 
        src="/onelogistic.png" 
        style="
          width:48px;
          height:48px;
          border-radius:8px;
          border: 2px solid white;
          box-shadow: 0 0 5px rgba(0,0,0,0.3);
          background: white;
        " 
      />`,
      iconSize: [48, 48],
      iconAnchor: [24, 24],
      popupAnchor: [0, -24],
      className: "",
    });

  const color =
    status === "available"
      ? "#22C55E"
      : status === "broken"
      ? "#F59E0B"
      : status === "in_transit"
      ? "#EF4444"
      : "#888";
  const emoji = status === "available" ? "🚛" : status === "broken" ? "⚠️" : "🚚";

  return new L.DivIcon({
    html: `<div style="
      background:${color};
      width:40px;height:40px;
      border-radius:50%;
      display:flex;
      align-items:center;
      justify-content:center;
      border:2px solid white;
      font-size:20px;
      animation: slideDownFade 0.5s ease forwards;
      box-shadow: 0 0 6px ${color};
    ">${emoji}</div>`,
    className: "",
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
  });
}

export const rdcIcon = new L.DivIcon({
  html: `<div style="
    background: #3B82F6;
    width: 48px;
    height: 48px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    font-size: 18px;
    border: 3px solid white;
    box-shadow: 0 0 8px rgba(0,0,0,0.3);
    cursor: pointer;
  ">
    RDC
  </div>`,
  iconSize: [48, 48],
  iconAnchor: [24, 24],
});
