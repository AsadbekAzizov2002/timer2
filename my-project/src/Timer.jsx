// import React, { useEffect, useState } from 'react'

// const Timer = ({ initialTime }) => {
//     const [time,setTime]=useState(initialTime);

//     useEffect(()=>{
//        const timer = setTimeout(
//         () => setTime((prev) => (prev > 0 ? (prev = prev - 1) :0 )),
//         1000
//         ); 
//     },[time] )
//   return (
//     <> 
//      <h1 className=" text-8xl">00:00:00 { time }</h1>

//     </>
//   )
// }

// export default Timer
















import React, { useEffect, useState } from 'react';

const Timer = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning && time > 0) {
      timer = setTimeout(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [isRunning, time]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <>
      <h1 className="text-8xl">00:00:00 {time}</h1>
      {!isRunning && <button className=" p-7 text-3xl bg-red-400 "  onClick={handleStart}>Start</button>}
      {isRunning && <button  className=" p-7 text-3xl bg-red-400 " onClick={handleStop}>Stop</button>}
    </>
  );
};

export default Timer;


// import React, { useEffect, useState } from 'react';

// const Timer = ({ initialTime }) => {
//   const [time, setTime] = useState(initialTime);
//   const [isRunning, setIsRunning] = useState(false);

//   useEffect(() => {
//     let timer;

//     if (isRunning && time > 0) {
//       timer = setTimeout(() => {
//         setTime((prev) => prev - 1);
//       }, 1000);
//     }

//     return () => clearTimeout(timer);
//   }, [isRunning, time]);

//   const handleStart = () => {
//     setTime(60);
//     setIsRunning(true);
//   };

//   const handleStop = () => {
//     setIsRunning(false);
//   };

//   return (
//     <>
//       <h1 className="text-8xl">00:00:00 {time}</h1>
//       {!isRunning && <button className=" p-7 text-3xl bg-red-400 "  onClick={handleStart}>Start</button>}
//       {isRunning && <button className=" p-7 text-3xl bg-red-400 "  onClick={handleStop}>Stop</button>}
//     </>
//   );
// };

// export default Timer;

