import React from 'react';
import { Property } from '../store/property';
import { fetchApi } from '../core/api';
import { PropertyList } from './PropertyList';

export const PropertyListFetch = React.memo(async () => {
    const propertyData: Property = await fetchApi();
    return (
        <PropertyList propertyData={propertyData} />
    );
});

PropertyListFetch.displayName = 'PropertyListFetch';