import React from 'react';
import { Property } from '../store/property';
import { getAlProperties } from '../core/api';
import { PropertyList } from './PropertyList';

export const PropertyListFetch = React.memo(async () => {
    const propertiesData: Property[] = await getAlProperties();
    return <PropertyList propertiesData={propertiesData} />;
});

PropertyListFetch.displayName = 'PropertyListFetch';