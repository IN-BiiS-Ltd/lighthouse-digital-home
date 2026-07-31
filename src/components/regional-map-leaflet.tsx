import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import emblem from "@/assets/lighthouse-campus-emblem.png.asset.json";
import { branches } from "@/lib/regional-branches";

/**
 * Real tiled map (OpenStreetMap via Leaflet) showing every Lighthouse campus
 * with the official institutional emblem as its marker.
 */
export default function RegionalMapLeaflet({
  active,
  onSelect,
}: {
  active: string;
  onSelect: (id: string) => void;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Record<string, L.Marker>>({});

  useEffect(() => {
    const el = containerRef.current;
    if (!el || mapRef.current) return;

    const map = L.map(el, {
      center: [15, 31.5],
      zoom: 4,
      scrollWheelZoom: false,
      zoomControl: true,
      attributionControl: true,
    });
    mapRef.current = map;

    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      maxZoom: 18,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    }).addTo(map);

    branches.forEach((b) => {
      const icon = L.divIcon({
        className: "lh-map-pin",
        html: `<span class="lh-map-pin__badge"><img src="${emblem.url}" alt="" width="30" height="30" /></span><span class="lh-map-pin__label">${b.country}</span>`,
        iconSize: [46, 46],
        iconAnchor: [23, 23],
      });
      const marker = L.marker([b.coords[1], b.coords[0]], {
        icon,
        title: `${b.country} — ${b.city}`,
        alt: `${b.country} campus`,
        keyboard: true,
      })
        .addTo(map)
        .bindTooltip(`<strong>${b.country}</strong><br/>${b.city}`, { direction: "top" })
        .on("click", () => onSelect(b.id));
      markersRef.current[b.id] = marker;
    });

    map.fitBounds(
      L.latLngBounds(branches.map((b) => [b.coords[1], b.coords[0]] as [number, number])).pad(0.35),
    );

    return () => {
      map.remove();
      mapRef.current = null;
      markersRef.current = {};
    };
  }, [onSelect]);

  useEffect(() => {
    Object.entries(markersRef.current).forEach(([id, marker]) => {
      const el = marker.getElement();
      if (el) el.classList.toggle("is-active", id === active);
    });
    const map = mapRef.current;
    const branch = branches.find((b) => b.id === active);
    if (map && branch) {
      map.panTo([branch.coords[1], branch.coords[0]], { animate: true });
    }
  }, [active]);

  return (
    <div
      ref={containerRef}
      role="application"
      aria-label="Interactive map of Lighthouse Campus locations across Egypt, Sudan, South Sudan and Uganda"
      className="mt-4 h-[clamp(340px,52vh,560px)] w-full overflow-hidden rounded-xl border border-border"
    />
  );
}
