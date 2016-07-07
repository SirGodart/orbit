var bgFlare = function() {

				var spec = 0x777777;
			            var shine = 25;

		var text = THREE.ImageUtils.loadTexture('../bg/flare_back.png');

		var geo = new THREE.PlaneGeometry(1, 1, 1);


		var mat = new THREE.MeshPhongMaterial({ color:'white',  map: text, side: THREE.DoubleSide, specular: spec, shininess: shine });
		
		var mesh = new THREE.Mesh( geo, mat );
		mesh.scale.set(5000, 5000, 1);
		mesh.position.set(0, 0, -500);

		scene.add(mesh);




}



