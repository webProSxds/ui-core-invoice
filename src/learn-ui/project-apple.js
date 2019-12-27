import React, { useState, useEffect } from 'react';
import CheckboxLabled from './shared/components/check-box-labled';
import './style.css'
import ToggleButton from './shared/components/toogle-button';

const data_apple_tv = {
    "region": {
        "EU": "Europe",
        "AS": "Asia Pacific",
        "AU": "Australia",
        "AM": "America"
    },
    "locale": {
        "EU": {
            "en_EM": "EMEA(English)",
            "no_NO": "Norway(Norwegian)",
            "pt_PT": "Portugal(Portugal Portuguese)",
            "nl_NL": "Netherlands(Dutch)"
        },
        "AS": {
            "en_MY": "Malaysia(English)",
            "en_AP": "Asia(English)",
            "tr_TR": "Turkey(Turkish)",
            "en_SG": "Singapore(English)",
            "id_ID": "Indonesia(Bahasa Indonesian)"
        },
        "AU": {
            "en_NZ": "New Zealand(English)",
            "en_AU": "Australia(English)"
        },
        "AM": {
            "es_LA": "Latin America (LA-Spanish)",
            "fr_CA": "Canada(French)",
            "en_CA": "Canada(English)",
            "en_US": "United States(English)"
        }
    }
}


export default () => {
    const [regionList, updateRegionList] = useState({
        selectedRegions: []
    });

    const [products, updateProductsList] = useState({
        selectedProduct: [],
        product: [
            { name: "AppleTv", cid: 4142 },
            { name: "maps", cid: 4142 }
        ],
        allRegions: [],
        selectedRegions: [],
        regions: []
    });


    const changeCategoryHandler = (item) => {

        console.log('changeCategoryHandler', item.name);

        const keys = Object.keys(data_apple_tv.region);
        updateProductsList({ ...products, selectedProduct: [...products.selectedProduct, item], allRegions: [...products.allRegions, ...keys] });

    }

    const clickRegionSelectHandler = (item, iselectedRegion) => {

        console.log('clickRegionSelectHandler', item, iselectedRegion);

        let data;

        if (!iselectedRegion) {

            data = regionList.selectedRegions.filter(a => a != item);

        } else {

            data = [...regionList.selectedRegions, item];

        }

        updateRegionList({ ...regionList, selectedRegions: data })


    }



    return (
        <div>

            {
                products.product.map(item =>
                    <CheckboxLabled
                        lable={item.name}
                        changeHandler={() => changeCategoryHandler(item)}
                    />)
            }


            <div className="regions-box">

                <div className="regions-items">
                    {
                        products.allRegions.map(item =>
                            <ToggleButton
                                lable={` ${item} (${data_apple_tv.region[item]})`}
                                clickHandler={(iselectedRegion) => clickRegionSelectHandler(item, iselectedRegion)}
                            />
                        )
                    }
                </div>

            </div>
            <div className="local-items">

                {/* {<pre>{JSON.stringify(products, null, 3)}</pre>} */}

            </div>
        </div>
    )
}