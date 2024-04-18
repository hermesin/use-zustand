import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Box from "../Three/Box";
import { useStore } from "../serve/store";

export function App() {
  const store = useStore();
  return (
    <Canvas
      shadows
      camera={{ position: [5, 4, 2], fov: 45 }}
      eventSource={document.getElementById("root")!}
      eventPrefix="client"
    >
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      {store.boxs.map((item, index) => {
        return (
          <Box key={index} id={item.id} color={item.color} pos={item.id / 2} />
        );
      })}
      <OrbitControls enablePan={false} enableZoom={true} makeDefault />
    </Canvas>
  );
}
