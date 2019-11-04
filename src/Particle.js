import React from 'react';
import Particles from 'react-particles-js';
import './Particle.css' 

class Particle extends React.Component{
  
    render(){ 
        return (
          <div> 
            <Particles params={{
  "particles": {
    "number": {
      "value": 82,
      "density": {
        "enable": true,
        "value_area": 641.3648243462092
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "image",
      "stroke": {
        "width": 2,
        "color": "#ebebeb"
      },
      "polygon": {
        "nb_sides": 7
      },
      "image": {
        "src": "https://zupimages.net/up/19/42/0bup.png",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.4890406785639845,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 16.03412060865523,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2.4362316369040355,
        "size_min": 8.932849335314796,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 192.40944730386272,
      "color": "#f0f0fa",
      "opacity": 0.2324947488255008,
      "width": 1.5
    },
    "move": {
      "enable": true,
      "speed": 0.7,
      "direction": "top",
      "random": false,
      "straight": true,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 138.05312609122865,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": false
}} />
              </div>
        );
    };

}

export default Particle;
