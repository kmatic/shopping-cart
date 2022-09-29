const generatePrice = (bundles) => {
    for (const bundle of bundles) {
        bundle.price = Math.floor(Math.random() * 100 + 1);
        delete bundle.assetPath;
        delete bundle.description;
        delete bundle.displayIcon2;
        delete bundle.displayNameSubText;
        delete bundle.extraDescription;
        delete bundle.promoDescription;
        delete bundle.useAdditionalContext; // THIS CAN BE BETTER
    }

    return bundles;
}

export default generatePrice;