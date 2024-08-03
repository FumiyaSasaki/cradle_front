import { getAllProperties } from '@/core/api';
import { PropertyType } from '@/store/property';
import React from 'react';
import { PropertyBlock } from '../client/home/PropertyBlock';

export const PropertyBlockFetch = React.memo(async () => {
    const propertiesData: PropertyType[] = await getAllProperties();
    return <PropertyBlock propertiesData={propertiesData} />;
});

PropertyBlockFetch.displayName = 'PropertyBlockFetch';