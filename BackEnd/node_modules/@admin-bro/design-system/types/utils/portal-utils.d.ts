import React, { FC } from 'react';
declare const PortalUtils: {
    appendElement: (element: HTMLDivElement) => void;
    removeElement: (id: string) => void;
    createPortalForKey: <Props>(idKey: string, Component: React.FC<Props>) => React.FC<Props>;
};
export { PortalUtils as default, PortalUtils, };
