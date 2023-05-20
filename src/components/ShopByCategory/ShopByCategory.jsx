import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import './ShopByCategory.css'

import { useEffect, useState } from "react";
import ShopByCategoryCard from "../ShopByCategoryCard/ShopByCategoryCard";

const ShopByCategory = () => {
    const [value, setValue] = useState('1');
    const [products, setProducts] = useState([]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // fetch chef data from server 

    useEffect(() => {
        fetch('http://localhost:5000')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div className='container mx-auto'>
            <h1 className="text-center text-3xl lg:text-6xl font-Montserrat font-extrabold uppercase  text-sky-200 py-14 ">Shop by category</h1>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Marvel toys" value="1" className="tab1" />
                            <Tab label="avengers toys" value="2" className="tab2" />
                            <Tab label="star wars toys" value="3" className="tab3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <div className="flex gap-7">
                            {
                                products.slice(0, 2).map((product) => <ShopByCategoryCard key={product.id} product={product}></ShopByCategoryCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel value="2">
                        <div className="flex gap-7">
                            {
                                products.slice(2, 4).map((product) => <ShopByCategoryCard key={product.id} product={product}></ShopByCategoryCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel value="3">
                        <div className="flex gap-7">
                            {
                                products.slice(4, 6).map((product) => <ShopByCategoryCard key={product.id} product={product}></ShopByCategoryCard>)
                            }
                        </div>
                    </TabPanel>
                </TabContext>
            </Box>
        </div>
    );
};

export default ShopByCategory;