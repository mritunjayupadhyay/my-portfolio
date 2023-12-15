/**
 * IMPORTANT: Loading glTF models into a Three.js scene is a lot of work.
 * Before we can configure or animate our model’s meshes, we need to iterate through
 * each part of our model’s meshes and save them separately.
 *
 * But luckily there is an app that turns gltf or glb files into jsx components
 * For this model, visit https://gltf.pmnd.rs/
 * And get the code. And then add the rest of the things.
 * YOU DON'T HAVE TO WRITE EVERYTHING FROM SCRATCH
 */

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Group, Object3DEventMap, SkinnedMesh } from "three";
// import scene from "../app/assets/fox.glb";


const scene = "https://pub-606f905af66843f3aa385a802f9370c2.r2.dev/assets/fox.glb";

// 3D Model from: https://sketchfab.com/3d-models/fox-f372c04de44640fbb6a4f9e4e5845c78
export function Fox({ currentAnimation }: { currentAnimation: string }, ...props: any[]) {
  const group = useRef<Group<Object3DEventMap> | null>(null);

  const { nodes, materials, animations } = useGLTF(scene);
  const { actions } = useAnimations(animations, group);

  // This effect will run whenever the currentAnimation prop changes
  useEffect(() => {
    Object.values(actions).forEach((action) => action!.stop());

    if (actions[currentAnimation]) {
        actions[currentAnimation]!.play();
    }
  }, [actions, currentAnimation]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Sketchfab_Scene'>
        <primitive object={nodes.GLTF_created_0_rootJoint} />

        <skinnedMesh
            name='Object_7'
            geometry={(nodes.Object_7 as SkinnedMesh).geometry}
            material={materials.PaletteMaterial001}
            skeleton={(nodes.Object_7 as SkinnedMesh).skeleton}
        />
        <skinnedMesh
          name='Object_8'
          geometry={(nodes.Object_8 as SkinnedMesh).geometry}
          material={materials.PaletteMaterial001}
          skeleton={(nodes.Object_8 as SkinnedMesh).skeleton}
        />
        <skinnedMesh
          name='Object_9'
          geometry={(nodes.Object_9 as SkinnedMesh).geometry}
          material={materials.PaletteMaterial001}
          skeleton={(nodes.Object_9 as SkinnedMesh).skeleton}
        />
        <skinnedMesh
          name='Object_10'
          geometry={(nodes.Object_10 as SkinnedMesh).geometry}
          material={materials.PaletteMaterial001}
          skeleton={(nodes.Object_10 as SkinnedMesh).skeleton}
        />
        <skinnedMesh
          name='Object_11'
          geometry={(nodes.Object_11 as SkinnedMesh).geometry}
          material={materials.PaletteMaterial001}
          skeleton={(nodes.Object_11 as SkinnedMesh).skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload(scene);
