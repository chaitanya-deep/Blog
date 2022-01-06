import React, { Suspense, useRef, useState } from "react";
import { useTheme } from 'next-themes';
import { Canvas, useLoader, useFrame } from "@react-three/fiber";


const Terrain = (props) => {
    const terrain = useRef()
    return (
        <mesh
          visible
          position={[0, -30 , 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          ref={terrain}
        >
          <planeBufferGeometry attach="geometry" args={[5000, 5000, 128, 128]} />
          <meshStandardMaterial
            attach="material"
            color= {props.color}
            roughness={1}
            metalness={0}
            wireframe
          />
        </mesh>
      );

}

const Back = () => {

    const { theme, setTheme, resolvedTheme } = useTheme('dark')
    const terrain = useRef()
    return( 
        (theme=='dark')? (
            <Canvas>
            <directionalLight intensity={1} />
            <ambientLight intensity={0.1}/>
            <mesh
              visible position={[0, -30 , 0]} rotation={[-Math.PI / 2, 0, 0]} ref={terrain} >
              <planeBufferGeometry attach="geometry" args={[5000, 5000, 128, 128]} />
                 <meshStandardMaterial  attach="material" 
                       color= "teal" roughness={1} metalness={0} wireframe />
            </mesh>
           </Canvas>
        ): (
            <Canvas>
            <directionalLight intensity={1} />
            <ambientLight intensity={0.1}/>
            <mesh
              visible position={[0, -30 , 0]} rotation={[-Math.PI / 2, 0, 0]} ref={terrain} >
              <planeBufferGeometry attach="geometry" args={[5000, 5000, 128, 128]} />
                 <meshStandardMaterial  attach="material" 
                       color= "pink" roughness={1} metalness={0} wireframe />
            </mesh>
           </Canvas>
        )
       
    );
}



export default Back
