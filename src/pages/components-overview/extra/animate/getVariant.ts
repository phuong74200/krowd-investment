import { Variants } from 'framer-motion';

import {
  // Bounce
  varBounceIn,
  varBounceInDown,
  varBounceInLeft,
  varBounceInRight,
  varBounceInUp,
  varBounceOut,
  varBounceOutDown,
  varBounceOutLeft,
  varBounceOutRight,
  varBounceOutUp,
  varColor2x,
  varColor3x,
  varColor4x,
  varColor5x,
  // Fade
  varFadeIn,
  varFadeInDown,
  varFadeInLeft,
  varFadeInRight,
  varFadeInUp,
  varFadeOut,
  varFadeOutDown,
  varFadeOutLeft,
  varFadeOutRight,
  varFadeOutUp,
  // Flip
  varFlipInX,
  varFlipInY,
  varFlipOutX,
  varFlipOutY,
  varKenburnsBottom,
  varKenburnsLeft,
  varKenburnsRight,
  // Background
  varKenburnsTop,
  varPanBottom,
  varPanLeft,
  varPanRight,
  varPanTop,
  // Rotate
  varRotateIn,
  varRotateOut,
  // Scale
  varScaleInX,
  varScaleInY,
  varScaleOutX,
  varScaleOutY,
  varSlideInDown,
  varSlideInLeft,
  varSlideInRight,
  // Slide
  varSlideInUp,
  varSlideOutDown,
  varSlideOutLeft,
  varSlideOutRight,
  varSlideOutUp,
  // Zoom
  varZoomIn,
  varZoomInDown,
  varZoomInLeft,
  varZoomInRight,
  varZoomInUp,
  varZoomOut,
  varZoomOutDown,
  varZoomOutLeft,
  varZoomOutRight,
  varZoomOutUp,
} from '../../../../components/animate';

// ----------------------------------------------------------------------

export default function getVariant(variant: string): Variants | undefined {
  let value;
  switch (variant) {
    // Slide
    case 'slideInUp':
      value = varSlideInUp;
      break;
    case 'slideInDown':
      value = varSlideInDown;
      break;
    case 'slideInLeft':
      value = varSlideInLeft;
      break;
    case 'slideInRight':
      value = varSlideInRight;
      break;
    case 'slideOutUp':
      value = varSlideOutUp;
      break;
    case 'slideOutDown':
      value = varSlideOutDown;
      break;
    case 'slideOutLeft':
      value = varSlideOutLeft;
      break;
    case 'slideOutRight':
      value = varSlideOutRight;
      break;
    // Fade
    case 'fadeIn':
      value = varFadeIn;
      break;
    case 'fadeInUp':
      value = varFadeInUp;
      break;
    case 'fadeInDown':
      value = varFadeInDown;
      break;
    case 'fadeInLeft':
      value = varFadeInLeft;
      break;
    case 'fadeInRight':
      value = varFadeInRight;
      break;
    case 'fadeOut':
      value = varFadeOut;
      break;
    case 'fadeOutUp':
      value = varFadeOutUp;
      break;
    case 'fadeOutDown':
      value = varFadeOutDown;
      break;
    case 'fadeOutLeft':
      value = varFadeOutLeft;
      break;
    case 'fadeOutRight':
      value = varFadeOutRight;
      break;
    // Zoom
    case 'zoomIn':
      value = varZoomIn;
      break;
    case 'zoomInUp':
      value = varZoomInUp;
      break;
    case 'zoomInDown':
      value = varZoomInDown;
      break;
    case 'zoomInLeft':
      value = varZoomInLeft;
      break;
    case 'zoomInRight':
      value = varZoomInRight;
      break;
    case 'zoomOut':
      value = varZoomOut;
      break;
    case 'zoomOutLeft':
      value = varZoomOutLeft;
      break;
    case 'zoomOutRight':
      value = varZoomOutRight;
      break;
    case 'zoomOutUp':
      value = varZoomOutUp;
      break;
    case 'zoomOutDown':
      value = varZoomOutDown;
      break;
    // Bounce
    case 'bounceIn':
      value = varBounceIn;
      break;
    case 'bounceInUp':
      value = varBounceInUp;
      break;
    case 'bounceInDown':
      value = varBounceInDown;
      break;
    case 'bounceInLeft':
      value = varBounceInLeft;
      break;
    case 'bounceInRight':
      value = varBounceInRight;
      break;
    case 'bounceOut':
      value = varBounceOut;
      break;
    case 'bounceOutUp':
      value = varBounceOutUp;
      break;
    case 'bounceOutDown':
      value = varBounceOutDown;
      break;
    case 'bounceOutLeft':
      value = varBounceOutLeft;
      break;
    case 'bounceOutRight':
      value = varBounceOutRight;
      break;
    // Flip
    case 'flipInX':
      value = varFlipInX;
      break;
    case 'flipInY':
      value = varFlipInY;
      break;
    case 'flipOutX':
      value = varFlipOutX;
      break;
    case 'flipOutY':
      value = varFlipOutY;
      break;
    // Scale
    case 'scaleInX':
      value = varScaleInX;
      break;
    case 'scaleInY':
      value = varScaleInY;
      break;
    case 'scaleOutX':
      value = varScaleOutX;
      break;
    case 'scaleOutY':
      value = varScaleOutY;
      break;
    // Rotate
    case 'rotateIn':
      value = varRotateIn;
      break;
    case 'rotateOut':
      value = varRotateOut;
      break;
    // Background
    case 'kenburnsTop':
      value = varKenburnsTop;
      break;
    case 'kenburnsBottom':
      value = varKenburnsBottom;
      break;
    case 'kenburnsLeft':
      value = varKenburnsLeft;
      break;
    case 'kenburnsRight':
      value = varKenburnsRight;
      break;
    case 'panTop':
      value = varPanTop;
      break;
    case 'panBottom':
      value = varPanBottom;
      break;
    case 'panLeft':
      value = varPanLeft;
      break;
    case 'panRight':
      value = varPanRight;
      break;
    case 'color2x':
      value = varColor2x;
      break;
    case 'color3x':
      value = varColor3x;
      break;
    case 'color4x':
      value = varColor4x;
      break;
    case 'color5x':
      value = varColor5x;
      break;
    default:
      value = undefined;
  }
  return value;
}
