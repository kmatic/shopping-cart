const filterDuplicates = (array) => {
    const filtered = array.filter((value, index, self) => (
        index === self.findIndex((t) => (
            t.displayName === value.displayName
        ))
    ));

    return filtered;
};

export default filterDuplicates;