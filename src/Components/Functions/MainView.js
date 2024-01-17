import React from 'react';
import './MainView.module.css';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './CarouselImage';



export default function MainView() {
  return (
        <Carousel>
          <Carousel.Item>
            <CarouselImage text="First slide" src={process.env.PUBLIC_URL + 'main.png'}/>
            <Carousel.Caption>
              <h3 style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>ゼルダの伝説</h3>
              <p style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>プレイヤーを引き込む任天堂の名作アクションアドベンチャーシリーズ</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <CarouselImage text="Second slide" src={process.env.PUBLIC_URL + 'main1.png'}/>
            <Carousel.Caption>
              <h3 style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>ドラゴンクエストビルダーズ2</h3>
              <p style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>クリエイティブでエキサイティングな冒険と友情の物語が繰り広げられる</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <CarouselImage text="Third slide" src={process.env.PUBLIC_URL + 'main3.png'}/>
            <Carousel.Caption>
              <h3 style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>エルデンリング</h3>
              <p style={{textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>
              ダークファンタジーの世界に満ちた壮大なアクションRPG
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    
  )
}
