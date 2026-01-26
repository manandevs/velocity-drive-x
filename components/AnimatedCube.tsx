'use client';

import React from 'react';

const AnimatedCube = () => {
  return (
    <div className="relative w-full h-screen bg-[#FF0074] text-white font-sans text-[11px] overflow-hidden flex flex-col items-center justify-center">
      
      {/* 
        We use a local style tag here because Tailwind doesn't support 
        complex multi-step keyframes (0%, 15%, 25%...) via inline classes easily.
      */}
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

      {/* Title Section */}
      <div className="absolute top-10 text-center z-10">
        <h1 className="text-2xl font-bold m-0">Animated Cube Slider</h1>
        <p className="m-0 text-lg">CSS Only</p>
        <br />
        <p className="text-xs opacity-75">Best viewed in Firefox / Chrome</p>
      </div>

      {/* Slider Wrapper */}
      <div className="relative w-[200px] h-[200px] perspective-[600px]">
        
        {/* 3D Container */}
        <div className="w-full h-full [transform-style:preserve-3d] animate-cube-rotate">
          
          {/* Slide X Group (Main, Before, After) */}
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

        {/* Shadow */}
        <div className="block w-[200px] h-[200px] bg-black/75 absolute top-[60%] left-0 right-0 m-auto -z-10 blur-[20px] animate-shadow-rotate"></div>
        
      </div>

      {/* Credits */}
      <p className="fixed bottom-[22px] w-full text-center z-50">
        by 
        <span className="ml-1">
          <a 
            href="http://www.albertohartzet.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-black text-blue-700 no-underline transition-all duration-150 linear pr-5 hover:text-[#ff6347] 
            bg-[url('https://upload.wikimedia.org/wikipedia/commons/6/64/Icon_External_Link.png')] 
            bg-no-repeat bg-right bg-[length:12px] brightness-200"
          >
            Alberto Hartzet
          </a>
        </span>
      </p>

    </div>
  );
};

export default AnimatedCube;