


var Post = function() {


					var image = THREE.ImageUtils.loadTexture( "bg/bg.jpg" );
				    image.minFilter = THREE.NearestFilter;


				var materialColor = new THREE.MeshBasicMaterial( {
					map: image ,
					depthTest: true,
					transparent: true,
					opacity: 1



				} );

				quadBG = new THREE.Mesh( new THREE.PlaneBufferGeometry( 16/3.5, 16/3.5, 1 ), materialColor );
				quadBG.position.z = -800;

				quadBG.scale.set( 1600 , 1000 , 1);
				scene.add( quadBG );



				var shaderVignette = THREE.VignetteShader;

				//renderer.gammaInput = true;
				//renderer.gammaOutput = true;

				var effectVignette = new THREE.ShaderPass( shaderVignette );
				effectVignette.uniforms[ "offset" ].value = 0.95;
				effectVignette.uniforms[ "darkness" ].value = 0.6;



				var clearMask = new THREE.ClearMaskPass();
				
				effectVignette.renderToScreen = true;


				var effectFilmBW = new THREE.FilmPass( 0.25, 0.3, 2048, true );
				var rtParameters = { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBFormat, stencilBuffer: true };
				var renderBackground = new THREE.RenderPass( scene, camera );




				composerScene = new THREE.EffectComposer( renderer, new THREE.WebGLRenderTarget( window.innerWidth, window.innerHeight, rtParameters ) );

				composerScene.addPass( renderBackground );
				//composerScene.addPass( effectHBlur );
				//composerScene.addPass( effectVBlur );
				composerScene.addPass( clearMask );
				renderScene = new THREE.TexturePass( composerScene.renderTarget2 );
				composer1 = new THREE.EffectComposer( renderer, new THREE.WebGLRenderTarget( window.innerWidth, window.innerHeight, rtParameters ) );
				composer1.addPass( renderScene );
				composer1.addPass( effectFilmBW );
				composer1.addPass( effectVignette );

	
			}


