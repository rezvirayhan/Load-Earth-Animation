import { ContactShadows, Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Earth from '../public/Earth.jsx'
import './App.css'
function App() {

  return (
    <>
      <Canvas>
        <ambientLight intensity={1.5} />
        <OrbitControls enableZoom={false} />
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
        <Environment preset='sunset' />
        <ContactShadows position={[0, -2.5, 0]} opacity={0.5} seale={50} blur={1} far={40} resolution={256} color="#000000" />
      </Canvas>
    </>
  )
}

export default App
