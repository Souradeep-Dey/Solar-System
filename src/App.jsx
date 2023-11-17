import { useEffect, useRef, useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas, useFrame } from '@react-three/fiber'
import { Model as Earth } from './components/Earth'
import { Model as Jupiter } from './components/Jupiter'
import { Model as Mars } from './components/Mars'
import { Model as Mercury } from './components/Mercury'
import { Model as Moon } from './components/Mercury'
import { Model as Neptune } from './components/Neptune'
import { Model as Saturn } from './components/Saturn'
import { Model as Sun } from './components/Sun'
import { Model as Uranus } from './components/Uranus'
import { Model as Venus } from './components/Venus'
import { Model as Background } from './components/Background'
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { gsap } from 'gsap'
import * as THREE from 'three'

function App() {
  return (
    <Canvas shadows>
      <SolarSystem />
    </Canvas>
  )
}

export default App

function SolarSystem() {


  //defining refs
  const perspectiveCameraRef = useRef(null)
  const orbitControlsRef = useRef(null);
  const sunRef = useRef(null);
  const mercuryGroupRef = useRef(null);
  const mercuryRef = useRef(null);
  const venusGroupRef = useRef(null);
  const venusRef = useRef(null);
  const earthGroupRef = useRef(null);
  const earthRef = useRef(null);
  const moonRef = useRef(null);
  const moonGroupRef = useRef(null);
  const marsGroupRef = useRef(null);
  const marsRef = useRef(null);
  const jupiterGroupRef = useRef(null);
  const jupiterRef = useRef(null);
  const saturnGroupRef = useRef(null);
  const saturnRef = useRef(null);
  const uranusGroupRef = useRef(null);
  const uranusRef = useRef(null);
  const neptuneGroupRef = useRef(null);
  const neptuneRef = useRef(null);

  const [target, setTarget] = useState(sunRef);
  const [targetGroup, setTargetGroup] = useState(sunRef);
  const [flag, setFlag] = useState(0)//The flag is used to detect wheather the target of camera is set to a random position
  let counter=0;//this variable is used to smooth camera movement
  useFrame(() => {
    //Animation of moon
    moonGroupRef.current.position.x = earthRef.current.position.x * Math.cos(earthGroupRef.current.rotation.y)
    moonGroupRef.current.position.z = -earthRef.current.position.x * Math.sin(earthGroupRef.current.rotation.y)

    console.log(Math.abs(orbitControlsRef.current.target.y) < 0.5, orbitControlsRef.current.target.y)

    if (Math.abs(orbitControlsRef.current.target.y) > 0.5)
      setFlag(1)
    if (flag === 0) {
      if(counter<120){
      orbitControlsRef.current.target.x += (target.current.position.x * Math.cos(targetGroup.current.rotation.y)-orbitControlsRef.current.target.x)/20;
      orbitControlsRef.current.target.z  +=(-target.current.position.x * Math.sin(targetGroup.current.rotation.y)-orbitControlsRef.current.target.z)/20;
        counter++;
      }
      else{
        orbitControlsRef.current.target.x = target.current.position.x * Math.cos(targetGroup.current.rotation.y)
      orbitControlsRef.current.target.z = -target.current.position.x * Math.sin(targetGroup.current.rotation.y)
      }
      
    }
  })

  function setDefaultCameraPosition() {

    setFlag(0);
    counter=0;
    orbitControlsRef.current.target.y = 0

  }
  useEffect(() => {

    if (sunRef.current) {
      gsap.fromTo(sunRef.current.rotation, { y: 0 }, {
        y: Math.PI * 2,
        duration: 9,
        ease: "none",
        repeat: -1
      })
    }
    // Mercury
    if (mercuryGroupRef.current && mercuryRef.current) {
      gsap.fromTo(mercuryRef.current.rotation, { y: 0 }, {
        y: Math.PI * 2,
        duration: 3,
        ease: "none",
        repeat: -1
      })
      gsap.fromTo(mercuryGroupRef.current.rotation, { y: 0 }, {
        y: Math.PI * 2,
        duration: 5,
        ease: "none",
        repeat: -1
      })
    }

    //venus
    if (venusGroupRef.current && venusRef.current) {
      gsap.fromTo(venusRef.current.rotation, { y: 0 }, {
        y: Math.PI * 2,
        duration: 3,
        ease: "none",
        repeat: -1
      })
      gsap.fromTo(venusGroupRef.current.rotation, { y: 0 }, {
        y: Math.PI * 2,
        duration: 5 * 2.5,
        ease: "none",
        repeat: -1
      })
    }

    // Earth
    if (earthGroupRef.current && earthRef.current) {
      gsap.fromTo(earthRef.current.rotation, { y: 0 }, {
        y: Math.PI * 2,
        duration: 3,
        ease: "none",
        repeat: -1
      })
      gsap.fromTo(earthGroupRef.current.rotation, { y: 0 }, {
        y: Math.PI * 2,
        duration: 5 * 4,
        ease: "none",
        repeat: -1
      })
    }
    //moon
    if (moonGroupRef.current && moonRef.current) {
      gsap.fromTo(moonRef.current.rotation, { y: 0 }, {
        y: Math.PI * 2,
        duration: 3,
        ease: "none",
        repeat: -1
      })
      gsap.fromTo(moonGroupRef.current.rotation, { y: 0 }, {
        y: Math.PI * 2,
        duration: 4,
        ease: "none",
        repeat: -1
      })
    }
    // Mars
    if (marsGroupRef.current && marsRef.current) {
      gsap.fromTo(marsRef.current.rotation, { y: 0 }, {
        y: Math.PI * 2,
        duration: 3,
        ease: "none",
        repeat: -1
      })
      gsap.fromTo(marsGroupRef.current.rotation, { y: 0 }, {
        y: Math.PI * 2,
        duration: 5 * 4 * 1.8,
        ease: "none",
        repeat: -1
      })
    }

    // Jupiter
    if (jupiterGroupRef.current && jupiterRef.current) {
      gsap.fromTo(jupiterRef.current.rotation, { y: 0 }, {
        y: Math.PI * 2,
        duration: 5,
        ease: "none",
        repeat: -1
      })
      gsap.fromTo(jupiterGroupRef.current.rotation, { y: 0 }, {
        y: Math.PI * 2,
        duration: 5 * 4 * 5,
        ease: "none",
        repeat: -1
      })
    }
    // Saturn
    if (saturnGroupRef.current && saturnRef.current) {
      gsap.fromTo(saturnRef.current.rotation, { y: 0 }, {
        y: Math.PI * 2,
        duration: 6,
        ease: "none",
        repeat: -1
      })
      gsap.fromTo(saturnGroupRef.current.rotation, { y: 0 }, {
        y: Math.PI * 2,
        duration: 5 * 4 * 10,
        ease: "none",
        repeat: -1
      })
    }

    // Uranus
    if (uranusGroupRef.current && uranusRef.current) {
      gsap.fromTo(uranusRef.current.rotation, { y: 0 }, {
        y: Math.PI * 2,
        duration: 3,
        ease: "none",
        repeat: -1
      })
      gsap.fromTo(uranusGroupRef.current.rotation, { y: 0 }, {
        y: Math.PI * 2,
        duration: 5 * 4 * 10,
        ease: "none",
        repeat: -1
      })
    }

    // neptune
    if (neptuneGroupRef.current && neptuneRef.current) {
      gsap.fromTo(neptuneRef.current.rotation, { y: 0 }, {
        y: Math.PI * 2,
        duration: 10,
        ease: "none",
        repeat: -1
      })
      gsap.fromTo(neptuneGroupRef.current.rotation, { y: 0 }, {
        y: Math.PI * 2,
        duration: 5 * 4 * 50,
        ease: "none",
        repeat: -1
      })
    }
  }, [])
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 110]} ref={perspectiveCameraRef} />
      <OrbitControls zoomSpeed={5} ref={orbitControlsRef} />
      <ambientLight args={['#ffffff', .2]} />
      <pointLight args={['#ffffff', 2]} castShadow shadow-bias={-0.1} shadow-camera-far={115} shadow-mapSize-width={2024}
        shadow-mapSize-height={2024} />

      <Environment background>
        <Background scale={.05} side={THREE.BackSide} />
      </Environment>



      <Sun onClick={() => { setTarget(sunRef); setTargetGroup(sunRef); setDefaultCameraPosition() }} innerRef={sunRef} />

      <group ref={mercuryGroupRef}>
        <Mercury onClick={() => { setTarget(mercuryRef); setTargetGroup(mercuryGroupRef); setDefaultCameraPosition() }} innerRef={mercuryRef} position={[15, 0, 0]} scale={.01} />
      </group >

      <group ref={venusGroupRef}>
        <Venus onClick={() => { setTarget(venusRef); setTargetGroup(venusGroupRef); setDefaultCameraPosition() }} innerRef={venusRef} position={[20, 0, 0]} scale={.02} />
      </group >

      <group ref={earthGroupRef}>
        <Earth onClick={() => { setTarget(earthRef); setTargetGroup(earthGroupRef); setDefaultCameraPosition() }} innerRef={earthRef} position={[27, 0, 0]} scale={.02} />
      </group >
      <group ref={moonGroupRef} position-y={.7}>
        <Moon innerRef={moonRef} position={[5, 0, 0]} scale={.005} />
      </group >

      <group ref={marsGroupRef}>
        <Mars onClick={() => { setTarget(marsRef); setTargetGroup(marsGroupRef); setDefaultCameraPosition() }} innerRef={marsRef} position={[35, 0, 0]} scale={.018} />
      </group >

      <group ref={jupiterGroupRef}>
        <Jupiter onClick={() => { setTarget(jupiterRef); setTargetGroup(jupiterGroupRef); setDefaultCameraPosition() }} innerRef={jupiterRef} position={[50, 0, 0]} scale={.06} />
      </group >

      <group ref={saturnGroupRef}>
        <Saturn onClick={() => { setTarget(saturnRef); setTargetGroup(saturnGroupRef); setDefaultCameraPosition() }} innerRef={saturnRef} position={[70, 0, 0]} scale={.04} />
      </group >

      <group ref={uranusGroupRef}>
        <Uranus onClick={() => { setTarget(uranusRef); setTargetGroup(uranusGroupRef); setDefaultCameraPosition() }} innerRef={uranusRef} position={[90, 0, 0]} scale={1.5} />
      </group >
      <group ref={neptuneGroupRef}>
        <Neptune onClick={() => { setTarget(neptuneRef); setTargetGroup(neptuneGroupRef); setDefaultCameraPosition() }} innerRef={neptuneRef} position={[110, 0, 0]} scale={.24} />
      </group >
    </>
  )
}
