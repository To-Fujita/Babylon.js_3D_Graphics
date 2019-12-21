# Babylon.js_3D_Graphics
Babylon.js is one of 3D graphic engine using a JavaScript library for HTML5. I had tried to create some 3D graphics, a maze game and some pazzle games by using Babylon.js. I hope it helps as a reference for beginners.  
## Description
This document describes how to create the 3D graphics, the maze game and some pazzle games by using Babylon.js for beginners.  
## Demo
I will show you same samples to create 3D graphics and pazzle games on step by step.  
These demonstrations are confirmed by Microsoft Edge (Ver. 11.0.17763.379), Firefox (Ver. 65.0.2/64 bit) and Google Chrome (Ver. 73.0.3683.86/64 bit) under the condition of Windows 10. However, some parts of samples are not working well at the Android devices and at the iOS devices.  
[index.html](https://to-fujita.github.io/Babylon.js_3D_Graphics/index.html) : Menu for Demo of 3D graphics  
[index_Maze](https://to-fujita.github.io/Babylon.js_3D_Graphics/index_Maze.html) : Menu for how to create a maze game  
[index Pazzle Game](https://to-fujita.github.io/Babylon.js_3D_Graphics/index_Pazzle.html) : Menu for how to create some Pazzle Games  
 **Note: These indexes are not working in Safari.**  
  
At the above GITHUB, the files and the folders are as follows:  
- CSS: This folder is stored css file for the style of menu.  
- scenes: This folder is stored 3D graphic data of babylon type, GLTF type, OBJ type and STL type. Some GLTF type of data were downloaded from [Poly](https://poly.google.com/). Any other OBJ type and STL type of 3D graphic data were downloaded from [Free 3D](https://free3d.com/ja/3d-models/).  
- textures: This folder is stored texture data, 2D graphic data and etc. These data were based on playground that is downloaded from [Babylon.js on GITHUB](https://github.com/BabylonJS).   
- sound: This folder is stored sound data for the maze game.  
- Babylon_101_sphere.html - Babylon_401_cameras.html: These files are created sample HTML files including JavaScript data.  
- BabylonJS_maze_01.html - BabylonJS_maze_07.html: These files are created sample HTML files for how to create the Maze Game.  
- BabylonJS_pazzle_01.html - BabylonJS_pazzle_10.html: These files are created sample HTML files for how to create the Pazzle Games.  
- maze_01.js: Javascript file for creating the maze.  
- stages_101.js, Stages_301.js: Javascript files for stages on Pazzle Games. These files are able to change or to add their stages by text editor.  
  
## Step-1: Try to create a sphere
For creating the shapes in Babylon.js, following documents will be of use as a reference to you. In the Babylon.js, it is available to create the shape of box, sphere, cylinder, cone, plane, disc polygon, torus, torus knot and ground.  
- [Create Set Shapes](https://doc.babylonjs.com/how_to/set_shapes)  
- [Create Set Shapes - Lagacy](https://doc.babylonjs.com/how_to/legacy_set)  

As a first step, I will try to create some spheres with several conditions.  
### 1-1: Try to create a simple sphere
[Sample 1-1: Babylon_101_sphere.html](https://to-fujita.github.io/Babylon.js_3D_Graphics/Babylon_101_sphere.html)  
This is to display a simple sphere. It is needed an object, some lights and a camera to create a 3D graphic.  
### 1-2: Try to create a simple sphere with background
[Sample 1-2: Babylon_102_sphere_with_BG.html](https://to-fujita.github.io/Babylon.js_3D_Graphics/Babylon_102_sphere_with_BG.html)  
This is to display a simple sphere with background. The background is based on texture of skybox by Babylon.js. 
### 1-3: Try to create a colored sphere with background
[Sample 1-3: Babylon_103_color_sphere.html](https://to-fujita.github.io/Babylon.js_3D_Graphics/Babylon_103_color_sphere.html)  
This is to display a colored sphere with same background. The color of sphere is changed in random at every load the HTML. 
### 1-4: Try to create a sphere with earth texture
[Sample 1-4: Babylon_104_earth.html](https://to-fujita.github.io/Babylon.js_3D_Graphics/Babylon_104_earth.html)  
This is to display a sphere with texture of earth. The background is changed to the space.
### 1-5: Try to create an animated earth
[Sample 1-5: Babylon_105_animated_earth.html](https://to-fujita.github.io/Babylon.js_3D_Graphics/Babylon_105_animated_earth.html)  
The last of Step-1 is the earth that is rotated by animation.  
  
## Step-2: Try to create some spheres with background
I had created some different faced spheres in the Step-2.  
### 2-1: To use skybox as a background
[Sample 2-1: Babylon_201_skybox.html](https://to-fujita.github.io/Babylon.js_3D_Graphics/Babylon_201_skybox.html)  
At the Sample 2-1, you can select the background from menu at the top of the window.  
### 2-2: To use skybox with ground
[Sample 2-2: Babylon_202_skybox+ground.html](https://to-fujita.github.io/Babylon.js_3D_Graphics/Babylon_202_skybox+ground.html)  
At the Sample 2-2, you can also select the background and the face of ground. 
### 2-3: To use DDS type of file for background
[Sample 2-3: Babylon_203_dds.html](https://to-fujita.github.io/Babylon.js_3D_Graphics/Babylon_203_dds.html)  
At the Sample 2-3, It is used DDS(DirectDraw Surface) files instead of skybox for background. In this time, the large size of DDS files are ommited for some reasons.  
  
## Step-3: Babylon.js Demo and try to display some 3D graphics with background
In the Babylon.js, it is available to display babylon type formatted data, GLTF type, OBJ type and STL type as a 3D graphic data. I will try to display of each formatted data.
### 3-1: Babylon.js Demo
[Sample 3-1: Babylon_301_Sel_babylon.html](https://to-fujita.github.io/Babylon.js_3D_Graphics/Babylon_301_Sel_babylon.html)  
These demos are from playground of Babylon.js. The large size of demo files are also ommited.
### 3-2: Babylon type of files with DDS type background
[Sample 3-2: Babylon_302_Sel_BG&babylon.html](https://to-fujita.github.io/Babylon.js_3D_Graphics/Babylon_302_Sel_BG&babylon.html)  
This is to display the babylon type formatted 3D graphic data.  
### 3-3: GLTF type of files with DDS type background
[Sample 3-3: Babylon_303_gltf.html](https://to-fujita.github.io/Babylon.js_3D_Graphics/Babylon_303_gltf.html)  
This is to display the GLTF type formatted 3D graphic data. However, it is not loaded the texture data after 3 or 4 times change the GLTF 3D graphic data.
### 3-4: OBJ type of files with DDS type background
[Sample 3-4: Babylon_304_obj.html](https://to-fujita.github.io/Babylon.js_3D_Graphics/Babylon_304_obj.html)  
This is to display the OBJ type formatted 3D graphic data.
### 3-5: STL type of files with DDS type background
[Sample 3-5: Babylon_305_stl.html](https://to-fujita.github.io/Babylon.js_3D_Graphics/Babylon_305_stl.html)  
This is display the STL type formatted 3D graphic data. In this time, some textures are added to the 3D graphics.  
  
## Step-4: Camera Works
[Sample 4: Babylon_401_cameras.html](https://to-fujita.github.io/Babylon.js_3D_Graphics/Babylon_401_cameras.html)  
In the Babylon.js, it is available sevral type of camera, please refer to [Cameras on Babylon.js](https://doc.babylonjs.com/babylon101/cameras). You can select the camera work from menu at the top of the window.  
At the FlyCamera, you can control by keys of "QWEASD" at keyboard and right mouse-button beside of normal control by mouse.  
  
## Step-5: Walking Animation
### 5-1: Simple Walking Animation
[Sample 5-1: Babylon_501_walk.html](https://to-fujita.github.io/Babylon.js_3D_Graphics/Babylon_501_walk.html)  
At the Step-5-1, I will try to create a walking animation by using the Blender that is based on the tutorial of [かんたんBlender講座](http://krlab.info.kochi-tech.ac.jp/kurihara/lecture/cg/BlenderWeb_Hayashi/html/index.html) and the 3D character that is downloaded from [PROJECT6B](http://6b.u5ch.com/index.html). Then, I had tried to attach a shadow to the 3D character and to trace it by the camera at the animation by Babylon.js.
### 5-2: Game of Maze with Walking Animation
[Sample 5-2: Babylon_502_maze.html](https://to-fujita.github.io/Babylon.js_3D_Graphics/Babylon_502_maze.html)  
This is a game for the 3D maze. A same character at the "Sample 5-1" above is walking in the 3D maze. You can control to move of the character by vertual joystic that is appeared if you touch or mouse click the left side of display. I have created this maze based on "[Coding4Fun tutorial: creating a 3D WebGL procedural QRCode maze with Babylon.js](https://www.davrous.com/2014/02/19/coding4fun-tutorial-creating-a-3d-webgl-procedural-qrcode-maze-with-babylon-js/)" and "[Algoful ](https://algoful.com/Archive/Algorithm/MazeBar)".  
This sample is not working at Android devices. The working sample is shown in Step-6-7.  
  
## Step-6: How to create a maze game
### 6-1: Create an Environment
[BabylonJS_maze_01.html](https://to-fujita.github.io/Babylon.js_3D_Graphics/BabylonJS_maze_01.html)  
First, let's create an environment. It is almost same to Step-2-2 above, an environment is created by using skybox and ground.  
### 6-2: Set Vertual Joysticks
[BabylonJS_maze_02.html](https://to-fujita.github.io/Babylon.js_3D_Graphics/BabylonJS_maze_02.html)  
Next is setting vertual joysticks, it is available 2 vertual joysticks as left side and right side. The left side vertual joystick is control the player (use after Step-6-6), and the right side is controlling the camera as zoom in/out or pan.  
### 6-3: Set a Block with a texture
[BabylonJS_maze_03.html](https://to-fujita.github.io/Babylon.js_3D_Graphics/BabylonJS_maze_03.html)  
Third step is to set a block with a texture. Please refer to [Babylon Document](https://doc.babylonjs.com/how_to/createbox_per_face_textures_and_colors).  
An important point here is a setting of light position in consideration for the position of sun at skybox.  
### 6-4: Create a Maze
[BabylonJS_maze_04.html](https://to-fujita.github.io/Babylon.js_3D_Graphics/BabylonJS_maze_04.html)  
The creating a maze is using same javascript file at Step-5-2 above.  
### 6-5: Set a Goal and a Player
[BabylonJS_maze_05.html](https://to-fujita.github.io/Babylon.js_3D_Graphics/BabylonJS_maze_05.html)  
At the fifth step, a goal and a player are set in the maze. However, a goal is not clear displaied, then a street light is set to the goal point at next step.  
### 6-6: Control Player's Walk
[BabylonJS_maze_06.html](https://to-fujita.github.io/Babylon.js_3D_Graphics/BabylonJS_maze_06.html)  
In this step, it is set a street light at the goal point and added the control for player's walk, stop at the wall or edge of the ground.  
### 6-7: Finalize a Maze Game
[BabylonJS_maze_07.html](https://to-fujita.github.io/Babylon.js_3D_Graphics/BabylonJS_maze_07.html)  
The last step, it is added menus and the handing when a player reached to the goal.  The file for sound effect are downloaded from [Let's Play with Free Sound Effects !](https://taira-komori.jpn.org/).  
This sample is available working in Android device unlike the sample at Step-5-2.  
  
## Step-7: How to create the Pazzle Game
The creating the environment, vertual joysticks and set a block is same from Step-6-1 to Step-6-3.  
It is not working at Safari.
### 7-1: Create a Stage
[BabylonJS_pazzle_01.html](https://to-fujita.github.io/Babylon.js_3D_Graphics/BabylonJS_pazzle_01.html)   
The creating the stage is almost same to Step-5-2 above. The difference point is these stages have upper floors, boxes, lifts and enemies.  
### 7-2: Control Player's Walk
[BabylonJS_pazzle_02.html](https://to-fujita.github.io/Babylon.js_3D_Graphics/BabylonJS_pazzle_02.html)   
Added to control player's walking and to set the limitation walking area. It is same to Step-6-6 above.  
### 7-3: Lift Up the Player
[BabylonJS_pazzle_03.html](https://to-fujita.github.io/Babylon.js_3D_Graphics/BabylonJS_pazzle_03.html)   
Added to lift up the Player. It is available lift up only one floor.  
### 7-4: Drop Down the Player
[BabylonJS_pazzle_04.html](https://to-fujita.github.io/Babylon.js_3D_Graphics/BabylonJS_pazzle_04.html)   
Added to drop down the Player. It is available drop down any number of stairs.
### 7-5: Moving the Box
[BabylonJS_pazzle_05.html](https://to-fujita.github.io/Babylon.js_3D_Graphics/BabylonJS_pazzle_05.html)   
Added to move the Box in case of Player's push. It is set the limitation of moving in some situations.
### 7-6: Lift Up the Box
[BabylonJS_pazzle_06.html](https://to-fujita.github.io/Babylon.js_3D_Graphics/BabylonJS_pazzle_06.html)   
Added to lift up the Box.  
### 7-7: Drop Down the Box
[BabylonJS_pazzle_07.html](https://to-fujita.github.io/Babylon.js_3D_Graphics/BabylonJS_pazzle_07.html)   
Adde to drop down the Box. It is also available drop down any number of stairs.
### 7-8: Change the Player at Pushing the Box
[BabylonJS_pazzle_08.html](https://to-fujita.github.io/Babylon.js_3D_Graphics/BabylonJS_pazzle_08.html)   
In case of Player push the Box, the walking character of Player is changed to another version.  
### 7-9: Moving the Enemy(Finalized the puzzle game)
[BabylonJS_pazzle_09.html](https://to-fujita.github.io/Babylon.js_3D_Graphics/BabylonJS_pazzle_09.html)   
Finally, added to move the enemy. In this time, the enemy is stay their floor and only random moving. 
This game is not working well in iOS.  

## Step-8: Create Other Games
### 8-1: SOKOBAN Type of Game
[BabylonJS_pazzle_10.html](https://to-fujita.github.io/Babylon.js_3D_Graphics/BabylonJS_pazzle_10.html)  
It is very easy to change the program from above pazzle game to the SOKOBAN type of game. The changed points are to set some settle points for boxes and the algolizm for game cleared. This game is also not working well in iOS.   
In this time, the sound effect files are downloaded from [「あみたろの声素材工房」](http://www14.big.or.jp/~amiami/happy/).  
  
## Reference
- [Babylon.js](https://www.babylonjs.com/): Home page of Babylon.js  
- [Poly](https://poly.google.com/): 3D graphincs  
- [かんたんBlender講座](http://krlab.info.kochi-tech.ac.jp/kurihara/lecture/cg/BlenderWeb_Hayashi/html/index.html): 高知工科大学のかんたんBlender講座  
- [PROJECT6B](http://6b.u5ch.com/index.html): Mr. Benjamin's Home Page (Download ruby-chan data that is a 3D character.)  
- [Coding4Fun tutorial: creating a 3D WebGL procedural QRCode maze with Babylon.js](https://www.davrous.com/2014/02/19/coding4fun-tutorial-creating-a-3d-webgl-procedural-qrcode-maze-with-babylon-js/): A tutorial for creating the 3D maze.  
- [Algoful ](https://algoful.com/Archive/Algorithm/MazeBar):  An algorithm to create the maze.  
- [「あみたろの声素材工房」](http://www14.big.or.jp/~amiami/happy/): I had downloaded the sound effect data from this URL.  

## Licence
[MIT](https://github.com/tcnksm/tool/blob/master/LICENCE)

## Author
[T. Fujita](https://github.com/T_Fujita)  
