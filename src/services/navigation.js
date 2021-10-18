import { createRef } from 'react';

export const navigationRef = createRef();

export const navigate = (name, params) => {
    navigationRef.current?.navigate(name, params);
}

export const replace = (name, params) => {
    navigationRef.current?.reset({
        index: 0,
        routes: [{ name, params }]
    });
}