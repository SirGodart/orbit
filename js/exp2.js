			
//GLOBAL
			var counter = 0;
			var dummy = new THREE.Object3D();
			var dummy2 = new THREE.Object3D();
			var world = new THREE.Object3D();
			var iso3D = new THREE.Object3D();
			var loader1 = new THREE.JSONLoader();
			var ringLoader = new THREE.JSONLoader();
			var allRings = new THREE.Object3D();
			var ring1 = new THREE.Object3D(), ring2 = new THREE.Object3D(), ring3 = new THREE.Object3D(), ring4 = new THREE.Object3D();

			var SCREEN_WIDTH = window.innerWidth,
			SCREEN_HEIGHT = window.innerHeight,

			mouseX = 0, mouseY = 0,
			mouseDownX = 0, mouseDownY = 0, targetRotation = 0, bgMouseX = 0, bgMouseY = 0,

			windowHalfX = window.innerWidth / 2,
			windowHalfY = window.innerHeight / 2,

			

			camera, scene, renderer, lightScene, lightCamera, lightRenderer, topBg, quadBG, topBg2;


			var delta = 0.01;
			var shaderMesh;
			var composer1, composerScene;

			var matrixEl = document.querySelectorAll(".matrix");
		
			//console.log(matrixEl[0]);
			

			

			var myMatrix = new Matrix(matrixEl);
			myMatrix.iterate(20, 50, 500);
		
								


	(function () {







						init();

						animate();


						function init() {

							var container, separation = 100, amountX = 50, amountY = 50;
						
							container = document.getElementById('container');
						


							topBg = document.getElementById('trans');
							topBg.style.marginLeft = window.innerWidth/2 - topBg.width/2 + 'px';
							topBg.style.marginTop = window.innerHeight/2 - topBg.height/2 + 'px';

							topBg2 = document.getElementById('trans2');
							topBg2.style.marginLeft = window.innerWidth/2 - topBg2.width/2 + 'px';
							topBg2.style.marginTop = window.innerHeight/2 - topBg2.height/2 + 'px';

							

							camera = new THREE.PerspectiveCamera( 60, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 10000 );
							camera.position.z = 1000;


							scene = new THREE.Scene();
							lightScene = new THREE.Scene();



							//CUSTOMS


							renderer = new THREE.WebGLRenderer({alpha: true});
							renderer.setClearColor( '#fff' , 0.0 );
							renderer.setPixelRatio( window.devicePixelRatio );
							renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
							renderer.sortObjects = false;
							renderer.autoClear = false;


							//var flare = new bgFlare();
							var rings = new Rings(3);
							var diamond = new Diamond(0.5);
							
							var myLight = new MyLight();


							
							container.appendChild( renderer.domElement );
					

							var post = new Post();

							

							document.addEventListener( 'mousemove', bgMove, false);
							document.addEventListener( 'mousedown', onDocumentMouseDown, false);					
							document.addEventListener( 'touchstart', onDocumentTouchStart, false );
							document.addEventListener( 'touchmove', onDocumentTouchMove, false );
							window.addEventListener( 'resize', onWindowResize, false );

								//var post = new Post();


							

						}

			function onWindowResize() {

						topBg.style.marginLeft = window.innerWidth/2 - topBg.width/2 + 'px';
						topBg.style.marginTop = window.innerHeight/2 - topBg.height/2 + 'px';

							topBg2.style.marginLeft = window.innerWidth/2 - topBg2.width/2 + 'px';
							topBg2.style.marginTop = window.innerHeight/2 - topBg2.height/2 + 'px';


				windowHalfX = window.innerWidth / 2;
				windowHalfY = window.innerHeight / 2;
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
			

				renderer.setSize( window.innerWidth, window.innerHeight );
				composer1.setSize( window.innerWidth, window.innerWidth );




			}

	


									//start mouse events
			function onDocumentMouseDown( event ) {

				//event.preventDefault();
				document.addEventListener( 'mousemove', onDocumentMouseMove, false );
				document.addEventListener( 'mouseup', onDocumentMouseUp, false );
				document.addEventListener( 'mouseout', onDocumentMouseOut, false );
				mouseXOnMouseDown = event.clientX - windowHalfX;
				targetRotationOnMouseDown = targetRotation;

			}

			function onDocumentMouseMove( event ) {

				mouseX = event.clientX - windowHalfX;
				mouseY = event.clientY - windowHalfY;
			
				targetRotation = targetRotationOnMouseDown + ( mouseX - mouseXOnMouseDown ) * 0.02;

			}


			function bgMove( event ) {

				bgMouseX = event.clientX - windowHalfX;
				bgMouseY = event.clientY - windowHalfY;

			}

			function onDocumentMouseUp( event ) {

				document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
				document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
				document.removeEventListener( 'mouseout', onDocumentMouseOut, false );
				//targetRotation = 0;
				console.log("out now");

			}

			function onDocumentMouseOut( event ) {

				document.removeEventListener( 'mousemove', onDocumentMouseMove, false );
				document.removeEventListener( 'mouseup', onDocumentMouseUp, false );
				document.removeEventListener( 'mouseout', onDocumentMouseOut, false );
			
		
				console.log("out off window");
			}


			function onDocumentTouchStart( event ) {

				if ( event.touches.length > 1 ) {

					event.preventDefault();

					mouseX = event.touches[ 0 ].pageX - windowHalfX;
					mouseY = event.touches[ 0 ].pageY - windowHalfY;

				}

			}

			function onDocumentTouchMove( event ) {

				if ( event.touches.length == 1 ) {

					event.preventDefault();

					mouseX = event.touches[ 0 ].pageX - windowHalfX;
					mouseY = event.touches[ 0 ].pageY - windowHalfY;

				}

			}

					
						function animate() {

							requestAnimationFrame( animate );
							render();
						}



					

						function render() {
				

				
		
						




							counter += 0.05;
							ring4.rotation.x += 0.02;
							ring3.rotation.z -= 0.002;
							ring2.rotation.z -= 0.003;
							ring2.rotation.x += 0.008;

							ring2.rotation.z += 0.02;
							ring2.rotation.y += (targetRotation - ring2.rotation.y) * 0.025 ;


							quadBG.position.x += ( -bgMouseX/5 - camera.position.x - quadBG.position.x/4 ) * .05;
							quadBG.position.y += ( bgMouseY/5 - camera.position.y - quadBG.position.y/4 ) * .05;

							//topBg.style.marginLeft =  -camera.position.x*1.25 + window.innerWidth/4 + 'px';
							//scene.rotation.y += mouseX/2000 - scene.rotation.y;


							composerScene.render( delta );
							composer1.render( delta );

							camera.position.x += ( bgMouseX/10 - camera.position.x ) * .05;

							//camera.position.y += ( - bgMouseY/5  - camera.position.y ) * .05;
							camera.lookAt( scene.position );	
				
							renderer.render( scene, camera );
							



							

						}



})();
