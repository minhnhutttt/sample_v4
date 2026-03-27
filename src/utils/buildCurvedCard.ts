import * as THREE from 'three';

import { CARD_H, CARD_W, CURVE_SEGS, RADIUS } from '@/constants/carousel';

export function buildCurvedCard(
  tex: THREE.CanvasTexture,
  isBack = false,
): THREE.Mesh {
  const geo = new THREE.PlaneGeometry(CARD_W, CARD_H, CURVE_SEGS, 1);
  const pos = geo.attributes.position as THREE.BufferAttribute;

  const halfArc = CARD_W / RADIUS;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const t = x / CARD_W;
    const angle = t * halfArc;
    const rx = Math.sin(angle) * RADIUS;
    const rz = (Math.cos(angle) - 1) * RADIUS;
    pos.setXYZ(i, rx, pos.getY(i), rz);
  }
  geo.computeVertexNormals();

  // isBack=false → hiện nửa trước (0,0,1), isBack=true → hiện nửa sau (0,0,-1)
  const normalDir = isBack ? -1 : 1;
  const cardClip = new THREE.Plane(new THREE.Vector3(0, 0, normalDir), 0);

  const mat = new THREE.MeshBasicMaterial({
    map: tex,
    side: THREE.DoubleSide,
    clippingPlanes: [cardClip],
    transparent: false,
    opacity: 1,
    alphaTest: 0,
    depthWrite: true,
    depthTest: true,
  });

  const mesh = new THREE.Mesh(geo, mat);
  mesh.userData.clipPlane = cardClip;
  mesh.userData.normalDir = normalDir;
  return mesh;
}
