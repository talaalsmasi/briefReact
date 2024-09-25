import ChefDetailsContent from '@/components/chef/ChefDetailsContent';
import React from 'react';
import { useParams } from 'react-router-dom';
import ChefV1Data from "@/assets/jsonData/chef/ChefV1Data.json"
import BodyDark from '@/components/classes/BodyDark';
import LayoutV6 from '@/components/layouts/LayoutV6';

const ChefDetailsDark = () => {

    const { id } = useParams()
    const data = ChefV1Data.find(chef => chef.id === parseInt(id))

    return (
        <>
            <LayoutV6 breadCrumb="chef-details" title="Chef Details">
                <ChefDetailsContent chefInfo={data} />
                <BodyDark />
            </LayoutV6>
        </>
    );
};

export default ChefDetailsDark;