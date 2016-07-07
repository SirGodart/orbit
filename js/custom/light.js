var MyLight = function() {
	

				  //LIGHTNING
				var hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.25 );
				hemiLight.color.setHSL( 1.6, 0.5, 0.6 );
				hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
				hemiLight.position.set( 3, -10, 1 );
				scene.add( hemiLight );


				var dirLight = new THREE.DirectionalLight( 0xffffff, 0.25 );
				dirLight.color.setHSL( 1.1, 0.5, 2.95 );
				hemiLight.position.set( 3, -20, 1 );
				dirLight.position.multiplyScalar( 100 );
				scene.add( dirLight );

				dirLight.castShadow = true;
				dirLight.shadowMapWidth = 2048;
				dirLight.shadowMapHeight = 2048;
				var d = 50;
				dirLight.shadowCameraLeft = -d;
				dirLight.shadowCameraRight = d;
				dirLight.shadowCameraTop = d;
				dirLight.shadowCameraBottom = -d;
				dirLight.shadowCameraFar = 3500;
				dirLight.shadowBias = -0.0001;
				dirLight.shadowDarkness = 0.35;
	
	
	
}