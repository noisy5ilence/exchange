import { Link, useLocation } from 'react-router-dom';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs.tsx';
import pathsRecord from '@/pages/paths.ts';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { index, createTransaction, ...navigationPaths } = pathsRecord;

const paths = Object.values(navigationPaths);

const Navigation = () => {
  const location = useLocation();

  const currentPath = paths.find(({ path }) => path === location.pathname || location.pathname.includes(path));

  return (
    <Tabs value={currentPath?.path} className='w-full'>
      <TabsList className='w-full'>
        {paths.map(({ title, path }) => (
          <TabsTrigger key={path} value={path} asChild className='flex-grow'>
            <Link to={path}>{title}</Link>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default Navigation;
