import { createSelector } from 'reselect';


// The id map was used before we applied the data normalization
// const COLLECTION_ID_MAP = {
//     hats: 1,
//     sneakers: 2,
//     jackets: 3,
//     womens: 4,
//     mens: 5
// }


const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

//After we changed the data to an object for the data normalization we were no longer able to map the data for the collection overview. The below selector is used to convert the object into an array so we can use map again in collections-overview component
export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    (collections) =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
    //We change the keys to an array and then map that array to get the value of our collections at that key which is our items in that category.
)

export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionUrlParam] : null)

    //Below is the code we used before the data normalization
    // collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
);