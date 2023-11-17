/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 sun.glb
Author: SebastianSosnowski (https://sketchfab.com/SebastianSosnowski)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/sun-9ef1c68fbb944147bcfcc891d3912645
Title: Sun
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  // const group = useRef()
  const { nodes, materials, animations } = useGLTF('/sun.glb')
  // const { actions } = useAnimations(animations, group)
  return (
    <group ref={props.innerRef} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="3a2aaa22fb3d4b329318a980ad1bf6d1fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="UnstableStarCore" rotation={[-Math.PI / 2, 0, 0]}>
                  <mesh name="UnstableStarCore_1_0" geometry={nodes.UnstableStarCore_1_0.geometry} material={materials.material} />
                </group>
                <group name="UnstableStarref" rotation={[-Math.PI / 2, 0, 0]} scale={1.01}>
                  <mesh name="UnstableStarref_2_0" geometry={nodes.UnstableStarref_2_0.geometry} material={materials.material_1} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/sun.glb')
