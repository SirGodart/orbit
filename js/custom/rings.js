var Rings = function(scale) {

			 	var spec = 0xffffff;
    			var shine = 25;


    		

			 	ringLoader.load( "models/ringClean.json", function(geometry) {

			 		
	
			 		for (var i = 0; i < 4; i++ ) {
			 		

					 		var mat = new THREE.MeshBasicMaterial( { color: "white", specular: spec, vertexColors: THREE.FaceColors, transparent: true, opacity: 0.85 - i/5.5} );

					 		var mesh = new THREE.Mesh(geometry, mat);
					 		mesh.position.set(0, 0, 0);
					 		mesh.rotation.set(0, 0, 0);
					 	
					 		mesh.scale.set(scale - i/2, scale + i*2 , scale - i/2);
					 		allRings.add(mesh);
					 		scene.add(allRings);

					 	}
			 		

			 			allRings.children[1].rotation.y = 90 * Math.PI/180;
			 			allRings.children[3].rotation.y = 90 * Math.PI/180;

						 ring1.add(allRings.children[3]);
						 ring1.add(allRings.children[2]);
						 ring1.add(allRings.children[1]);
						 ring1.add(allRings.children[0]);

						 ring2.add(ring1.children[2]);
						 ring2.add(ring1.children[1]);
						 ring2.add(ring1.children[0]);
						
						 scene.add(ring2);
					
						 ring3.add(ring2.children[1]);
						 ring3.add(ring2.children[0]);
						 ring2.add(ring3);

						 ring4.add(ring3.children[1]);
						 ring3.add(ring4);

					

			 	});



				

			}
