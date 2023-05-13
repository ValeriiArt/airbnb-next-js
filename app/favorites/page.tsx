import getCurrentUser from "../actions/getCurrentUser";
import getFavoritesListings from "../actions/getFavoritesListings";

import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import FavoritesClient from "./FavoritesClient";

const ListingsPage = async () => {
    const currentUser = await getCurrentUser();
    const listings = await getFavoritesListings();

    if (listings.length === 0) {
        return (
            <ClientOnly>
                <EmptyState
                    title="No favorites found."
                    subtitle="Looks like you have no favorites listings"
                />
            </ClientOnly>
        );
    }

    return (
        <ClientOnly>
            <FavoritesClient
                listings={listings}
                currentUser={currentUser}
            />
        </ClientOnly>
    );

};

export default ListingsPage;


