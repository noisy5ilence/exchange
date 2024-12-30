import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

interface Props {
  children?: ReactNode;
}

const Main: FC<Props> = ({ children }) => {
  return (
    <main className='max-w-[640px] p-2 flex flex-col flex-grow'>
      <div className='flex flex-col flex-grow'>
        <Outlet />
      </div>
      {children}
    </main>
  );
};

export default Main;
