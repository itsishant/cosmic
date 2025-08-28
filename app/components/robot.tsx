  "use client";
  import Spline from '@splinetool/react-spline';

  export default function Background() {

    const apiKey = process.env.NEXT_PUBLIC_API_KEY as string;

    return (
      <div 
        className=" inset-0 w-full h-full" 
      >
      
        <Spline
        className=''
          scene={`https://prod.spline.design/${apiKey}/scene.splinecode`}
          style={{ 
            width: '100%', 
            height: '100%',
            display: 'block'
          }}
        
        />
      </div>
    );
  }