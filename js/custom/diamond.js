var Diamond = function(scale) {

						var spec = 0x777777;
			            var shine = 25;
			            var image = THREE.ImageUtils.loadTexture('images/diamond.jpg');

			            image.minFilter = THREE.NearestFilter;

			            

			    		loader1.load( "models/diamond.json", function(geometry){

			    			for (var i = 0; i < 3; i ++) {
				   
								 var material = new THREE.MeshPhongMaterial( { color: 'white', map: image, transparent: true, opacity:1.0 , specular: spec, shininess: shine, side: THREE.FrontSide } );
							
						
			                     var mesh = new THREE.Mesh(geometry, material);

			                     var z = 0;
			                     var s = scale + i/2;
			                     mesh.position.y = 0;
			                     mesh.position.z = z;
							   	 mesh.scale.x = mesh.scale.y = mesh.scale.z = s;                
			                     dummy.add( mesh );	
			                     dummy.position.set( 0, 0, 0 );             			
								 ring3.add( dummy );
								 console.log('lol');
							}
							 
						});

			    

			}