'use client';

import React from 'react';

const AnimatedCube = () => {
  return (
    <div className="w-auto h-auto">

      <style jsx global>{`
        @keyframes rotateCube {
          0%, 10% { transform: rotateY(0deg) rotateX(0deg); }
          15%, 20% { transform: rotateY(180deg) rotateX(0deg); }
          25%, 35% { transform: rotateY(180deg) rotateX(270deg); }
          40%, 50% { transform: rotateY(180deg) rotateX(90deg); }
          55%, 65% { transform: rotateY(-90deg) rotateX(90deg); }
          70%, 80% { transform: rotateY(90deg) rotateX(90deg); }
          90%, 95% { transform: rotateY(0deg) rotateX(90deg); }
        }

        @keyframes rotateShadow {
          0%, 10% { transform: rotateY(0deg) rotateX(90deg); }
          15%, 20% { transform: rotateY(180deg) rotateX(90deg); }
          20.1%, 20.9% { transform: rotateY(180deg) rotateX(90deg) translateZ(5px); }
          25%, 35% { transform: rotateY(180deg) rotateX(90deg); }
          35.1%, 35.9% { transform: rotateY(180deg) rotateX(90deg) translateZ(-5px); }
          40%, 50% { transform: rotateY(180deg) rotateX(90deg); }
          55%, 65% { transform: rotateY(0deg) rotateX(90deg); }
          70%, 80% { transform: rotateY(180deg) rotateX(90deg); }
          90%, 99% { transform: rotateY(90deg) rotateX(90deg); }
          99.1%, 99.9% { transform: rotateY(90deg) rotateX(90deg) translateZ(-5px); }
        }

        .animate-cube-rotate {
          animation: rotateCube 15s infinite cubic-bezier(1, -0.75, 0.5, 1.2);
        }
        
        .animate-shadow-rotate {
          animation: rotateShadow 15s infinite cubic-bezier(1, -0.75, 0.5, 1.2);
        }
      `}</style>

  
      <div className="relative w-[200px] h-[200px] perspective-[600px]">
        <div className="w-full h-full [transform-style:preserve-3d] animate-cube-rotate">
                    <div className="absolute w-full h-full [transform-style:preserve-3d] bg-cover bg-center [transform:rotateY(90deg)] 
            bg-[url('https://cdn.dribbble.com/users/5031/screenshots/7008431/dribbble.png')] 
            
            before:content-[''] before:absolute before:inset-0 before:bg-cover before:bg-center 
            before:[transform:translateZ(-100px)_rotateZ(-90deg)] 
            before:bg-[url('https://cdn.dribbble.com/users/329207/screenshots/6220354/bemocs_geneseo_sailing.jpg')]
            
            after:content-[''] after:absolute after:inset-0 after:bg-cover after:bg-center 
            after:[transform:translateZ(100px)_rotateZ(-90deg)] 
            after:bg-[url('https://cdn.dribbble.com/users/730703/screenshots/6988911/elenidebo-thisiscolossal-theroad-forchicagodesignmuseum.jpg')]">
          </div>

          {/* Slide Y Group */}
          <div className="absolute w-full h-full [transform-style:preserve-3d] bg-cover bg-center [transform:rotateX(90deg)] 
            bg-[url('https://cdn.dribbble.com/users/5031/screenshots/7008431/dribbble.png')]
            
            before:content-[''] before:absolute before:inset-0 before:bg-cover before:bg-center 
            before:[transform:translateZ(-100px)] 
            before:bg-[url('https://cdn.dribbble.com/users/1355613/screenshots/6441984/landscape_2x.jpg')]
            
            after:content-[''] after:absolute after:inset-0 after:bg-cover after:bg-center 
            after:[transform:translateZ(100px)_scale(-1)] 
            after:bg-[url('https://cdn.dribbble.com/users/63407/screenshots/5705689/dribbble_moonlight_2x.png')]">
          </div>

          {/* Slide Z Group */}
          <div className="absolute w-full h-full [transform-style:preserve-3d] bg-cover bg-center [transform:rotateX(0)] 
            bg-[url('https://cdn.dribbble.com/users/5031/screenshots/7008431/dribbble.png')]
            
            before:content-[''] before:absolute before:inset-0 before:bg-cover before:bg-center 
            before:[transform:translateZ(-100px)] 
            before:bg-[url('https://cdn.dribbble.com/users/1361661/screenshots/6673317/music_girl.png')]
            
            after:content-[''] after:absolute after:inset-0 after:bg-cover after:bg-center 
            after:[transform:translateZ(100px)] 
            after:bg-[url('https://cdn.dribbble.com/users/3178178/screenshots/7013817/the_caravan_by_patryk_wojciechowicz_2x.png')]">
          </div>

        </div>

        <div className="block w-[200px] h-[200px] bg-black/75 absolute top-[60%] left-0 right-0 m-auto -z-10 blur-[20px] animate-shadow-rotate"></div>        
      </div>
    </div>
  );
};

export default AnimatedCube;