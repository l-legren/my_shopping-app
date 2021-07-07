// Third-party imports

// Local imports
import { GridContainer } from "./styles";
import mockedItems from "./mockedItems.json";
import GridCard from "../GridCard/gridCard";

////////////////////////////////////////////////////////////////////////////////

/**
 * @function GridProducts
 * @category Components
 */
const GridProducts = () => {

    return (
        <GridContainer>
            {mockedItems.map((item) => (
                <GridCard
                    key={item.title}
                    title={item.title}
                    id={item.id}
                    discount={item.discount}
                    image={item.thumbnailUrl}
                    price={item.price}
                    sales={item.sales}
                />
            ))}
        </GridContainer>
    );
};

export default GridProducts;
