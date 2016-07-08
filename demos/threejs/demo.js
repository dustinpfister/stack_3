/*
 *    demo.js
 *    Copyright 2016 by Dustin Pfister (GPL v3)
 *
 *    A demo for stack_3.js for three.js
 *
 */

stack.set({

    w : 2,
    h : 2,
    d : 2,
    val : 0

});

    // I need a three.js scene
var scene = new THREE.Scene(),

    // I need a three.js camera
    //camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 100),
    camera = new THREE.PerspectiveCamera(100, 640 / 480, 0.1, 100),
    
    // I will need three.js Materials
    Face = new THREE.MeshBasicMaterial({

            color : '#00af00'

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
        mesh.position.x = point.x * 3;
        mesh.position.y = point.y * 3;
        mesh.position.z = point.z * 3;
        mesh.add(new THREE.Mesh(box, Face));
        mesh.add(new THREE.Line(box, Wire));
        scene.add(mesh);
        
        i += 1;
        
        }
    
    };
    
    makeStackCubes();
    
    
    camera.position.x = 10;
    camera.position.y = 0;
    camera.position.z = 10;
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
    
    loop();