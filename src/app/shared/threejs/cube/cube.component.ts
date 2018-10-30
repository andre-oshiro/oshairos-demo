import { Component, OnInit } from '@angular/core';
import * as three from 'three';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.scss']
})
export class CubeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // サイズを指定
    const width = 960;
    const height = 540;
    // レンダラーを作成
    const renderer = new three.WebGLRenderer({
      canvas: document.querySelector('.myCanvas')
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    // シーンを作成
    const scene = new three.Scene();
    // カメラを作成
    const camera = new three.PerspectiveCamera(45, width / height);
    camera.position.set(0, 0, +1000);
    // 箱を作成
    const geometry = new three.BoxGeometry(400, 400, 400);
    const material = new three.MeshNormalMaterial();
    const box = new three.Mesh(geometry, material);
    scene.add(box);
    tick();
    // 毎フレーム時に実行されるループイベントです
    function tick() {
      box.rotation.y += 0.01;
      renderer.render(scene, camera); // レンダリング
      requestAnimationFrame(tick);
    }
  }
}
