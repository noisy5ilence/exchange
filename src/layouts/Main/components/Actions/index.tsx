import { FC, ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children: ReactNode;
}

const findActionsEntry = () => document.getElementById('actions');

const Actions: FC<Props> = ({ children }) => {
  const [actionsEntry, setActionsEntry] = useState(findActionsEntry);

  useEffect(() => {
    const actionsEntry = findActionsEntry();

    if (!actionsEntry) return;

    setActionsEntry(actionsEntry);
  }, []);

  return <>{actionsEntry && createPortal(children, actionsEntry)}</>;
};

export default Actions;
