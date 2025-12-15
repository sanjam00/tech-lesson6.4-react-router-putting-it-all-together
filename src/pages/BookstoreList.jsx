import { Link } from "react-router-dom";

const BookstoreList = () => {
    const bookstores = []

    const displayBookstores = bookstores.map(store => (
        <li key={store.id}><Link>{store.name}</Link></li>
    ))

    return (
        <ul>
            {displayBookstores}
        </ul>
    );
}

export default BookstoreList;