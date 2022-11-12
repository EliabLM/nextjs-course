import  { FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode
}

export const DarkLayout: FC<IProps> = ({children})  => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: '5px',
        borderRadius: '10px',
      }}
    >
      <h3>Dark Layout</h3>
      {children}
    </div>
  );
};
