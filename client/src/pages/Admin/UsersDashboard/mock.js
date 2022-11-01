import { faker } from "@faker-js/faker/locale/en";
export function mockUsers(length) {
    const createRowData = (rowIndex) => {
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const gender = faker.name.gender(true);
        const name = faker.name.findName(firstName, lastName, gender);
        const img = faker.image.avatar();
        const email = faker.internet.email();
        const createdAt = faker.date.between(
            "2022-10-10T00:00:00.000Z",
            "2022-11-03T00:00:00.000Z"
        );

        return {
            id: rowIndex + 1,
            name,
            firstName,
            lastName,
            img,
            email,
            createdAt,
            adminPrivileges: rowIndex % 5 === 0 ? true : false,
            deletedAt: rowIndex % 25 === 0 ? true : false,
        };
    };

    return Array.from({ length }).map((_, index) => {
        return createRowData(index);
    });
}

export function mockTreeData(options) {
    const { limits, labels, getRowData } = options;
    const depth = limits.length;

    const data = [];
    const mock = (list, parentValue, layer = 0) => {
        const length = limits[layer];
        Array.from({ length }).forEach((_, index) => {
            const value = parentValue
                ? parentValue + "-" + (index + 1)
                : index + 1 + "";
            const children = [];
            const label = Array.isArray(labels) ? labels[layer] : labels;
            let row = {
                label:
                    typeof label === "function"
                        ? label(layer, value, faker)
                        : label + " " + value,
                value,
            };

            if (getRowData) {
                row = {
                    ...row,
                    ...getRowData(layer, value),
                };
            }

            list.push(row);

            if (layer < depth - 1) {
                row.children = children;
                mock(children, value, layer + 1);
            }
        });
    };

    mock(data);

    return data;
}
