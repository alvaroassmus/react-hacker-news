import {useDispatch} from 'react-redux';
import {filterShow, filterPast, filterNew} from '../../redux/actions';

export default function Header() {
    const dispatch = useDispatch();

    const handleShow = () => {
        dispatch(filterShow());
    };

    const handlePast = () => {
        dispatch(filterPast());
    };

    const handleNew = () => {
        dispatch(filterNew());
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-theme">
            <a className="navbar-brand" href="#">Hacker News</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" onClick={() => handleNew()}>new</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => handlePast()}>past</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">comments</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">ask</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => handleShow()}>show</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">jobs</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">submit</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}