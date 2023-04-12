import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Nav from "./Nav";
import { useState } from "react";

const Header = ({ gugun }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const id = searchParams.get('id');
    const searchHandler = e => {
        let s = e.target.value;
        setSearch(s);

    }
    const onSubmit = e => {
        e.preventDefault();
        navigate(`/search?id=${search}`);
        //setSearchParams({ id: search })
    }
    return (
        <header className="header">
            <h1><Link to='/'>부산에서 뭐 먹지?</Link></h1>
            <form onSubmit={onSubmit} className="search">
                <input type="text" onChange={searchHandler} className="inputText" />
                <button className="searchButton"><i class="xi-search"></i></button>
            </form>
            <Nav gugun={gugun} />
        </header>
    )
}

export default Header;