import { FC, useState } from 'react';
import './Switcher.css';

type SwitcherPropsType = {
  onClick: () => void;
};

export const Switcher: FC<SwitcherPropsType> = ({ onClick }) => {
  const [isActive, setIsActive] = useState(false);

  function handleSwitch() {
    setIsActive(!isActive);
    onClick();
  }

  return (
    <button onClick={handleSwitch} className="switcher">
      <div className={`circle ${isActive ? 'active' : ''}`}></div>
    </button>
  );
};
