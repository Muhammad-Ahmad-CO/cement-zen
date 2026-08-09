import { lazy, Suspense } from "react";

const World = lazy(() =>
  import("@/components/ui/globe").then((m) => ({ default: m.World })),
);

const globeConfig = {
  pointSize: 4,
  globeColor: "#14261E",
  showAtmosphere: true,
  atmosphereColor: "#95D5B2",
  atmosphereAltitude: 0.12,
  emissive: "#0E1B15",
  emissiveIntensity: 0.15,
  shininess: 0.9,
  polygonColor: "rgba(149,213,178,0.55)",
  ambientLight: "#2D6A4F",
  directionalLeftLight: "#F5F5F0",
  directionalTopLight: "#FFFFFF",
  pointLight: "#95D5B2",
  arcTime: 1400,
  arcLength: 0.9,
  rings: 1,
  maxRings: 3,
  initialPosition: { lat: 22.3193, lng: 114.1694 },
  autoRotate: true,
  autoRotateSpeed: 0.5,
};

const colors = ["#2D6A4F", "#52B788", "#95D5B2"];
const pick = () => colors[Math.floor(Math.random() * colors.length)];

const routes: [number, number, number, number, number][] = [
  [1, 51.5072, -0.1276, 40.7128, -74.006],
  [1, 19.4326, -99.1332, 40.7128, -74.006],
  [2, 25.2048, 55.2708, 28.6139, 77.209],
  [2, 1.3521, 103.8198, 35.6762, 139.6503],
  [3, 52.52, 13.405, 41.9028, 12.4964],
  [3, -33.8688, 151.2093, 1.3521, 103.8198],
  [4, 49.2827, -123.1207, 35.6762, 139.6503],
  [4, -23.5505, -46.6333, 6.5244, 3.3792],
  [5, 40.4168, -3.7038, -33.9249, 18.4241],
  [5, 55.7558, 37.6173, 31.2304, 121.4737],
  [6, 43.6532, -79.3832, 51.5072, -0.1276],
  [6, 30.0444, 31.2357, 41.0082, 28.9784],
  [7, 37.7749, -122.4194, 22.3193, 114.1694],
  [7, 59.3293, 18.0686, 52.3676, 4.9041],
  [8, -34.6037, -58.3816, 40.4168, -3.7038],
  [8, 13.7563, 100.5018, 22.3193, 114.1694],
];

const arcs = routes.map(([order, startLat, startLng, endLat, endLng], i) => ({
  order,
  startLat,
  startLng,
  endLat,
  endLng,
  arcAlt: 0.12 + (i % 5) * 0.09,
  color: pick(),
}));

export default function StatsGlobe() {
  return (
    <Suspense fallback={null}>
      <World globeConfig={globeConfig} data={arcs} />
    </Suspense>
  );
}
