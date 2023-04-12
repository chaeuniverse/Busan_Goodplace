import { Link } from "react-router-dom";
import styled from "styled-components";

const UL = styled.ul`
display: flex;
gap: 30px;
justify-content: center;
`

const Nav = ({ gugun }) => {
    return (
        <nav className="gnb">
            <UL>
                {
                    gugun.map((it, idx) => <li key={idx}>
                        <Link to={`/${it}`}>{it}</Link>
                    </li>)
                }
            </UL>
        </nav>
    )
}

export default Nav;