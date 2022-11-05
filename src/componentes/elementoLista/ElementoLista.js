export default function ElementoLista(props) {
    return (
        <div className="list-group-item list-group-item-action flex-column align-items-start">
            <p className="mb-1">
                {props.noticia.nombre}
            </p>
            <p className="mb-1">
                <span className="subline">
                    <span className="score">112 points</span> by <a href="user?id=tosh" className="hnuser">tosh</a> <span
                    className="age" title="2022-11-04T18:18:17">
                        <a href="item?id=33471426">17 hours ago</a>
                    </span> <span id="unv_33471426"></span> | <a href="hide?id=33471426&amp;goto=news%3Fp%3D3">hide</a> | <a
                    href="item?id=33471426">56&nbsp;comments</a>
                </span>
            </p>
        </div>
    );
}