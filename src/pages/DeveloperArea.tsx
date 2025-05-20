
import { useEffect } from 'react';

const DeveloperArea = () => {
  useEffect(() => {
    window.location.href = "https://yoldurumu.net/ekip/login.php";
  }, []);

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <p>Yönlendiriliyor...</p>
    </div>
  );
};

export default DeveloperArea;
