import { CCarousel, CCarouselItem, CImage } from '@coreui/react'

const Slider = () => {
  return (
<CCarousel controls transition="crossfade">
  <CCarouselItem>
    <CImage className="d-block w-full h-full object-cover" src={`https://coreui.io/react/docs/static/react-83088efde08a5dedde9f67a954cb4b5b.jpg`} alt="slide 1" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-full h-full object-cover" src={`https://coreui.io/react/docs/static/vue-8a74d93fde1a02c247304291cce46797.jpg`} alt="slide 2" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-full h-full object-cover" src={`https://coreui.io/react/docs/static/angular-2f3764e2ec8b0b47ebe68f2f80260ef1.jpg`} alt="slide 3" />
  </CCarouselItem>
</CCarousel>
  )
}

export default Slider