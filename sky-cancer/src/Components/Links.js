import React from 'react'

import Link from "react-router-dom/es/Link";

const Links = () => (
<div>
<Link to="/alternative"><button className="search_button" type="button">Co Cię interesuje?</button></Link>
<Link to="/advanced"><button className="search_button" type="button">Więcej opcji</button></Link>
</div>
)

export default Links