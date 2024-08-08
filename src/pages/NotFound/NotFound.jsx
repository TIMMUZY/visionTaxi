import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate('/not-found');
  }, [navigate]);

  return <div>Страница не найдена</div>;
};

export default NotFound;
