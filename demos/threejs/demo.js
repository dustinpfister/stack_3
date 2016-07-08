/*
 *    demo.js
 *    Copyright 2016 by Dustin Pfister (GPL v3)
 *
 *    A demo for stack_3.js for three.js
 *
 */

stack.set({

    w : 4,
    h : 4,
    d : 4,
    val : 0

});

var pointer = {
	
	x : 1, y : 1, z : 1
	
};

stack.getPoint(0,0,0).val = 1;
stack.getPoint(3,0,0).val = 1;
stack.getPoint(0,0,3).val = 1;
stack.getPoint(0,3,0).val = 1;

stack.getPoint(pointer.x,pointer.y,pointer.z).val = 2;

    // I need a three.js scene
var scene = new THREE.Scene(),

    // I need a three.js camera
    //camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 100),
    camera = new THREE.PerspectiveCamera(100, 640 / 480, 0.1, 100),
    
    // I will need three.js Materials
    Face = new THREE.MeshBasicMaterial({

            color : '#00af00'

        }),
		
		
	Pointer = new THREE.MeshBasicMaterial({

            color : '#af0000'

        }),
		
        
        Wire = new THREE.LineBasicMaterial({

            color : '#ffffff'

        }),

    // I will need a three.js renderer
    renderer = new THREE.WebGLRenderer();
    
    renderer.setSize(640, 480);
    
    // append render
    document.getElementById('out').appendChild(renderer.domElement);
    
    var makeStackCubes = function(){
    
        var mesh, i = 0, len =  stack.points.length, point;
    
        while(i < len){
            
            point = stack.getPoint(i);
            
            
            
                mesh = new THREE.Object3D(),
                box = new THREE.BoxGeometry(1, 1, 1);
                mesh.position.x = point.x * 1;
                mesh.position.y = point.y * 1;
                mesh.position.z = point.z * 1;
                
                if(point.val === 1){
                
                    mesh.add(new THREE.Mesh(box, Face));
                
                }
				
				if(point.val === 2){
                
                    mesh.add(new THREE.Mesh(box, Pointer));
                
                }
                
				if(point.x < pointer.x || point.z < pointer.z || point.y < pointer.y){
                
				    mesh.add(new THREE.Line(box, Wire));
				
				}
				
                scene.add(mesh);
            
            
        
        i += 1;
        
        }
    
    };
    
    makeStackCubes();
    
    
    camera.position.x = 4;
    camera.position.y = 4;
    camera.position.z = 4;
    camera.lookAt(new THREE.Vector3(0,0,0));
    
    renderer.render(scene, camera);
    
    var up = true;
    var loop = function(){
        
        setTimeout(loop, 33);
        
        if(up){
        camera.position.y += 0.25;
        
        }else{
            
            camera.position.y -= 0.25;
        }
        
        if(camera.position.y >= 10){
            
            camera.position.y = 10;
            up = false;
        }
        
        if(camera.position.y <= -10){
            
            camera.position.y = -10;
            up = true;
        }
        
        camera.lookAt(new THREE.Vector3(0,0,0));
        
        renderer.render(scene, camera);
        
        console.log('yeah');
    };
    
   // loop();