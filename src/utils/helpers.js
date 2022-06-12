export const getUniqueValue = (data, type) => {
    let unique = data.map(item => item[type]);

    if (type === 'size') {
        unique = unique.flat();
    }

    return [...new Set(unique)];
}

export const isExists = (products, item) => {
    return products.find(i => i.id === item.id);
}