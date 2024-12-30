import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

interface Props {
  header?: ReactNode;
  footer?: ReactNode;
}

const Main: FC<Props> = ({ header, footer }) => {
  return (
    <main className='flex max-w-[640px] flex-grow flex-col p-2'>
      {header}
      <div className='flex flex-grow flex-col'>
        <Outlet />
      </div>
      {footer}
    </main>
  );
};

export default Main;
