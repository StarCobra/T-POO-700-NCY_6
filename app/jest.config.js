module.exports = {
    roots: ['<rootDir>'],

    testMatch: ['*/__tests__/(.*-test)'],
    testEnvironment: 'node --experimental-vm-modules',

    moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node", "vue"],
    snapshotSerializers: ["jest-serializer-vue"],

    verbose: true,
    collectCoverage: true,
    detectOpenHandles: true,
};


