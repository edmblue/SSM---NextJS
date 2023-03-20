import styleSpin from '../styles/spin.module.css';

const SplashScreen = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-black">
      <div className={styleSpin['sk-folding-cube']}>
        <div
          className={`${styleSpin['sk-cube1']} ${styleSpin['sk-cube']}`}
        ></div>
        <div
          className={`${styleSpin['sk-cube2']} ${styleSpin['sk-cube']}`}
        ></div>
        <div
          className={`${styleSpin['sk-cube4']} ${styleSpin['sk-cube']}`}
        ></div>
        <div
          className={`${styleSpin['sk-cube3']} ${styleSpin['sk-cube']}`}
        ></div>
      </div>
    </div>
  );
};

export default SplashScreen;
