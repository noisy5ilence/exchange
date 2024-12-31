import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

interface Props {
  header?: ReactNode;
  footer?: ReactNode;
}

const Main: FC<Props> = ({ header, footer }) => {
  return (
    <>
      {Boolean(header) && <header className='sticky top-0 bg-background p-2'>{header}</header>}
      <main className='flex max-w-[640px] flex-grow flex-col p-2'>
        <div className='flex flex-grow flex-col'>
          <Outlet />
        </div>
      </main>
      {Boolean(footer) && <footer className='sticky bottom-0 bg-background p-2'>{footer}</footer>}
    </>
  );
};

export default Main;
