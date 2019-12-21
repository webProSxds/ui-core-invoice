import React, { useState } from 'react';
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

    const changeCategoryHandler = () => {

        console.log('changeCategoryHandler')

    }

    const clickRegionSelectHandler = (item, iselectedRegion) => {

        console.log('clickRegionSelectHandler', item, iselectedRegion);

        if (!iselectedRegion) {
            
            let x= regionList.selectedRegions.filter( a => a !=item)
            
            updateRegionList({ ...regionList, selectedRegions: [...x] })

        }else{

            updateRegionList({ ...regionList, selectedRegions: [...regionList.selectedRegions, item] })
        }

    }

    const keys = Object.keys(data_apple_tv.region);

    return (
        <div>

            <CheckboxLabled lable="Apple TV" changeHandler={changeCategoryHandler} />

            <div className="regions-box">

                <div className="regions-items">
                    {
                        keys.map(item =>
                            <ToggleButton
                                lable={` ${item} (${data_apple_tv.region[item]})`}
                                clickHandler={(iselectedRegion) => clickRegionSelectHandler(item, iselectedRegion)}
                            />
                        )
                    }
                </div>


                <div className="local-items">

                    {<pre>{JSON.stringify(regionList, null, 3)}</pre>}

                </div>

            </div>

        </div>
    )
}