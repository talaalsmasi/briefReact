import ChefDetailsContent from '@/components/chef/ChefDetailsContent';
import React from 'react';
import { useParams } from 'react-router-dom';
import ChefV1Data from "@/assets/jsonData/chef/ChefV1Data.json"
import LayoutV6 from '@/components/layouts/LayoutV6';

const ChefDetails = () => {

    const { id } = useParams()
    const data = ChefV1Data.find(chef => chef.id === parseInt(id))

    return (
        <>
            <LayoutV6 breadCrumb="chef-details" title="Chef Details">
                <ChefDetailsContent chefInfo={data} />
            </LayoutV6>
        </>
    );
};

export default ChefDetails;