import { HomePageScrollWrapper, HomePageWrapper } from "./styledHomePage";
import Month from "../../components/month-text/Month";
import CategoryCard from "../../components/elements/category-card/CategoryCard";
import OverlayAdd from "../../components/elements/overlay-add/OverlayAdd";

const HomePage = ({active}) => {

    return(
        <HomePageWrapper
        active = {active}
        >
            <Month />
            <HomePageScrollWrapper
                contentContainerStyle={{ 
                    alignItems: 'center',
                    flexGrow: 1,
                    height: 1300
                }}
            >
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
            </HomePageScrollWrapper>
        </HomePageWrapper>
    )
}
export default HomePage;