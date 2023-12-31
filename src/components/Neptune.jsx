/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 neptune.glb
Author: SebastianSosnowski (https://sketchfab.com/SebastianSosnowski)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/neptune-fe05e06a265d4a8f9285d34c933878ee
Title: Neptune
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  // const group = useRef()
  const { nodes, materials, animations } = useGLTF('/neptune.glb')
  // const { actions } = useAnimations(animations, group)
  return (
    <group  {...props} dispose={null} ref={props.innerRef}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="943e82ae1e91464bb6057ce325b1063bfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Planeta" rotation={[-Math.PI / 2, 0, 0]}>
                  <mesh castShadow receiveShadow name="Planeta_Planeta_0" geometry={nodes.Planeta_Planeta_0.geometry} material={materials.Planeta} />
                </group>
                <group name="Atmosfera" rotation={[-Math.PI / 2, 0, 0]}>
                  <mesh castShadow receiveShadow name="Atmosfera_Atmosfera_0" geometry={nodes.Atmosfera_Atmosfera_0.geometry} material={materials.Atmosfera} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/neptune.glb')
