import Particles from 'particlesjs';

const particles = () => {
  Particles.init({
    selector: '#particles-js',
    maxParticles: 400,
    color: '#ffffff'
  });
};
export default particles;
