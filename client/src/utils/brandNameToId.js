export const brandNameToId = (name) => {
    const usefulName = name.toLowerCase();
    let id = null;
    const brands = [
        "nvidia",
        "amd",
        "intel",
        "crucial",
        "corsair",
        "hyperx",
        "g.skill",
        "wd",
        "samsung",
        "gigabyte",
        "sabrent",
        "hp",
        "seagate",
        "toshiba",
        "intel",
        "asus",
        "deepcool",
        "gamemax",
        "reddragon",
        "aerocool",
        "cooler master",
        "msi",
        "game pro",
        "kolink",
        "cougar",
        "lg",
        "logitech",
        "hyperx",
        "logitech ",
        "genius",
        "redragon",
        "fan",
        "be quiet",
        "id-cooling",
    ];
    for (let i = 0; i < brands.length; i++) {
        if (usefulName === brands[i]) {
            id = i;
            return id + 1;
        }
    }
};
