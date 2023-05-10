import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountries} from "../../redux/actions";

import CardsContainer from "../../components/CardsContainer/CardsContainer";

const Home = () =>  {

const dispatch = useDispatch();

useEffect(()=> {
    dispatch(getCountries());
},[dispatch])

    return (
        <h1>
            <CardsContainer ></CardsContainer>
        </h1>
    )
}

export default Home;