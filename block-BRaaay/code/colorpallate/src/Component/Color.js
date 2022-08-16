import data from '../data/colors.json';
console.log(data.blue);
console.log(data.red)
console.log(data)
let arr = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

const Color = () => {
  return data.blue.map((color, i) => {
    return (
      <>
        <div>
          <div style={{ border: `${color}` , height:'100px', width : "200px", margin: "10px  20px" ,backgroundColor : `${color}` }} ></div>
          <div className='s'>
            <p className='font-wait'>{arr[i]}</p>
            <p  className='color-Name'>{color}</p>
          </div>
        </div>
      </>
    );
  });
};



export function ColorRed(){
  
    return data.red.map((colorName, i) => {
        return (
          <>
      
            <div>
              <div  style={{ border: `${colorName}` , height:'100px', width : "200px", margin: "10px  20px" ,backgroundColor : `${colorName}` }} ></div>
              <div className='s'>
                <p className='font-wait'>{arr[i]}</p>
                <p  className='color-Name'>{colorName} </p>
              </div>
            </div>
          </>
        );
      });

}

export function Pink(){
    return data.pink.map((colorName, i) => {
        return (
          <>
      
            <div>
              <div  style={{ border: `${colorName}` , height:'100px', width : "200px", margin: "10px  20px" ,backgroundColor : `${colorName}` }} ></div>
              <div className='s'>
                <p  className='font-wait'>{arr[i]}</p>
                <p  className='color-Name'>{colorName} </p>
              </div>
            </div>
          </>
        );
      }); 
}

export function Grape(){
    return data.grape.map((colorName, i) => {
        return (
          <>
      
            <div>
              <div  style={{ border: `${colorName}` , height:'100px', width : "200px", margin: "10px  20px" ,backgroundColor : `${colorName}` }} ></div>
              <div className='s'>
                <p className='font-wait'>{arr[i]}</p>
                <p  className='color-Name'>{colorName} </p>
              </div>
            </div>
          </>
        );
      }); 
}

export  function Violet(){
    return data.violet.map((colorName, i) => {
        return (
          <>
      
            <div>
              <div  style={{ border: `${colorName}` , height:'100px', width : "200px", margin: "10px  20px" ,backgroundColor : `${colorName}` }} ></div>
              <div className='s'>
                <p className='font-wait'>{arr[i]}</p>
                <p  className='color-Name'>{colorName} </p>
              </div>
            </div>
          </>
        );
      }); 
}

export  function Indigo(){
    return data.indigo.map((colorName, i) => {
        return (
          <>
      
            <div>
              <div  style={{ border: `${colorName}` , height:'100px', width : "200px", margin: "10px  20px" ,backgroundColor : `${colorName}` }} ></div>
              <div className='s'>
                <p className='font-wait'>{arr[i]}</p>
                <p  className='color-Name'>{colorName} </p>
              </div>
            </div>
          </>
        );
      }); 
}


export  function Gray(){
    return data.gray.map((colorName, i) => {
        return (
          <>
      
            <div>
              <div  style={{ border: `${colorName}` , height:'100px', width : "200px", margin: "10px  20px" ,backgroundColor : `${colorName}` }} ></div>
              <div className='s'>
                <p className='font-wait'>{arr[i]}</p>
                <p  className='color-Name'>{colorName} </p>
              </div>
            </div>
          </>
        );
      }); 
}

export  function Cyan(){
    return data.cyan.map((colorName, i) => {
        return (
          <>
      
            <div>
              <div  style={{ border: `${colorName}` , height:'100px', width : "200px", margin: "10px  20px" ,backgroundColor : `${colorName}` }} ></div>
              <div className='s'>
                <p className='font-wait'>{arr[i]}</p>
                <p  className='color-Name'>{colorName} </p>
              </div>
            </div>
          </>
        );
      }); 
}


export  function Teal(){
    return data.teal.map((colorName, i) => {
        return (
          <>
      
            <div>
              <div  style={{ border: `${colorName}` , height:'100px', width : "200px", margin: "10px  20px" ,backgroundColor : `${colorName}` }} ></div>
              <div className='s'>
                <p className='font-wait'>{arr[i]}</p>
                <p  className='color-Name'>{colorName} </p>
              </div>
            </div>
          </>
        );
      }); 
}

export  function Green(){
    return data.green.map((colorName, i) => {
        return (
          <>
      
            <div>
              <div  style={{ border: `${colorName}` , height:'100px', width : "200px", margin: "10px  20px" ,backgroundColor : `${colorName}` }} ></div>
              <div className='s'>
                <p className='font-wait'>{arr[i]}</p>
                <p  className='color-Name' >{colorName} </p>
              </div>
            </div>
          </>
        );
      }); 
}

export  function Lime(){
    return data.lime.map((colorName, i) => {
        return (
          <>
      
            <div>
              <div  style={{ border: `${colorName}` , height:'100px', width : "200px", margin: "10px  20px" ,backgroundColor : `${colorName}` }} ></div>
              <div className='s'>
                <p className='font-wait'>{arr[i]}</p>
                <p  className='color-Name'>{colorName} </p>
              </div>
            </div>
          </>
        );
      }); 
}

export  function Yellow(){
    return data.yellow.map((colorName, i) => {
        return (
          <>
      
            <div>
              <div  style={{ border: `${colorName}` , height:'100px', width : "200px", margin: "10px  20px" ,backgroundColor : `${colorName}` }} ></div>
              <div className='s'>
                <p className='font-wait'>{arr[i]}</p>
                <p className='color-Name'>{colorName} </p>
              </div>
            </div>
          </>
        );
      }); 
}

export  function Orange(){
    return data.orange.map((colorName, i) => {
        return (
          <>
      
            <div>
              <div  style={{ border: `${colorName}` , height:'100px', width : "200px", margin: "10px  20px" ,backgroundColor : `${colorName}` }} ></div>
              <div className='s'>
                <p className='font-wait'>{arr[i]}</p>
                <p className='color-Name'>{colorName} </p>
              </div>
            </div>
          </>
        );
      }); 
}

export default Color;

