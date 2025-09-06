  "use client";
  import Spline from '@splinetool/react-spline';

  export default function Background() {

    const apiKey = process.env.NEXT_PUBLIC_API_KEY;

    return (
      <div 
        className=" inset-0 w-full h-full" 
      >
      
        <Spline
          scene={`https://prod.spline.design/${apiKey}/scene.splinecode`}
          style={{ 
            width: '123%', 
            height: '110%',
            display: 'block'
          }} 
        
        />
      </div>
    );
  }
